// CalmingVideosSlider.js
import React, { useState, useEffect } from 'react';
import './CalmingVideosSlider.css';

const CalmingVideosSlider = ({ favorites, addToFavorites, removeFromFavorites }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const apiKey = 'AIzaSyApVeK3cmd63M7u-bh1MCKm-UwXRHfoQec';
        const playlistId = 'PLQ_PIlf6OzqKdBTuABBCzazB4i732pNTa';
        const maxResults = 20;

        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }

        const data = await response.json();
        const videoItems = data.items.map(item => ({
          id: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high.url,
          description: item.snippet.description.substring(0, 100) + '...',
        }));

        setVideos(videoItems);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching videos:', error);
        setError('Failed to load videos. Please try again later.');
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const filteredVideos = videos.filter(video =>
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
        <p>Loading calming videos...</p>
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
    <div className="calming-videos-slider">
      <div className="section-header">
        <h2>Calming Videos</h2>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search videos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      {filteredVideos.length > 0 ? (
        <div className="video-slider">
          <div className="video-container">
            <div className="video-player">
              <iframe
                width="100%"
                height="400"
                src={`https://www.youtube.com/embed/${filteredVideos[currentVideoIndex].id}`}
                frameBorder="0"
                allowFullScreen
                title={filteredVideos[currentVideoIndex].title}
              ></iframe>
            </div>
            <div className="video-info">
              <h3>{filteredVideos[currentVideoIndex].title}</h3>
              <p>{filteredVideos[currentVideoIndex].description}</p>
              <button 
                className={`favorite-btn ${isFavorite(filteredVideos[currentVideoIndex].id) ? 'favorited' : ''}`}
                onClick={() => handleFavoriteToggle(filteredVideos[currentVideoIndex])}
              >
                {isFavorite(filteredVideos[currentVideoIndex].id) ? '❤️' : '🤍'}
              </button>
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
          <p>No videos found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default CalmingVideosSlider;