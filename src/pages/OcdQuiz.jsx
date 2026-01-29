import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { OcdResult } from "../components/QuizResult";
import ".././App.css";

const OcdQuiz = () => {
  const [questions, setQuestions] = useState([
    {
      question: 'Do you have an intense fear of germs or contaminants?',
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: 'Do you feel the need to check things repeatedly, such as locks or switches?',
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: 'Do you have a strict need for things to be orderly or symmetrical?',
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "Do you feel the need to perform repetitive behaviors in order to reduce your anxiety?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"]
    },
    {
      question: 'Do your obsessions and compulsions take up a lot of your time?',
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "Do you feel like you can't control your obsessions and compulsions?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "Do you have thoughts of contamination?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "Do you try to resist your obsessions or compulsions, but find it difficult to do so?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "Do you have thoughts of symmetry or order?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "Do you have thoughts of needing to repeat words or phrases?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "Do you feel compelled to count things repeatedly?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "Do you have intrusive thoughts about harming yourself or others?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "Do you feel the need to arrange objects in a specific way?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "Do you experience mental rituals that you feel compelled to perform?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "Do you avoid situations that trigger your obsessions or compulsions?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    }
  ]);
  
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizStartTime, setQuizStartTime] = useState(null);
  const [quizEndTime, setQuizEndTime] = useState(null);
  const [answers, setAnswers] = useState(new Array(questions.length).fill(0));

  // Record time when quiz starts
  useEffect(() => {
    if (!quizStartTime) {
      setQuizStartTime(new Date());
    }
  }, [quizStartTime]);

  const changeQuestion = () => {
    if (clickedOption === 0) {
      alert("Please select an option before proceeding.");
      return;
    }
    
    // Save the answer
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = clickedOption;
    setAnswers(newAnswers);
    
    updateScore();
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(answers[currentQuestion + 1]);
    } else {
      setQuizEndTime(new Date());
      setShowResult(true);
    }
  };

  const updateScore = () => {
    const answerValue = clickedOption;
    setScore((prevScore) => prevScore + answerValue);
  };

  const handleResetClick = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
    setClickedOption(0);
    setQuizStartTime(null);
    setQuizEndTime(null);
    setAnswers(new Array(questions.length).fill(0));
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      // Save the current answer
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = clickedOption;
      setAnswers(newAnswers);
      
      // Go to the previous question
      setCurrentQuestion(currentQuestion - 1);
      setClickedOption(answers[currentQuestion - 1]);
    }
  };

  // Fixed: Changed the condition to properly check if quiz is over
  const isQuizOver = showResult;
  
  // Calculate progress
  const progress = Math.round(((currentQuestion + 1) / questions.length) * 100);
  
  // Calculate quiz time
  const getTimeTaken = () => {
    if (!quizStartTime) return "00:00";
    const endTime = quizEndTime || new Date();
    const timeDiff = Math.floor((endTime - quizStartTime) / 1000);
    const minutes = Math.floor(timeDiff / 60);
    const seconds = timeDiff % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSubmit = () => {
    if (clickedOption === 0) {
      alert("Please select an option before submitting.");
      return;
    }
    
    // Save the final answer
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = clickedOption;
    setAnswers(newAnswers);
    
    updateScore();
    setQuizEndTime(new Date());
    setShowResult(true);
  };

  return (
    <div className="commonQuiz" style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 50%, #e8f5e8 100%)',
      minHeight: '100vh',
      padding: '20px 0',
      color: '#333'
    }}>
      <div className="container" style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        background: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
      }}>
        <h2 style={{
          textAlign: 'center',
          color: '#5e35b1',
          marginBottom: '20px',
          fontSize: '2.5rem',
          fontWeight: '700'
        }}>OCD TEST</h2>
        
        {!showResult && (
          <>
            {/* Progress bar */}
            <div style={{
              width: '100%',
              height: '10px',
              backgroundColor: '#e0e0e0',
              borderRadius: '5px',
              marginBottom: '20px'
            }}>
              <div style={{
                width: `${progress}%`,
                height: '100%',
                backgroundColor: '#5e35b1',
                borderRadius: '5px',
                transition: 'width 0.3s ease'
              }}></div>
            </div>
            
            {/* Question number and time */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '20px',
              fontSize: '1rem',
              color: '#666'
            }}>
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>Time: {getTimeTaken()}</span>
            </div>
          </>
        )}
        
        {!isQuizOver ? (
          <div className="Quiz-question-option">
            <h3 style={{
              fontSize: '1.3rem',
              marginBottom: '25px',
              lineHeight: '1.5',
              color: '#333'
            }}>{questions[currentQuestion].question}</h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '15px',
              marginBottom: '30px'
            }}>
              {questions[currentQuestion].answers.map((answer, answerIndex) => (
                <button
                  className={`option-btn ${
                    clickedOption === answerIndex + 1 ? "checked" : null
                  }`}
                  key={answerIndex}
                  onClick={() => setClickedOption(answerIndex + 1)}
                  style={{
                    padding: '15px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '10px',
                    backgroundColor: clickedOption === answerIndex + 1 ? '#5e35b1' : '#fff',
                    color: clickedOption === answerIndex + 1 ? '#fff' : '#333',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textAlign: 'left'
                  }}
                >
                  {answer}
                </button>
              ))}
            </div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              {currentQuestion > 0 && (
                <button 
                  onClick={goBack}
                  style={{
                    padding: '12px 25px',
                    backgroundColor: '#9e9e9e',
                    color: 'white',
                    border: 'none',
                    borderRadius: '30px',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Previous
                </button>
              )}
              
              <div style={{ marginLeft: 'auto' }}>
                {currentQuestion < questions.length - 1 ? (
                  <button 
                    onClick={changeQuestion}
                    style={{
                      padding: '12px 25px',
                      backgroundColor: '#5e35b1',
                      color: 'white',
                      border: 'none',
                      borderRadius: '30px',
                      fontSize: '1rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Next
                  </button>
                ) : (
                  <button 
                    onClick={handleSubmit}
                    style={{
                      padding: '12px 25px',
                      backgroundColor: '#4caf50',
                      color: 'white',
                      border: 'none',
                      borderRadius: '30px',
                      fontSize: '1rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <h2 className="result-heading" style={{
              fontSize: '2rem',
              color: '#5e35b1',
              marginBottom: '20px'
            }}>Result</h2>
            
            <div style={{
              padding: '20px',
              backgroundColor: '#f5f5f5',
              borderRadius: '15px',
              marginBottom: '20px'
            }}>
              <h3 className="score" style={{
                fontSize: '1.5rem',
                marginBottom: '10px'
              }}>Your Score: {score} out of {questions.length * 5}</h3>
              
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '10px'
              }}>Time Taken: {getTimeTaken()}</p>
              
              {/* Interpretation based on score */}
              <div style={{
                padding: '15px',
                backgroundColor: '#fff',
                borderRadius: '10px',
                marginTop: '15px',
                textAlign: 'left'
              }}>
                {score <= 15 && (
                  <div>
                    <h4 style={{ color: '#4caf50', marginBottom: '10px' }}>Minimal OCD Symptoms</h4>
                    <p>Your results suggest that you are experiencing minimal symptoms of OCD. These symptoms are not significantly interfering with your daily life.</p>
                  </div>
                )}
                {score > 15 && score <= 30 && (
                  <div>
                    <h4 style={{ color: '#ff9800', marginBottom: '10px' }}>Mild OCD Symptoms</h4>
                    <p>Your results suggest that you are experiencing mild symptoms of OCD. These symptoms may be causing some distress but are likely manageable.</p>
                  </div>
                )}
                {score > 30 && score <= 45 && (
                  <div>
                    <h4 style={{ color: '#f57c00', marginBottom: '10px' }}>Moderate OCD Symptoms</h4>
                    <p>Your results suggest that you are experiencing moderate symptoms of OCD. These symptoms may be interfering with your daily activities and relationships.</p>
                  </div>
                )}
                {score > 45 && (
                  <div>
                    <h4 style={{ color: '#f44336', marginBottom: '10px' }}>Severe OCD Symptoms</h4>
                    <p>Your results suggest that you may be experiencing severe symptoms of OCD. It is recommended that you consult with a mental health professional for proper evaluation and support.</p>
                  </div>
                )}
              </div>
              
              {/* OCD Result Component */}
              <OcdResult score={score} />
            </div>
            
            <button 
              onClick={handleResetClick}
              style={{
                padding: '12px 25px',
                backgroundColor: '#5e35b1',
                color: 'white',
                border: 'none',
                borderRadius: '30px',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                margin: '10px'
              }}
            >
              Restart Quiz
            </button>
            
            <Link 
              to="/ocd-resources"
              style={{
                padding: '12px 25px',
                backgroundColor: '#4caf50',
                color: 'white',
                textDecoration: 'none',
                border: 'none',
                borderRadius: '30px',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                margin: '10px',
                display: 'inline-block'
              }}
            >
              View Resources
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default OcdQuiz;