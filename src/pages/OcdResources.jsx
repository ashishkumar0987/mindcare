import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OcdResources = () => {
  const [activeTab, setActiveTab] = useState('selfcare');

  const selfCareStrategies = [
    {
      title: "Establish a Routine",
      description: "Creating a structured daily routine can help manage OCD symptoms.",
      steps: [
        "Set specific times for daily activities like meals, work, and relaxation",
        "Include time for exposure exercises in your schedule",
        "Maintain consistent sleep and wake times",
        "Schedule regular breaks throughout the day",
        "Create a balanced routine that includes enjoyable activities"
      ],
      image: "https://picsum.photos/seed/ocd-routine/300/200.jpg"
    },
    {
      title: "Stress Management",
      description: "Learning to manage stress can reduce OCD symptoms.",
      steps: [
        "Practice deep breathing exercises when anxiety rises",
        "Try progressive muscle relaxation techniques",
        "Engage in regular physical activity to reduce tension",
        "Limit caffeine and alcohol which can worsen anxiety",
        "Consider mindfulness meditation to stay present"
      ],
      image: "https://picsum.photos/seed/ocd-stress/300/200.jpg"
    },
    {
      title: "Healthy Lifestyle",
      description: "A healthy lifestyle can support OCD management.",
      steps: [
        "Maintain a balanced diet rich in nutrients",
        "Get regular exercise to boost mood and reduce anxiety",
        "Ensure adequate sleep (7-9 hours per night)",
        "Avoid substances that can worsen anxiety",
        "Stay connected with supportive friends and family"
      ],
      image: "https://picsum.photos/seed/ocd-lifestyle/300/200.jpg"
    }
  ];

  const copingTechniques = [
    {
      title: "Exposure and Response Prevention (ERP)",
      description: "The gold standard treatment for OCD involves gradually facing fears without compulsions.",
      steps: [
        "Create a hierarchy of feared situations from least to most scary",
        "Start with the least frightening situation and stay in it until anxiety decreases",
        "Resist performing the compulsion while in the feared situation",
        "Gradually work your way up the hierarchy",
        "Practice regularly to build tolerance to anxiety"
      ],
      image: "https://picsum.photos/seed/ocd-erp/300/200.jpg"
    },
    {
      title: "Thought Stopping",
      description: "A technique to interrupt obsessive thoughts.",
      steps: [
        "Identify when obsessive thoughts begin",
        "Use a physical or mental cue to stop the thought (like saying 'stop')",
        "Immediately redirect your attention to something else",
        "Practice this technique regularly to make it more effective",
        "Combine with other relaxation techniques for better results"
      ],
      image: "https://picsum.photos/seed/ocd-thoughts/300/200.jpg"
    },
    {
      title: "Delayed Response",
      description: "Postponing compulsions can help reduce their power.",
      steps: [
        "When you feel the urge to perform a compulsion, set a timer",
        "Start with a short delay (5-10 minutes) and gradually increase it",
        "Engage in another activity during the delay period",
        "Notice that the anxiety often decreases without performing the compulsion",
        "Challenge yourself to extend the delay time over time"
      ],
      image: "https://picsum.photos/seed/ocd-delay/300/200.jpg"
    }
  ];

  const mindfulnessPractices = [
    {
      title: "Mindful Observation",
      description: "Learning to observe thoughts without judgment.",
      steps: [
        "Sit quietly and notice your thoughts as they arise",
        "Label thoughts as 'thinking' without getting caught up in content",
        "Imagine thoughts as clouds passing in the sky",
        "Practice observing without trying to change or stop thoughts",
        "Return focus to your breath when you get distracted"
      ],
      image: "https://picsum.photos/seed/ocd-mindful/300/200.jpg"
    },
    {
      title: "Body Scan Meditation",
      description: "Connecting with your body to reduce anxiety.",
      steps: [
        "Lie down comfortably and close your eyes",
        "Bring attention to your toes and gradually move up your body",
        "Notice any sensations without judgment",
        "Breathe into areas of tension or discomfort",
        "Practice for 10-15 minutes daily"
      ],
      image: "https://picsum.photos/seed/ocd-bodyscan/300/200.jpg"
    },
    {
      title: "Sensory Grounding",
      description: "Using your senses to stay in the present moment.",
      steps: [
        "Identify 5 things you can see in your environment",
        "Notice 4 things you can physically feel",
        "Identify 3 things you can hear",
        "Notice 2 things you can smell",
        "Identify 1 thing you can taste"
      ],
      image: "https://picsum.photos/seed/ocd-grounding/300/200.jpg"
    }
  ];

  const socialSupport = [
    {
      title: "Building a Support Network",
      description: "Connecting with others who understand OCD can be validating.",
      steps: [
        "Consider joining an OCD support group (in-person or online)",
        "Educate trusted friends and family about OCD",
        "Be open about your struggles with people you trust",
        "Find a mental health professional specializing in OCD",
        "Connect with others through OCD advocacy organizations"
      ],
      image: "https://picsum.photos/seed/ocd-support/300/200.jpg"
    },
    {
      title: "Setting Boundaries",
      description: "Protecting your mental health by establishing healthy limits.",
      steps: [
        "Identify situations that trigger your OCD symptoms",
        "Communicate your needs clearly to others",
        "Learn to say 'no' to requests that overwhelm you",
        "Limit time with people who don't understand or support your recovery",
        "Prioritize activities that support your mental health"
      ],
      image: "https://picsum.photos/seed/ocd-boundaries/300/200.jpg"
    },
    {
      title: "Helping Others Understand",
      description: "Educating others can reduce stigma and increase support.",
      steps: [
        "Share reliable resources about OCD with loved ones",
        "Explain that OCD is a medical condition, not a character flaw",
        "Describe how others can best support you during difficult times",
        "Invite family members to therapy sessions if appropriate",
        "Join advocacy efforts to increase public understanding of OCD"
      ],
      image: "https://picsum.photos/seed/ocd-education/300/200.jpg"
    }
  ];

  const professionalResources = [
    {
      title: "Therapy Options",
      description: "Professional help is crucial for managing OCD effectively.",
      content: [
        "Cognitive Behavioral Therapy (CBT) with Exposure and Response Prevention (ERP) - Gold standard treatment",
        "Acceptance and Commitment Therapy (ACT) - Focuses on accepting thoughts without judgment",
        "Habit Reversal Training - Helps replace compulsions with healthier behaviors",
        "Family Therapy - Involves family members in the recovery process",
        "Online therapy platforms offering specialized OCD treatment"
      ],
      image: "https://picsum.photos/seed/ocd-therapy/300/200.jpg"
    },
    {
      title: "Medication Information",
      description: "Medication can be an important part of OCD treatment.",
      content: [
        "SSRIs - First-line medications that increase serotonin levels",
        "Clomipramine - A tricyclic antidepressant effective for OCD",
        "Augmentation strategies - Adding other medications to enhance effectiveness",
        "Always consult with a psychiatrist experienced in treating OCD",
        "Medication is often most effective when combined with therapy"
      ],
      image: "https://picsum.photos/seed/ocd-medication/300/200.jpg"
    },
    {
      title: "Specialized Treatment Programs",
      description: "For severe OCD, intensive treatment options may be necessary.",
      content: [
        "Intensive outpatient programs - Multiple therapy sessions per week",
        "Residential treatment programs - Live-in facilities for severe cases",
        "Partial hospitalization programs - Day programs for intensive treatment",
        "Specialized OCD clinics with expertise in treatment-resistant cases",
        "Support groups specifically for treatment-resistant OCD"
      ],
      image: "https://picsum.photos/seed/ocd-specialized/300/200.jpg"
    }
  ];

  const emergencyContacts = [
    {
      title: "Crisis Hotlines",
      description: "24/7 support for when OCD symptoms become overwhelming.",
      contacts: [
        "National Suicide Prevention Lifeline: 988",
        "Crisis Text Line: Text HOME to 741741",
        "SAMHSA's National Helpline: 1-800-662-HELP (4357)",
        "International OCD Foundation: 1-617-973-5801"
      ]
    },
    {
      title: "Emergency Services",
      description: "When OCD becomes overwhelming or life-threatening.",
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
        }}>OCD Management Resources</h1>
        
        <p style={{
          textAlign: 'center',
          fontSize: '1.1rem',
          marginBottom: '40px',
          maxWidth: '800px',
          margin: '0 auto 40px',
          lineHeight: '1.6'
        }}>
          Explore these evidence-based resources to help manage OCD. Remember that different techniques work for different people, so find what works best for you.
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
          <Link to="/ocd-quiz" style={{
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

export default OcdResources;