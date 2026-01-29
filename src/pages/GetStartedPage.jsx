// src/pages/GetStartedPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const GetStartedPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '20px'
    }}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: 'center',
          maxWidth: '800px',
          width: '100%'
        }}
      >
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          marginBottom: '20px'
        }}>
          Welcome to Mind Care
        </h1>
        <p style={{
          fontSize: '1.2rem',
          marginBottom: '30px',
          lineHeight: '1.6'
        }}>
          Let's begin your journey to better mental health. Please complete the following steps to get started with our services.
        </p>
        
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          padding: '30px',
          marginBottom: '30px',
          backdropFilter: 'blur(10px)'
        }}>
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: '600',
            marginBottom: '20px'
          }}>
            Getting Started Steps:
          </h2>
          <ol style={{
            textAlign: 'left',
            fontSize: '1.1rem',
            lineHeight: '1.8'
          }}>
            <li style={{ marginBottom: '15px' }}>Create your account with basic information</li>
            <li style={{ marginBottom: '15px' }}>Complete our initial wellness assessment</li>
            <li style={{ marginBottom: '15px' }}>Choose your preferred support options</li>
            <li style={{ marginBottom: '15px' }}>Schedule your first session or explore resources</li>
          </ol>
        </div>
        
        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/sign-up')}
            style={{
              background: 'white',
              color: '#667eea',
              border: 'none',
              padding: '15px 30px',
              borderRadius: '50px',
              cursor: 'pointer',
              fontSize: '1.1rem',
              fontWeight: '600'
            }}
          >
            Create Account
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            style={{
              background: 'transparent',
              color: 'white',
              border: '2px solid white',
              padding: '15px 30px',
              borderRadius: '50px',
              cursor: 'pointer',
              fontSize: '1.1rem',
              fontWeight: '600'
            }}
          >
            Back to Home
          </motion.button>
        </div>
        
        <div style={{
          marginTop: '40px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          padding: '25px',
          backdropFilter: 'blur(10px)'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            marginBottom: '15px'
          }}>
            Already have an account?
          </h3>
          <p style={{
            fontSize: '1rem',
            marginBottom: '20px'
          }}>
            Sign in to access your personalized mental wellness journey.
          </p>
          <Link to="/login">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'transparent',
                color: 'white',
                border: '2px solid white',
                padding: '12px 25px',
                borderRadius: '50px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: '600'
              }}
            >
              Sign In
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default GetStartedPage;