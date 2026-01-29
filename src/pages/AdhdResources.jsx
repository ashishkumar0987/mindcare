import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdhdResources = () => {
  const [activeTab, setActiveTab] = useState('selfcare');

  const selfCareStrategies = [
    {
      title: "Structured Daily Routine",
      description: "Creating a predictable routine can help manage ADHD symptoms.",
      steps: [
        "Establish consistent wake-up and sleep times",
        "Use visual schedules and calendars to track activities",
        "Break large tasks into smaller, manageable steps",
        "Set alarms and reminders for important activities",
        "Include regular breaks and physical activity in your schedule"
      ],
      image: "https://picsum.photos/seed/adhd-routine/300/200.jpg"
    },
    {
      title: "Exercise and Physical Activity",
      description: "Regular exercise can improve focus and reduce hyperactivity.",
      steps: [
        "Aim for at least 30 minutes of moderate exercise daily",
        "Try activities that engage both body and mind, like martial arts",
        "Consider short bursts of activity throughout the day",
        "Include outdoor activities when possible",
        "Find exercises you enjoy to maintain consistency"
      ],
      image: "https://picsum.photos/seed/adhd-exercise/300/200.jpg"
    },
    {
      title: "Nutrition for ADHD",
      description: "Diet can impact ADHD symptoms and overall brain function.",
      steps: [
        "Eat regular, balanced meals to maintain stable blood sugar",
        "Include protein-rich foods to support focus",
        "Limit processed foods and artificial additives",
        "Stay well-hydrated throughout the day",
        "Consider omega-3 supplements after consulting with a healthcare provider"
      ],
      image: "https://picsum.photos/seed/adhd-nutrition/300/200.jpg"
    }
  ];

  const copingTechniques = [
    {
      title: "Time Management Strategies",
      description: "Effective time management can help with focus and productivity.",
      steps: [
        "Use timers to work in focused bursts (Pomodoro Technique)",
        "Set realistic deadlines and break projects into milestones",
        "Use color-coding to prioritize tasks",
        "Minimize distractions during focused work time",
        "Schedule regular breaks to prevent burnout"
      ],
      image: "https://picsum.photos/seed/adhd-time/300/200.jpg"
    },
    {
      title: "Organization Systems",
      description: "Creating systems to stay organized can reduce stress.",
      steps: [
        "Designate specific places for important items",
        "Use labels and containers to categorize belongings",
        "Implement a 'one in, one out' rule to prevent clutter",
        "Use digital tools for reminders and organization",
        "Schedule regular organization sessions"
      ],
      image: "https://picsum.photos/seed/adhd-organization/300/200.jpg"
    },
    {
      title: "Focus Techniques",
      description: "Strategies to improve concentration and attention.",
      steps: [
        "Create a dedicated workspace free from distractions",
        "Use noise-canceling headphones or white noise",
        "Try fidget tools to channel restlessness",
        "Practice mindfulness meditation to improve focus",
        "Use visual aids to maintain attention on tasks"
      ],
      image: "https://picsum.photos/seed/adhd-focus/300/200.jpg"
    }
  ];

  const mindfulnessPractices = [
    {
      title: "Mindful Breathing",
      description: "Simple breathing exercises to improve focus and reduce impulsivity.",
      steps: [
        "Practice deep belly breathing for 5 minutes daily",
        "Count breaths to maintain focus",
        "Use breathing exercises before stressful situations",
        "Try box breathing: inhale for 4, hold for 4, exhale for 4, hold for 4",
        "Use breathing apps for guided exercises"
      ],
      image: "https://picsum.photos/seed/adhd-breathing/300/200.jpg"
    },
    {
      title: "Body Scan Meditation",
      description: "Connecting with your body to improve self-awareness.",
      steps: [
        "Lie down comfortably and close your eyes",
        "Bring attention to different parts of your body sequentially",
        "Notice sensations without judgment",
        "Practice for 10-15 minutes before bed",
        "Use guided body scan meditations if needed"
      ],
      image: "https://picsum.photos/seed/adhd-bodyscan/300/200.jpg"
    },
    {
      title: "Mindful Movement",
      description: "Combining physical activity with mindfulness.",
      steps: [
        "Practice yoga or tai chi to improve focus and body awareness",
        "Try walking meditation, focusing on the sensation of movement",
        "Engage fully in physical activities without distractions",
        "Notice how your body feels during different movements",
        "Practice mindful stretching to release tension"
      ],
      image: "https://picsum.photos/seed/adhd-movement/300/200.jpg"
    }
  ];

  const socialSupport = [
    {
      title: "Building Supportive Relationships",
      description: "Connecting with others who understand ADHD can be validating.",
      steps: [
        "Join ADHD support groups (in-person or online)",
        "Educate friends and family about ADHD",
        "Be open about your challenges with trusted people",
        "Find a mentor or coach who understands ADHD",
        "Connect with ADHD advocacy organizations"
      ],
      image: "https://picsum.photos/seed/adhd-support/300/200.jpg"
    },
    {
      title: "Communication Strategies",
      description: "Improving communication can strengthen relationships.",
      steps: [
        "Practice active listening to stay engaged in conversations",
        "Ask for clarification when you're unsure about something",
        "Be honest about your attention span and needs",
        "Use visual aids or written notes to remember important points",
        "Schedule regular check-ins with important people in your life"
      ],
      image: "https://picsum.photos/seed/adhd-communication/300/200.jpg"
    },
    {
      title: "Workplace Accommodations",
      description: "Strategies for success in professional environments.",
      steps: [
        "Request a quiet workspace if possible",
        "Use noise-canceling headphones to reduce distractions",
        "Ask for written instructions and summaries of meetings",
        "Use calendar reminders for deadlines and appointments",
        "Discuss reasonable accommodations with your employer"
      ],
      image: "https://picsum.photos/seed/adhd-workplace/300/200.jpg"
    }
  ];

  const professionalResources = [
    {
      title: "Therapy Options",
      description: "Professional help can provide tools and strategies for managing ADHD.",
      content: [
        "Cognitive Behavioral Therapy (CBT) - Helps develop coping strategies",
        "ADHD Coaching - Focuses on practical skills and organization",
        "Family Therapy - Improves family dynamics and understanding",
        "Group Therapy - Provides support and shared experiences",
        "Online therapy platforms offering specialized ADHD treatment"
      ],
      image: "https://picsum.photos/seed/adhd-therapy/300/200.jpg"
    },
    {
      title: "Medication Information",
      description: "Medication can be an important part of ADHD treatment.",
      content: [
        "Stimulants - Most common and effective for ADHD symptoms",
        "Non-stimulants - Alternative option when stimulants aren't suitable",
        "Extended-release formulations for all-day coverage",
        "Always work with a psychiatrist experienced in treating ADHD",
        "Medication is often most effective when combined with therapy"
      ],
      image: "https://picsum.photos/seed/adhd-medication/300/200.jpg"
    },
    {
      title: "Educational Support",
      description: "Resources for academic success with ADHD.",
      content: [
        "Educational accommodations through school disability services",
        "Tutoring specifically for students with ADHD",
        "Executive functioning coaching for academic skills",
        "Assistive technology tools for organization and focus",
        "Study skills workshops tailored to ADHD learning styles"
      ],
      image: "https://picsum.photos/seed/adhd-education/300/200.jpg"
    }
  ];

  const emergencyContacts = [
    {
      title: "Crisis Hotlines",
      description: "24/7 support for when ADHD symptoms become overwhelming.",
      contacts: [
        "National Suicide Prevention Lifeline: 988",
        "Crisis Text Line: Text HOME to 741741",
        "SAMHSA's National Helpline: 1-800-662-HELP (4357)",
        "CHADD (Children and Adults with ADHD): 1-800-233-4050"
      ]
    },
    {
      title: "Emergency Services",
      description: "When ADHD co-occurring conditions become overwhelming or life-threatening.",
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
        }}>ADHD Management Resources</h1>
        
        <p style={{
          textAlign: 'center',
          fontSize: '1.1rem',
          marginBottom: '40px',
          maxWidth: '800px',
          margin: '0 auto 40px',
          lineHeight: '1.6'
        }}>
          Explore these evidence-based resources to help manage ADHD. Remember that different techniques work for different people, so find what works best for you.
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
          <Link to="/adhd-quiz" style={{
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

export default AdhdResources;