import React, { useState, useEffect } from "react";
import { AnxietyResult } from "../components/QuizResult";

const AnxietyQuiz = () => {
  const [questions, setQuestions] = useState([
    {
      question: "How often have you felt restless or fidgety?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you been unable to concentrate or your mind has wandered?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you been bothered by trouble falling or staying asleep?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you been bothered by feeling tired or having low energy?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you been bothered by feeling worthless or guilty?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you been bothered by trouble making decisions?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you been bothered by muscle tension?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you been bothered by being easily startled?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you been bothered by feeling afraid that something terrible might happen?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you been bothered by having a racing heart?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    // नए प्रश्न जोड़े गए
    {
      question: "How often have you felt nervous or on edge?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you been unable to stop worrying?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you worried too much about different things?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you had trouble relaxing?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you been so irritable that it caused problems with people?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you felt afraid as if something awful might happen?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you experienced shortness of breath when not exercising?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you felt dizzy or lightheaded without a medical reason?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you experienced trembling or shaking?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you avoided situations because they make you anxious?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you had thoughts that you can't get out of your head?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you felt detached from yourself or your surroundings?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you felt a sense of impending doom?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you experienced sweating when not physically active?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you felt chest pain or discomfort?",
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

  // क्विज़ शुरू होने पर समय रिकॉर्ड करें
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
    
    // उत्तर सहेजें
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
      // वर्तमान उत्तर सहेजें
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = clickedOption;
      setAnswers(newAnswers);
      
      // पिछले प्रश्न पर जाएं
      setCurrentQuestion(currentQuestion - 1);
      setClickedOption(answers[currentQuestion - 1]);
    }
  };

  // Fixed: Changed the condition to properly check if quiz is over
  const isQuizOver = showResult;
  
  // प्रगति की गणना करें
  const progress = Math.round(((currentQuestion + 1) / questions.length) * 100);
  
  // क्विज़ समय की गणना करें
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
    
    // अंतिम उत्तर सहेजें
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
        }}>ANXIETY TEST</h2>
        
        {!showResult && (
          <>
            {/* प्रगति बार */}
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
            
            {/* प्रश्न संख्या और समय */}
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
              
              {/* स्कोर के आधार पर व्याख्या */}
              <div style={{
                padding: '15px',
                backgroundColor: '#fff',
                borderRadius: '10px',
                marginTop: '15px',
                textAlign: 'left'
              }}>
                {score <= 15 && (
                  <div>
                    <h4 style={{ color: '#4caf50', marginBottom: '10px' }}>Minimal Anxiety</h4>
                    <p>Your results suggest that you are experiencing minimal symptoms of anxiety. Continue to practice healthy coping strategies and self-care.</p>
                  </div>
                )}
                {score > 15 && score <= 30 && (
                  <div>
                    <h4 style={{ color: '#ff9800', marginBottom: '10px' }}>Mild Anxiety</h4>
                    <p>Your results suggest that you are experiencing mild symptoms of anxiety. Consider practicing relaxation techniques and talking to someone you trust about your feelings.</p>
                  </div>
                )}
                {score > 30 && score <= 45 && (
                  <div>
                    <h4 style={{ color: '#f57c00', marginBottom: '10px' }}>Moderate Anxiety</h4>
                    <p>Your results suggest that you are experiencing moderate symptoms of anxiety. Consider seeking support from a mental health professional to learn coping strategies.</p>
                  </div>
                )}
                {score > 45 && (
                  <div>
                    <h4 style={{ color: '#f44336', marginBottom: '10px' }}>Severe Anxiety</h4>
                    <p>Your results suggest that you may be experiencing severe symptoms of anxiety. It is recommended that you consult with a mental health professional for proper evaluation and support.</p>
                  </div>
                )}
              </div>
            </div>
            
            {showResult && <AnxietyResult score={score} />}
            
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
            
           <button 
  onClick={() => window.location.href = '/resources'}
  style={{
    padding: '12px 25px',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '30px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    margin: '10px'
  }}
>
  View Resources
</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnxietyQuiz;