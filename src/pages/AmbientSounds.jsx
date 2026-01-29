// AmbientSounds.js
import React, { useState, useEffect } from 'react';
import './AmbientSounds.css';

const AmbientSounds = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSound, setCurrentSound] = useState(null);
  const [volume, setVolume] = useState(50);
  const [mixer, setMixer] = useState({
    rain: 0,
    ocean: 0,
    forest: 0,
    fire: 0,
    wind: 0,
    night: 0,
  });

  const sounds = [
    { id: 'rain', name: 'Rain', icon: '🌧️', color: '#4a90e2' },
    { id: 'ocean', name: 'Ocean Waves', icon: '🌊', color: '#00bcd4' },
    { id: 'forest', name: 'Forest', icon: '🌲', color: '#4caf50' },
    { id: 'fire', name: 'Fireplace', icon: '🔥', color: '#ff5722' },
    { id: 'wind', name: 'Wind', icon: '💨', color: '#9e9e9e' },
    { id: 'night', name: 'Night Sounds', icon: '🌙', color: '#3f51b5' },
  ];

  const presets = [
    { name: 'Rainy Day', values: { rain: 70, ocean: 0, forest: 30, fire: 0, wind: 20, night: 0 } },
    { name: 'Ocean Breeze', values: { rain: 0, ocean: 80, forest: 0, fire: 0, wind: 40, night: 0 } },
    { name: 'Forest Walk', values: { rain: 20, ocean: 0, forest: 70, fire: 0, wind: 30, night: 0 } },
    { name: 'Cozy Night', values: { rain: 30, ocean: 0, forest: 0, fire: 60, wind: 0, night: 40 } },
    { name: 'Storm', values: { rain: 80, ocean: 20, forest: 0, fire: 0, wind: 60, night: 0 } },
    { name: 'Camping', values: { rain: 0, ocean: 0, forest: 60, fire: 40, wind: 20, night: 50 } },
  ];

  useEffect(() => {
    // In a real implementation, you would control actual audio elements here
    // For this example, we'll just log the changes
    console.log('Mixer state changed:', mixer);
  }, [mixer]);

  const handleVolumeChange = (soundId, value) => {
    setMixer(prev => ({
      ...prev,
      [soundId]: value
    }));
    
    // If this is the first sound being adjusted, start playing
    if (!isPlaying) {
      setIsPlaying(true);
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const applyPreset = (preset) => {
    setMixer(preset.values);
    if (!isPlaying) {
      setIsPlaying(true);
    }
  };

  const stopAll = () => {
    setIsPlaying(false);
    setMixer({
      rain: 0,
      ocean: 0,
      forest: 0,
      fire: 0,
      wind: 0,
      night: 0,
    });
  };

  const isAnySoundActive = Object.values(mixer).some(value => value > 0);

  return (
    <div className="ambient-sounds">
      <h2>Ambient Sounds</h2>
      
      <div className="player-controls">
        <button 
          className={`play-btn ${isPlaying ? 'playing' : ''}`}
          onClick={togglePlayPause}
          disabled={!isAnySoundActive}
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>
        <button 
          className="stop-btn"
          onClick={stopAll}
          disabled={!isAnySoundActive}
        >
          ⏹️
        </button>
        <div className="volume-control">
          <span>🔊</span>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={volume} 
            onChange={(e) => setVolume(parseInt(e.target.value))}
          />
          <span>{volume}%</span>
        </div>
      </div>

      <div className="presets">
        <h3>Presets</h3>
        <div className="preset-buttons">
          {presets.map(preset => (
            <button 
              key={preset.name}
              className="preset-btn"
              onClick={() => applyPreset(preset)}
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      <div className="sound-mixer">
        <h3>Sound Mixer</h3>
        <div className="sound-controls">
          {sounds.map(sound => (
            <div key={sound.id} className="sound-control">
              <div className="sound-info">
                <div className="sound-icon" style={{ backgroundColor: sound.color }}>
                  {sound.icon}
                </div>
                <div className="sound-name">{sound.name}</div>
              </div>
              <div className="volume-slider">
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={mixer[sound.id]} 
                  onChange={(e) => handleVolumeChange(sound.id, parseInt(e.target.value))}
                />
                <span>{mixer[sound.id]}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {!isAnySoundActive && (
        <div className="empty-state">
          <p>Adjust the volume sliders to create your ambient sound mix</p>
        </div>
      )}
    </div>
  );
};

export default AmbientSounds;