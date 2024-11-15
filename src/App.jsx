import { useState, useEffect } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  useEffect(() => {
    let intervalId;
    
    if (isRunning) {
      intervalId = setInterval(() => {
        setCounter(prevCounter => prevCounter + 1);
      }, 1000);
    }
    
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);
  
  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };
  
  const handleReset = () => {
    setIsRunning(false);
    setCounter(0);
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    padding: '24px',
    border: '1px solid #e5e5e5',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  };

  const counterStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#1f2937'
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '8px'
  };

  const buttonStyle = {
    padding: '8px 16px',
    fontWeight: '600',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: '#3b82f6',
    marginRight: '8px'
  };
  
  return (
    <div style={containerStyle}>
      <h2 style={counterStyle}>{counter}</h2>
      <div style={buttonContainerStyle}>
        <button
          onClick={handleStartPause}
          style={buttonStyle}
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button
          onClick={handleReset}
          style={buttonStyle}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;