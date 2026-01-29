// Relax.js
import React, { useState, useEffect } from 'react';
import CalmingVideosSlider from './CalmingVideosSlider';
import SleepStories from './SleepStories';
import MeditationResources from './MeditationResources';
import BreathingExercise from './BreathingExercise';
import MeditationTimer from './MeditationTimer';
import AmbientSounds from './AmbientSounds';
import './Relax.css';

const Relax = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('videos');
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Load favorites from localStorage
    const savedFavorites = localStorage.getItem('relaxFavorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
    
    // Check for dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
  };

  const addToFavorites = (item) => {
    const newFavorites = [...favorites, item];
    setFavorites(newFavorites);
    localStorage.setItem('relaxFavorites', JSON.stringify(newFavorites));
  };

  const removeFromFavorites = (itemId) => {
    const newFavorites = favorites.filter(item => item.id !== itemId);
    setFavorites(newFavorites);
    localStorage.setItem('relaxFavorites', JSON.stringify(newFavorites));
  };

  return (
    <div className={`relax-page ${darkMode ? 'dark-mode' : ''}`}>
      <header className="relax-header">
        <h1>Relax & Unwind</h1>
        <div className="header-controls">
          <button 
            className="dark-mode-toggle" 
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <nav className="relax-nav">
        <button 
          className={`nav-tab ${activeTab === 'videos' ? 'active' : ''}`}
          onClick={() => setActiveTab('videos')}
        >
          Calming Videos
        </button>
        <button 
          className={`nav-tab ${activeTab === 'stories' ? 'active' : ''}`}
          onClick={() => setActiveTab('stories')}
        >
          Sleep Stories
        </button>
        <button 
          className={`nav-tab ${activeTab === 'meditation' ? 'active' : ''}`}
          onClick={() => setActiveTab('meditation')}
        >
          Meditation & Yoga
        </button>
        <button 
          className={`nav-tab ${activeTab === 'breathing' ? 'active' : ''}`}
          onClick={() => setActiveTab('breathing')}
        >
          Breathing Exercise
        </button>
        <button 
          className={`nav-tab ${activeTab === 'timer' ? 'active' : ''}`}
          onClick={() => setActiveTab('timer')}
        >
          Meditation Timer
        </button>
        <button 
          className={`nav-tab ${activeTab === 'sounds' ? 'active' : ''}`}
          onClick={() => setActiveTab('sounds')}
        >
          Ambient Sounds
        </button>
        <button 
          className={`nav-tab ${activeTab === 'favorites' ? 'active' : ''}`}
          onClick={() => setActiveTab('favorites')}
        >
          My Favorites ({favorites.length})
        </button>
      </nav>

      <main className="relax-content">
        {activeTab === 'videos' && (
          <CalmingVideosSlider 
            favorites={favorites} 
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
          />
        )}
        {activeTab === 'stories' && (
          <SleepStories 
            favorites={favorites} 
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
          />
        )}
        {activeTab === 'meditation' && (
          <MeditationResources 
            favorites={favorites} 
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
          />
        )}
        {activeTab === 'breathing' && <BreathingExercise />}
        {activeTab === 'timer' && <MeditationTimer />}
        {activeTab === 'sounds' && <AmbientSounds />}
        {activeTab === 'favorites' && (
          <div className="favorites-container">
            <h2>My Favorites</h2>
            {favorites.length === 0 ? (
              <p>You haven't added any favorites yet.</p>
            ) : (
              <div className="favorites-grid">
                {favorites.map(item => (
                  <div key={item.id} className="favorite-card">
                    <img src={item.thumbnail || item.gifLink} alt={item.title} />
                    <h4>{item.title}</h4>
                    <button 
                      className="remove-favorite"
                      onClick={() => removeFromFavorites(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Relax;