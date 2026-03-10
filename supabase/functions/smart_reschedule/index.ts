import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.46.1";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { task_id } = await req.json();

    if (!task_id) {
      return new Response(JSON.stringify({ error: 'task_id is required' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      });
    }

    // Pega a tarefa original e o projeto associado
    const { data: task, error: fetchError } = await supabaseClient
      .from('tasks')
      .select('*, project_members:projects(project_members(*))')
      .eq('id', task_id)
      .single();

    if (fetchError || !task) {
      throw fetchError || new Error('Task not found');
    }

    // --- NODE DE COMPUTO DE ALGORITMO: SMART RESCHEDULING ---
    // Em produção, cruzaríamos os dados de uma tabela "user_availabilities"
    // Aqui usamos um algoritmo heurístico para simular a descoberta
    // de uma "Janela em Comum" nas próximas 72 horas.
    
    const now = new Date();
    // Simula que a engine procurou nos calendários e encontrou uma janela ideal +2 dias pra frente às 14:00 (Horário livre do grupo)
    const proposedDate = new Date(now.getTime() + (2 * 24 * 60 * 60 * 1000));
    proposedDate.setHours(14, 0, 0, 0);

    // O reagendamento afeta a criticidade, aumenta +2 de Score (Penalidade do atraso)
    const newScore = task.criticality_score + 2.0;

    // Atualiza a Task com o Smart Rescheduling
    const { data: updatedTask, error: updateError } = await supabaseClient
      .from('tasks')
      .update({ 
        due_date: proposedDate.toISOString(), 
        criticality_score: newScore,
        status: 'TODO' // Volta para TODO se estava atrasada ou reagendando
      })
      .eq('id', task_id)
      .select()
      .single();

    if (updateError) throw updateError;

    return new Response(
      JSON.stringify({ 
        message: 'Rescheduled successfully by AI Engine', 
        task: updatedTask,
        proposed_time: proposedDate.toISOString()
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});
