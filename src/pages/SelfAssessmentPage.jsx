import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SelfAssessmentPage = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [assessmentStarted, setAssessmentStarted] = useState(false);
  const [userProfile, setUserProfile] = useState({
    age: '',
    gender: '',
    stressLevel: ''
  });
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [savedResults, setSavedResults] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Check for saved results in localStorage
  useEffect(() => {
    const saved = localStorage.getItem('mindCareAssessmentResults');
    if (saved) {
      setSavedResults(JSON.parse(saved));
    }
    
    const savedDarkMode = localStorage.getItem('mindCareDarkMode');
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  const questions = [
    {
      question: "Over the last two weeks, how often have you been bothered by feeling down, depressed, or hopeless?",
      options: [
        { text: "Not at all", value: 0 },
        { text: "Several days", value: 1 },
        { text: "More than half the days", value: 2 },
        { text: "Nearly every day", value: 3 }
      ],
      category: "mood"
    },
    {
      question: "Over the last two weeks, how often have you been bothered by little interest or pleasure in doing things?",
      options: [
        { text: "Not at all", value: 0 },
        { text: "Several days", value: 1 },
        { text: "More than half the days", value: 2 },
        { text: "Nearly every day", value: 3 }
      ],
      category: "interest"
    },
    {
      question: "Over the last two weeks, how often have you been bothered by trouble falling or staying asleep, or sleeping too much?",
      options: [
        { text: "Not at all", value: 0 },
        { text: "Several days", value: 1 },
        { text: "More than half the days", value: 2 },
        { text: "Nearly every day", value: 3 }
      ],
      category: "sleep"
    },
    {
      question: "Over the last two weeks, how often have you been bothered by feeling tired or having little energy?",
      options: [
        { text: "Not at all", value: 0 },
        { text: "Several days", value: 1 },
        { text: "More than half the days", value: 2 },
        { text: "Nearly every day", value: 3 }
      ],
      category: "energy"
    },
    {
      question: "Over the last two weeks, how often have you been bothered by poor appetite or overeating?",
      options: [
        { text: "Not at all", value: 0 },
        { text: "Several days", value: 1 },
        { text: "More than half the days", value: 2 },
        { text: "Nearly every day", value: 3 }
      ],
      category: "appetite"
    },
    {
      question: "Over the last two weeks, how often have you been bothered by feeling bad about yourself or that you are a failure?",
      options: [
        { text: "Not at all", value: 0 },
        { text: "Several days", value: 1 },
        { text: "More than half the days", value: 2 },
        { text: "Nearly every day", value: 3 }
      ],
      category: "selfWorth"
    },
    {
      question: "Over the last two weeks, how often have you been bothered by trouble concentrating on things?",
      options: [
        { text: "Not at all", value: 0 },
        { text: "Several days", value: 1 },
        { text: "More than half the days", value: 2 },
        { text: "Nearly every day", value: 3 }
      ],
      category: "focus"
    },
    {
      question: "Over the last two weeks, how often have you been bothered by moving or speaking so slowly that others noticed?",
      options: [
        { text: "Not at all", value: 0 },
        { text: "Several days", value: 1 },
        { text: "More than half the days", value: 2 },
        { text: "Nearly every day", value: 3 }
      ],
      category: "physical"
    },
    {
      question: "Over the last two weeks, how often have you been bothered by thoughts that you would be better off dead?",
      options: [
        { text: "Not at all", value: 0 },
        { text: "Several days", value: 1 },
        { text: "More than half the days", value: 2 },
        { text: "Nearly every day", value: 3 }
      ],
      category: "suicidal"
    },
    {
      question: "Over the last two weeks, how often have you been bothered by feeling anxious or on edge?",
      options: [
        { text: "Not at all", value: 0 },
        { text: "Several days", value: 1 },
        { text: "More than half the days", value: 2 },
        { text: "Nearly every day", value: 3 }
      ],
      category: "anxiety"
    }
  ];

  const handleAnswer = (value) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
      saveResults(newAnswers);
    }
  };

  const saveResults = (finalAnswers) => {
    const score = finalAnswers.reduce((total, answer) => total + answer, 0);
    const result = {
      date: new Date().toLocaleDateString(),
      score: score,
      interpretation: getScoreInterpretation(score),
      answers: finalAnswers,
      profile: userProfile
    };
    
    const updatedResults = [...savedResults, result];
    setSavedResults(updatedResults);
    localStorage.setItem('mindCareAssessmentResults', JSON.stringify(updatedResults));
  };

  const calculateScore = () => {
    return answers.reduce((total, answer) => total + answer, 0);
  };

  const getCategoryScores = () => {
    const categories = {};
    
    questions.forEach((q, index) => {
      if (!categories[q.category]) {
        categories[q.category] = 0;
      }
      if (answers[index] !== undefined) {
        categories[q.category] += answers[index];
      }
    });
    
    return categories;
  };

  const getScoreInterpretation = (score) => {
    if (score <= 4) {
      return {
        level: "Minimal",
        color: "#4caf50",
        message: "You appear to be in good mental health. Keep up your positive habits.",
        recommendation: "Continue with regular exercise, balanced diet, and adequate sleep.",
        resources: [
          { name: "Mindfulness Basics", url: "#" },
          { name: "Stress Management Techniques", url: "#" }
        ]
      };
    } else if (score <= 9) {
      return {
        level: "Mild",
        color: "#ff9800",
        message: "You may be experiencing some mild mental stress.",
        recommendation: "Try relaxation techniques and stress management strategies. Consider professional help if symptoms persist.",
        resources: [
          { name: "Coping Strategies", url: "#" },
          { name: "Self-Care Guide", url: "#" },
          { name: "Finding a Therapist", url: "#" }
        ]
      };
    } else if (score <= 14) {
      return {
        level: "Moderate",
        color: "#f44336",
        message: "You may be facing moderate mental health challenges.",
        recommendation: "It is highly recommended to contact a mental health professional.",
        resources: [
          { name: "Therapy Options", url: "#" },
          { name: "Support Groups", url: "#" },
          { name: "Crisis Helplines", url: "#" }
        ]
      };
    } else {
      return {
        level: "Severe",
        color: "#9c27b0",
        message: "You may be experiencing severe mental health challenges.",
        recommendation: "Please contact a mental health professional immediately.",
        resources: [
          { name: "Emergency Resources", url: "#" },
          { name: "Crisis Intervention", url: "#" },
          { name: "Immediate Help", url: "#" }
        ]
      };
    }
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setAssessmentStarted(false);
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('mindCareDarkMode', JSON.stringify(newMode));
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    setShowProfileForm(false);
    setAssessmentStarted(true);
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setUserProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const startAssessment = () => {
    setShowProfileForm(true);
  };

  const deleteResult = (index) => {
    const updatedResults = savedResults.filter((_, i) => i !== index);
    setSavedResults(updatedResults);
    localStorage.setItem('mindCareAssessmentResults', JSON.stringify(updatedResults));
  };

  return (
    <div style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: darkMode 
        ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' 
        : 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 50%, #e8f5e8 100%)',
      minHeight: '100vh',
      padding: '20px',
      color: darkMode ? '#ffffff' : '#333333'
    }}>
      {/* Header */}
      <div style={{
        background: darkMode 
          ? 'linear-gradient(90deg, #4a148c, #880e4f)' 
          : 'linear-gradient(90deg, #f093fb, #f5576c)',
        color: 'white',
        padding: '15px 20px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '30px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <button
            onClick={() => navigate('/')}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '1.5rem',
              marginRight: '15px',
              cursor: 'pointer'
            }}
          >
            ←
          </button>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '15px'
          }}>
            🧠
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.2rem' }}>MindCare Self-Assessment</h2>
            <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.8 }}>Evaluate your mental well-being</p>
          </div>
        </div>
        
        <div style={{
          display: 'flex',
          gap: '10px'
        }}>
          <button
            onClick={() => setShowHistory(!showHistory)}
            style={{
              background: 'none',
              border: '1px solid rgba(255,255,255,0.3)',
              color: 'white',
              borderRadius: '20px',
              padding: '5px 15px',
              cursor: 'pointer',
              fontSize: '0.9rem'
            }}
          >
            History
          </button>
          <button
            onClick={toggleDarkMode}
            style={{
              background: 'none',
              border: '1px solid rgba(255,255,255,0.3)',
              color: 'white',
              borderRadius: '20px',
              padding: '5px 15px',
              cursor: 'pointer',
              fontSize: '0.9rem'
            }}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>

      {/* Assessment History */}
      {showHistory && (
        <div style={{
          background: darkMode ? '#1e1e1e' : 'white',
          borderRadius: '15px',
          padding: '20px',
          marginBottom: '20px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{
            margin: '0 0 15px 0',
            color: darkMode ? '#ffffff' : '#333333'
          }}>
            Assessment History
          </h3>
          
          {savedResults.length > 0 ? (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}>
              {savedResults.map((result, index) => (
                <div key={index} style={{
                  background: darkMode ? '#2a2a2a' : '#f5f5f5',
                  borderRadius: '10px',
                  padding: '15px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <div style={{
                      fontWeight: 'bold',
                      marginBottom: '5px'
                    }}>
                      {result.date} - Score: {result.score}/30
                    </div>
                    <div style={{
                      color: result.interpretation.color,
                      fontSize: '0.9rem'
                    }}>
                      Level: {result.interpretation.level}
                    </div>
                  </div>
                  <button
                    onClick={() => deleteResult(index)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#f44336',
                      cursor: 'pointer',
                      fontSize: '1.2rem'
                    }}
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p style={{
              margin: 0,
              color: darkMode ? '#bbbbbb' : '#666666'
            }}>
              No previous assessments found.
            </p>
          )}
        </div>
      )}

      {/* Welcome Screen or Profile Form */}
      {!assessmentStarted && !showProfileForm && (
        <div style={{
          background: darkMode ? '#1e1e1e' : 'white',
          borderRadius: '15px',
          padding: '30px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          <div style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #f093fb, #f5576c)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            color: 'white',
            fontSize: '3rem'
          }}>
            🧠
          </div>
          
          <h2 style={{
            fontSize: '1.8rem',
            color: darkMode ? '#ffffff' : '#333333',
            marginBottom: '15px'
          }}>
            Welcome to MindCare Assessment
          </h2>
          
          <p style={{
            fontSize: '1rem',
            color: darkMode ? '#bbbbbb' : '#666666',
            marginBottom: '25px',
            lineHeight: '1.5'
          }}>
            This assessment will help you evaluate your mental well-being through a series of questions. 
            It takes approximately 5-10 minutes to complete. Your responses are confidential and will not be shared.
          </p>
          
          <div style={{
            background: darkMode ? '#2a2a2a' : '#f5f5f5',
            borderRadius: '10px',
            padding: '15px',
            marginBottom: '25px',
            textAlign: 'left'
          }}>
            <h4 style={{
              margin: '0 0 10px 0',
              color: darkMode ? '#ffffff' : '#333333'
            }}>
              What this assessment covers:
            </h4>
            <ul style={{
              margin: 0,
              paddingLeft: '20px',
              color: darkMode ? '#bbbbbb' : '#666666'
            }}>
              <li>Mood and emotional state</li>
              <li>Interest and pleasure in activities</li>
              <li>Sleep patterns</li>
              <li>Energy levels</li>
              <li>Appetite changes</li>
              <li>Self-worth and confidence</li>
              <li>Focus and concentration</li>
              <li>Physical symptoms</li>
              <li>Anxiety levels</li>
            </ul>
          </div>
          
          <button
            onClick={startAssessment}
            style={{
              padding: '15px 30px',
              border: 'none',
              borderRadius: '25px',
              background: 'linear-gradient(90deg, #f093fb, #f5576c)',
              color: 'white',
              cursor: 'pointer',
              fontSize: '1.1rem',
              fontWeight: '600',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
          >
            Start Assessment
          </button>
        </div>
      )}

      {/* Profile Form */}
      {showProfileForm && (
        <div style={{
          background: darkMode ? '#1e1e1e' : 'white',
          borderRadius: '15px',
          padding: '30px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
          marginBottom: '20px'
        }}>
          <h3 style={{
            margin: '0 0 20px 0',
            color: darkMode ? '#ffffff' : '#333333'
          }}>
            Tell us a bit about yourself
          </h3>
          
          <form onSubmit={handleProfileSubmit}>
            <div style={{
              marginBottom: '20px'
            }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                color: darkMode ? '#ffffff' : '#333333'
              }}>
                Age Group
              </label>
              <select
                name="age"
                value={userProfile.age}
                onChange={handleProfileChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  border: `1px solid ${darkMode ? '#444444' : '#dddddd'}`,
                  borderRadius: '8px',
                  background: darkMode ? '#2a2a2a' : 'white',
                  color: darkMode ? '#ffffff' : '#333333',
                  fontSize: '1rem'
                }}
              >
                <option value="">Select age group</option>
                <option value="18-24">18-24</option>
                <option value="25-34">25-34</option>
                <option value="35-44">35-44</option>
                <option value="45-54">45-54</option>
                <option value="55-64">55-64</option>
                <option value="65+">65+</option>
              </select>
            </div>
            
            <div style={{
              marginBottom: '20px'
            }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                color: darkMode ? '#ffffff' : '#333333'
              }}>
                Gender
              </label>
              <select
                name="gender"
                value={userProfile.gender}
                onChange={handleProfileChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  border: `1px solid ${darkMode ? '#444444' : '#dddddd'}`,
                  borderRadius: '8px',
                  background: darkMode ? '#2a2a2a' : 'white',
                  color: darkMode ? '#ffffff' : '#333333',
                  fontSize: '1rem'
                }}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="non-binary">Non-binary</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </div>
            
            <div style={{
              marginBottom: '20px'
            }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
                color: darkMode ? '#ffffff' : '#333333'
              }}>
                Current Stress Level
              </label>
              <select
                name="stressLevel"
                value={userProfile.stressLevel}
                onChange={handleProfileChange}
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  border: `1px solid ${darkMode ? '#444444' : '#dddddd'}`,
                  borderRadius: '8px',
                  background: darkMode ? '#2a2a2a' : 'white',
                  color: darkMode ? '#ffffff' : '#333333',
                  fontSize: '1rem'
                }}
              >
                <option value="">Select stress level</option>
                <option value="very-low">Very Low</option>
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
                <option value="very-high">Very High</option>
              </select>
            </div>
            
            <div style={{
              display: 'flex',
              gap: '15px'
            }}>
              <button
                type="button"
                onClick={() => setShowProfileForm(false)}
                style={{
                  padding: '12px 25px',
                  border: `1px solid ${darkMode ? '#444444' : '#dddddd'}`,
                  borderRadius: '25px',
                  background: darkMode ? '#2a2a2a' : 'white',
                  color: darkMode ? '#ffffff' : '#333333',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '600'
                }}
              >
                Cancel
              </button>
              
              <button
                type="submit"
                style={{
                  padding: '12px 25px',
                  border: 'none',
                  borderRadius: '25px',
                  background: 'linear-gradient(90deg, #f093fb, #f5576c)',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '600'
                }}
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Progress Bar */}
      {assessmentStarted && (
        <div style={{
          height: '8px',
          background: darkMode ? '#2a2a2a' : '#e0e0e0',
          borderRadius: '4px',
          marginBottom: '30px',
          overflow: 'hidden'
        }}>
          <div style={{
            height: '100%',
            width: `${((currentQuestion + (showResults ? 1 : 0)) / (questions.length + 1)) * 100}%`,
            background: 'linear-gradient(90deg, #f093fb, #f5576c)',
            borderRadius: '4px',
            transition: 'width 0.3s ease'
          }}></div>
        </div>
      )}

      {/* Question or Results */}
      {assessmentStarted && !showResults && (
        <div style={{
          background: darkMode ? '#1e1e1e' : 'white',
          borderRadius: '15px',
          padding: '30px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
          marginBottom: '20px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '20px'
          }}>
            <span style={{ color: darkMode ? '#bbbbbb' : '#666', fontSize: '0.9rem' }}>
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span style={{ 
              color: darkMode ? '#bbbbbb' : '#666', 
              fontSize: '0.9rem',
              background: darkMode ? '#2a2a2a' : '#f5f5f5',
              padding: '5px 10px',
              borderRadius: '15px'
            }}>
              {questions[currentQuestion].category}
            </span>
          </div>
          
          <h3 style={{
            fontSize: '1.3rem',
            color: darkMode ? '#ffffff' : '#333',
            marginBottom: '25px',
            lineHeight: '1.5'
          }}>
            {questions[currentQuestion].question}
          </h3>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
          }}>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.value)}
                style={{
                  padding: '15px',
                  border: `1px solid ${darkMode ? '#444444' : '#ddd'}`,
                  borderRadius: '10px',
                  background: darkMode ? '#2a2a2a' : 'white',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontSize: '1rem',
                  color: darkMode ? '#ffffff' : '#333'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = darkMode ? '#3a3a3a' : '#f5f5f5';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = darkMode ? '#2a2a2a' : 'white';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      {showResults && (
        <div style={{
          background: darkMode ? '#1e1e1e' : 'white',
          borderRadius: '15px',
          padding: '30px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
          marginBottom: '20px'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '25px'
          }}>
            <div style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: getScoreInterpretation(calculateScore()).color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              color: 'white',
              fontSize: '2.5rem',
              fontWeight: 'bold'
            }}>
              {calculateScore()}
            </div>
            
            <h3 style={{
              fontSize: '1.8rem',
              color: darkMode ? '#ffffff' : '#333',
              marginBottom: '10px'
            }}>
              Your Score: {calculateScore()} / 30
            </h3>
            
            <div style={{
              padding: '15px',
              borderRadius: '10px',
              background: `${getScoreInterpretation(calculateScore()).color}20`,
              marginBottom: '20px'
            }}>
              <h4 style={{
                color: getScoreInterpretation(calculateScore()).color,
                margin: '0 0 10px 0',
                fontSize: '1.3rem'
              }}>
                Level: {getScoreInterpretation(calculateScore()).level}
              </h4>
              <p style={{
                margin: '0 0 15px 0',
                color: darkMode ? '#bbbbbb' : '#555',
                lineHeight: '1.5',
                fontSize: '1rem'
              }}>
                {getScoreInterpretation(calculateScore()).message}
              </p>
              <p style={{
                margin: 0,
                color: darkMode ? '#bbbbbb' : '#555',
                lineHeight: '1.5',
                fontStyle: 'italic',
                fontSize: '1rem'
              }}>
                Recommendation: {getScoreInterpretation(calculateScore()).recommendation}
              </p>
            </div>
          </div>
          
          {/* Category Breakdown */}
          <div style={{
            marginBottom: '25px'
          }}>
            <h4 style={{
              margin: '0 0 15px 0',
              color: darkMode ? '#ffffff' : '#333'
            }}>
              Category Breakdown
            </h4>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '15px'
            }}>
              {Object.entries(getCategoryScores()).map(([category, score]) => {
                const maxScore = questions.filter(q => q.category === category).length * 3;
                const percentage = (score / maxScore) * 100;
                
                return (
                  <div key={category} style={{
                    background: darkMode ? '#2a2a2a' : '#f5f5f5',
                    borderRadius: '10px',
                    padding: '15px'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '8px'
                    }}>
                      <span style={{
                        textTransform: 'capitalize',
                        fontWeight: '500',
                        color: darkMode ? '#ffffff' : '#333'
                      }}>
                        {category.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span style={{
                        color: darkMode ? '#bbbbbb' : '#666'
                      }}>
                        {score}/{maxScore}
                      </span>
                    </div>
                    <div style={{
                      height: '6px',
                      background: darkMode ? '#3a3a3a' : '#e0e0e0',
                      borderRadius: '3px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        height: '100%',
                        width: `${percentage}%`,
                        background: percentage < 33 ? '#4caf50' : percentage < 66 ? '#ff9800' : '#f44336',
                        borderRadius: '3px'
                      }}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Recommended Resources */}
          <div style={{
            marginBottom: '25px'
          }}>
            <h4 style={{
              margin: '0 0 15px 0',
              color: darkMode ? '#ffffff' : '#333'
            }}>
              Recommended Resources
            </h4>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}>
              {getScoreInterpretation(calculateScore()).resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  style={{
                    display: 'block',
                    padding: '12px 15px',
                    background: darkMode ? '#2a2a2a' : '#f5f5f5',
                    borderRadius: '8px',
                    color: darkMode ? '#ffffff' : '#333',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = darkMode ? '#3a3a3a' : '#e0e0e0';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = darkMode ? '#2a2a2a' : '#f5f5f5';
                  }}
                >
                  {resource.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            gap: '15px',
            justifyContent: 'center'
          }}>
            <button
              onClick={resetAssessment}
              style={{
                padding: '12px 25px',
                border: 'none',
                borderRadius: '25px',
                background: 'linear-gradient(90deg, #f093fb, #f5576c)',
                color: 'white',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600'
              }}
            >
              Retake Assessment
            </button>
            
            <button
              onClick={() => navigate('/resources')}
              style={{
                padding: '12px 25px',
                border: `1px solid ${darkMode ? '#444444' : '#f093fb'}`,
                borderRadius: '25px',
                background: darkMode ? '#2a2a2a' : 'white',
                color: darkMode ? '#ffffff' : '#f093fb',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600'
              }}
            >
              View Resources
            </button>
            
            <button
              onClick={() => {
                const resultText = `MindCare Assessment Results\n\nDate: ${new Date().toLocaleDateString()}\nScore: ${calculateScore()}/30\nLevel: ${getScoreInterpretation(calculateScore()).level}\n\n${getScoreInterpretation(calculateScore()).message}\n\nRecommendation: ${getScoreInterpretation(calculateScore()).recommendation}`;
                
                if (navigator.share) {
                  navigator.share({
                    title: 'MindCare Assessment Results',
                    text: resultText
                  });
                } else {
                  navigator.clipboard.writeText(resultText);
                  alert('Results copied to clipboard!');
                }
              }}
              style={{
                padding: '12px 25px',
                border: `1px solid ${darkMode ? '#444444' : '#f093fb'}`,
                borderRadius: '25px',
                background: darkMode ? '#2a2a2a' : 'white',
                color: darkMode ? '#ffffff' : '#f093fb',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600'
              }}
            >
              Share Results
            </button>
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div style={{
        background: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.7)',
        borderRadius: '10px',
        padding: '15px',
        fontSize: '0.9rem',
        color: darkMode ? '#bbbbbb' : '#666',
        textAlign: 'center'
      }}>
        <p style={{ margin: 0 }}>
          Disclaimer: This self-assessment is for informational purposes only and is not a substitute for medical diagnosis.
          If you are experiencing serious mental health issues, please consult a qualified healthcare professional.
          If you are having thoughts of harming yourself, please contact emergency services immediately.
        </p>
      </div>
    </div>
  );
};

export default SelfAssessmentPage;