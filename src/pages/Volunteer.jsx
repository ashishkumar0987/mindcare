import React from 'react';

// Import the local image for Ananya Shanker
// Assuming the image is in src/images/homeimgnew-min.jpeg
// Ye import karna zaroori hai React mein local images ke liye – direct path nahi chalega.
import ashish from '../images/ashish.jpg'; 
import ashish1 from '../images/ashish1.jpeg';
// Path adjust karo agar folder alag hai (e.g., './images/' if in same folder)

const founders = [
  {
    name: 'Ashish Kumar',
    role: 'Front-end Team', 
    image: ashish, // Yahan local image assign ki hai (imported variable use kiya)
  },
 
  {
    name: 'Ashish Kumar',
    role: 'Front-end & Back-end Team',
    image: ashish1,
  },
  
];

const Volunteer = () => {
  return (
    <div className="about-us" style={{
      // Enhanced styling for attractiveness (matching previous components' theme)
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 50%, #e8f5e8 100%)', // Calming gradient background
      minHeight: '100vh',
      padding: '60px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
      color: '#333'
    }}>
      {/* Header - Made more prominent */}
      <div style={{
        textAlign: 'center',
        marginBottom: '50px'
      }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: '700',
          color: '#2c3e50',
          margin: 0,
          textShadow: '0 2px 4px rgba(0,0,0,0.1)',
          position: 'relative'
        }}>
          About Us 👥
        </h2>
        <p style={{
          fontSize: '1.2rem',
          color: '#666',
          marginTop: '10px',
          maxWidth: '600px',
          margin: '10px auto 0'
        }}>
          Meet the passionate team behind Mind Care, dedicated to mental health and well-being.
        </p>
      </div>

      {/* Founders Grid - Responsive and attractive layout */}
      <div className="founders" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', // Responsive grid: 1-4 columns based on screen size
        gap: '30px',
        justifyItems: 'center'
      }}>
        {founders.map((founder, index) => (
          <div 
            key={index} 
            className="founder"
            style={{
              // Card-like design for each founder
              background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
              borderRadius: '20px',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)',
              overflow: 'hidden',
              width: '100%',
              maxWidth: '300px',
              transition: 'all 0.3s ease', // Smooth hover
              textAlign: 'center',
              padding: '20px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.08)';
            }}
          >
            <div className="founder-image" style={{
              width: '120px',
              height: '120px',
              margin: '0 auto 20px',
              borderRadius: '50%', // Circular image for modern look
              overflow: 'hidden',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
            }}
            >
              <img 
                src={founder.image} 
                alt={founder.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover', // Ensures image fills the circle without distortion
                  display: 'block'
                }}
              />
            </div>
            <div className="founder-details">
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#2c3e50',
                margin: '0 0 10px 0',
                lineHeight: '1.3'
              }}>
                {founder.name}
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: '#4a90e2', // Blue accent for role
                margin: 0,
                fontWeight: '500',
                background: 'rgba(74, 144, 226, 0.1)', // Subtle background for role
                padding: '8px 16px',
                borderRadius: '15px',
                display: 'inline-block'
              }}>
                {founder.role} 🌟
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Optional: Add a call-to-action at the bottom */}
      <div style={{
        textAlign: 'center',
        marginTop: '60px',
        padding: '30px',
        background: 'rgba(255, 255, 255, 0.7)',
        borderRadius: '15px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
      }}>
        <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>Join Our Mission!</h3>
        <p style={{ color: '#666', marginBottom: '20px' }}>Be part of the change in mental health awareness.</p>
        <a 
          href="/Volunteer" // Or link to volunteer form
          style={{
            background: 'linear-gradient(45deg, #4a90e2, #5dade2)',
            color: 'white',
            textDecoration: 'none',
            padding: '12px 30px',
            borderRadius: '25px',
            fontSize: '1.1rem',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(74, 144, 226, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(74, 144, 226, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(74, 144, 226, 0.3)';
          }}
        >
          Volunteer With Us 🚀
        </a>
      </div>

      {/* Custom Styles for Responsiveness */}
      <style jsx>{`
        @media (max-width: 768px) {
          .about-us {
            padding: 40px 15px;
          }
          .about-us h2 {
            font-size: 2.5rem;
          }
          .founders {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
          }
          .founder {
            max-width: 250px;
            padding: 15px;
          }
          .founder-image {
            width: 100px;
            height: 100px;
          }
          .founder h3 {
            font-size: 1.3rem;
          }
        }
        @media (max-width: 480px) {
          .about-us h2 {
            font-size: 2rem;
          }
          .founders {
            grid-template-columns: 1fr;
            gap: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default Volunteer;
