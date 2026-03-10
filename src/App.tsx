import { useEffect, useState, useRef } from 'react';
import { supabase } from './lib/supabase';
import './index.css';

interface Task {
  id: string;
  title: string;
  status: string;
  is_active_focus: boolean;
  assigned_to: string;
  criticality_score: number;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activeTaskId, setActiveTaskId] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 Minutos
  const [rescheduleWarning, setRescheduleWarning] = useState<Task | null>(null);
  const timerRef = useRef<number | null>(null);

  // ID hardcoded mock (do Estefano, vindo do seed)
  const currentUserId = '11111111-1111-1111-1111-111111111111';

  // 1. Fetch das Tasks Iniciais e Listener de WebSockets
  useEffect(() => {
    fetchTasks();

    const channel = supabase
      .channel('tasks_changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'tasks' },
        (payload) => {
          console.log('Realtime Event:', payload);
          // Otimista Realtime Update
          setTasks((prev) => {
            const newTask = payload.new as unknown as Task;
            return prev.map((t) => (t.id === newTask.id ? { ...t, ...newTask } : t));
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchTasks = async () => {
    // Para render do MVP local usaremos dados mockados caso a requisição falhe 
    // ou se o Supabase Docker não estiver online.
    try {
      const { data, error } = await supabase.from('tasks').select('*').order('created_at', { ascending: false });
      if (error) throw error;
      setTasks(data || []);
    } catch (e) {
      console.warn("API Error, using fake fallback data...", e);
      setTasks([
        { id: '1', title: 'Criar Diagrama de Classes', status: 'DONE', criticality_score: 0, is_active_focus: false, assigned_to: currentUserId },
        { id: '2', title: 'Modelagem do Banco', status: 'IN_PROGRESS', criticality_score: 5.5, is_active_focus: true, assigned_to: '22222222-2222-2222-2222-222222222222' },
        { id: '3', title: 'Integrar Edge Functions', status: 'TODO', criticality_score: 10, is_active_focus: false, assigned_to: currentUserId }
      ]);
    }
  };

  // 2. Timer Pomodoro Engine
  const startTimer = async (taskId: string) => {
    setActiveTaskId(taskId);
    setTasks(prev => prev.map(t => t.id === taskId ? { ...t, is_active_focus: true } : t));

    if (!timerRef.current) {
      timerRef.current = window.setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      
      // Realtime Broadcast: Avise todo mundo que iniciei! 💪
      try {
        await supabase
          .from('tasks')
          .update({ is_active_focus: true })
          .eq('id', taskId);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const stopTimer = async () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    
    if (activeTaskId) {
      setTasks(prev => prev.map(t => t.id === activeTaskId ? { ...t, is_active_focus: false } : t));

      try {
        // Realtime Broadcast: Encerrei o foco.
        await supabase
          .from('tasks')
          .update({ is_active_focus: false })
          .eq('id', activeTaskId);
      } catch (err) {
        console.error(err);
      }
      setActiveTaskId(null);
    }
    setTimeLeft(25 * 60); // Reset UI
  };

  // Formatar Segundos em mm:ss
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60).toString().padStart(2, '0');
    const displaySecs = (secs % 60).toString().padStart(2, '0');
    return `${mins}:${displaySecs}`;
  };

  const calculateHealth = () => {
    const totalCriticality = tasks.reduce((acc, t) => acc + (t.criticality_score || 0), 0);
    if (totalCriticality > 15) return 'CRITICAL (Perigo!)';
    if (totalCriticality > 8) return 'AT_RISK (Atrasado)';
    return 'ON_TRACK (Saudável)';
  };

  const updateTaskStatus = async (taskId: string, newStatus: string) => {
    try {
      await supabase.from('tasks').update({ status: newStatus }).eq('id', taskId);
      // Fallback update otimista local
      setTasks(prev => prev.map(t => t.id === taskId ? { ...t, status: newStatus } : t));
    } catch (e) { console.error(e); }
  };

  const confirmReschedule = async () => {
    if (rescheduleWarning) {
      const taskId = rescheduleWarning.id;
      setRescheduleWarning(null); // Fecha o Modal
      
      try {
        const { data, error } = await supabase.functions.invoke('smart_reschedule', {
          body: { task_id: taskId }
        });
        
        if (error) {
           console.error("Erro na inteligência: ", error);
        } else {
           // O evento Realtime deve assumir daqui, mas fazemos um fallback otimista rápido:
           if (data?.task) {
              setTasks(prev => prev.map(t => t.id === taskId ? { ...t, ...data.task } : t));
              // Dispara um toast de sucesso pro user, pra UX ser legal
              alert(`Agendas Fundidas! 🗓️ A inteligência moveu a atividade para: ${new Date(data.proposed_time).toLocaleString()}`);
           }
        }
      } catch (err) {
        console.error('Falha de Rede', err);
      }
    }
  };

  return (
    <div className="app-container">
      {rescheduleWarning && (
        <div className="modal-overlay">
          <div className="modal-content glass-effect">
            <h2>⚠️ Alerta Crítico (Smart Risk)</h2>
            <p>A tarefa <strong>{rescheduleWarning.title}</strong> tem score <b className="orange">{rescheduleWarning.criticality_score.toFixed(1)}</b>.</p>
            <p>Adiar esta atividade trará as seguintes reações em cadeia na agenda secreta do grupo:</p>
            <ul>
              <li>Atraso na liberação da API pelo Pedro (48h)</li>
              <li>Comprometimento da Entrega Final (Lina)</li>
            </ul>
            <div className="modal-actions">
              <button className="stop-btn" onClick={() => setRescheduleWarning(null)}>❌ Mudar de Ideia</button>
              <button className="primary-btn" onClick={confirmReschedule}>⚠️ Adiar Mesmo Assim</button>
            </div>
          </div>
        </div>
      )}

      <header className="glass-effect hero-header">
        <h1>Study-Sync</h1>
        <p className={`health-status ${calculateHealth().split(' ')[0]}`}>
          Status do Grupo: {calculateHealth()}
        </p>
        
        {activeTaskId && (
          <div className="active-timer pulse-animation">
            <h2>⏱ {formatTime(timeLeft)}</h2>
            <button className="stop-btn" onClick={stopTimer}>Pausar/Finalizar Foco</button>
          </div>
        )}
      </header>

      <main className="tasks-grid">
        {tasks.map((task) => (
          <div key={task.id} className={`task-card glass-effect ${task.is_active_focus ? 'focus-active' : ''}`}>
            {task.is_active_focus && <div className="focus-indicator">🟢 Ao Vivo Focando</div>}
            
            <h3>{task.title}</h3>
            <p className="task-meta">Status: <b>{task.status}</b></p>
            <p className="task-meta criticality">Impacto Score: {task.criticality_score.toFixed(1)}</p>
            
            {activeTaskId === task.id ? (
              <p className="task-action-hint">Relacionado ao seu Timer Atual</p>
            ) : (
              <div className="task-actions-group">
                <button 
                  className="start-timer-btn" 
                  onClick={() => startTimer(task.id)}
                  disabled={activeTaskId !== null && activeTaskId !== task.id}
                >
                  ▶️ Focar
                </button>
                <div className="secondary-actions">
                   {task.status !== 'DONE' && (
                     <button onClick={() => updateTaskStatus(task.id, 'DONE')} className="done-btn">✅ Fechar</button>
                   )}
                   <button onClick={() => setRescheduleWarning(task)} className="reschedule-btn">📅 Adiar</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
