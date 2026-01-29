import React from 'react';
import { Link } from 'react-router-dom';

import quiz1Image from '../images/AnxietyQuiz-min.png';
import quiz2Image from '../images/DepressionQuiz-min.png';
import quiz3Image from '../images/OCDQuiz-min.png';
import quiz4Image from '../images/ADHDQuiz-min.png';

const Quiz = () => {
  return (
    <div className="Quiz" style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      padding: '40px 0',
      color: '#333',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.1)',
        filter: 'blur(40px)',
        zIndex: '0'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.1)',
        filter: 'blur(40px)',
        zIndex: '0'
      }}></div>
      
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
        position: 'relative',
        zIndex: '1'
      }}>
        {/* Header Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '40px',
          padding: '30px 20px',
          background: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '25px',
          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #667eea, #764ba2, #f093fb)',
          }}></div>
          
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '700',
            color: '#2c3e50',
            marginBottom: '20px',
            position: 'relative'
          }}>
            <span style={{
              background: 'linear-gradient(90deg, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Take A Mental Health Test</span>
          </h1>
          
          <h3 style={{
            fontSize: '1.4rem',
            fontWeight: '400',
            color: '#555',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Please attempt all the questions honestly for accurate results
          </h3>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '25px'
          }}>
            <div style={{
              width: '80px',
              height: '5px',
              background: 'linear-gradient(90deg, #667eea, #764ba2)',
              borderRadius: '3px'
            }}></div>
          </div>
        </div>

        {/* Quiz Cards Grid - Fixed centering issue */}
        <div className="quiz-grid" style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          marginBottom: '40px'
        }}>
          {/* Anxiety Test Card */}
          <div className="card" style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '25px',
            overflow: 'hidden',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.4s ease, box-shadow 0.4s ease',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            width: 'calc(33.333% - 14px)',
            maxWidth: '300px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.25)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
          }}>
            <div className="card-image" style={{
              height: '160px',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <img src={quiz1Image} alt="Anxiety Test" style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.6s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
              }} />
              <div style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem'
              }}>😰</div>
            </div>
            <div className="card-content" style={{
              padding: '20px',
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h2 style={{
                fontSize: '1.6rem',
                fontWeight: '700',
                color: '#2c3e50',
                marginBottom: '10px',
                position: 'relative',
                paddingBottom: '10px'
              }}>
                Anxiety Test
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '50px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #667eea, #764ba2)',
                  borderRadius: '2px'
                }}></div>
              </h2>
              <p style={{
                fontSize: '1rem',
                color: '#555',
                marginBottom: '15px',
                flexGrow: 1,
                lineHeight: '1.5'
              }}>
                Our quiz can help you determine whether you have Anxiety.
              </p>
              <div style={{ textAlign: 'center' }}>
                <button style={{
                  background: 'linear-gradient(90deg, #667eea, #764ba2)',
                  color: 'white',
                  border: 'none',
                  padding: '0px 10px',
                  borderRadius: '35px',
                  fontSize: '5.3rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 20px rgba(102, 126, 234, 0.4)',
                  display: 'inline-block',
                  position: 'relative',
                  overflow: 'hidden',
                  lineHeight: '1'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-5px)';
                  e.target.style.boxShadow = '0 12px 25px rgba(102, 126, 234, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.4)';
                }}>
                  <Link to="/anxiety-quiz" style={{
                    color: 'white',
                    textDecoration: 'none',
                    display: 'block'
                  }}>Take Quiz</Link>
                </button>
              </div>
            </div>
          </div>

          {/* Depression Test Card */}
          <div className="card" style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '25px',
            overflow: 'hidden',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.4s ease, box-shadow 0.4s ease',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            width: 'calc(33.333% - 14px)',
            maxWidth: '300px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.25)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
          }}>
            <div className="card-image" style={{
              height: '160px',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <img src={quiz2Image} alt="Depression Test" style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.6s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
              }} />
              <div style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem'
              }}>😔</div>
            </div>
            <div className="card-content" style={{
              padding: '20px',
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h2 style={{
                fontSize: '1.6rem',
                fontWeight: '700',
                color: '#2c3e50',
                marginBottom: '10px',
                position: 'relative',
                paddingBottom: '10px'
              }}>
                Depression Test
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '50px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #667eea, #764ba2)',
                  borderRadius: '2px'
                }}></div>
              </h2>
              <p style={{
                fontSize: '1rem',
                color: '#555',
                marginBottom: '15px',
                flexGrow: 1,
                lineHeight: '1.5'
              }}>
                Our quiz can help you detect early signs of Depression
              </p>
              <div style={{ textAlign: 'center' }}>
                <button style={{
                  background: 'linear-gradient(90deg, #667eea, #764ba2)',
                  color: 'white',
                  border: 'none',
                  padding: '0px 10px',
                  borderRadius: '35px',
                  fontSize: '5.3rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 20px rgba(102, 126, 234, 0.4)',
                  display: 'inline-block',
                  position: 'relative',
                  overflow: 'hidden',
                  lineHeight: '1'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-5px)';
                  e.target.style.boxShadow = '0 12px 25px rgba(102, 126, 234, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.4)';
                }}>
                  <Link to="/depression-quiz" style={{
                    color: 'white',
                    textDecoration: 'none',
                    display: 'block'
                  }}>Take Quiz</Link>
                </button>
              </div>
            </div>
          </div>

          {/* OCD Test Card */}
          <div className="card" style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '25px',
            overflow: 'hidden',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.4s ease, box-shadow 0.4s ease',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            width: 'calc(33.333% - 14px)',
            maxWidth: '300px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.25)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
          }}>
            <div className="card-image" style={{
              height: '160px',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <img src={quiz3Image} alt="OCD Test" style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.6s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
              }} />
              <div style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem'
              }}>🔄</div>
            </div>
            <div className="card-content" style={{
              padding: '20px',
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h2 style={{
                fontSize: '1.6rem',
                fontWeight: '700',
                color: '#2c3e50',
                marginBottom: '10px',
                position: 'relative',
                paddingBottom: '10px'
              }}>
                OCD Test
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '50px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #667eea, #764ba2)',
                  borderRadius: '2px'
                }}></div>
              </h2>
              <p style={{
                fontSize: '1rem',
                color: '#555',
                marginBottom: '15px',
                flexGrow: 1,
                lineHeight: '1.5'
              }}>
                Our quiz can help you determine whether you have OCD
              </p>
              <div style={{ textAlign: 'center' }}>
                <button style={{
                  background: 'linear-gradient(90deg, #667eea, #764ba2)',
                  color: 'white',
                  border: 'none',
                  padding: '0px 10px',
                  borderRadius: '35px',
                  fontSize: '5.3rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 20px rgba(102, 126, 234, 0.4)',
                  display: 'inline-block',
                  position: 'relative',
                  overflow: 'hidden',
                  lineHeight: '1'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-5px)';
                  e.target.style.boxShadow = '0 12px 25px rgba(102, 126, 234, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.4)';
                }}>
                  <Link to="/ocd-quiz" style={{
                    color: 'white',
                    textDecoration: 'none',
                    display: 'block'
                  }}>Take Quiz</Link>
                </button>
              </div>
            </div>
          </div>

          {/* ADHD Test Card */}
          <div className="card" style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '25px',
            overflow: 'hidden',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.4s ease, box-shadow 0.4s ease',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            width: 'calc(33.333% - 14px)',
            maxWidth: '300px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.25)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
          }}>
            <div className="card-image" style={{
              height: '160px',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <img src={quiz4Image} alt="ADHD Test" style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.6s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
              }} />
              <div style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem'
              }}>🧠</div>
            </div>
            <div className="card-content" style={{
              padding: '20px',
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h2 style={{
                fontSize: '1.6rem',
                fontWeight: '700',
                color: '#2c3e50',
                marginBottom: '10px',
                position: 'relative',
                paddingBottom: '10px'
              }}>
                ADHD Test
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '50px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #667eea, #764ba2)',
                  borderRadius: '2px'
                }}></div>
              </h2>
              <p style={{
                fontSize: '1rem',
                color: '#555',
                marginBottom: '15px',
                flexGrow: 1,
                lineHeight: '1.5'
              }}>
                Our quiz can help you determine whether you have ADHD
              </p>
              <div style={{ textAlign: 'center' }}>
                <button style={{
                  background: 'linear-gradient(90deg, #667eea, #764ba2)',
                  color: 'white',
                  border: 'none',
                  padding: '0px 10px',
                  borderRadius: '35px',
                  fontSize: '5.3rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 20px rgba(102, 126, 234, 0.4)',
                  display: 'inline-block',
                  position: 'relative',
                  overflow: 'hidden',
                  lineHeight: '1'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-5px)';
                  e.target.style.boxShadow = '0 12px 25px rgba(102, 126, 234, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.4)';
                }}>
                  <Link to="/adhd-quiz" style={{
                    color: 'white',
                    textDecoration: 'none',
                    display: 'block'
                  }}>Take Quiz</Link>
                </button>
              </div>
            </div>
          </div>

          {/* PTSD Test Card */}
          <div className="card" style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '25px',
            overflow: 'hidden',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.4s ease, box-shadow 0.4s ease',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            width: 'calc(33.333% - 14px)',
            maxWidth: '300px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.25)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
          }}>
            <div className="card-image" style={{
              height: '160px',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <img src={quiz1Image} alt="PTSD Test" style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.6s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
              }} />
              <div style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem'
              }}>⚡</div>
            </div>
            <div className="card-content" style={{
              padding: '20px',
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h2 style={{
                fontSize: '1.6rem',
                fontWeight: '700',
                color: '#2c3e50',
                marginBottom: '10px',
                position: 'relative',
                paddingBottom: '10px'
              }}>
                PTSD Test
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '50px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #667eea, #764ba2)',
                  borderRadius: '2px'
                }}></div>
              </h2>
              <p style={{
                fontSize: '1rem',
                color: '#555',
                marginBottom: '15px',
                flexGrow: 1,
                lineHeight: '1.5'
              }}>
                Our quiz can help you determine whether you have PTSD.
              </p>
              <div style={{ textAlign: 'center' }}>
                <button style={{
                  background: 'linear-gradient(90deg, #667eea, #764ba2)',
                  color: 'white',
                  border: 'none',
                  padding: '0px 10px',
                  borderRadius: '35px',
                  fontSize: '5.3rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 20px rgba(102, 126, 234, 0.4)',
                  display: 'inline-block',
                  position: 'relative',
                  overflow: 'hidden',
                  lineHeight: '1'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-5px)';
                  e.target.style.boxShadow = '0 12px 25px rgba(102, 126, 234, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.4)';
                }}>
                  <Link to="/ptsd-quiz" style={{
                    color: 'white',
                    textDecoration: 'none',
                    display: 'block'
                  }}>Take Quiz</Link>
                </button>
              </div>
            </div>
          </div>

          {/* Social Anxiety Test Card */}
          <div className="card" style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '25px',
            overflow: 'hidden',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.4s ease, box-shadow 0.4s ease',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            width: 'calc(33.333% - 14px)',
            maxWidth: '300px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.25)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
          }}>
            <div className="card-image" style={{
              height: '160px',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <img src={quiz3Image} alt="Social Anxiety Test" style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.6s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
              }} />
              <div style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem'
              }}>👥</div>
            </div>
            <div className="card-content" style={{
              padding: '20px',
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column'
            }}>
              <h2 style={{
                fontSize: '1.6rem',
                fontWeight: '700',
                color: '#2c3e50',
                marginBottom: '10px',
                position: 'relative',
                paddingBottom: '10px'
              }}>
                Social Anxiety Test
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '50px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #667eea, #764ba2)',
                  borderRadius: '2px'
                }}></div>
              </h2>
              <p style={{
                fontSize: '1rem',
                color: '#555',
                marginBottom: '15px',
                flexGrow: 1,
                lineHeight: '1.5'
              }}>
                Take this Quiz to know more.
              </p>
              <div style={{ textAlign: 'center' }}>
                <button style={{
                  background: 'linear-gradient(90deg, #667eea, #764ba2)',
                  color: 'white',
                  border: 'none',
                  padding: '0px 10px',
                  borderRadius: '35px',
                  fontSize: '5.3rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 20px rgba(102, 126, 234, 0.4)',
                  display: 'inline-block',
                  position: 'relative',
                  overflow: 'hidden',
                  lineHeight: '1'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-5px)';
                  e.target.style.boxShadow = '0 12px 25px rgba(102, 126, 234, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.4)';
                }}>
                  <Link to="/social-anxiety-quiz" style={{
                    color: 'white',
                    textDecoration: 'none',
                    display: 'block'
                  }}>Take Quiz</Link>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced End Note */}
        <div className="end-note" style={{
          background: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '20px',
          padding: '20px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
          overflow: 'hidden',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '5px',
            background: 'linear-gradient(90deg, #ff6b6b, #ff8e8e)',
          }}></div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0 15px'
          }}>
            <div style={{
              fontSize: '1.8rem',
              marginRight: '20px',
              color: '#ff6b6b'
            }}>⚠️</div>
            <div style={{
              fontSize: '1.1rem',
              color: '#555',
              fontWeight: '500',
              animation: 'marquee 20s linear infinite',
              whiteSpace: 'nowrap'
            }}>
              NOTE: Please remember that the results of these quizzes are not a substitute for professional medical advice. If you have concerns about your mental health, consult a healthcare professional.
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        
        @media (max-width: 1200px) {
          .card {
            width: calc(50% - 10px) !important;
          }
        }
        
        @media (max-width: 768px) {
          .card {
            width: 100% !important;
          }
          
          h1 {
            font-size: 2.5rem !important;
          }
          
          h3 {
            font-size: 1.2rem !important;
          }
          
          .card-content h2 {
            font-size: 1.4rem !important;
          }
          
          .card-content p {
            font-size: 0.9rem !important;
          }
          
          button {
            padding: '0px 8px' !important;
            fontSize: '3.5rem' !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Quiz;