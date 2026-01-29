// MeditationResources.js
import React, { useState } from 'react';
import './MeditationResources.css';

const MeditationResources = ({ favorites, addToFavorites, removeFromFavorites }) => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const resources = [
    {
      id: 'med1',
      type: 'article',
      category: 'mindfulness',
      title: 'Mindfulness Meditation: Benefits and Techniques',
      link: 'https://greatergood.berkeley.edu/article/item/five_ways_mindfulness_meditation_is_good_for_your_health',
      gifLink: 'https://skyogafoundation.org/assets/images/silence.gif',
      description: 'Learn about the science-backed benefits of mindfulness meditation and techniques to get started.',
    },
    {
      id: 'med2',
      type: 'article',
      category: 'yoga',
      title: '16 Benefits of Yoga That Are Supported by Science',
      link: 'https://www.healthline.com/nutrition/13-benefits-of-yoga',
      gifLink: 'https://media2.giphy.com/media/lSodnhEO8lphSsxEUy/giphy.gif',
      description: 'Discover the scientifically proven benefits of incorporating yoga into your daily routine.',
    },
    {
      id: 'med3',
      type: 'article',
      category: 'yoga',
      title: 'Beginner Yoga Poses for Relaxation',
      link: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1470658/',
      gifLink: 'https://media2.giphy.com/media/0YLKvc5TheGFh0GJXk/giphy.gif?cid=6c09b952qk938cnspzz9y9uizfrkj2pf750f3dvpmvpmag4p&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s',
      description: 'Simple yoga poses perfect for beginners to help reduce stress and promote relaxation.',
    },
    {
      id: 'med4',
      type: 'video',
      category: 'meditation',
      title: 'Meditation for Slowing Thoughts',
      link: 'https://www.youtube.com/watch?v=79r4jlECyTs',
      gifLink: 'https://media4.giphy.com/media/Mb42X7rqa0H7YlJsiz/source.gif',
      description: 'A guided meditation to help slow racing thoughts and find inner peace.',
    },
    {
      id: 'med5',
      type: 'article',
      category: 'yoga',
      title: 'Beginner Yoga Poses for Relaxation',
      link: 'https://www.yogajournal.com/poses/yoga-by-benefit/calm/yoga-poses-for-relaxation/',
      gifLink: 'https://media.giphy.com/media/3o7aD5saCl3pYiIbfC/giphy.gif',
      description: 'Explore these yoga poses specifically designed to calm your mind and relax your body.',
    },
    {
      id: 'med6',
      type: 'article',
      category: 'exercise',
      title: '8 Simple Exercises for Stress Relief',
      link: 'https://www.everydayhealth.com/exercise-photos/exercises-that-relieve-stress.aspx',
      gifLink: 'https://d2f8l4t0zpiyim.cloudfront.net/000_clients/61768/page/61768yYxIEAka.gif',
      description: 'Easy exercises you can do anywhere to quickly relieve stress and tension.',
    },
    {
      id: 'med7',
      type: 'article',
      category: 'yoga',
      title: 'How Yoga Boosts Your Mental Health',
      link: 'https://www.houstonmethodist.org/blog/articles/2021/sep/the-benefits-of-yoga-how-it-boosts-your-mental-health/',
      gifLink: 'https://media4.giphy.com/media/KDICL3psaxnoeUghMt/giphy.gif?cid=6c09b9525f4v3rtu08oa8spjfefqfmvdbxvlwsnvdzj8h5a1&ep=v1_stickers_related&rid=giphy.gif&ct=s',
      description: 'Learn about the connection between yoga practice and improved mental health.',
    },
    {
      id: 'med8',
      type: 'article',
      category: 'meditation',
      title: 'How Meditation strengthens Mental Health',
      link: 'https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response/?gclid=Cj0KCQjwi7GnBhDXARIsAFLvH4mc1N99ys4yWNA0XO_7kpg4jUEvAREYIDKA3dB70XgtSkbWwBA-BpsaAumVEALw_wcB',
      gifLink: 'https://media1.giphy.com/media/19ukzJdtWrkV2dy2eE/source.gif',
      description: 'WHO insights on how meditation practices can strengthen your mental health.',
    },
    {
      id: 'med9',
      type: 'article',
      category: 'meditation',
      title: 'Does Daily Meditation Really Help in Mental Health?',
      link: 'https://www.outlookindia.com/healths/world-mental-health-day-how-does-daily-meditation-really-help-us--news-219648',
      gifLink: 'https://media2.giphy.com/media/GD32HNX7JduZBfHIdZ/giphy.gif',
      description: 'Exploring the scientific evidence behind daily meditation and its impact on mental health.',
    },
  ];

  const categories = [
    { value: 'all', label: 'All Resources' },
    { value: 'meditation', label: 'Meditation' },
    { value: 'yoga', label: 'Yoga' },
    { value: 'mindfulness', label: 'Mindfulness' },
    { value: 'exercise', label: 'Exercise' },
  ];

  const filteredResources = resources.filter(resource => {
    const matchesFilter = filter === 'all' || resource.category === filter;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const isFavorite = (resourceId) => {
    return favorites.some(fav => fav.id === resourceId);
  };

  const handleFavoriteToggle = (resource) => {
    if (isFavorite(resource.id)) {
      removeFromFavorites(resource.id);
    } else {
      addToFavorites(resource);
    }
  };

  return (
    <div className="meditation-resources">
      <div className="section-header">
        <h2>Meditation, Yoga, Exercises and more...</h2>
        <div className="controls">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="filter-container">
            <select 
              value={filter} 
              onChange={(e) => setFilter(e.target.value)}
              className="filter-select"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {filteredResources.length > 0 ? (
        <div className="resource-grid">
          {filteredResources.map(resource => (
            <div key={resource.id} className="resource-card">
              <div className="resource-type-badge">{resource.type}</div>
              <a href={resource.link} target="_blank" rel="noopener noreferrer">
                <div className="resource-image-container">
                  <img src={resource.gifLink} alt={resource.title} />
                </div>
                <div className="resource-content">
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                </div>
              </a>
              <div className="resource-actions">
                <button 
                  className={`favorite-btn ${isFavorite(resource.id) ? 'favorited' : ''}`}
                  onClick={() => handleFavoriteToggle(resource)}
                >
                  {isFavorite(resource.id) ? '❤️' : '🤍'}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <p>No resources found matching your search or filter.</p>
        </div>
      )}
    </div>
  );
};

export default MeditationResources;