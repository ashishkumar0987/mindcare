import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Logoslider from '../components/Logoslider';
import Home_info from '../components/Home_info';
import img1 from '../images/homeimgnew-min.jpeg';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [showResources, setShowResources] = useState(false);
  const [email, setEmail] = useState('');
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Priya Sharma",
      text: "Mind Care helped me through my darkest days. The resources and community support made all the difference.",
      rating: 5
    },
    {
      id: 2,
      name: "Rahul Verma",
      text: "The meditation guides and self-help articles have become a part of my daily routine. I feel more centered now.",
      rating: 5
    },
    {
      id: 3,
      name: "Anjali Patel",
      text: "I never thought I'd find so much help online. The 24/7 support has been a lifesaver during tough times.",
      rating: 5
    }
  ]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert(`Thank you for subscribing with email: ${email}`);
    setEmail('');
  };

  return (
    <div className='home-page' style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 50%, #e8f5e8 100%)',
      minHeight: '100vh',
      overflowX: 'hidden',
      color: '#333'
    }}>
      {/* Enhanced Helpline Marquee with better design */}
      <div className="helpline-container" style={{
        background: 'linear-gradient(90deg, #ff6b6b, #ff8e8e)',
        padding: '15px 0',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        boxShadow: '0 4px 12px rgba(255, 107, 107, 0.3)',
        position: 'relative',
        borderTop: '3px solid #ff5252'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, rgba(255,107,107,0.1) 0%, rgba(255,107,107,0.3) 50%, rgba(255,107,107,0.1) 100%)',
          zIndex: 1
        }}></div>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          zIndex: 2
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: '20px',
            background: 'rgba(255,255,255,0.2)',
            padding: '5px 15px',
            borderRadius: '20px'
          }}>
            <span style={{ fontSize: '1.5rem', marginRight: '5px' }}>🚨</span>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1rem' }}>Helpline</span>
          </div>
        </div>
        <h3 className="marquee" style={{
          color: 'white',
          margin: 0,
          padding: '0 20px',
          animation: 'marquee 25s linear infinite',
          fontSize: '1.1rem',
          fontWeight: '600',
          textShadow: '0 1px 2px rgba(0,0,0,0.2)',
          position: 'relative',
          zIndex: 2
        }}>
          <span style={{ marginRight: '50px' }}>☎️ Tele-MANAS Helpline: 14416</span>
          <span style={{ marginRight: '50px' }}>📞 Toll-Free: 1-800 891 4416</span>
          <span style={{ marginRight: '50px' }}>💙 You're Not Alone – Reach Out Today!</span>
          <span style={{ marginRight: '50px' }}>🌟 Mental Health Support Available 24/7</span>
          <span style={{ marginRight: '50px' }}>🤝 Professional Counselors Ready to Help</span>
        </h3>
      </div>

      <div className='home-allcontent' style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px'
      }}>
        {/* Hero Image Section - Enhanced with parallax-like effect and better overlay */}
        <div className='home-project-intro-image' style={{
          position: 'relative',
          width: '100%',
          height: '70vh',
          overflow: 'hidden',
          borderRadius: '20px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
          marginBottom: '40px',
          transition: 'transform 0.5s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02) translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
        >
          <img 
            src={img1} 
            alt='Sukoon: Embrace, Empower, Elevate – A Journey to Inner Peace' 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.9)',
              transition: 'transform 0.5s ease'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '60%',
            background: 'linear-gradient(to right, rgba(0,123,255,0.8), transparent)',
            color: 'white',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backdropFilter: 'blur(5px)'
          }}>
            <h1 style={{ 
              margin: 0, 
              fontSize: '3.5rem', 
              fontWeight: '700',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              letterSpacing: '1px'
            }}>
              Welcome to Mind Care
            </h1>
            <p style={{ 
              margin: '10px 0 0 0', 
              fontSize: '1.5rem', 
              fontWeight: '300',
              opacity: 0.95
            }}>
              Embrace, Empower, Elevate 🌟
            </p>
            <p style={{ 
              margin: '20px 0 0 0', 
              fontSize: '1.1rem', 
              fontWeight: '300',
              fontStyle: 'italic',
              opacity: 0.9,
              lineHeight: '1.5'
            }}>
              "In the journey of life, may you find solace, laughter, and the companionship of kindred souls."
            </p>
            <p style={{ 
              margin: '5px 0 0 0', 
              fontSize: '1rem', 
              fontWeight: '400',
              opacity: 0.85
            }}>
              – MindCare Team ✨
            </p>
          </div>
        </div>

        {/* Quick Help Section */}
        <div style={{
          background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
          padding: '40px',
          borderRadius: '20px',
          boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
          margin: '50px 0',
          textAlign: 'center'
        }}>
          <h2 style={{
            color: '#2c3e50',
            fontSize: '2.2rem',
            marginBottom: '30px',
            fontWeight: '600'
          }}>
            Need Immediate Help? 🆘
          </h2>
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <button 
              onClick={() => navigate('/chat')}
              style={{
                background: 'linear-gradient(45deg, #6a11cb, #2575fc)',
                color: 'white',
                border: 'none',
                padding: '15px 30px',
                borderRadius: '30px',
                cursor: 'pointer',
                fontSize: '1.1rem',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(106, 17, 203, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 6px 20px rgba(106, 17, 203, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(106, 17, 203, 0.3)';
              }}
            >
              <span>💬</span> Chat with Counselor
            </button>
            <button 
              onClick={() => navigate('/self-assessment')}
              style={{
                background: 'linear-gradient(45deg, #f093fb, #f5576c)',
                color: 'white',
                border: 'none',
                padding: '15px 30px',
                borderRadius: '30px',
                cursor: 'pointer',
                fontSize: '1.1rem',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(240, 147, 251, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 6px 20px rgba(240, 147, 251, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(240, 147, 251, 0.3)';
              }}
            >
              <span>📝</span> Self Assessment
            </button>
            <button 
              onClick={() => navigate('/emergency')}
              style={{
                background: 'linear-gradient(45deg, #ff6b6b, #ff8e8e)',
                color: 'white',
                border: 'none',
                padding: '15px 30px',
                borderRadius: '30px',
                cursor: 'pointer',
                fontSize: '1.1rem',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 6px 20px rgba(255, 107, 107, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(255, 107, 107, 0.3)';
              }}
            >
              <span>🚨</span> Emergency Contacts
            </button>
          </div>
        </div>

        {/* Testimonials Section */}
        <div style={{
          background: 'linear-gradient(145deg, #f0f8ff, #e6f7ff)',
          padding: '50px',
          borderRadius: '20px',
          boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
          margin: '50px 0',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <h2 style={{
            textAlign: 'center',
            color: '#2c3e50',
            fontSize: '2.2rem',
            marginBottom: '40px',
            fontWeight: '600'
          }}>
            Success Stories 💫
          </h2>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            position: 'relative',
            height: '200px'
          }}>
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                style={{
                  position: 'absolute',
                  width: '100%',
                  opacity: index === currentTestimonial ? 1 : 0,
                  transform: index === currentTestimonial ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease',
                  background: 'white',
                  padding: '30px',
                  borderRadius: '15px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '15px'
                }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} style={{ color: '#ffc107', fontSize: '1.5rem' }}>⭐</span>
                  ))}
                </div>
                <p style={{
                  fontSize: '1.1rem',
                  fontStyle: 'italic',
                  color: '#555',
                  marginBottom: '20px',
                  textAlign: 'center',
                  lineHeight: '1.6'
                }}>
                  "{testimonial.text}"
                </p>
                <p style={{
                  fontWeight: '600',
                  color: '#2c3e50',
                  textAlign: 'center'
                }}>
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px'
          }}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  border: 'none',
                  margin: '0 5px',
                  background: index === currentTestimonial ? '#4a90e2' : '#ddd',
                  cursor: 'pointer'
                }}
              />
            ))}
          </div>
        </div>

        {/* Intro Paragraph - Elegant card with gradient, icons, and call-to-action */}
        <div className='home-project-intro' style={{
          background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
          padding: '50px',
          borderRadius: '20px',
          boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
          margin: '50px 0',
          lineHeight: '1.7',
          color: '#2c3e50',
          borderTop: '4px solid #4a90e2'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <div style={{ fontSize: '4rem', marginBottom: '10px' }}>🌱</div>
          </div>
          <p style={{ 
            fontSize: '1.2rem', 
            textAlign: 'justify',
            marginBottom: '20px'
          }}>
            We hope you enjoy our resources to brighten your day. Laughter is the best medicine, and we've curated a collection of jokes from various categories to bring a smile to your face. Mind Care has many such resources to make you smile even when you feel you can't. We also offer a variety of other resources to help you understand yourself better. After all, we all deserve to know what is going on inside us. 
            <br /><br />
            Explore our tools, connect with our community, and take the first step towards inner peace today. Your journey starts here! 💫
          </p>
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <button 
              onClick={() => setShowResources(!showResources)}
              style={{
                background: 'linear-gradient(45deg, #4a90e2, #5dade2)',
                color: 'white',
                border: 'none',
                padding: '15px 40px',
                borderRadius: '30px',
                cursor: 'pointer',
                fontSize: '1.2rem',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(74, 144, 226, 0.3)',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 6px 20px rgba(74, 144, 226, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(74, 144, 226, 0.3)';
              }}
            >
              {showResources ? 'Hide Resources 🔼' : 'Discover More Resources 🚀'}
            </button>
          </div>
        </div>

        {/* Resources Section - Initially Hidden */}
        {showResources && (
          <div style={{
            background: 'linear-gradient(145deg, #f0f8ff, #e6f7ff)',
            borderRadius: '20px',
            padding: '40px',
            margin: '30px 0',
            boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
            animation: 'fadeIn 0.5s ease-out'
          }}>
            <h2 style={{
              textAlign: 'center',
              color: '#2c3e50',
              fontSize: '2.2rem',
              marginBottom: '40px',
              fontWeight: '600'
            }}>
              Our Resources 🌟
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '30px'
            }}>
              <div style={{
                background: 'white',
                borderRadius: '15px',
                padding: '25px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
              }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🧘‍♀️</div>
                <h3 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '15px' }}>Meditation Guides</h3>
                <p style={{ color: '#555', lineHeight: '1.6' }}>
                  Access our collection of guided meditation sessions to help you find inner peace and reduce stress.
                </p>
              </div>
              <div style={{
                background: 'white',
                borderRadius: '15px',
                padding: '25px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
              }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>📚</div>
                <h3 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '15px' }}>Self-Help Articles</h3>
                <p style={{ color: '#555', lineHeight: '1.6' }}>
                  Explore our library of articles on mental health, wellness, and personal growth.
                </p>
              </div>
              <div style={{
                background: 'white',
                borderRadius: '15px',
                padding: '25px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
              }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🎧</div>
                <h3 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '15px' }}>Relaxation Music</h3>
                <p style={{ color: '#555', lineHeight: '1.6' }}>
                  Listen to our curated playlists of calming music to help you relax and unwind.
                </p>
              </div>
              <div style={{
                background: 'white',
                borderRadius: '15px',
                padding: '25px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
              }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🎥</div>
                <h3 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '15px' }}>Video Resources</h3>
                <p style={{ color: '#555', lineHeight: '1.6' }}>
                  Watch our collection of videos featuring expert advice and guided exercises.
                </p>
              </div>
              <div style={{
                background: 'white',
                borderRadius: '15px',
                padding: '25px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
              }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>👥</div>
                <h3 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '15px' }}>Community Support</h3>
                <p style={{ color: '#555', lineHeight: '1.6' }}>
                  Connect with others who understand what you're going through in our supportive community.
                </p>
              </div>
              <div style={{
                background: 'white',
                borderRadius: '15px',
                padding: '25px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
              }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>📅</div>
                <h3 style={{ color: '#2c3e50', fontSize: '1.5rem', marginBottom: '15px' }}>Workshops & Events</h3>
                <p style={{ color: '#555', lineHeight: '1.6' }}>
                  Join our workshops and events to learn new skills and connect with professionals.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Upcoming Events Section */}
        <div style={{
          background: 'linear-gradient(145deg, #fff8e1, #ffecb3)',
          padding: '50px',
          borderRadius: '20px',
          boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
          margin: '50px 0'
        }}>
          <h2 style={{
            textAlign: 'center',
            color: '#2c3e50',
            fontSize: '2.2rem',
            marginBottom: '40px',
            fontWeight: '600'
          }}>
            Upcoming Events 📅
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            <div style={{
              background: 'white',
              borderRadius: '15px',
              padding: '25px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              borderLeft: '4px solid #ff9800'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                <h3 style={{ color: '#2c3e50', fontSize: '1.3rem', margin: 0 }}>Mindfulness Workshop</h3>
                <span style={{ background: '#ff9800', color: 'white', padding: '5px 10px', borderRadius: '20px', fontSize: '0.8rem' }}>Free</span>
              </div>
              <p style={{ color: '#555', marginBottom: '10px' }}>Learn techniques to stay present and reduce anxiety.</p>
              <p style={{ color: '#777', fontSize: '0.9rem', margin: 0 }}>📅 June 15, 2023 | ⏰ 4:00 PM</p>
            </div>
            <div style={{
              background: 'white',
              borderRadius: '15px',
              padding: '25px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              borderLeft: '4px solid #4caf50'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                <h3 style={{ color: '#2c3e50', fontSize: '1.3rem', margin: 0 }}>Stress Management Webinar</h3>
                <span style={{ background: '#4caf50', color: 'white', padding: '5px 10px', borderRadius: '20px', fontSize: '0.8rem' }}>Online</span>
              </div>
              <p style={{ color: '#555', marginBottom: '10px' }}>Join our experts to learn effective stress management strategies.</p>
              <p style={{ color: '#777', fontSize: '0.9rem', margin: 0 }}>📅 June 22, 2023 | ⏰ 6:00 PM</p>
            </div>
            <div style={{
              background: 'white',
              borderRadius: '15px',
              padding: '25px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              borderLeft: '4px solid #2196f3'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                <h3 style={{ color: '#2c3e50', fontSize: '1.3rem', margin: 0 }}>Community Support Group</h3>
                <span style={{ background: '#2196f3', color: 'white', padding: '5px 10px', borderRadius: '20px', fontSize: '0.8rem' }}>Weekly</span>
              </div>
              <p style={{ color: '#555', marginBottom: '10px' }}>Connect with others in a safe and supportive environment.</p>
              <p style={{ color: '#777', fontSize: '0.9rem', margin: 0 }}>📅 Every Saturday | ⏰ 10:00 AM</p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup Section */}
        <div style={{
          background: 'linear-gradient(145deg, #e8f5e9, #c8e6c9)',
          padding: '50px',
          borderRadius: '20px',
          boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
          margin: '50px 0',
          textAlign: 'center'
        }}>
          <h2 style={{
            color: '#2c3e50',
            fontSize: '2.2rem',
            marginBottom: '20px',
            fontWeight: '600'
          }}>
            Stay Connected 💌
          </h2>
          <p style={{
            color: '#555',
            fontSize: '1.1rem',
            marginBottom: '30px',
            maxWidth: '600px',
            margin: '0 auto 30px'
          }}>
            Subscribe to our newsletter for weekly mental health tips, resources, and updates on upcoming events.
          </p>
          <form onSubmit={handleNewsletterSubmit} style={{
            display: 'flex',
            justifyContent: 'center',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              style={{
                flex: 1,
                padding: '15px 20px',
                borderRadius: '30px 0 0 30px',
                border: 'none',
                fontSize: '1rem',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              style={{
                background: 'linear-gradient(45deg, #4caf50, #66bb6a)',
                color: 'white',
                border: 'none',
                padding: '15px 30px',
                borderRadius: '0 30px 30px 0',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(76, 175, 80, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 6px 20px rgba(76, 175, 80, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(76, 175, 80, 0.3)';
              }}
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Existing Components - Enhanced spacing and subtle backgrounds */}
        <div style={{ 
          margin: '60px 0',
          background: 'rgba(255,255,255,0.7)',
          borderRadius: '15px',
          padding: '20px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
        }}>
          <Home_info />
        </div>

        <div style={{ 
          margin: '60px 0',
          background: 'rgba(255,255,255,0.7)',
          borderRadius: '15px',
          padding: '20px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
        }}>
          <Logoslider />
        </div>

        {/* Explore More Jokes Button - Enhanced Design at Bottom */}
        <div style={{
          textAlign: 'center',
          margin: '60px 0 40px',
          padding: '30px',
          background: 'linear-gradient(145deg, #e8f5e8, #c8e6c9)',
          borderRadius: '20px',
          boxShadow: '0 8px 25px rgba(46, 125, 50, 0.15)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-20px',
            left: '-20px',
            width: '100px',
            height: '100px',
            background: 'rgba(255,255,255,0.2)',
            borderRadius: '50%'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '-30px',
            right: '-30px',
            width: '150px',
            height: '150px',
            background: 'rgba(255,255,255,0.15)',
            borderRadius: '50%'
          }}></div>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h2 style={{
              color: '#2e7d32',
              fontSize: '2.2rem',
              marginBottom: '15px',
              fontWeight: '600'
            }}>
              Need a Good Laugh? 😄
            </h2>
            <p style={{
              color: '#555',
              fontSize: '1.1rem',
              marginBottom: '25px',
              maxWidth: '600px',
              margin: '0 auto 25px'
            }}>
              Explore our collection of jokes in multiple categories to brighten your day. Laughter is the best medicine!
            </p>
            <button 
              onClick={() => navigate('/jokes')}
              style={{
                background: 'linear-gradient(45deg, #4caf50, #66bb6a)',
                color: 'white',
                border: 'none',
                padding: '15px 40px',
                borderRadius: '30px',
                cursor: 'pointer',
                fontSize: '1.2rem',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(76, 175, 80, 0.3)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 6px 20px rgba(76, 175, 80, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(76, 175, 80, 0.3)';
              }}
            >
              Explore More Jokes 📚
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Custom CSS Animations */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        @media (max-width: 768px) {
          .home-project-intro-image { height: 50vh; }
          .home-project-intro-image h1 { font-size: 2.5rem; }
          .marquee { font-size: 1rem; }
          .home-project-intro-quote h3 { font-size: 1.5rem; }
          .home-project-intro { padding: 30px 20px; }
          .home-project-intro-image div { width: 70%; }
        }
        @media (max-width: 480px) {
          .home-project-intro-image h1 { font-size: 2rem; }
          .marquee { font-size: 0.9rem; }
          .home-project-intro-image div { width: 85%; }
        }
      `}</style>
    </div>
  );
};

export default Home;