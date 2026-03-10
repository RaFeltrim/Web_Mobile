import { useState } from 'react';
import './index.css';

function App() {
  const [timerActive, setTimerActive] = useState(false);

  return (
    <div className="app-container">
      <div className="health-dashboard glass-effect">
        <h1>Study-Sync Dashboard</h1>
        <p className="health-status">Health: ON_TRACK</p>
        
        <div className="task-actions">
           <button 
             className="start-timer-btn" 
             onClick={() => setTimerActive(!timerActive)}>
             {timerActive ? 'Stop Focus Timer' : 'Start Focus Timer'}
           </button>
        </div>
      </div>
    </div>
  );
}

export default App;
