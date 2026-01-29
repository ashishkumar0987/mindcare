import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert(`Thank you for subscribing with email: ${email}`);
    setEmail("");
  };

  return (
    <footer className="footer" style={{
      background: 'linear-gradient(to right, #2c3e50, #34495e)',
      color: '#ecf0f1',
      padding: '25px 0 10px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      position: 'relative'
    }}>
      {/* Decorative top border */}
      <div style={{
        height: '3px',
        background: 'linear-gradient(to right, #3498db, #9b59b6)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
      }}></div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        {/* Brand Section */}
        <div>
          <h2 style={{
            fontSize: '20px',
            fontWeight: '700',
            marginBottom: '8px',
            color: '#ffffff'
          }}>
            Mind Care
          </h2>
          <p style={{
            fontSize: '13px',
            lineHeight: '1.4',
            color: '#bdc3c7',
            marginBottom: '10px'
          }}>
            Your journey to mental wellness starts here.
          </p>
          <div style={{
            display: 'flex',
            gap: '10px'
          }}>
            <a 
              href="https://www.instagram.com/feeling_picture_ash1sh/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: 'rgba(52, 152, 219, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#3498db',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#3498db';
                e.target.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(52, 152, 219, 0.2)';
                e.target.style.color = '#3498db';
              }}
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
              </svg>
            </a>
            <a href="#" style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              backgroundColor: 'rgba(52, 152, 219, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#3498db',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#3498db';
              e.target.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(52, 152, 219, 0.2)';
              e.target.style.color = '#3498db';
            }}>
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              backgroundColor: 'rgba(52, 152, 219, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#3498db',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#3498db';
              e.target.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(52, 152, 219, 0.2)';
              e.target.style.color = '#3498db';
            }}>
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 style={{
            fontSize: '15px',
            fontWeight: '600',
            marginBottom: '10px',
            color: '#ffffff',
            position: 'relative',
            paddingBottom: '5px'
          }}>
            Contact Info
            <span style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '20px',
              height: '2px',
              backgroundColor: '#3498db'
            }}></span>
          </h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <div style={{
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                backgroundColor: 'rgba(52, 152, 219, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#3498db'
              }}>
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <span style={{ color: '#bdc3c7', fontSize: '13px' }}>123 Wellness Street</span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <div style={{
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                backgroundColor: 'rgba(52, 152, 219, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#3498db'
              }}>
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <span style={{ color: '#bdc3c7', fontSize: '13px' }}>+91-8382854190</span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <div style={{
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                backgroundColor: 'rgba(52, 152, 219, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#3498db'
              }}>
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <span style={{ color: '#bdc3c7', fontSize: '13px' }}>ashishplayer456@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 style={{
            fontSize: '15px',
            fontWeight: '600',
            marginBottom: '10px',
            color: '#ffffff',
            position: 'relative',
            paddingBottom: '5px'
          }}>
            Newsletter
            <span style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '20px',
              height: '2px',
              backgroundColor: '#3498db'
            }}></span>
          </h3>
          <p style={{
            fontSize: '13px',
            lineHeight: '1.4',
            color: '#bdc3c7',
            marginBottom: '10px'
          }}>
            Subscribe for mental health tips.
          </p>
          <form onSubmit={handleSubscribe} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              style={{
                padding: '8px 10px',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                fontSize: '13px',
                outline: 'none',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              }}
              onBlur={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
            />
            <button
              type="submit"
              style={{
                padding: '8px 10px',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: '#3498db',
                color: '#ffffff',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#2980b9';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#3498db';
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        marginTop: '20px',
        paddingTop: '10px',
        textAlign: 'center',
        color: '#95a5a6',
        fontSize: '12px'
      }}>
        <p>&copy; {currentYear} Mind Care. All rights reserved.</p>
        <div style={{ marginTop: '8px' }}>
          <a href="#" style={{
            color: '#95a5a6',
            textDecoration: 'none',
            margin: '0 10px',
            fontSize: '14px',
            fontWeight: '500',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#3498db';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = '#95a5a6';
          }}>
            Privacy Policy
          </a>
          <span style={{ color: '#95a5a6', margin: '0 5px' }}>|</span>
          <a href="#" style={{
            color: '#95a5a6',
            textDecoration: 'none',
            margin: '0 10px',
            fontSize: '14px',
            fontWeight: '500',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.color = '#3498db';
          }}
          onMouseLeave={(e) => {
            e.target.style.color = '#95a5a6';
          }}>
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;