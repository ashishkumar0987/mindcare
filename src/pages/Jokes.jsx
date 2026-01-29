import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Jokes = () => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState('english');
  const [jokeCategory, setJokeCategory] = useState('any');
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // Function to translate text using MyMemory API (free)
  const translateText = async (text) => {
    try {
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|hi`;
      const response = await axios.get(url);
      return response.data.responseData.translatedText;
    } catch (error) {
      console.error('Translation error:', error);
      return text; // Return original text if translation fails
    }
  };

  // Function to fetch multiple jokes
  const fetchJokes = async (page = 1) => {
    setLoading(true);
    try {
      const newJokes = [];
      
      // Fetch 6 jokes per page
      for (let i = 0; i < 6; i++) {
        // Fetch joke from JokeAPI with better jokes
        let jokeUrl = 'https://v2.jokeapi.dev/joke/';
        
        // Add category to URL if not "any"
        if (jokeCategory !== 'any') {
          jokeUrl += jokeCategory;
        } else {
          jokeUrl += 'any';
        }
        
        // Add parameters to get safe jokes and exclude certain types
        jokeUrl += '?safe-mode&blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
        
        const response = await axios.get(jokeUrl);
        let englishJoke = '';
        
        // Handle both single and two-part jokes
        if (response.data.type === 'single') {
          englishJoke = response.data.joke;
        } else if (response.data.type === 'twopart') {
          englishJoke = `${response.data.setup} ... ${response.data.delivery}`;
        }
        
        // Translate to Hindi
        const hindiJoke = await translateText(englishJoke);
        
        newJokes.push({
          english: englishJoke,
          hindi: hindiJoke,
          category: response.data.category || 'misc'
        });
      }
      
      if (page === 1) {
        setJokes(newJokes);
      } else {
        setJokes([...jokes, ...newJokes]);
      }
    } catch (error) {
      console.error('Error fetching jokes:', error);
      // Fallback jokes if API fails
      const fallbackJokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "I told my wife she was drawing her eyebrows too high. She looked surprised.",
        "Why did the scarecrow win an award? Because he was outstanding in his field.",
        "I would tell you a construction joke, but I'm still working on it.",
        "Why don't eggs tell jokes? They'd crack each other up.",
        "What do you call a bear with no teeth? A gummy bear!"
      ];
      
      const translatedFallbacks = await Promise.all(
        fallbackJokes.map(joke => translateText(joke))
      );
      
      const newJokes = fallbackJokes.map((joke, index) => ({
        english: joke,
        hindi: translatedFallbacks[index],
        category: 'misc'
      }));
      
      if (page === 1) {
        setJokes(newJokes);
      } else {
        setJokes([...jokes, ...newJokes]);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJokes();
  }, [jokeCategory]);

  const loadMoreJokes = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchJokes(nextPage);
  };

  // Categories for jokes
  const jokeCategories = [
    { value: 'any', label: 'Random' },
    { value: 'programming', label: 'Programming' },
    { value: 'misc', label: 'Miscellaneous' },
    { value: 'dark', label: 'Dark' },
    { value: 'pun', label: 'Puns' },
    { value: 'spooky', label: 'Spooky' },
    { value: 'christmas', label: 'Christmas' }
  ];

  return (
    <div className='jokes-page' style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 50%, #e8f5e8 100%)',
      minHeight: '100vh',
      padding: '20px 0',
      color: '#333'
    }}>
      <div className='jokes-container' style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px'
      }}>
        <header style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <button 
            onClick={() => navigate('/')}
            style={{
              background: 'linear-gradient(45deg, #4a90e2, #5dade2)',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '30px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(74, 144, 226, 0.3)',
              marginBottom: '20px'
            }}
          >
            ← Back to Home
          </button>
          <h1 style={{
            color: '#2e7d32',
            fontSize: '2.5rem',
            fontWeight: '700',
            margin: '0'
          }}>
            😄 Collection of Jokes 😄
          </h1>
          <p style={{
            color: '#555',
            fontSize: '1.2rem',
            margin: '10px 0 0 0'
          }}>
            Browse through our collection of jokes to brighten your day!
          </p>
        </header>

        {/* Language Selection */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '30px'
        }}>
          <button 
            onClick={() => setLanguage('english')}
            style={{
              background: language === 'english' ? '#4caf50' : '#81c784',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderTopLeftRadius: '20px',
              borderBottomLeftRadius: '20px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
          >
            English
          </button>
          <button 
            onClick={() => setLanguage('hindi')}
            style={{
              background: language === 'hindi' ? '#2e7d32' : '#66bb6a',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderTopRightRadius: '20px',
              borderBottomRightRadius: '20px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
          >
            हिन्दी
          </button>
        </div>
        
        {/* Category Selection */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '30px'
        }}>
          {jokeCategories.map(category => (
            <button
              key={category.value}
              onClick={() => {
                setJokeCategory(category.value);
                setCurrentPage(1);
              }}
              style={{
                background: jokeCategory === category.value ? '#4caf50' : '#e8f5e8',
                color: jokeCategory === category.value ? 'white' : '#2e7d32',
                border: '1px solid #4caf50',
                padding: '8px 15px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}
            >
              {category.label}
            </button>
          ))}
        </div>

        {loading && jokes.length === 0 ? (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '300px'
          }}>
            <div style={{
              display: 'inline-block',
              animation: 'spin 1s linear infinite',
              fontSize: '1.5rem'
            }}>
              🎭 Loading jokes for you... 
            </div>
          </div>
        ) : (
          <div className='jokes-grid' style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '30px',
            marginBottom: '40px'
          }}>
            {jokes.map((joke, index) => (
              <div key={index} className='joke-card' style={{
                background: 'white',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
              }}
              >
                <div style={{
                  padding: '15px',
                  background: 'linear-gradient(145deg, #e8f5e8, #c8e6c9)',
                  borderBottom: '1px solid #4caf50',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <h3 style={{
                    color: '#2e7d32',
                    fontSize: '1.3rem',
                    margin: '0',
                    fontWeight: '600'
                  }}>
                    Joke #{index + 1}
                  </h3>
                  <span style={{
                    background: '#4caf50',
                    color: 'white',
                    padding: '5px 10px',
                    borderRadius: '10px',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>
                    {joke.category}
                  </span>
                </div>
                <div style={{
                  padding: '20px',
                  minHeight: '120px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <p style={{
                    color: '#333',
                    fontSize: '1.1rem',
                    margin: '0',
                    textAlign: 'center',
                    lineHeight: '1.5'
                  }}>
                    {language === 'english' ? joke.english : joke.hindi}
                  </p>
                </div>
                <div style={{
                  padding: '15px',
                  borderTop: '1px solid #eee',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <button
                    onClick={() => {
                      // Copy joke to clipboard
                      const textToCopy = language === 'english' ? joke.english : joke.hindi;
                      navigator.clipboard.writeText(textToCopy);
                      alert('Joke copied to clipboard!');
                    }}
                    style={{
                      background: 'linear-gradient(45deg, #4a90e2, #5dade2)',
                      color: 'white',
                      border: 'none',
                      padding: '8px 15px',
                      borderRadius: '20px',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Copy Joke 📋
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={{
          textAlign: 'center',
          marginTop: '20px'
        }}>
          <button 
            onClick={loadMoreJokes}
            disabled={loading}
            style={{
              background: 'linear-gradient(45deg, #4caf50, #66bb6a)',
              color: 'white',
              border: 'none',
              padding: '12px 30px',
              borderRadius: '30px',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontSize: '1.1rem',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(76, 175, 80, 0.3)'
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(76, 175, 80, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              if (!loading) {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(76, 175, 80, 0.3)';
              }
            }}
          >
            {loading ? 'Loading...' : 'Load More Jokes'}
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          .jokes-grid {
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))';
          }
        }
        @media (max-width: 480px) {
          .jokes-grid {
            gridTemplateColumns: '1fr';
          }
        }
      `}</style>
    </div>
  );
};

export default Jokes;