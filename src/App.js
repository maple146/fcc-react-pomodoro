import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);

  useEffect(() => {
    return () => {
    if (seconds === 0) {
      setSeconds(59);
      setMinutes(minutes - 1)
    }
      console.log(seconds)
      console.log(minutes)
    }
  }, [seconds, minutes])

  const timer = () => {
    // Set Seconds
    setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);
  }

  return (
    <div className="container">
      <div className="pomodoro">
        {/* Break control */}
        <div className="length-control">
          <div id="break-label">Break Length</div>
          <div className="break-controls">
            <div id="break-decrement">+</div>
            <div id="break-length">5</div>
            <div id="break-increment">-</div>
          </div>
        </div>
        {/* Session control */}
        <div className="length-control">
          <div id="session-label">Session Length</div>
          <div className="session-controls">
            <div id="session-decrement">+</div>
            <div id="session-length">25</div>
            <div id="session-increment">-</div>
          </div>
        </div>
        {/* Timer display */}
        <div className="timer">
          <div id="timer-label">Session</div>
          <div id="time-left">
            <div id="minutes">{ minutes }</div>
            <div id="divider">:</div>
            <div id="seconds">{ seconds }</div>
          </div>
          <div className="timer-controls">
            <div id="start_stop" onClick={ timer }>Stop</div>
            <div id="reset">Reset</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
