// MeditationTimer.js
import React, { useState, useEffect } from 'react';
import './MeditationTimer.css';

const MeditationTimer = () => {
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [intervalSound, setIntervalSound] = useState('bell');
  const [intervalMinutes, setIntervalMinutes] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive && totalSeconds > 0) {
      interval = setInterval(() => {
        setTotalSeconds(seconds => {
          if (seconds <= 1) {
            // Timer completed
            setIsActive(false);
            if (soundEnabled) {
              playSound('complete');
            }
            return 0;
          }
          
          // Check for interval sound
          const remainingMinutes = Math.floor((seconds - 1) / 60);
          const isInterval = intervalMinutes > 0 && 
                            (seconds - 1) % (intervalMinutes * 60) === 0;
          
          if (isInterval && soundEnabled) {
            playSound(intervalSound);
          }
          
          return seconds - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, totalSeconds, soundEnabled, intervalSound, intervalMinutes]);

  const playSound = (type) => {
    // In a real implementation, you would play actual sound files
    // For this example, we'll just log it
    console.log(`Playing ${type} sound`);
  };

  const toggleTimer = () => {
    if (totalSeconds === 0) {
      // Start the timer with the current minutes and seconds
      setTotalSeconds(minutes * 60 + seconds);
      setIsActive(true);
    } else {
      setIsActive(!isActive);
    }
  };

  const resetTimer = () => {
    setIsActive(false);
    setTotalSeconds(0);
  };

  const handleMinutesChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    if (value >= 0 && value <= 60) {
      setMinutes(value);
      if (!isActive) {
        setTotalSeconds(value * 60 + seconds);
      }
    }
  };

  const handleSecondsChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    if (value >= 0 && value < 60) {
      setSeconds(value);
      if (!isActive) {
        setTotalSeconds(minutes * 60 + value);
      }
    }
  };

  const formatTime = (totalSecs) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = totalSeconds > 0 
    ? ((minutes * 60 + seconds - totalSeconds) / (minutes * 60 + seconds)) * 100 
    : 0;

  return (
    <div className="meditation-timer">
      <h2>Meditation Timer</h2>
      
      <div className="timer-display">
        <div className="timer-circle">
          <svg className="progress-ring" width="250" height="250">
            <circle
              className="progress-ring-circle"
              stroke="#e6e6e6"
              strokeWidth="10"
              fill="transparent"
              r="120"
              cx="125"
              cy="125"
            />
            <circle
              className="progress-ring-circle progress"
              stroke="#4a6fa5"
              strokeWidth="10"
              fill="transparent"
              r="120"
              cx="125"
              cy="125"
              strokeDasharray={`${2 * Math.PI * 120}`}
              strokeDashoffset={`${2 * Math.PI * 120 * (1 - progress / 100)}`}
            />
          </svg>
          <div className="timer-text">
            <div className="time">{formatTime(totalSeconds || (minutes * 60 + seconds))}</div>
            <div className="timer-status">
              {isActive ? 'Meditating...' : totalSeconds > 0 ? 'Paused' : 'Ready'}
            </div>
          </div>
        </div>
      </div>

      <div className="timer-controls">
        <div className="time-inputs">
          <div className="time-input">
            <label htmlFor="minutes">Minutes</label>
            <input 
              id="minutes"
              type="number" 
              min="0" 
              max="60" 
              value={minutes} 
              onChange={handleMinutesChange}
              disabled={isActive}
            />
          </div>
          <div className="time-input">
            <label htmlFor="seconds">Seconds</label>
            <input 
              id="seconds"
              type="number" 
              min="0" 
              max="59" 
              value={seconds} 
              onChange={handleSecondsChange}
              disabled={isActive}
            />
          </div>
        </div>

        <div className="timer-actions">
          <button 
            className={`btn ${isActive ? 'btn-stop' : 'btn-start'}`}
            onClick={toggleTimer}
          >
            {isActive ? 'Pause' : 'Start'}
          </button>
          <button 
            className="btn btn-reset"
            onClick={resetTimer}
            disabled={totalSeconds === 0}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="timer-settings">
        <h3>Settings</h3>
        
        <div className="setting-group">
          <label>
            <input
              type="checkbox"
              checked={soundEnabled}
              onChange={() => setSoundEnabled(!soundEnabled)}
            />
            Enable sound
          </label>
        </div>

        {soundEnabled && (
          <>
            <div className="setting-group">
              <label htmlFor="interval-sound">Interval Sound:</label>
              <select 
                id="interval-sound"
                value={intervalSound} 
                onChange={(e) => setIntervalSound(e.target.value)}
              >
                <option value="bell">Bell</option>
                <option value="chime">Chime</option>
                <option value="gong">Gong</option>
                <option value="singing-bowl">Singing Bowl</option>
              </select>
            </div>

            <div className="setting-group">
              <label htmlFor="interval-minutes">Interval (minutes):</label>
              <input 
                id="interval-minutes"
                type="number" 
                min="0" 
                max="30" 
                value={intervalMinutes} 
                onChange={(e) => setIntervalMinutes(parseInt(e.target.value) || 0)}
              />
              <small>Play sound every X minutes (0 to disable)</small>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MeditationTimer;