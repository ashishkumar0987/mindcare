import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SocialAnxietyResources = () => {
  const [activeTab, setActiveTab] = useState('selfcare');

  const selfCareStrategies = [
    {
      title: "Gradual Exposure",
      description: "Slowly facing social situations can help build confidence over time.",
      steps: [
        "Create a hierarchy of social situations from least to most anxiety-provoking",
        "Start with the least frightening situation and practice regularly",
        "Stay in the situation until your anxiety naturally decreases",
        "Gradually work your way up the hierarchy",
        "Reward yourself for facing feared situations"
      ],
      image: "https://picsum.photos/seed/social-exposure/300/200.jpg"
    },
    {
      title: "Physical Relaxation",
      description: "Managing physical symptoms of anxiety can make social situations more manageable.",
      steps: [
        "Practice deep breathing exercises before social events",
        "Try progressive muscle relaxation to release tension",
        "Engage in regular physical exercise to reduce overall anxiety",
        "Limit caffeine which can worsen physical anxiety symptoms",
        "Practice relaxation techniques regularly, not just before events"
      ],
      image: "https://picsum.photos/seed/social-relaxation/300/200.jpg"
    },
    {
      title: "Healthy Lifestyle",
      description: "A healthy lifestyle can support anxiety management.",
      steps: [
        "Maintain a balanced diet to stabilize mood and energy",
        "Get regular exercise to reduce stress hormones",
        "Ensure adequate sleep (7-9 hours per night)",
        "Limit alcohol which can increase anxiety in the long term",
        "Practice good self-care to build resilience"
      ],
      image: "https://picsum.photos/seed/social-lifestyle/300/200.jpg"
    }
  ];

  const copingTechniques = [
    {
      title: "Cognitive Restructuring",
      description: "Challenging and changing negative thought patterns about social situations.",
      steps: [
        "Identify automatic negative thoughts in social situations",
        "Look for evidence that supports and contradicts these thoughts",
        "Challenge distorted thinking patterns (catastrophizing, mind reading)",
        "Develop more balanced, realistic alternative thoughts",
        "Practice these techniques regularly to build new thinking habits"
      ],
      image: "https://picsum.photos/seed/social-cognitive/300/200.jpg"
    },
    {
      title: "Social Skills Practice",
      description: "Building confidence through practicing social skills in low-pressure situations.",
      steps: [
        "Practice conversation starters with trusted friends or family",
        "Role-play social situations with a therapist or supportive person",
        "Work on non-verbal communication like eye contact and body language",
        "Practice active listening skills to reduce focus on yourself",
        "Join structured groups with shared interests to practice socializing"
      ],
      image: "https://picsum.photos/seed/social-skills/300/200.jpg"
    },
    {
      title: "Attention Training",
      description: "Shifting focus away from internal anxiety to external social cues.",
      steps: [
        "Practice focusing on what others are saying rather than your anxiety",
        "Concentrate on the environment rather than internal sensations",
        "Engage in mindful listening during conversations",
        "Use grounding techniques when feeling overwhelmed",
        "Practice shifting attention back and forth between internal and external"
      ],
      image: "https://picsum.photos/seed/social-attention/300/200.jpg"
    }
  ];

  const mindfulnessPractices = [
    {
      title: "Mindful Breathing",
      description: "Using breath awareness to manage anxiety in social situations.",
      steps: [
        "Practice box breathing: inhale for 4, hold for 4, exhale for 4, hold for 4",
        "Use breathing exercises before and during social events",
        "Focus on the physical sensation of breathing when anxious",
        "Practice mindful breathing regularly to build the skill",
        "Use discreet breathing techniques during social situations"
      ],
      image: "https://picsum.photos/seed/social-breathing/300/200.jpg"
    },
    {
      title: "Body Scan Meditation",
      description: "Reconnecting with your body to reduce anxiety symptoms.",
      steps: [
        "Practice body scan meditation regularly to increase body awareness",
        "Notice areas of tension related to anxiety without judgment",
        "Breathe into areas of tension to promote relaxation",
        "Use body scan techniques during moments of high anxiety",
        "Practice for 10-15 minutes daily for best results"
      ],
      image: "https://picsum.photos/seed/social-bodyscan/300/200.jpg"
    },
    {
      title: "Mindful Socializing",
      description: "Bringing full attention to social interactions rather than anxiety.",
      steps: [
        "Focus completely on what the other person is saying",
        "Notice non-verbal cues and environmental details",
        "Practice staying present rather than worrying about the future",
        "Engage all senses in the social environment",
        "Return attention to the conversation when your mind wanders to anxiety"
      ],
      image: "https://picsum.photos/seed/social-mindful/300/200.jpg"
    }
  ];

  const socialSupport = [
    {
      title: "Building a Support Network",
      description: "Connecting with others who understand social anxiety can be validating.",
      steps: [
        "Consider joining a social anxiety support group (in-person or online)",
        "Educate trusted friends and family about social anxiety",
        "Be open about your struggles with people you trust",
        "Find a mental health professional specializing in anxiety disorders",
        "Connect with others through social anxiety advocacy organizations"
      ],
      image: "https://picsum.photos/seed/social-support/300/200.jpg"
    },
    {
      title: "Nurturing Relationships",
      description: "Building and maintaining connections despite social anxiety.",
      steps: [
        "Start with one-on-one interactions which may feel less overwhelming",
        "Schedule regular social activities to maintain connections",
        "Be honest with close friends about your anxiety when appropriate",
        "Focus on quality rather than quantity of relationships",
        "Celebrate small social victories with supportive people"
      ],
      image: "https://picsum.photos/seed/social-relationships/300/200.jpg"
    },
    {
      title: "Finding Your Community",
      description: "Connecting with others who share your interests can reduce social pressure.",
      steps: [
        "Join groups or clubs focused on your hobbies or interests",
        "Volunteer for causes you care about to meet like-minded people",
        "Take classes to learn new skills in a structured environment",
        "Participate in online communities related to your interests",
        "Attend events with a specific focus rather than purely social gatherings"
      ],
      image: "https://picsum.photos/seed/social-community/300/200.jpg"
    }
  ];

  const professionalResources = [
    {
      title: "Therapy Options",
      description: "Professional help can provide effective strategies for managing social anxiety.",
      content: [
        "Cognitive Behavioral Therapy (CBT) - Gold standard treatment for social anxiety",
        "Exposure Therapy - Gradually facing feared social situations",
        "Social Skills Training - Practicing interpersonal skills in a safe environment",
        "Acceptance and Commitment Therapy (ACT) - Learning to accept anxiety while taking valued action",
        "Online therapy platforms offering specialized social anxiety treatment"
      ],
      image: "https://picsum.photos/seed/social-therapy/300/200.jpg"
    },
    {
      title: "Medication Information",
      description: "Medication can be an effective part of social anxiety treatment.",
      content: [
        "SSRIs - First-line medications that can reduce anxiety symptoms",
        "SNRIs - Another class of antidepressants effective for social anxiety",
        "Beta-blockers - Can reduce physical symptoms of anxiety for specific situations",
        "Benzodiazepines - Short-term use for severe anxiety under medical supervision",
        "Always consult with a psychiatrist experienced in treating anxiety disorders"
      ],
      image: "https://picsum.photos/seed/social-medication/300/200.jpg"
    },
    {
      title: "Specialized Treatment Programs",
      description: "For severe social anxiety, intensive treatment options may be beneficial.",
      content: [
        "Intensive outpatient programs - Multiple therapy sessions per week",
        "Social anxiety group therapy - Practicing skills with others who understand",
        "Virtual reality exposure therapy - Simulated social situations for practice",
        "Weekend intensive workshops - Focused skill-building in a short time",
        "Summer camps or retreats specifically for social anxiety"
      ],
      image: "https://picsum.photos/seed/social-specialized/300/200.jpg"
    }
  ];

  const emergencyContacts = [
    {
      title: "Crisis Hotlines",
      description: "24/7 support for when social anxiety becomes overwhelming.",
      contacts: [
        "National Suicide Prevention Lifeline: 988",
        "Crisis Text Line: Text HOME to 741741",
        "SAMHSA's National Helpline: 1-800-662-HELP (4357)",
        "Anxiety and Depression Association of America: 1-240-485-1001"
      ]
    },
    {
      title: "Emergency Services",
      description: "When social anxiety co-occurring conditions become overwhelming or life-threatening.",
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
        }}>Social Anxiety Management Resources</h1>
        
        <p style={{
          textAlign: 'center',
          fontSize: '1.1rem',
          marginBottom: '40px',
          maxWidth: '800px',
          margin: '0 auto 40px',
          lineHeight: '1.6'
        }}>
          Explore these evidence-based resources to help manage social anxiety. Remember that different techniques work for different people, so find what works best for you.
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
          <Link to="/social-anxiety-quiz" style={{
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

export default SocialAnxietyResources;