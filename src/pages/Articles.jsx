import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ashish2 from '../images/download.jpg';
import ashish3 from '../images/mental-health-awareness-concept_52683-37916.jpg';

const mentalIllnesses = [
  {
    id: 1,
    title: 'Anxiety Disorder',
    description: 'A mental health disorder characterized by excessive worry and fear that can interfere with daily activities.',
    image: 'https://www.calmclinic.com/storage/images/213/qoxihx/main/w1600.png',
    link: '/anxiety',
    color: '#3498db',
    stats: '40 million adults in the U.S. affected each year',
    symptoms: ['Excessive worrying', 'Restlessness', 'Difficulty concentrating', 'Sleep problems']
  },
  {
    id: 2,
    title: 'Depression',
    description: 'A common and serious medical illness that negatively affects how you feel, the way you think and how you act.',
    image: 'https://www.sciencenews.org/wp-content/uploads/2023/02/021123_LS_depression_feat.jpg',
    link: '/depression',
    color: '#2ecc71',
    stats: '1 in 6 people will experience depression in their lifetime',
    symptoms: ['Persistent sadness', 'Loss of interest', 'Changes in appetite', 'Fatigue']
  },
  {
    id: 3,
    title: 'Obsessive-Compulsive Disorder',
    description: 'A common, chronic, and long-lasting disorder in which a person has uncontrollable, reoccurring thoughts and/or behaviors.',
    image: ashish2,
    link: '/ocd',
    color: '#9b59b6',
    stats: 'Affects 2-3% of the population',
    symptoms: ['Intrusive thoughts', 'Compulsive behaviors', 'Need for symmetry', 'Excessive checking']
  },
  {
    id: 4,
    title: 'Panic Disorder',
    description: 'A sudden episode of intense fear that triggers severe physical reactions when there is no real danger or apparent cause.',
    image: 'https://images.prismic.io/cerebral/42857718-d8da-4e17-8a20-b8d1fdd31158_Panic%20Attacks.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=3420&h=1897',
    link: '/panicdisorder',
    color: '#e74c3c',
    stats: '2-3% of Americans experience panic disorder each year',
    symptoms: ['Racing heart', 'Sweating', 'Trembling', 'Shortness of breath']
  },
  {
    id: 5,
    title: 'Bipolar Disorder',
    description: 'A type of mood disorder characterized by episodes of mania and depression that affect energy, activity, and daily functioning.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPcGLdRM1yXyiPCTN6KMDsypH7FHMnrlX1Lw&usqp=CAU',
    link: '/bipolar-article',
    color: '#f39c12',
    stats: 'Affects approximately 2.8% of U.S. adults',
    symptoms: ['Mood swings', 'Increased energy', 'Decreased need for sleep', 'Impulsive behavior']
  },
  {
    id: 6,
    title: 'Schizophrenia',
    description: 'A serious mental illness that affects how a person thinks, feels, and behaves, often resulting in hallucinations and delusions.',
    image: 'https://www.health.com/thmb/sMXUhpkvLq2h7VEBwdjnOH1vHIQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-Schizophrenia-Overview-PaigeMcLaughlin-Final-e784ef4214264c8ea708309a09c4901e.jpg',
    link: '/schizophrenia',
    color: '#34495e',
    stats: 'Affects about 1% of the population worldwide',
    symptoms: ['Hallucinations', 'Delusions', 'Disorganized thinking', 'Social withdrawal']
  },
  {
    id: 7,
    title: 'Post-traumatic Stress Disorder',
    description: 'A mental health condition that can develop after experiencing or witnessing a terrifying event.',
    image: 'https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_7061_1662009165227664.jpg',
    link: '/ptsd',
    color: '#16a085',
    stats: 'Affects 3.5% of U.S. adults annually',
    symptoms: ['Flashbacks', 'Nightmares', 'Avoidance', 'Hypervigilance']
  },
  {
    id: 8,
    title: 'Psychosis',
    description: 'A mental condition where a person loses touch with reality, experiencing delusions or hallucinations.',
    image: ashish3,
    link: '/psychosis',
    color: '#d35400',
    stats: 'Affects 3 out of every 100 people',
    symptoms: ['Hallucinations', 'Delusions', 'Disorganized speech', 'Lack of insight']
  }
];

function MentalIllnessCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === mentalIllnesses.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? mentalIllnesses.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === mentalIllnesses.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setIsAutoPlaying(false);
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Touch events for mobile swipe
  const handleTouchStart = (e) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) goToNext();
    if (isRightSwipe) goToPrevious();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#333',
      position: 'relative',
      backgroundColor: '#f8f9fa',
      borderRadius: '20px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
    }} 
    onMouseEnter={handleMouseEnter} 
    onMouseLeave={handleMouseLeave}
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}
    onTouchEnd={handleTouchEnd}
    >
      
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{
          fontSize: '2.5rem',
          color: '#2c3e50',
          marginBottom: '0.5rem',
          fontWeight: '700',
          position: 'relative',
          display: 'inline-block'
        }}>
          Mental Health Resources
          <span style={{
            position: 'absolute',
            bottom: '-5px',
            left: '0',
            width: '100%',
            height: '3px',
            background: 'linear-gradient(90deg, #3498db, #2ecc71)',
            borderRadius: '3px'
          }}></span>
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#666',
          maxWidth: '800px',
          margin: '1rem auto 0'
        }}>
          Understanding mental health conditions is the first step toward wellness. 
          Explore our comprehensive resources to learn more about different mental health conditions.
        </p>
      </div>
      
      {/* Carousel */}
      <div style={{
        position: 'relative',
        height: '500px',
        overflow: 'hidden',
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white'
      }}>
        {/* Previous Button */}
        <button 
          onClick={goToPrevious} 
          style={{
            position: 'absolute',
            top: '50%',
            left: '20px',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: '10',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.transform = 'translateY(-50%) scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            e.target.style.transform = 'translateY(-50%) scale(1)';
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        
        {/* Carousel Content */}
        <div style={{
          display: 'flex',
          transition: 'transform 0.5s ease-in-out',
          height: '100%',
          transform: `translateX(-${currentIndex * 100}%)`
        }}>
          {mentalIllnesses.map((illness, index) => (
            <div 
              style={{
                minWidth: '100%',
                display: 'flex',
                height: '100%',
                backgroundColor: '#f9f9f9'
              }}
              key={illness.id}
            >
              {/* Image Container */}
              <div style={{
                flex: '1',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img 
                  src={illness.image} 
                  alt={illness.title} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                  background: `linear-gradient(to right, ${illness.color}dd, ${illness.color}33)`,
                  opacity: '0.7'
                }}></div>
                
                {/* Stats Badge */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  padding: '8px 15px',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: illness.color,
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
                }}>
                  {illness.stats}
                </div>
              </div>
              
              {/* Content Container */}
              <div style={{
                flex: '1',
                padding: '3rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: 'white'
              }}>
                <h2 style={{
                  fontSize: '2rem',
                  marginBottom: '1rem',
                  color: illness.color,
                  fontWeight: '600'
                }}>
                  {illness.title}
                </h2>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  marginBottom: '2rem',
                  color: '#555'
                }}>
                  {illness.description}
                </p>
                
                {/* Symptoms */}
                <div style={{
                  marginBottom: '2rem'
                }}>
                  <h3 style={{
                    fontSize: '1.1rem',
                    marginBottom: '0.8rem',
                    color: '#333',
                    fontWeight: '600'
                  }}>
                    Common Symptoms:
                  </h3>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {illness.symptoms.map((symptom, idx) => (
                      <span 
                        key={idx}
                        style={{
                          backgroundColor: `${illness.color}20`,
                          color: illness.color,
                          padding: '5px 12px',
                          borderRadius: '20px',
                          fontSize: '0.9rem',
                          fontWeight: '500'
                        }}
                      >
                        {symptom}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Buttons */}
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}>
                  <Link 
                    to={illness.link} 
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontWeight: '600',
                      color: 'white',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      padding: '14px 28px',
                      backgroundColor: illness.color,
                      borderRadius: '8px',
                      fontSize: '1.1rem',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: `0 4px 15px ${illness.color}40`
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = 'translateY(-3px)';
                      e.target.style.boxShadow = `0 6px 20px ${illness.color}60`;
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = `0 4px 15px ${illness.color}40`;
                    }}
                  >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}>
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </Link>
                  
                  <button
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontWeight: '600',
                      color: illness.color,
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      padding: '14px 28px',
                      backgroundColor: 'transparent',
                      borderRadius: '8px',
                      fontSize: '1.1rem',
                      border: `2px solid ${illness.color}`,
                      cursor: 'pointer'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = `${illness.color}10`;
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                    }}
                  >
                    Self-Assessment
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}>
                      <path d="M9 11H3v10h6V11z"></path>
                      <path d="M15 3H9v18h6V3z"></path>
                      <path d="M21 7h-6v14h6V7z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Next Button */}
        <button 
          onClick={goToNext} 
          style={{
            position: 'absolute',
            top: '50%',
            right: '20px',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: '10',
            transition: 'all 0.3s ease',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.transform = 'translateY(-50%) scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            e.target.style.transform = 'translateY(-50%) scale(1)';
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
      
      {/* Indicators */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1.5rem',
        gap: '0.5rem'
      }}>
        {mentalIllnesses.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: index === currentIndex ? mentalIllnesses[currentIndex].color : '#ddd',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: index === currentIndex ? 'scale(1.2)' : 'scale(1)'
            }}
            onMouseOver={(e) => {
              if (index !== currentIndex) {
                e.target.style.backgroundColor = '#bbb';
              }
            }}
            onMouseOut={(e) => {
              if (index !== currentIndex) {
                e.target.style.backgroundColor = '#ddd';
              }
            }}
          />
        ))}
      </div>
      
      {/* Play/Pause Control */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1rem'
      }}>
        <button 
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          style={{
            backgroundColor: '#3498db',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            color: 'white'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#2980b9';
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#3498db';
            e.target.style.transform = 'scale(1)';
          }}
        >
          {isAutoPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}>
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}>
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          )}
        </button>
      </div>
      
      {/* Additional Resources Section */}
      <div style={{
        marginTop: '3rem',
        padding: '2rem',
        backgroundColor: 'white',
        borderRadius: '16px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)'
      }}>
        <h2 style={{
          fontSize: '1.8rem',
          color: '#2c3e50',
          marginBottom: '1.5rem',
          textAlign: 'center',
          fontWeight: '600'
        }}>
          Additional Resources
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem'
        }}>
          <div style={{
            padding: '1.5rem',
            borderRadius: '12px',
            backgroundColor: '#f8f9fa',
            textAlign: 'center',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <div style={{
              fontSize: '2.5rem',
              marginBottom: '1rem'
            }}>
              📚
            </div>
            <h3 style={{
              fontSize: '1.2rem',
              marginBottom: '0.5rem',
              color: '#2c3e50'
            }}>
              Educational Articles
            </h3>
            <p style={{
              fontSize: '0.9rem',
              color: '#666',
              marginBottom: '1rem'
            }}>
              In-depth articles on mental health conditions and treatments
            </p>
            <Link to="/resources" style={{
              color: '#3498db',
              textDecoration: 'none',
              fontWeight: '600'
            }}>
              Browse Articles →
            </Link>
          </div>
          
          <div style={{
            padding: '1.5rem',
            borderRadius: '12px',
            backgroundColor: '#f8f9fa',
            textAlign: 'center',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <div style={{
              fontSize: '2.5rem',
              marginBottom: '1rem'
            }}>
              🧑‍⚕️
            </div>
            <h3 style={{
              fontSize: '1.2rem',
              marginBottom: '0.5rem',
              color: '#2c3e50'
            }}>
              Find a Therapist
            </h3>
            <p style={{
              fontSize: '0.9rem',
              color: '#666',
              marginBottom: '1rem'
            }}>
              Connect with mental health professionals in your area
            </p>
            <Link to="/therapists" style={{
              color: '#3498db',
              textDecoration: 'none',
              fontWeight: '600'
            }}>
              Find Help →
            </Link>
          </div>
          
          <div style={{
            padding: '1.5rem',
            borderRadius: '12px',
            backgroundColor: '#f8f9fa',
            textAlign: 'center',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          >
            <div style={{
              fontSize: '2.5rem',
              marginBottom: '1rem'
            }}>
              📱
            </div>
            <h3 style={{
              fontSize: '1.2rem',
              marginBottom: '0.5rem',
              color: '#2c3e50'
            }}>
              Mental Health Apps
            </h3>
            <p style={{
              fontSize: '0.9rem',
              color: '#666',
              marginBottom: '1rem'
            }}>
              Discover apps to support your mental wellness journey
            </p>
            <Link to="/apps" style={{
              color: '#3498db',
              textDecoration: 'none',
              fontWeight: '600'
            }}>
              Explore Apps →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MentalIllnessCarousel;