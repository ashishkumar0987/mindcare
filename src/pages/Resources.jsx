import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Resources = () => {
  const [activeTab, setActiveTab] = useState('breathing');

  const breathingExercises = [
    {
      title: "4-7-8 Breathing",
      description: "A powerful relaxation technique that helps calm the nervous system.",
      steps: [
        "Sit in a comfortable position with your back straight",
        "Inhale through your nose for 4 seconds",
        "Hold your breath for 7 seconds",
        "Exhale through your mouth for 8 seconds",
        "Repeat 3-4 times"
      ],
      image: "https://picsum.photos/seed/breathing1/300/200.jpg"
    },
    {
      title: "Box Breathing",
      description: "Used by Navy SEALs to stay calm and focused in stressful situations.",
      steps: [
        "Inhale slowly for 4 seconds",
        "Hold your breath for 4 seconds",
        "Exhale slowly for 4 seconds",
        "Hold at the bottom for 4 seconds",
        "Repeat for several minutes"
      ],
      image: "https://picsum.photos/seed/breathing2/300/200.jpg"
    },
    {
      title: "Diaphragmatic Breathing",
      description: "Helps reduce shallow breathing which often accompanies anxiety.",
      steps: [
        "Lie on your back with knees slightly bent",
        "Place one hand on your chest and one on your abdomen",
        "Inhale through your nose, focusing on raising your abdomen",
        "Exhale through your mouth, letting your abdomen fall",
        "Practice for 5-10 minutes daily"
      ],
      image: "https://picsum.photos/seed/breathing3/300/200.jpg"
    }
  ];

  const mindfulnessTechniques = [
    {
      title: "5-4-3-2-1 Grounding",
      description: "Brings you back to the present moment during anxiety attacks.",
      steps: [
        "Name 5 things you can see",
        "Name 4 things you can feel",
        "Name 3 things you can hear",
        "Name 2 things you can smell",
        "Name 1 thing you can taste"
      ],
      image: "https://picsum.photos/seed/mindfulness1/300/200.jpg"
    },
    {
      title: "Body Scan Meditation",
      description: "Helps release physical tension and promotes relaxation.",
      steps: [
        "Lie down comfortably and close your eyes",
        "Focus on your breathing for a few minutes",
        "Bring attention to your toes, then gradually move up your body",
        "Notice any sensations without judgment",
        "Release tension as you scan each body part"
      ],
      image: "https://picsum.photos/seed/mindfulness2/300/200.jpg"
    },
    {
      title: "Mindful Observation",
      description: "A simple practice to connect with your surroundings.",
      steps: [
        "Choose an object in your environment",
        "Observe it as if you're seeing it for the first time",
        "Notice its colors, textures, shapes, and patterns",
        "Observe without judgment or analysis",
        "Maintain focus for 2-3 minutes"
      ],
      image: "https://picsum.photos/seed/mindfulness3/300/200.jpg"
    }
  ];

  const physicalActivities = [
    {
      title: "Progressive Muscle Relaxation",
      description: "Reduces physical tension by tensing and relaxing muscle groups.",
      steps: [
        "Find a comfortable position and close your eyes",
        "Start with your feet, tense them for 5 seconds",
        "Release the tension and notice the relaxation",
        "Work your way up through each muscle group",
        "Finish with your facial muscles"
      ],
      image: "https://picsum.photos/seed/physical1/300/200.jpg"
    },
    {
      title: "Brisk Walking",
      description: "Simple exercise that releases endorphins and reduces anxiety.",
      steps: [
        "Walk at a pace that elevates your heart rate",
        "Focus on the sensation of your feet hitting the ground",
        "Notice your surroundings without judgment",
        "Aim for 20-30 minutes daily",
        "Combine with deep breathing for added benefit"
      ],
      image: "https://picsum.photos/seed/physical2/300/200.jpg"
    },
    {
      title: "Yoga for Anxiety",
      description: "Combines physical postures, breathing, and meditation.",
      steps: [
        "Try calming poses like Child's Pose or Cat-Cow",
        "Focus on your breath throughout the practice",
        "Hold each pose for 5-8 breaths",
        "End with Savasana (relaxation pose)",
        "Practice 3-4 times per week"
      ],
      image: "https://picsum.photos/seed/physical3/300/200.jpg"
    }
  ];

  const selfHelpStrategies = [
    {
      title: "Anxiety Journal",
      description: "Track your thoughts and feelings to identify patterns.",
      steps: [
        "Write down what triggered your anxiety",
        "Record the physical sensations you experienced",
        "Note the thoughts that went through your mind",
        "Describe how you reacted",
        "Reflect on what helped or didn't help"
      ],
      image: "https://picsum.photos/seed/selfhelp1/300/200.jpg"
    },
    {
      title: "Thought Challenging",
      description: "Cognitive technique to reframe anxious thoughts.",
      steps: [
        "Identify the anxious thought",
        "Look for evidence that supports and contradicts it",
        "Consider alternative explanations",
        "Develop a more balanced thought",
        "Practice this regularly to build new habits"
      ],
      image: "https://picsum.photos/seed/selfhelp2/300/200.jpg"
    },
    {
      title: "Worry Time",
      description: "Dedicated time to process worries so they don't consume your day.",
      steps: [
        "Schedule 15-20 minutes daily for 'worry time'",
        "When anxious thoughts arise, postpone them to this time",
        "During worry time, write down all your concerns",
        "For each worry, note if it's solvable or not",
        "For solvable worries, brainstorm one small action"
      ],
      image: "https://picsum.photos/seed/selfhelp3/300/200.jpg"
    }
  ];

  const professionalResources = [
    {
      title: "Therapy Options",
      description: "Professional help can provide tools and support for managing anxiety.",
      content: [
        "Cognitive Behavioral Therapy (CBT) - Helps identify and change negative thought patterns",
        "Exposure Therapy - Gradually confronts fears in a safe environment",
        "Acceptance and Commitment Therapy (ACT) - Teaches acceptance of difficult feelings",
        "Online therapy platforms like BetterHelp, Talkspace, or local mental health services"
      ],
      image: "https://picsum.photos/seed/professional1/300/200.jpg"
    },
    {
      title: "Medication Information",
      description: "Sometimes medication can be helpful in managing anxiety symptoms.",
      content: [
        "SSRIs - Common antidepressants that also treat anxiety",
        "SNRIs - Another class of antidepressants effective for anxiety",
        "Benzodiazepines - Fast-acting anti-anxiety medications for short-term use",
        "Always consult with a healthcare professional before starting any medication"
      ],
      image: "https://picsum.photos/seed/professional2/300/200.jpg"
    },
    {
      title: "Support Groups",
      description: "Connecting with others who understand can reduce feelings of isolation.",
      content: [
        "NAMI (National Alliance on Mental Illness) - Offers free support groups",
        "Anxiety and Depression Association of America (ADAA) - Provides resources and peer support",
        "Local community centers often host anxiety support groups",
        "Online forums and communities like HealthfulChat or 7 Cups"
      ],
      image: "https://picsum.photos/seed/professional3/300/200.jpg"
    }
  ];

  const emergencyContacts = [
    {
      title: "Crisis Hotlines",
      description: "24/7 support for when you need immediate help.",
      contacts: [
        "National Suicide Prevention Lifeline: 988",
        "Crisis Text Line: Text HOME to 741741",
        "SAMHSA's National Helpline: 1-800-662-HELP (4357)",
        "The Trevor Project (LGBTQ Youth): 1-866-488-7386"
      ]
    },
    {
      title: "Emergency Services",
      description: "When anxiety becomes overwhelming or life-threatening.",
      contacts: [
        "Call 911 for immediate medical assistance",
        "Go to your nearest emergency room",
        "Contact your local crisis response team",
        "Reach out to your therapist or psychiatrist if you have one"
      ]
    }
  ];

  return (
    <div className="resources-container" style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 50%, #e8f5e8 100%)',
      minHeight: '100vh',
      padding: '20px 0',
      color: '#333'
    }}>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        background: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{
          textAlign: 'center',
          color: '#5e35b1',
          marginBottom: '30px',
          fontSize: '2.5rem',
          fontWeight: '700'
        }}>Anxiety Management Resources</h1>
        
        <p style={{
          textAlign: 'center',
          fontSize: '1.1rem',
          marginBottom: '40px',
          maxWidth: '800px',
          margin: '0 auto 40px',
          lineHeight: '1.6'
        }}>
          Explore these evidence-based resources to help manage anxiety. Remember that different techniques work for different people, so find what works best for you.
        </p>
        
        <div className="tabs" style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '30px',
          flexWrap: 'wrap'
        }}>
          <button
            className={`tab-button ${activeTab === 'breathing' ? 'active' : ''}`}
            onClick={() => setActiveTab('breathing')}
            style={{
              padding: '10px 20px',
              margin: '5px',
              border: 'none',
              borderRadius: '30px',
              backgroundColor: activeTab === 'breathing' ? '#5e35b1' : '#e0e0e0',
              color: activeTab === 'breathing' ? 'white' : '#333',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            Breathing Exercises
          </button>
          <button
            className={`tab-button ${activeTab === 'mindfulness' ? 'active' : ''}`}
            onClick={() => setActiveTab('mindfulness')}
            style={{
              padding: '10px 20px',
              margin: '5px',
              border: 'none',
              borderRadius: '30px',
              backgroundColor: activeTab === 'mindfulness' ? '#5e35b1' : '#e0e0e0',
              color: activeTab === 'mindfulness' ? 'white' : '#333',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            Mindfulness
          </button>
          <button
            className={`tab-button ${activeTab === 'physical' ? 'active' : ''}`}
            onClick={() => setActiveTab('physical')}
            style={{
              padding: '10px 20px',
              margin: '5px',
              border: 'none',
              borderRadius: '30px',
              backgroundColor: activeTab === 'physical' ? '#5e35b1' : '#e0e0e0',
              color: activeTab === 'physical' ? 'white' : '#333',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            Physical Activities
          </button>
          <button
            className={`tab-button ${activeTab === 'selfhelp' ? 'active' : ''}`}
            onClick={() => setActiveTab('selfhelp')}
            style={{
              padding: '10px 20px',
              margin: '5px',
              border: 'none',
              borderRadius: '30px',
              backgroundColor: activeTab === 'selfhelp' ? '#5e35b1' : '#e0e0e0',
              color: activeTab === 'selfhelp' ? 'white' : '#333',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            Self-Help Strategies
          </button>
          <button
            className={`tab-button ${activeTab === 'professional' ? 'active' : ''}`}
            onClick={() => setActiveTab('professional')}
            style={{
              padding: '10px 20px',
              margin: '5px',
              border: 'none',
              borderRadius: '30px',
              backgroundColor: activeTab === 'professional' ? '#5e35b1' : '#e0e0e0',
              color: activeTab === 'professional' ? 'white' : '#333',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            Professional Help
          </button>
          <button
            className={`tab-button ${activeTab === 'emergency' ? 'active' : ''}`}
            onClick={() => setActiveTab('emergency')}
            style={{
              padding: '10px 20px',
              margin: '5px',
              border: 'none',
              borderRadius: '30px',
              backgroundColor: activeTab === 'emergency' ? '#f44336' : '#e0e0e0',
              color: activeTab === 'emergency' ? 'white' : '#333',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            Emergency Contacts
          </button>
        </div>
        
        <div className="tab-content">
          {activeTab === 'breathing' && (
            <div className="resource-cards" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '25px'
            }}>
              {breathingExercises.map((exercise, index) => (
                <div key={index} className="resource-card" style={{
                  backgroundColor: '#fff',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease'
                }}>
                  <img src={exercise.image} alt={exercise.title} style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover'
                  }} />
                  <div style={{ padding: '20px' }}>
                    <h3 style={{
                      color: '#5e35b1',
                      marginBottom: '10px',
                      fontSize: '1.5rem'
                    }}>{exercise.title}</h3>
                    <p style={{
                      marginBottom: '15px',
                      lineHeight: '1.5'
                    }}>{exercise.description}</p>
                    <h4 style={{
                      color: '#333',
                      marginBottom: '10px',
                      fontSize: '1.1rem'
                    }}>Steps:</h4>
                    <ol style={{
                      paddingLeft: '20px',
                      lineHeight: '1.6'
                    }}>
                      {exercise.steps.map((step, stepIndex) => (
                        <li key={stepIndex} style={{ marginBottom: '8px' }}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'mindfulness' && (
            <div className="resource-cards" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '25px'
            }}>
              {mindfulnessTechniques.map((technique, index) => (
                <div key={index} className="resource-card" style={{
                  backgroundColor: '#fff',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease'
                }}>
                  <img src={technique.image} alt={technique.title} style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover'
                  }} />
                  <div style={{ padding: '20px' }}>
                    <h3 style={{
                      color: '#5e35b1',
                      marginBottom: '10px',
                      fontSize: '1.5rem'
                    }}>{technique.title}</h3>
                    <p style={{
                      marginBottom: '15px',
                      lineHeight: '1.5'
                    }}>{technique.description}</p>
                    <h4 style={{
                      color: '#333',
                      marginBottom: '10px',
                      fontSize: '1.1rem'
                    }}>Steps:</h4>
                    <ol style={{
                      paddingLeft: '20px',
                      lineHeight: '1.6'
                    }}>
                      {technique.steps.map((step, stepIndex) => (
                        <li key={stepIndex} style={{ marginBottom: '8px' }}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'physical' && (
            <div className="resource-cards" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '25px'
            }}>
              {physicalActivities.map((activity, index) => (
                <div key={index} className="resource-card" style={{
                  backgroundColor: '#fff',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease'
                }}>
                  <img src={activity.image} alt={activity.title} style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover'
                  }} />
                  <div style={{ padding: '20px' }}>
                    <h3 style={{
                      color: '#5e35b1',
                      marginBottom: '10px',
                      fontSize: '1.5rem'
                    }}>{activity.title}</h3>
                    <p style={{
                      marginBottom: '15px',
                      lineHeight: '1.5'
                    }}>{activity.description}</p>
                    <h4 style={{
                      color: '#333',
                      marginBottom: '10px',
                      fontSize: '1.1rem'
                    }}>Steps:</h4>
                    <ol style={{
                      paddingLeft: '20px',
                      lineHeight: '1.6'
                    }}>
                      {activity.steps.map((step, stepIndex) => (
                        <li key={stepIndex} style={{ marginBottom: '8px' }}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'selfhelp' && (
            <div className="resource-cards" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '25px'
            }}>
              {selfHelpStrategies.map((strategy, index) => (
                <div key={index} className="resource-card" style={{
                  backgroundColor: '#fff',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease'
                }}>
                  <img src={strategy.image} alt={strategy.title} style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover'
                  }} />
                  <div style={{ padding: '20px' }}>
                    <h3 style={{
                      color: '#5e35b1',
                      marginBottom: '10px',
                      fontSize: '1.5rem'
                    }}>{strategy.title}</h3>
                    <p style={{
                      marginBottom: '15px',
                      lineHeight: '1.5'
                    }}>{strategy.description}</p>
                    <h4 style={{
                      color: '#333',
                      marginBottom: '10px',
                      fontSize: '1.1rem'
                    }}>Steps:</h4>
                    <ol style={{
                      paddingLeft: '20px',
                      lineHeight: '1.6'
                    }}>
                      {strategy.steps.map((step, stepIndex) => (
                        <li key={stepIndex} style={{ marginBottom: '8px' }}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'professional' && (
            <div className="resource-cards" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '25px'
            }}>
              {professionalResources.map((resource, index) => (
                <div key={index} className="resource-card" style={{
                  backgroundColor: '#fff',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease'
                }}>
                  <img src={resource.image} alt={resource.title} style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover'
                  }} />
                  <div style={{ padding: '20px' }}>
                    <h3 style={{
                      color: '#5e35b1',
                      marginBottom: '10px',
                      fontSize: '1.5rem'
                    }}>{resource.title}</h3>
                    <p style={{
                      marginBottom: '15px',
                      lineHeight: '1.5'
                    }}>{resource.description}</p>
                    <ul style={{
                      paddingLeft: '20px',
                      lineHeight: '1.6'
                    }}>
                      {resource.content.map((item, itemIndex) => (
                        <li key={itemIndex} style={{ marginBottom: '8px' }}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'emergency' && (
            <div className="emergency-contacts" style={{
              backgroundColor: '#ffebee',
              padding: '30px',
              borderRadius: '15px',
              border: '2px solid #f44336'
            }}>
              <h2 style={{
                color: '#d32f2f',
                marginBottom: '20px',
                fontSize: '2rem',
                textAlign: 'center'
              }}>Emergency Contacts</h2>
              
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '30px',
                textAlign: 'center',
                fontWeight: '500'
              }}>
                If you're experiencing a mental health crisis, please reach out to one of these resources immediately.
              </p>
              
              {emergencyContacts.map((contactGroup, index) => (
                <div key={index} style={{
                  backgroundColor: '#fff',
                  padding: '20px',
                  borderRadius: '10px',
                  marginBottom: '20px',
                  boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)'
                }}>
                  <h3 style={{
                    color: '#d32f2f',
                    marginBottom: '15px',
                    fontSize: '1.5rem'
                  }}>{contactGroup.title}</h3>
                  <p style={{
                    marginBottom: '15px',
                    lineHeight: '1.5'
                  }}>{contactGroup.description}</p>
                  <ul style={{
                    paddingLeft: '20px',
                    lineHeight: '1.8',
                    fontSize: '1.1rem'
                  }}>
                    {contactGroup.contacts.map((contact, contactIndex) => (
                      <li key={contactIndex} style={{ marginBottom: '8px', fontWeight: '500' }}>{contact}</li>
                    ))}
                  </ul>
                </div>
              ))}
              
              <div style={{
                textAlign: 'center',
                marginTop: '30px'
              }}>
                <p style={{
                  fontSize: '1rem',
                  fontStyle: 'italic',
                  color: '#666'
                }}>
                  Remember: It's okay to ask for help. You don't have to go through this alone.
                </p>
              </div>
            </div>
          )}
        </div>
        
        <div style={{
          textAlign: 'center',
          marginTop: '40px'
        }}>
          <Link to="/anxiety-quiz" style={{
            display: 'inline-block',
            padding: '12px 25px',
            backgroundColor: '#5e35b1',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '30px',
            fontSize: '1rem',
            transition: 'all 0.3s ease',
            margin: '0 10px'
          }}>
            Back to Quiz
          </Link>
          <Link to="/" style={{
            display: 'inline-block',
            padding: '12px 25px',
            backgroundColor: '#4caf50',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '30px',
            fontSize: '1rem',
            transition: 'all 0.3s ease',
            margin: '0 10px'
          }}>
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resources;