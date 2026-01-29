import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import logo from "../images/mainlogo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: scrolled 
        ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%)'
        : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      boxShadow: scrolled 
        ? '0 8px 32px rgba(0, 0, 0, 0.15)'
        : '0 4px 20px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: scrolled ? 'translateY(0)' : 'translateY(0)'
    }}>
      <div className="nav-area" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: scrolled ? '70px' : '80px',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative'
      }}>
        {/* Logo Section */}
        <Link 
          to="/" 
          className="logo"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            padding: '12px 20px',
            borderRadius: '16px',
            position: 'relative',
            overflow: 'hidden',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          {/* Animated Background Effect */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15) 0%, transparent 50%)',
            opacity: 0,
            transition: 'opacity 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.opacity = 1;
          }}
          onMouseLeave={(e) => {
            e.target.style.opacity = 0;
          }}
          />
          
          <img 
            src={logo} 
            alt="Mind Care Logo" 
            style={{
              height: scrolled ? '45px' : '55px',
              width: 'auto',
              filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.25))',
              transition: 'all 0.3s ease',
              position: 'relative',
              zIndex: 1,
              marginRight: '16px'
            }}
          />
          
          {/* Brand Name */}
          <div style={{
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            zIndex: 1
          }}>
           
            
          </div>
        </Link>

        {/* Navigation */}
        <Navbar />
      </div>

      {/* Animated Bottom Border */}
      <div style={{
        height: '2px',
        background: 'linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #ff6b6b)',
        backgroundSize: '300% 100%',
        animation: 'gradientFlow 10s ease infinite',
        position: 'relative'
      }} />

      {/* Global Styles */}
      <style jsx>{`
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @media (max-width: 768px) {
          .nav-area {
            padding: '0 16px';
            height: '60px';
          }
          
          .logo img {
            height: '40px';
            margin-right: '12px';
          }
          
          .logo span:first-child {
            font-size: '20px';
          }
          
          .logo span:last-child {
            font-size: '10px';
          }
        }
      `}</style>
    </header>
  );
};

export default Header;