
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import image1 from "../images/home1-min.jpeg";
import image2 from "../images/home2-min.jpeg";
import image3 from "../images/home3-min.jpeg";

const contentData = [
  {
    imageSrc: "https://picsum.photos/seed/mentalhealth1/800/600.jpg",
    title: "Who We Are",
    text: "Discover more about our organization and learn about our mission and initiatives to make a positive impact on mental health and well-being.",
    link: "/Volunteer",
    icon: "🌟",
    color: "#667eea",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    stats: ["500+ Volunteers", "10+ Years", "1000+ Lives Impacted"]
  },
  {
    imageSrc: "https://picsum.photos/seed/mentalhealth2/800/600.jpg",
    title: "Take Our Diagnostic Quizzes",
    text: "Discover our diagnostic quizzes designed to help you evaluate your mental well-being. Take a moment to explore and gain insights into your mental health.",
    link: "/Quiz",
    icon: "🧠",
    color: "#f093fb",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    stats: ["15+ Tests", "Instant Results", "Expert Validated"]
  },
  {
    imageSrc: "https://picsum.photos/seed/mentalhealth3/800/600.jpg",
    title: "Mental Disorders",
    text: "Discover valuable insights into mental disorders and their impact on individuals and society. Explore our dedicated page to learn more about mental health challenges and ways to address them.",
    link: "/Articles",
    icon: "📚",
    color: "#4facfe",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    stats: ["50+ Articles", "Updated Daily", "Expert Written"]
  },
  {
    imageSrc: "https://picsum.photos/seed/therapy/800/600.jpg",
    title: "Therapy Sessions",
    text: "Connect with professional therapists and counselors through our secure online platform. Get personalized support from the comfort of your home.",
    link: "/Therapy",
    icon: "💬",
    color: "#fa709a",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    stats: ["100+ Therapists", "24/7 Available", "Confidential"]
  }
];

