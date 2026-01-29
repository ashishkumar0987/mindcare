import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase'; // अपने firebase कॉन्फिगरेशन फ़ाइल के अनुसार पथ समायोजित करें
import 'font-awesome/css/font-awesome.min.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Firestore में एक नया दस्तावेज़ जोड़ें
      await addDoc(collection(db, 'contactMessages'), {
        ...formData,
        timestamp: serverTimestamp(),
        status: 'unread', // नए संदेशों को 'unread' के रूप में मार्क करें
      });
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="contact-container" style={{
      // Overall page styling: Calming wellness theme
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 50%, #e8f5e8 100%)', // Soft gradient background
      minHeight: '100vh',
      padding: '60px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
      color: '#333',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* Header - Prominent and centered */}
      <div style={{
        textAlign: 'center',
        marginBottom: '50px',
        width: '100%'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: '700',
          color: '#2c3e50',
          margin: 0,
          textShadow: '0 2px 4px rgba(0,0,0,0.1)',
          position: 'relative'
        }}>
          Contact Us 📞
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#666',
          marginTop: '10px',
          maxWidth: '600px',
          margin: '10px auto 0'
        }}>
          We're here to help. Reach out for support, questions, or collaboration.
        </p>
      </div>

      {/* Main Content: Flex layout for info and form */}
      <div style={{
        display: 'flex',
        gap: '50px',
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'flex-start'
      }}>
        {/* Contact Info Section - Card-like with enhanced icons */}
        <div 
          className="contact-info" 
          style={{
            flex: '1',
            minWidth: '300px',
            background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)',
            textAlign: 'center',
            transition: 'transform 0.3s ease',
            borderLeft: '5px solid #4a90e2' // Blue accent border
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <h2 style={{
            color: '#2c3e50',
            fontSize: '2rem',
            marginBottom: '30px',
            fontWeight: '600'
          }}>
            Get In Touch 🌟
          </h2>

          {/* Address with Larger Map Icon */}
          <div 
            className="address" 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px',
              marginBottom: '20px',
              padding: '15px',
              background: 'rgba(74, 144, 226, 0.05)',
              borderRadius: '15px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(74, 144, 226, 0.1)';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(74, 144, 226, 0.05)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <a 
              href="https://www.google.com/maps/place/Sir+Chhotu+Ram+Institute+of+Engineering+and+Technology,+Meerut/@28.9767682,77.7315002,17z/data=!4m14!1m7!3m6!1s0x390c64cf581e1e19:0x7b16980636869e9c!2sSir+Chhotu+Ram+Institute+of+Engineering+and+Technology,+Meerut!8m2!3d28.9767682!4d77.7340751!16s%2Fg%2F1tfktpv0!3m5!1s0x390c64cf581e1e19:0x7b16980636869e9c!8m2!3d28.9767682!4d77.7340751!16s%2Fg%2F1tfktpv0?entry=ttu&g_ep=EgoyMDI1MDkyOS4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                color: '#4a90e2',
                fontSize: '1.5rem', // Increased icon size (was small)
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
                borderRadius: '50%',
                background: 'rgba(74, 144, 226, 0.1)',
                width: '50px',
                height: '50px',
                justifyContent: 'center'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(74, 144, 226, 0.2)';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(74, 144, 226, 0.1)';
                e.target.style.transform = 'scale(1)';
              }}
            >
              <i className="fa fa-map-marker" style={{ fontSize: '1.8rem' }}></i> {/* Even larger icon */}
            </a>
            <p style={{
              margin: 0,
              fontSize: '1.1rem',
              color: '#555',
              fontWeight: '500'
            }}>
              Sir Chhotu Ram Institute of Engineering & Technology, Meerut
            </p>
          </div>

          {/* Phone - Made clickable with tel: */}
          <div 
            className="address" 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px',
              marginBottom: '20px',
              padding: '15px',
              background: 'rgba(76, 175, 80, 0.05)',
              borderRadius: '15px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(76, 175, 80, 0.1)';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(76, 175, 80, 0.05)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <a 
              href="tel:+91xxxxxxxx90" 
              style={{
                textDecoration: 'none',
                color: '#4caf50'
              }}
            >
              <div 
                className="icon" 
                style={{
                  fontSize: '1.5rem',
                  color: '#4caf50',
                  padding: '10px',
                  borderRadius: '50%',
                  background: 'rgba(76, 175, 80, 0.1)',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(76, 175, 80, 0.2)';
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(76, 175, 80, 0.1)';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                <i className="fa fa-phone"></i>
              </div>
            </a>
            <p style={{
              margin: 0,
              fontSize: '1.1rem',
              color: '#555',
              fontWeight: '500'
            }}>
              +91 xxxxxxxx90
            </p>
          </div>

          {/* Email - Made clickable with mailto: */}
          <div 
            className="address" 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px',
              marginBottom: '30px',
              padding: '15px',
              background: 'rgba(255, 107, 107, 0.05)',
              borderRadius: '15px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 107, 107, 0.1)';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 107, 107, 0.05)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <a 
              href="mailto:ashishplayer456@gmail.com" 
              style={{
                textDecoration: 'none',
                color: '#ff6b6b'
              }}
            >
              <div 
                className="icon" 
                style={{
                  fontSize: '1.5rem',
                  color: '#ff6b6b',
                  padding: '10px',
                  borderRadius: '50%',
                  background: 'rgba(255, 107, 107, 0.1)',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(255, 107, 107, 0.2)';
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255, 107, 107, 0.1)';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                <i className="fa fa-envelope"></i>
              </div>
            </a>
            <p style={{
              margin: 0,
              fontSize: '1.1rem',
              color: '#555',
              fontWeight: '500'
            }}>
              ashishplayer456@gmail.com
            </p>
          </div>

          {/* Social Icons - Larger and colorful */}
          <div className="social-icons" style={{
            display: 'flex',
            gap: '15px',
            justifyContent: 'center',
            marginTop: '20px'
          }}>
            <a 
              href="#" 
              className="icon" 
              style={{
                fontSize: '1.8rem', // Larger icons
                color: '#3b5998',
                padding: '12px',
                borderRadius: '50%',
                background: 'rgba(59, 89, 152, 0.1)',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(59, 89, 152, 0.2)';
                e.target.style.transform = 'scale(1.2) rotate(5deg)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(59, 89, 152, 0.1)';
                e.target.style.transform = 'scale(1) rotate(0deg)';
              }}
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a 
              href="#" 
              className="icon" 
              style={{
                fontSize: '1.8rem',
                color: '#1da1f2',
                padding: '12px',
                borderRadius: '50%',
                background: 'rgba(29, 161, 242, 0.1)',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(29, 161, 242, 0.2)';
                e.target.style.transform = 'scale(1.2) rotate(5deg)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(29, 161, 242, 0.1)';
                e.target.style.transform = 'scale(1) rotate(0deg)';
              }}
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a 
              href="https://www.instagram.com/feeling_picture_ash1sh/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="icon" 
              style={{
                fontSize: '1.8rem',
                color: '#e4405f',
                padding: '12px',
                borderRadius: '50%',
                background: 'rgba(228, 64, 95, 0.1)',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(228, 64, 95, 0.2)';
                e.target.style.transform = 'scale(1.2) rotate(5deg)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(228, 64, 95, 0.1)';
                e.target.style.transform = 'scale(1) rotate(0deg)';
              }}
            >
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Contact Form Section - Styled form */}
        <div 
          className="contact-form" 
          style={{
            flex: '1',
            minWidth: '300px',
            background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)',
            transition: 'transform 0.3s ease',
            borderRight: '5px solid #4a90e2' // Blue accent border
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <h3 style={{
            color: '#2c3e50',
            fontSize: '1.8rem',
            marginBottom: '25px',
            fontWeight: '600',
            textAlign: 'center'
          }}>
            Send Us a Message 💬
          </h3>
          
          {/* Status Message */}
          {submitStatus === 'success' && (
            <div style={{
              padding: '15px',
              marginBottom: '20px',
              borderRadius: '10px',
              backgroundColor: '#d4edda',
              color: '#155724',
              textAlign: 'center',
              fontWeight: '500'
            }}>
              <i className="fa fa-check-circle" style={{ marginRight: '8px' }}></i>
              Message sent successfully! We'll get back to you soon. 😊
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div style={{
              padding: '15px',
              marginBottom: '20px',
              borderRadius: '10px',
              backgroundColor: '#f8d7da',
              color: '#721c24',
              textAlign: 'center',
              fontWeight: '500'
            }}>
              <i className="fa fa-exclamation-circle" style={{ marginRight: '8px' }}></i>
              Failed to send message. Please try again or contact us directly.
            </div>
          )}
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="form-group">
              <label htmlFor="name" style={{
                display: 'block',
                marginBottom: '5px',
                fontWeight: '600',
                color: '#555'
              }}>
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                style={{
                  padding: '12px 16px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  background: isSubmitting ? '#f5f5f5' : 'white',
                  opacity: isSubmitting ? 0.7 : 1
                }}
                onFocus={(e) => {
                  if (!isSubmitting) {
                    e.target.style.borderColor = '#4a90e2';
                    e.target.style.boxShadow = '0 0 0 3px rgba(74, 144, 226, 0.1)';
                  }
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e0e0';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" style={{
                display: 'block',
                marginBottom: '5px',
                fontWeight: '600',
                color: '#555'
              }}>
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                style={{
                  padding: '12px 16px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  background: isSubmitting ? '#f5f5f5' : 'white',
                  opacity: isSubmitting ? 0.7 : 1
                }}
                onFocus={(e) => {
                  if (!isSubmitting) {
                    e.target.style.borderColor = '#4a90e2';
                    e.target.style.boxShadow = '0 0 0 3px rgba(74, 144, 226, 0.1)';
                  }
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e0e0';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" style={{
                display: 'block',
                marginBottom: '5px',
                fontWeight: '600',
                color: '#555'
              }}>
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                disabled={isSubmitting}
                style={{
                  padding: '12px 16px',
                  border: '2px solid #e0e0e0',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  background: isSubmitting ? '#f5f5f5' : 'white',
                  opacity: isSubmitting ? 0.7 : 1,
                  resize: 'vertical'
                }}
                onFocus={(e) => {
                  if (!isSubmitting) {
                    e.target.style.borderColor = '#4a90e2';
                    e.target.style.boxShadow = '0 0 0 3px rgba(74, 144, 226, 0.1)';
                  }
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e0e0e0';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                padding: '14px 24px',
                background: isSubmitting 
                  ? 'linear-gradient(135deg, #a0a0a0, #808080)' 
                  : 'linear-gradient(135deg, #4a90e2, #357abd)',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: isSubmitting 
                  ? 'none' 
                  : '0 4px 15px rgba(74, 144, 226, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.target.style.background = 'linear-gradient(135deg, #357abd, #2968a3)';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(74, 144, 226, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) {
                  e.target.style.background = 'linear-gradient(135deg, #4a90e2, #357abd)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(74, 144, 226, 0.3)';
                }
              }}
            >
              {isSubmitting ? (
                <>
                  <i className="fa fa-spinner fa-spin" style={{ fontSize: '1rem' }}></i>
                  Sending...
                </>
              ) : (
                <>
                  Send Message <i className="fa fa-paper-plane"></i>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;