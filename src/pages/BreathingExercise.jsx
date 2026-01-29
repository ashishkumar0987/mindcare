// BreathingExercise.js
import React, { useState, useEffect } from 'react';
import './BreathingExercise.css';

const BreathingExercise = () => {
  const [phase, setPhase] = useState('ready'); // ready, inhale, hold, exhale
  const [countdown, setCountdown] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [cycles, setCycles] = useState(0);
  const [targetCycles, setTargetCycles] = useState(5);
  const [inhaleTime, setInhaleTime] = useState(4);
  const [holdTime, setHoldTime] = useState(4);
  const [exhaleTime, setExhaleTime] = useState(6);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setCountdown(countdown => {
          if (countdown > 1) {
            return countdown - 1;
          } else {
            // Move to next phase
            if (phase === 'ready') {
              setPhase('inhale');
              return inhaleTime;
            } else if (phase === 'inhale') {
              setPhase('hold');
              return holdTime;
            } else if (phase === 'hold') {
              setPhase('exhale');
              return exhaleTime;
            } else if (phase === 'exhale') {
              // Check if we've completed target cycles
              if (cycles + 1 >= targetCycles) {
                setIsActive(false);
                setPhase('complete');
                return 0;
              } else {
                setCycles(cycles + 1);
                setPhase('inhale');
                return inhaleTime;
              }
            }
            return 0;
          }
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, countdown, phase, cycles, targetCycles, inhaleTime, holdTime, exhaleTime]);

  const toggleExercise = () => {
    if (phase === 'complete') {
      // Reset the exercise
      setPhase('ready');
      setCountdown(0);
      setCycles(0);
      setIsActive(true);
    } else {
      setIsActive(!isActive);
    }
  };

  const resetExercise = () => {
    setIsActive(false);
    setPhase('ready');
    setCountdown(0);
    setCycles(0);
  };

  const getPhaseMessage = () => {
    switch (phase) {
      case 'ready':
        return 'Get ready to begin';
      case 'inhale':
        return 'Breathe in';
      case 'hold':
        return 'Hold your breath';
      case 'exhale':
        return 'Breathe out';
      case 'complete':
        return 'Exercise complete!';
      default:
        return '';
    }
  };

  const getCircleSize = () => {
    if (phase === 'inhale') {
      return 'large';
    } else if (phase === 'hold') {
      return 'large';
    } else if (phase === 'exhale') {
      return 'small';
    } else {
      return 'medium';
    }
  };

  return (
    <div className="breathing-exercise">
      <h2>Breathing Exercise</h2>
      
      <div className="exercise-controls">
        <div className="control-group">
          <label htmlFor="cycles">Cycles:</label>
          <input 
            id="cycles"
            type="number" 
            min="1" 
            max="20" 
            value={targetCycles} 
            onChange={(e) => setTargetCycles(parseInt(e.target.value) || 5)}
            disabled={isActive}
          />
        </div>
        
        <div className="control-group">
          <label htmlFor="inhale">Inhale (seconds):</label>
          <input 
            id="inhale"
            type="number" 
            min="2" 
            max="10" 
            value={inhaleTime} 
            onChange={(e) => setInhaleTime(parseInt(e.target.value) || 4)}
            disabled={isActive}
          />
        </div>
        
        <div className="control-group">
          <label htmlFor="hold">Hold (seconds):</label>
          <input 
            id="hold"
            type="number" 
            min="0" 
            max="10" 
            value={holdTime} 
            onChange={(e) => setHoldTime(parseInt(e.target.value) || 4)}
            disabled={isActive}
          />
        </div>
        
        <div className="control-group">
          <label htmlFor="exhale">Exhale (seconds):</label>
          <input 
            id="exhale"
            type="number" 
            min="2" 
            max="10" 
            value={exhaleTime} 
            onChange={(e) => setExhaleTime(parseInt(e.target.value) || 6)}
            disabled={isActive}
          />
        </div>
      </div>

      <div className="exercise-container">
        <div className="breathing-circle-container">
          <div className={`breathing-circle ${getCircleSize()} ${phase}`}></div>
        </div>
        
        <div className="exercise-info">
          <h3>{getPhaseMessage()}</h3>
          {isActive && (
            <div className="countdown">{countdown}</div>
          )}
          <div className="progress">
            Cycle {cycles} of {targetCycles}
          </div>
        </div>
      </div>

      <div className="exercise-actions">
        <button 
          className={`btn ${isActive ? 'btn-stop' : 'btn-start'}`}
          onClick={toggleExercise}
        >
          {phase === 'complete' ? 'Start Again' : (isActive ? 'Pause' : 'Start')}
        </button>
        <button 
          className="btn btn-reset"
          onClick={resetExercise}
          disabled={phase === 'ready'}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default BreathingExercise;