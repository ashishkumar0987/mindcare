import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PtsdResources = () => {
  const [activeTab, setActiveTab] = useState('selfcare');

  const selfCareStrategies = [
    {
      title: "Establish Safety and Routine",
      description: "Creating a safe environment and predictable routine can help manage PTSD symptoms.",
      steps: [
        "Create a safe space in your home where you can relax",
        "Establish a consistent daily routine for meals, sleep, and activities",
        "Use grounding techniques when feeling overwhelmed",
        "Keep a journal to track symptoms and triggers",
        "Practice self-compassion and patience during recovery"
      ],
      image: "https://picsum.photos/seed/ptsd-safety/300/200.jpg"
    },
    {
      title: "Physical Health Management",
      description: "Taking care of your physical body can support mental health recovery.",
      steps: [
        "Engage in regular physical activity to reduce stress hormones",
        "Practice relaxation techniques like deep breathing or progressive muscle relaxation",
        "Maintain a balanced diet to support brain health",
        "Limit caffeine and alcohol which can worsen anxiety",
        "Prioritize getting 7-9 hours of quality sleep each night"
      ],
      image: "https://picsum.photos/seed/ptsd-health/300/200.jpg"
    },
    {
      title: "Mind-Body Connection",
      description: "Practices that connect mind and body can help regulate the nervous system.",
      steps: [
        "Try yoga or tai chi to reconnect with your body",
        "Practice mindfulness meditation to stay present",
        "Use sensory techniques (smell, touch, taste) to ground yourself",
        "Consider acupuncture or massage for tension release",
        "Explore creative outlets like art or music therapy"
      ],
      image: "https://picsum.photos/seed/ptsd-mindbody/300/200.jpg"
    }
  ];

  const copingTechniques = [
    {
      title: "Grounding Techniques",
      description: "Methods to bring yourself back to the present during flashbacks or anxiety.",
      steps: [
        "Practice the 5-4-3-2-1 technique: name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste",
        "Hold an ice cube or splash cold water on your face",
        "Focus on your breathing, counting each inhale and exhale",
        "Describe your surroundings in detail to yourself",
        "Engage in a physical activity that requires concentration"
      ],
      image: "https://picsum.photos/seed/ptsd-grounding/300/200.jpg"
    },
    {
      title: "Managing Triggers",
      description: "Strategies to identify and cope with trauma reminders.",
      steps: [
        "Identify your specific triggers and how they affect you",
        "Create a plan for what to do when you encounter a trigger",
        "Gradually expose yourself to mild triggers with support",
        "Use grounding techniques when triggered",
        "Develop a 'safe word' or signal with trusted people"
      ],
      image: "https://picsum.photos/seed/ptsd-triggers/300/200.jpg"
    },
    {
      title: "Emotional Regulation",
      description: "Techniques to manage intense emotions that may accompany PTSD.",
      steps: [
        "Practice the 'STOP' technique: Stop, Take a breath, Observe, Proceed",
        "Use temperature changes (cold water on face, holding ice) to reset emotions",
        "Create a list of activities that help you feel calm",
        "Practice self-soothing techniques like gentle rocking or humming",
        "Learn to identify emotions without judgment"
      ],
      image: "https://picsum.photos/seed/ptsd-emotions/300/200.jpg"
    }
  ];

  const mindfulnessPractices = [
    {
      title: "Mindful Breathing",
      description: "Simple breathing exercises to calm the nervous system.",
      steps: [
        "Practice box breathing: inhale for 4, hold for 4, exhale for 4, hold for 4",
        "Try 4-7-8 breathing: inhale for 4, hold for 7, exhale for 8",
        "Focus on the physical sensation of breathing",
        "Count breaths when your mind wanders",
        "Practice for 5-10 minutes daily"
      ],
      image: "https://picsum.photos/seed/ptsd-breathing/300/200.jpg"
    },
    {
      title: "Body Scan Meditation",
      description: "Reconnecting with your body in a safe, controlled way.",
      steps: [
        "Lie down comfortably and close your eyes",
        "Bring attention to different parts of your body sequentially",
        "Notice sensations without judgment or the need to change them",
        "Breathe into areas of tension or discomfort",
        "Practice for 10-15 minutes before sleep"
      ],
      image: "https://picsum.photos/seed/ptsd-bodyscan/300/200.jpg"
    },
    {
      title: "Mindful Movement",
      description: "Gentle movement practices to reconnect with your body.",
      steps: [
        "Try gentle yoga focusing on bodily sensations",
        "Practice tai chi for slow, mindful movement",
        "Take mindful walks, focusing on the sensation of movement",
        "Engage in stretching while paying attention to your breath",
        "Practice mindful eating, focusing on taste and texture"
      ],
      image: "https://picsum.photos/seed/ptsd-movement/300/200.jpg"
    }
  ];

  const socialSupport = [
    {
      title: "Building a Support Network",
      description: "Connecting with others who understand PTSD can be validating.",
      steps: [
        "Consider joining a PTSD support group (in-person or online)",
        "Educate trusted friends and family about PTSD",
        "Be open about your struggles with people you trust",
        "Find a mental health professional specializing in trauma",
        "Connect with others through PTSD advocacy organizations"
      ],
      image: "https://picsum.photos/seed/ptsd-support/300/200.jpg"
    },
    {
      title: "Communicating with Loved Ones",
      description: "Strategies for discussing your experience with others.",
      steps: [
        "Choose the right time and place to have important conversations",
        "Use 'I' statements to express your feelings",
        "Be specific about what kind of support would be helpful",
        "Understand that others may not fully understand your experience",
        "Consider family therapy to improve communication"
      ],
      image: "https://picsum.photos/seed/ptsd-communication/300/200.jpg"
    },
    {
      title: "Setting Boundaries",
      description: "Protecting your mental health by establishing healthy limits.",
      steps: [
        "Identify situations that trigger your PTSD symptoms",
        "Communicate your needs clearly to others",
        "Learn to say 'no' to requests that overwhelm you",
        "Limit time with people who don't understand or support your recovery",
        "Prioritize activities that support your mental health"
      ],
      image: "https://picsum.photos/seed/ptsd-boundaries/300/200.jpg"
    }
  ];

  const professionalResources = [
    {
      title: "Therapy Options",
      description: "Professional help is crucial for managing PTSD effectively.",
      content: [
        "Cognitive Processing Therapy (CPT) - Helps modify unhelpful beliefs about the trauma",
        "Prolonged Exposure Therapy - Gradually confronts trauma-related memories and situations",
        "Eye Movement Desensitization and Reprocessing (EMDR) - Uses eye movements to process traumatic memories",
        "Trauma-Focused Cognitive Behavioral Therapy (TF-CBT) - Combines cognitive and exposure techniques",
        "Online therapy platforms offering specialized PTSD treatment"
      ],
      image: "https://picsum.photos/seed/ptsd-therapy/300/200.jpg"
    },
    {
      title: "Medication Information",
      description: "Medication can be an important part of PTSD treatment.",
      content: [
        "SSRIs - First-line medications that can reduce anxiety and depression symptoms",
        "SNRIs - Another class of antidepressants effective for PTSD",
        "Prazosin - Can help reduce nightmares and sleep disturbances",
        "Always consult with a psychiatrist experienced in treating trauma",
        "Medication is often most effective when combined with therapy"
      ],
      image: "https://picsum.photos/seed/ptsd-medication/300/200.jpg"
    },
    {
      title: "Specialized Treatment Programs",
      description: "For severe PTSD, intensive treatment options may be necessary.",
      content: [
        "Intensive outpatient programs - Multiple therapy sessions per week",
        "Residential treatment programs - Live-in facilities for severe cases",
        "Partial hospitalization programs - Day programs for intensive treatment",
        "Specialized trauma clinics with expertise in treatment-resistant cases",
        "Support groups specifically for treatment-resistant PTSD"
      ],
      image: "https://picsum.photos/seed/ptsd-specialized/300/200.jpg"
    }
  ];

  const emergencyContacts = [
    {
      title: "Crisis Hotlines",
      description: "24/7 support for when PTSD symptoms become overwhelming.",
      contacts: [
        "National Suicide Prevention Lifeline: 988",
        "Crisis Text Line: Text HOME to 741741",
        "SAMHSA's National Helpline: 1-800-662-HELP (4357)",
        "Veterans Crisis Line: 1-800-273-8255 (Press 1)"
      ]
    },
    {
      title: "Emergency Services",
      description: "When PTSD becomes overwhelming or life-threatening.",
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
        }}>PTSD Management Resources</h1>
        
        <p style={{
          textAlign: 'center',
          fontSize: '1.1rem',
          marginBottom: '40px',
          maxWidth: '800px',
          margin: '0 auto 40px',
          lineHeight: '1.6'
        }}>
          Explore these evidence-based resources to help manage PTSD. Remember that different techniques work for different people, so find what works best for you.
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
          <Link to="/ptsd-quiz" style={{
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

export default PtsdResources;