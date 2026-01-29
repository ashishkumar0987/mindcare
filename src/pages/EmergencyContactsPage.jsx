import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EmergencyContactsPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('hotlines');

  const emergencyContacts = {
    hotlines: [
      {
        name: "National Mental Health Helpline",
        number: "1800-599-0019",
        timing: "24/7",
        description: "Free and confidential mental health support"
      },
      {
        name: "Tele-MANAS Helpline",
        number: "14416",
        timing: "24/7",
        description: "Mental health services and support"
      },
      {
        name: "iCall Helpline",
        number: "9152987821",
        timing: "Mon-Sat, 8 AM to 10 PM",
        description: "Psychological helpline run by TISS"
      },
      {
        name: "Snehi Helpline",
        number: "91-22-27722677",
        timing: "Mon-Sat, 10 AM to 10 PM",
        description: "Emotional support and counseling"
      }
    ],
    hospitals: [
      {
        name: "AIIMS, Delhi",
        address: "Ansari Nagar, New Delhi - 110029",
        phone: "+91-11-26588500 / 26588700",
        emergency: "011-26589391"
      },
      {
        name: "NIMHANS, Bangalore",
        address: "Hosur Road, Bangalore - 560029",
        phone: "+91-80-26995000",
        emergency: "080-26995051"
      },
      {
        name: "PGIMER, Chandigarh",
        address: "Sector 12, Chandigarh - 160012",
        phone: "+91-172-2747585",
        emergency: "0172-2746585"
      },
      {
        name: "Tata Memorial Hospital, Mumbai",
        address: "Dr. E Borges Road, Parel, Mumbai - 400012",
        phone: "+91-22-24177000",
        emergency: "022-24177250"
      }
    ],
    professionals: [
      {
        name: "Dr. Arun Kumar",
        specialization: "Psychiatrist",
        location: "Delhi",
        phone: "+91-9876543210",
        experience: "15+ years"
      },
      {
        name: "Dr. Priya Sharma",
        specialization: "Clinical Psychologist",
        location: "Mumbai",
        phone: "+91-9876543211",
        experience: "12+ years"
      },
      {
        name: "Dr. Rajesh Verma",
        specialization: "Psychiatrist",
        location: "Bangalore",
        phone: "+91-9876543212",
        experience: "20+ years"
      },
      {
        name: "Dr. Anita Desai",
        specialization: "Child Psychiatrist",
        location: "Pune",
        phone: "+91-9876543213",
        experience: "10+ years"
      }
    ]
  };

  const handleCall = (number) => {
    window.open(`tel:${number}`);
  };

  return (
    <div style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 50%, #e8f5e8 100%)',
      minHeight: '100vh',
      padding: '20px'
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(90deg, #ff6b6b, #ff8e8e)',
        color: 'white',
        padding: '15px 20px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '30px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
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
          display: 'flex',
          alignItems: 'center'
        }}>
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
            🚨
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.2rem' }}>Emergency Contacts</h2>
            <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.8 }}>Immediate help contacts</p>
          </div>
        </div>
      </div>

      {/* Alert Banner */}
      <div style={{
        background: 'rgba(255, 107, 107, 0.1)',
        border: '1px solid rgba(255, 107, 107, 0.3)',
        borderRadius: '10px',
        padding: '15px',
        marginBottom: '25px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{
          fontSize: '1.5rem',
          marginRight: '15px'
        }}>
          ⚠️
        </div>
        <div>
          <h3 style={{
            margin: '0 0 5px 0',
            color: '#ff6b6b',
            fontSize: '1rem'
          }}>
            If you or someone you know is in immediate danger
          </h3>
          <p style={{
            margin: 0,
            color: '#666',
            fontSize: '0.9rem'
          }}>
            Please call 112 (Emergency Services) immediately or contact your nearest hospital's emergency services.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div style={{
        display: 'flex',
        marginBottom: '25px',
        background: 'white',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
      }}>
        {['hotlines', 'hospitals', 'professionals'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              flex: 1,
              padding: '15px',
              border: 'none',
              background: activeTab === tab 
                ? 'linear-gradient(90deg, #ff6b6b, #ff8e8e)' 
                : 'white',
              color: activeTab === tab ? 'white' : '#666',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: activeTab === tab ? '600' : '400',
              transition: 'all 0.3s ease'
            }}
          >
            {tab === 'hotlines' ? 'Helplines' : tab === 'hospitals' ? 'Hospitals' : 'Professionals'}
          </button>
        ))}
      </div>

      {/* Content based on active tab */}
      <div style={{
        background: 'white',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
      }}>
        {activeTab === 'hotlines' && (
          <div>
            <h3 style={{
              color: '#333',
              margin: '0 0 20px 0',
              fontSize: '1.3rem'
            }}>
              Mental Health Helplines
            </h3>
            {emergencyContacts.hotlines.map((contact, index) => (
              <div
                key={index}
                style={{
                  padding: '15px',
                  borderRadius: '10px',
                  background: index % 2 === 0 ? 'rgba(255, 107, 107, 0.05)' : 'rgba(255, 142, 142, 0.05)',
                  marginBottom: '15px'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '10px'
                }}>
                  <h4 style={{
                    margin: 0,
                    color: '#333',
                    fontSize: '1.1rem'
                  }}>
                    {contact.name}
                  </h4>
                  <span style={{
                    background: '#ff6b6b',
                    color: 'white',
                    padding: '3px 8px',
                    borderRadius: '15px',
                    fontSize: '0.8rem'
                  }}>
                    {contact.timing}
                  </span>
                </div>
                <p style={{
                  margin: '0 0 10px 0',
                  color: '#666',
                  fontSize: '0.9rem'
                }}>
                  {contact.description}
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{
                    marginRight: '10px',
                    color: '#666',
                    fontSize: '0.9rem'
                  }}>
                    📞 {contact.number}
                  </span>
                  <button
                    onClick={() => handleCall(contact.number)}
                    style={{
                      background: 'linear-gradient(90deg, #ff6b6b, #ff8e8e)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '20px',
                      padding: '5px 15px',
                      cursor: 'pointer',
                      fontSize: '0.9rem'
                    }}
                  >
                    Call Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'hospitals' && (
          <div>
            <h3 style={{
              color: '#333',
              margin: '0 0 20px 0',
              fontSize: '1.3rem'
            }}>
              Mental Health Hospitals
            </h3>
            {emergencyContacts.hospitals.map((hospital, index) => (
              <div
                key={index}
                style={{
                  padding: '15px',
                  borderRadius: '10px',
                  background: index % 2 === 0 ? 'rgba(255, 107, 107, 0.05)' : 'rgba(255, 142, 142, 0.05)',
                  marginBottom: '15px'
                }}
              >
                <h4 style={{
                  margin: '0 0 10px 0',
                  color: '#333',
                  fontSize: '1.1rem'
                }}>
                  {hospital.name}
                </h4>
                <p style={{
                  margin: '0 0 5px 0',
                  color: '#666',
                  fontSize: '0.9rem'
                }}>
                  📍 {hospital.address}
                </p>
                <p style={{
                  margin: '0 0 10px 0',
                  color: '#666',
                  fontSize: '0.9rem'
                }}>
                  📞 {hospital.phone}
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{
                    marginRight: '10px',
                    color: '#ff6b6b',
                    fontWeight: '600',
                    fontSize: '0.9rem'
                  }}>
                    Emergency: {hospital.emergency}
                  </span>
                  <button
                    onClick={() => handleCall(hospital.emergency)}
                    style={{
                      background: 'linear-gradient(90deg, #ff6b6b, #ff8e8e)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '20px',
                      padding: '5px 15px',
                      cursor: 'pointer',
                      fontSize: '0.9rem'
                    }}
                  >
                    Emergency Call
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'professionals' && (
          <div>
            <h3 style={{
              color: '#333',
              margin: '0 0 20px 0',
              fontSize: '1.3rem'
            }}>
              Mental Health Professionals
            </h3>
            {emergencyContacts.professionals.map((professional, index) => (
              <div
                key={index}
                style={{
                  padding: '15px',
                  borderRadius: '10px',
                  background: index % 2 === 0 ? 'rgba(255, 107, 107, 0.05)' : 'rgba(255, 142, 142, 0.05)',
                  marginBottom: '15px'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '10px'
                }}>
                  <h4 style={{
                    margin: 0,
                    color: '#333',
                    fontSize: '1.1rem'
                  }}>
                    {professional.name}
                  </h4>
                  <span style={{
                    background: '#ff6b6b',
                    color: 'white',
                    padding: '3px 8px',
                    borderRadius: '15px',
                    fontSize: '0.8rem'
                  }}>
                    {professional.experience}
                  </span>
                </div>
                <p style={{
                  margin: '0 0 5px 0',
                  color: '#666',
                  fontSize: '0.9rem'
                }}>
                  🏥 {professional.specialization}
                </p>
                <p style={{
                  margin: '0 0 10px 0',
                  color: '#666',
                  fontSize: '0.9rem'
                }}>
                  📍 {professional.location}
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{
                    marginRight: '10px',
                    color: '#666',
                    fontSize: '0.9rem'
                  }}>
                    📞 {professional.phone}
                  </span>
                  <button
                    onClick={() => handleCall(professional.phone)}
                    style={{
                      background: 'linear-gradient(90deg, #ff6b6b, #ff8e8e)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '20px',
                      padding: '5px 15px',
                      cursor: 'pointer',
                      fontSize: '0.9rem'
                    }}
                  >
                    Call Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Note */}
      <div style={{
        marginTop: '25px',
        padding: '15px',
        borderRadius: '10px',
        background: 'rgba(255,255,255,0.7)',
        textAlign: 'center',
        fontSize: '0.9rem',
        color: '#666'
      }}>
        <p style={{ margin: 0 }}>
          If you're experiencing suicidal thoughts, please seek help immediately. You're not alone, and help is available.
        </p>
      </div>
    </div>
  );
};

export default EmergencyContactsPage;