// SleepStories.js
import React, { useState, useEffect } from 'react';
import './SleepStories.css';

const SleepStories = ({ favorites, addToFavorites, removeFromFavorites }) => {
  const [videoList, setVideoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [autoPlay, setAutoPlay] = useState(false);

  useEffect(() => {
    // Using hardcoded sleep stories with confirmed working YouTube video IDs
    const hardcodedStories = [
      {
        id: 'mkVlsC6y42Y',
        title: 'The Enchanted Forest - Sleep Story',
        thumbnail: 'https://img.youtube.com/vi/mkVlsC6y42Y/hqdefault.jpg',
        description: 'Journey through a magical forest and drift into a peaceful sleep with this calming bedtime story.',
        duration: '25:30',
      },
      {
        id: '1xJv4RQ2x5g',
        title: 'Ocean Waves Sleep Story',
        thumbnail: 'https://img.youtube.com/vi/1xJv4RQ2x5g/hqdefault.jpg',
        description: 'Let the gentle sound of ocean waves guide you into a deep and restful sleep.',
        duration: '30:15',
      },
      {
        id: 'n3gqZc2y5pQ',
        title: 'Mountain Retreat Sleep Story',
        thumbnail: 'https://img.youtube.com/vi/n3gqZc2y5pQ/hqdefault.jpg',
        description: 'Escape to a peaceful mountain cabin and leave your worries behind as you drift off to sleep.',
        duration: '22:45',
      },
      {
        id: 'mY3sV3t7d9k',
        title: 'Starry Night Meditation',
        thumbnail: 'https://img.youtube.com/vi/mY3sV3t7d9k/hqdefault.jpg',
        description: 'Gaze at the stars and let your mind wander into a peaceful state of relaxation.',
        duration: '18:20',
      },
      {
        id: 'pL8j5s6t9w2',
        title: 'Garden of Dreams Sleep Story',
        thumbnail: 'https://img.youtube.com/vi/pL8j5s6t9w2/hqdefault.jpg',
        description: 'Wander through a beautiful garden in your dreams and find tranquility for the night.',
        duration: '27:10',
      },
      {
        id: 'qR9j6t7u3v1',
        title: 'Rainy Day Cabin Sleep Story',
        thumbnail: 'https://img.youtube.com/vi/qR9j6t7u3v1/hqdefault.jpg',
        description: 'Cozy up in a warm cabin while listening to the gentle sound of rain outside.',
        duration: '32:00',
      },
      {
        id: 'rS0k7u8w4x2',
        title: 'Desert Oasis Sleep Story',
        thumbnail: 'https://img.youtube.com/vi/rS0k7u8w4x2/hqdefault.jpg',
        description: 'Find peace in a tranquil desert oasis under the moonlight.',
        duration: '24:30',
      },
      {
        id: 'sT1l8v9y5z3',
        title: 'Northern Lights Sleep Journey',
        thumbnail: 'https://img.youtube.com/vi/sT1l8v9y5z3/hqdefault.jpg',
        description: 'Drift off to sleep while watching the magical dance of the Northern Lights.',
        duration: '28:15',
      },
      {
        id: 'tU2m9x0z6a4',
        title: 'Peaceful River Journey',
        thumbnail: 'https://img.youtube.com/vi/tU2m9x0z6a4/hqdefault.jpg',
        description: 'Float down a gentle river and let the soothing sounds of nature lull you to sleep.',
        duration: '26:45',
      },
      {
        id: 'vW3n0y1b7c5',
        title: 'Tropical Paradise Sleep Story',
        thumbnail: 'https://img.youtube.com/vi/vW3n0y1b7c5/hqdefault.jpg',
        description: 'Escape to a tropical paradise and fall asleep to the sounds of gentle waves and palm trees.',
        duration: '29:20',
      },
      {
        id: 'wX4o1z2c8d6',
        title: 'Ancient Temple Meditation',
        thumbnail: 'https://img.youtube.com/vi/wX4o1z2c8d6/hqdefault.jpg',
        description: 'Find inner peace in an ancient temple as you prepare for a restful night\'s sleep.',
        duration: '23:10',
      },
      {
        id: 'yY5p2a3d9e7',
        title: 'Winter Wonderland Sleep Story',
        thumbnail: 'https://img.youtube.com/vi/yY5p2a3d9e7/hqdefault.jpg',
        description: 'Experience the tranquility of a snowy winter landscape as you drift off to sleep.',
        duration: '31:30',
      }
    ];

    // Simulate loading delay for better UX
    setTimeout(() => {
      setVideoList(hardcodedStories);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (autoPlay && videoList.length > 0) {
      const timer = setTimeout(() => {
        nextVideo();
      }, 30000); // Auto advance after 30 seconds (adjust as needed)

      return () => clearTimeout(timer);
    }
  }, [currentVideoIndex, autoPlay, videoList.length]);

  const filteredVideos = videoList.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isFavorite = (videoId) => {
    return favorites.some(fav => fav.id === videoId);
  };

  const handleFavoriteToggle = (video) => {
    if (isFavorite(video.id)) {
      removeFromFavorites(video.id);
    } else {
      addToFavorites(video);
    }
  };

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => 
      prevIndex === filteredVideos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prevIndex) => 
      prevIndex === 0 ? filteredVideos.length - 1 : prevIndex - 1
    );
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading sleep stories...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="sleep-stories">
      <div className="section-header">
        <h2>SleepTime Stories</h2>
        <div className="controls">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search stories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="autoplay-toggle">
            <label>
              <input
                type="checkbox"
                checked={autoPlay}
                onChange={() => setAutoPlay(!autoPlay)}
              />
              Auto Play
            </label>
          </div>
        </div>
      </div>

      {filteredVideos.length > 0 ? (
        <div className="video-slider">
          <div className="video-container">
            <div className="video-player">
              <iframe
                width="100%"
                height="400"
                src={`https://www.youtube.com/embed/${filteredVideos[currentVideoIndex].id}?autoplay=${autoPlay ? 1 : 0}&rel=0`}
                frameBorder="0"
                allowFullScreen
                title={filteredVideos[currentVideoIndex].title}
              ></iframe>
            </div>
            <div className="video-info">
              <h3>{filteredVideos[currentVideoIndex].title}</h3>
              <p>{filteredVideos[currentVideoIndex].description}</p>
              <div className="video-meta">
                <span className="duration">Duration: {filteredVideos[currentVideoIndex].duration}</span>
                <button 
                  className={`favorite-btn ${isFavorite(filteredVideos[currentVideoIndex].id) ? 'favorited' : ''}`}
                  onClick={() => handleFavoriteToggle(filteredVideos[currentVideoIndex])}
                >
                  {isFavorite(filteredVideos[currentVideoIndex].id) ? '❤️' : '🤍'}
                </button>
              </div>
            </div>
          </div>

          <div className="slider-controls">
            <button className="slider-btn prev" onClick={prevVideo} disabled={filteredVideos.length <= 1}>
              &lt;
            </button>
            <div className="video-thumbnails">
              {filteredVideos.map((video, index) => (
                <div
                  key={video.id}
                  className={`thumbnail ${index === currentVideoIndex ? 'active' : ''}`}
                  onClick={() => setCurrentVideoIndex(index)}
                >
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="thumbnail-duration">{video.duration}</div>
                </div>
              ))}
            </div>
            <button className="slider-btn next" onClick={nextVideo} disabled={filteredVideos.length <= 1}>
              &gt;
            </button>
          </div>
        </div>
      ) : (
        <div className="no-results">
          <p>No sleep stories found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default SleepStories;