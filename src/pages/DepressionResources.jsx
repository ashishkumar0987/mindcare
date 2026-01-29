import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DepressionResources = () => {
  const [activeTab, setActiveTab] = useState('selfcare');

  const selfCareStrategies = [
    {
      title: "Daily Routine Structure",
      description: "Establishing a consistent daily routine can help manage depression symptoms.",
      steps: [
        "Set a regular sleep schedule and stick to it",
        "Plan meals at consistent times each day",
        "Schedule small tasks throughout the day",
        "Include at least one enjoyable activity daily",
        "Maintain personal hygiene even when motivation is low"
      ],
      image: "https://picsum.photos/seed/routine1/300/200.jpg"
    },
    {
      title: "Physical Activity",
      description: "Regular exercise can be as effective as medication for mild depression.",
      steps: [
        "Start with just 10-15 minutes of walking daily",
        "Gradually increase to 30 minutes of moderate activity",
        "Try activities you once enjoyed, even if they don't feel rewarding now",
        "Consider yoga or tai chi for mind-body benefits",
        "Exercise outdoors when possible for added mood benefits"
      ],
      image: "https://picsum.photos/seed/exercise1/300/200.jpg"
    },
    {
      title: "Nutrition for Mental Health",
      description: "What you eat can significantly impact your mood and energy levels.",
      steps: [
        "Include omega-3 rich foods like fish, walnuts, and flaxseed",
        "Eat complex carbohydrates for stable energy",
        "Limit processed foods and refined sugars",
        "Stay hydrated with plenty of water",
        "Consider vitamin D supplementation, especially in winter months"
      ],
      image: "https://picsum.photos/seed/nutrition1/300/200.jpg"
    }
  ];

  const copingTechniques = [
    {
      title: "Behavioral Activation",
      description: "A technique that focuses on increasing engagement in positive activities.",
      steps: [
        "Identify activities that once brought you pleasure",
        "Schedule these activities even when you don't feel motivated",
        "Track your mood before and after activities",
        "Start with very small, manageable tasks",
        "Gradually increase the complexity of activities"
      ],
      image: "https://picsum.photos/seed/activation1/300/200.jpg"
    },
    {
      title: "Thought Record",
      description: "Challenge negative thought patterns that contribute to depression.",
      steps: [
        "Write down negative thoughts as they occur",
        "Identify the emotions associated with these thoughts",
        "Look for evidence that supports and contradicts the thought",
        "Develop a more balanced, realistic alternative thought",
        "Practice this regularly to build new thinking habits"
      ],
      image: "https://picsum.photos/seed/thoughts1/300/200.jpg"
    },
    {
      title: "Gratitude Practice",
      description: "Shifting focus toward positive aspects of life can improve mood.",
      steps: [
        "Write down three things you're grateful for each day",
        "Be specific - instead of 'family', write 'my sister called to check on me'",
        "Include small things like a warm cup of tea or sunshine",
        "Review your gratitude list when feeling low",
        "Consider sharing your gratitude with others"
      ],
      image: "https://picsum.photos/seed/gratitude1/300/200.jpg"
    }
  ];

  const mindfulnessPractices = [
    {
      title: "Mindful Breathing",
      description: "Simple breathing technique to anchor you in the present moment.",
      steps: [
        "Find a comfortable position and close your eyes",
        "Focus your attention on your breath",
        "Notice the sensation of air entering and leaving your body",
        "When your mind wanders, gently return focus to your breath",
        "Practice for 5-10 minutes daily"
      ],
      image: "https://picsum.photos/seed/breathing1/300/200.jpg"
    },
    {
      title: "Body Scan Meditation",
      description: "Helps reconnect with your body and release physical tension.",
      steps: [
        "Lie down comfortably and close your eyes",
        "Bring attention to your toes, then gradually move up your body",
        "Notice any sensations without judgment",
        "Breathe into areas of tension or discomfort",
        "Practice for 10-15 minutes before sleep"
      ],
      image: "https://picsum.photos/seed/bodyscan1/300/200.jpg"
    },
    {
      title: "Mindful Walking",
      description: "Combines physical activity with mindfulness for double benefits.",
      steps: [
        "Walk at a natural pace, focusing on the sensation of movement",
        "Notice your feet touching the ground with each step",
        "Observe your surroundings without judgment",
        "When your mind wanders, return focus to walking",
        "Practice for 10-20 minutes in a safe environment"
      ],
      image: "https://picsum.photos/seed/walking1/300/200.jpg"
    }
  ];

  const socialSupport = [
    {
      title: "Reaching Out to Others",
      description: "Building and maintaining connections is crucial when dealing with depression.",
      steps: [
        "Identify one person you feel comfortable talking to",
        "Be honest about what you're experiencing",
        "Ask for specific support when needed",
        "Schedule regular contact even when you don't feel like it",
        "Consider joining a depression support group"
      ],
      image: "https://picsum.photos/seed/support1/300/200.jpg"
    },
    {
      title: "Setting Boundaries",
      description: "Protecting your energy by establishing healthy limits with others.",
      steps: [
        "Identify situations or people that drain your energy",
        "Practice saying 'no' to requests that overwhelm you",
        "Communicate your needs clearly and respectfully",
        "Limit time with negative or critical people",
        "Prioritize activities that restore rather than deplete you"
      ],
      image: "https://picsum.photos/seed/boundaries1/300/200.jpg"
    },
    {
      title: "Helping Others",
      description: "Shifting focus outward can provide perspective and purpose.",
      steps: [
        "Start with small acts of kindness for others",
        "Volunteer for a cause you care about",
        "Offer support to others who may be struggling",
        "Share your experiences with others who might benefit",
        "Recognize that helping others doesn't minimize your own struggles"
      ],
      image: "https://picsum.photos/seed/helping1/300/200.jpg"
    }
  ];

  const professionalResources = [
    {
      title: "Therapy Options",
      description: "Professional help can provide tools and support for managing depression.",
      content: [
        "Cognitive Behavioral Therapy (CBT) - Helps identify and change negative thought patterns",
        "Interpersonal Therapy - Focuses on improving relationships and communication",
        "Psychodynamic Therapy - Explores unconscious feelings and past experiences",
        "Online therapy platforms like BetterHelp, Talkspace, or local mental health services"
      ],
      image: "https://picsum.photos/seed/therapy1/300/200.jpg"
    },
    {
      title: "Medication Information",
      description: "Medication can be an important part of depression treatment for many people.",
      content: [
        "SSRIs - Common antidepressants that increase serotonin levels",
        "SNRIs - Another class of antidepressants affecting serotonin and norepinephrine",
        "Atypical antidepressants - Various options with different mechanisms",
        "Always consult with a healthcare professional before starting any medication"
      ],
      image: "https://picsum.photos/seed/medication1/300/200.jpg"
    },
    {
      title: "Specialized Treatments",
      description: "For treatment-resistant depression, other options may be considered.",
      content: [
        "TMS (Transcranial Magnetic Stimulation) - Uses magnetic fields to stimulate nerve cells",
        "ECT (Electroconvulsive Therapy) - Effective for severe depression",
        "VNS (Vagus Nerve Stimulation) - Implanted device that stimulates the vagus nerve",
        "Ketamine therapy - Shows promise for rapid relief in some cases"
      ],
      image: "https://picsum.photos/seed/specialized1/300/200.jpg"
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
      description: "When depression becomes overwhelming or life-threatening.",
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
        }}>Depression Management Resources</h1>
        
        <p style={{
          textAlign: 'center',
          fontSize: '1.1rem',
          marginBottom: '40px',
          maxWidth: '800px',
          margin: '0 auto 40px',
          lineHeight: '1.6'
        }}>
          Explore these evidence-based resources to help manage depression. Remember that different techniques work for different people, so find what works best for you.
        </p>
        
        <div className="tabs" style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '30px',
          flexWrap: 'wrap'
        }}>
          <button
            className={`tab-button ${activeTab === 'selfcare' ? 'active' : ''}`}
            onClick={() => setActiveTab('selfcare')}
            style={{
              padding: '10px 20px',
              margin: '5px',
              border: 'none',
              borderRadius: '30px',
              backgroundColor: activeTab === 'selfcare' ? '#5e35b1' : '#e0e0e0',
              color: activeTab === 'selfcare' ? 'white' : '#333',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            Self-Care Strategies
          </button>
          <button
            className={`tab-button ${activeTab === 'coping' ? 'active' : ''}`}
            onClick={() => setActiveTab('coping')}
            style={{
              padding: '10px 20px',
              margin: '5px',
              border: 'none',
              borderRadius: '30px',
              backgroundColor: activeTab === 'coping' ? '#5e35b1' : '#e0e0e0',
              color: activeTab === 'coping' ? 'white' : '#333',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            Coping Techniques
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
            className={`tab-button ${activeTab === 'social' ? 'active' : ''}`}
            onClick={() => setActiveTab('social')}
            style={{
              padding: '10px 20px',
              margin: '5px',
              border: 'none',
              borderRadius: '30px',
              backgroundColor: activeTab === 'social' ? '#5e35b1' : '#e0e0e0',
              color: activeTab === 'social' ? 'white' : '#333',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            Social Support
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
          {activeTab === 'selfcare' && (
            <div className="resource-cards" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '25px'
            }}>
              {selfCareStrategies.map((strategy, index) => (
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
          
          {activeTab === 'coping' && (
            <div className="resource-cards" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '25px'
            }}>
              {copingTechniques.map((technique, index) => (
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
          
          {activeTab === 'mindfulness' && (
            <div className="resource-cards" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '25px'
            }}>
              {mindfulnessPractices.map((practice, index) => (
                <div key={index} className="resource-card" style={{
                  backgroundColor: '#fff',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease'
                }}>
                  <img src={practice.image} alt={practice.title} style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover'
                  }} />
                  <div style={{ padding: '20px' }}>
                    <h3 style={{
                      color: '#5e35b1',
                      marginBottom: '10px',
                      fontSize: '1.5rem'
                    }}>{practice.title}</h3>
                    <p style={{
                      marginBottom: '15px',
                      lineHeight: '1.5'
                    }}>{practice.description}</p>
                    <h4 style={{
                      color: '#333',
                      marginBottom: '10px',
                      fontSize: '1.1rem'
                    }}>Steps:</h4>
                    <ol style={{
                      paddingLeft: '20px',
                      lineHeight: '1.6'
                    }}>
                      {practice.steps.map((step, stepIndex) => (
                        <li key={stepIndex} style={{ marginBottom: '8px' }}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'social' && (
            <div className="resource-cards" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '25px'
            }}>
              {socialSupport.map((support, index) => (
                <div key={index} className="resource-card" style={{
                  backgroundColor: '#fff',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease'
                }}>
                  <img src={support.image} alt={support.title} style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover'
                  }} />
                  <div style={{ padding: '20px' }}>
                    <h3 style={{
                      color: '#5e35b1',
                      marginBottom: '10px',
                      fontSize: '1.5rem'
                    }}>{support.title}</h3>
                    <p style={{
                      marginBottom: '15px',
                      lineHeight: '1.5'
                    }}>{support.description}</p>
                    <h4 style={{
                      color: '#333',
                      marginBottom: '10px',
                      fontSize: '1.1rem'
                    }}>Steps:</h4>
                    <ol style={{
                      paddingLeft: '20px',
                      lineHeight: '1.6'
                    }}>
                      {support.steps.map((step, stepIndex) => (
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
          <Link to="/depression-quiz" style={{
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

export default DepressionResources;