function Home_info() {
  const navigate = useNavigate(); // यह लाइन जोड़ें
  
  const [activeCard, setActiveCard] = useState(null);
  const [hoveredStat, setHoveredStat] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.div 
      ref={containerRef}
      style={{ 
        y,
        padding: '80px 20px',
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        background: 'linear-gradient(180deg, transparent 0%, rgba(102, 126, 234, 0.05) 50%, transparent 100%)'
      }}
    >
      {/* Animated Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23667eea' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        zIndex: -1
      }}></div>

      {/* Enhanced Section Header - Smaller Heading */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{
          textAlign: 'center',
          marginBottom: '60px',
          position: 'relative'
        }}
      >
        <motion.div
          style={{
            display: 'inline-block',
            padding: '12px 30px',
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
            borderRadius: '50px',
            marginBottom: '15px',
            border: '1px solid rgba(102, 126, 234, 0.2)'
          }}
          whileHover={{ scale: 1.05 }}
        >
          <span style={{
            fontSize: '0.9rem',
            fontWeight: '600',
            color: '#667eea',
            letterSpacing: '1px'
          }}>
            ✨ EXPLORE OUR SERVICES
          </span>
        </motion.div>
        
        <motion.h2 
          style={{
            fontSize: '2.5rem', // Reduced from 3.5rem
            fontWeight: '800',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '15px',
            lineHeight: '1.2'
          }}
          whileHover={{ scale: 1.02 }}
        >
          Discover Your Path to Wellness
        </motion.h2>
        
        <motion.p 
          style={{
            fontSize: '1.1rem', // Reduced from 1.3rem
            color: '#64748b',
            maxWidth: '700px', // Reduced from 800px
            margin: '0 auto',
            lineHeight: '1.6'
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Transform your mental health journey with our comprehensive resources, expert guidance, and supportive community
        </motion.p>
      </motion.div>

      {/* Enhanced Cards Container - Fixed Size with Proper Content Fit */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '30px',
        position: 'relative',
        marginBottom: '80px'
      }}>
        {contentData.map((content, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              background: '#ffffff',
              boxShadow: '0 15px 30px rgba(0, 0, 0, 0.08)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              height: '420px',
              display: 'flex',
              flexDirection: 'column'
            }}
            onMouseEnter={() => setActiveCard(index)}
            onMouseLeave={() => setActiveCard(null)}
            whileHover={{
              y: -10,
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)'
            }}
          >
            {/* Card Header with Gradient - Fixed Image Container */}
            <div style={{
              position: 'relative',
              height: '200px',
              overflow: 'hidden',
              background: content.gradient
            }}>
              <motion.img
                src={content.imageSrc}
                alt={content.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.9,
                  mixBlendMode: 'multiply'
                }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Floating Icon Badge - Properly Positioned */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  width: '50px',
                  height: '50px',
                  borderRadius: '15px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)'
                }}
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1
                }}
                transition={{ duration: 0.5 }}
              >
                {content.icon}
              </motion.div>

              {/* Overlay Pattern - Adjusted Height */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '80px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)'
              }}></div>
            </div>
            
            {/* Card Content - Adjusted for Proper Fit */}
            <div style={{
              padding: '20px',
              position: 'relative',
              flex: 1,
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: '700',
                color: '#1e293b',
                marginBottom: '8px',
                lineHeight: '1.3'
              }}>
                {content.title}
              </h3>
              
              <p style={{
                fontSize: '0.9rem',
                color: '#64748b',
                lineHeight: '1.5',
                marginBottom: '12px',
                flex: 1,
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical'
              }}>
                {content.text}
              </p>

              {/* Stats Section - Adjusted for Smaller Cards */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '15px',
                padding: '12px',
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05))',
                borderRadius: '12px',
                border: '1px solid rgba(102, 126, 234, 0.1)'
              }}>
                {content.stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    style={{
                      textAlign: 'center',
                      flex: 1
                    }}
                    onMouseEnter={() => setHoveredStat(`${index}-${i}`)}
                    onMouseLeave={() => setHoveredStat(null)}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div style={{
                      fontSize: '1.1rem',
                      fontWeight: '700',
                      background: content.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      marginBottom: '2px'
                    }}>
                      {stat.split(' ')[0]}
                    </div>
                    <div style={{
                      fontSize: '0.7rem',
                      color: '#94a3b8',
                      fontWeight: '500'
                    }}>
                      {stat.split(' ').slice(1).join(' ')}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Enhanced Button - Adjusted for Smaller Cards */}
              <motion.a
                href={content.link}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  padding: '12px',
                  background: content.gradient,
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '12px',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span style={{ marginRight: '8px' }}>Explore</span>
                <motion.span
                  animate={{ x: activeCard === index ? 8 : 0 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  →
                </motion.span>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Enhanced Call to Action Section - Smaller Size */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          padding: '50px', // Reduced from 70px
          borderRadius: '20px', // Reduced from 30px
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)' // Reduced shadow
        }}
      >
        {/* Animated Background Elements */}
        <motion.div
          style={{
            position: 'absolute',
            top: '-80px', // Adjusted
            left: '-80px', // Adjusted
            width: '200px', // Reduced
            height: '200px', // Reduced
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
        
        <motion.div
          style={{
            position: 'absolute',
            bottom: '-100px', // Adjusted
            right: '-100px', // Adjusted
            width: '250px', // Reduced
            height: '250px', // Reduced
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.05)'
          }}
          animate={{
            scale: [1, 0.8, 1],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
        
        <div style={{ position: 'relative', zIndex: 2 }}>
          <motion.h3
            style={{
              fontSize: '2rem', // Reduced from 3rem
              fontWeight: '800',
              marginBottom: '15px', // Reduced from 25px
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
            }}
            whileHover={{ scale: 1.05 }}
          >
            Begin Your Journey Today
          </motion.h3>
          
          <p style={{
            fontSize: '1rem', // Reduced from 1.3rem
            marginBottom: '25px', // Reduced from 40px
            maxWidth: '600px', // Reduced from 700px
            margin: '0 auto 25px', // Adjusted
            opacity: 0.95,
            lineHeight: '1.6'
          }}>
            Join thousands who have transformed their lives through our comprehensive mental wellness programs and support systems
          </p>
          
          <div style={{
            display: 'flex',
            gap: '15px', // Reduced from 20px
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            
<motion.button
  whileHover={{ scale: 1.05, y: -5 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => navigate('/get-started')} // यह लाइन जोड़ें
  style={{
    background: 'white',
    color: '#667eea',
    border: 'none',
    padding: '12px 30px',
    borderRadius: '50px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '700',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    overflow: 'hidden'
  }}
>
  Get Started Now 🚀
</motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'transparent',
                color: 'white',
                border: '2px solid white',
                padding: '12px 30px', // Reduced padding
                borderRadius: '50px',
                cursor: 'pointer',
                fontSize: '1rem', // Reduced from 1.2rem
                fontWeight: '700',
                backdropFilter: 'blur(10px)'
              }}
            >
              Learn More →
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Additional Feature Cards Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          marginTop: '80px',
          marginBottom: '40px'
        }}
      >
        <h3 style={{
          textAlign: 'center',
          fontSize: '2rem', // Reduced from 2.5rem
          fontWeight: '700',
          color: '#1e293b',
          marginBottom: '40px' // Reduced from 50px
        }}>
          Why Choose Mind Care?
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '25px'
        }}>
          {[
            { icon: '🔒', title: '100% Confidential', text: 'Your privacy is our top priority' },
            { icon: '⏰', title: '24/7 Support', text: 'We\'re here whenever you need us' },
            { icon: '👥', title: 'Expert Team', text: 'Professionals with years of experience' },
            { icon: '🌍', title: 'Global Community', text: 'Connect with people worldwide' }
          ].map((feature, index) => (
            <motion.div
              key={index}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '30px',
                textAlign: 'center',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
                height: '220px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              whileHover={{
                y: -10,
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '15px'
              }}>
                {feature.icon}
              </div>
              <h4 style={{
                fontSize: '1.3rem',
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '10px'
              }}>
                {feature.title}
              </h4>
              <p style={{
                fontSize: '0.95rem',
                color: '#64748b',
                margin: 0
              }}>
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Floating Decorative Elements */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: `${60 + i * 20}px`,
            height: `${60 + i * 20}px`,
            borderRadius: '50%',
            background: `linear-gradient(135deg, rgba(102, 126, 234, ${0.1 - i * 0.02}), rgba(118, 75, 162, ${0.1 - i * 0.02}))`,
            top: `${20 + i * 30}%`,
            left: `${i === 0 ? '5%' : i === 1 ? '50%' : '85%'}`,
            zIndex: -1
          }}
          animate={{
            y: [0, 30 - i * 10, 0],
            x: [0, i === 1 ? 20 : -20, 0],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: "easeInOut"
          }}
        ></motion.div>
      ))}
    </motion.div>
  );
}

export default Home_info;