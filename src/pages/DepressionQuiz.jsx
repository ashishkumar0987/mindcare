  import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DepressionResult } from "../components/QuizResult";  // यह लाइन जोड़ें
import ".././App.css";

const DepressionQuiz = () => {
  const [questions, setQuestions] = useState([
    {
      question: "How often have you felt sad or empty?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you lost interest or pleasure in activities you used to enjoy?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you had trouble falling or staying asleep, or sleeping too much?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you felt tired or had little energy?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you had poor appetite or been overeating?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you felt bad about yourself or that you are a failure?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you had trouble concentrating on things such as reading or watching television?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you moved or spoken so slowly that others could have noticed, or the opposite - being so fidgety or restless?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you thought that you would be better off dead or of hurting yourself?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you felt hopeless about the future?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    // Additional questions for a more comprehensive assessment
    {
      question: "How often have you felt worthless or guilty?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you had difficulty making decisions?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you felt irritable or easily annoyed?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you withdrawn from family and friends?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you experienced unexplained physical problems like headaches or body aches?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you cried for no apparent reason?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you felt that nothing matters anymore?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you felt that you are a burden to others?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you lost interest in your appearance or personal hygiene?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you felt that life is not worth living?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you had thoughts of ending your life?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you felt disconnected from reality or your surroundings?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you experienced significant weight loss or gain without trying?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you felt that you can't enjoy anything anymore?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    },
    {
      question: "How often have you felt that your situation will never improve?",
      answers: ["Never", "Rarely", "Sometimes", "Often", "Always"],
    }// ... बाकी सभी प्रश्न ...
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

  // Function to get depression result based on score
  const getDepressionResult = () => {
    if (score > 0 && score <= 10) {  // props.score को score में बदलें
      return "you have Mild depression. This is the mildest form of depression and is characterized by a few depressive symptoms that do not significantly interfere with daily life.";
    } else if (score > 10 && score <= 20) {  // props.score को score में बदलें
      return "you have Moderate depression. This level of depression is more severe than mild depression and causes more noticeable symptoms. It can interfere with daily activities and relationships.";
    } else if (score > 20 && score <= 30) {  // props.score को score में बदलें
      return "you have Severe depression. This is the most severe form of depression and is characterized by a number of disabling symptoms. It can make it difficult to function at all.";
    } else if (score > 30 && score <= 50) {  // props.score को score में बदलें
      return "This is a rare form of depression that is accompanied by psychotic symptoms, such as delusions or hallucinations.";
    } else {
      return "Please consult with a mental health professional for proper evaluation.";
    }
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
        }}>DEPRESSION TEST</h2>
        
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
                {score <= 20 && (
                  <div>
                    <h4 style={{ color: '#4caf50', marginBottom: '10px' }}>Minimal Depression</h4>
                    <p>Your results suggest that you are experiencing minimal symptoms of depression. Continue to practice healthy coping strategies and self-care.</p>
                  </div>
                )}
                {score > 20 && score <= 40 && (
                  <div>
                    <h4 style={{ color: '#ff9800', marginBottom: '10px' }}>Mild Depression</h4>
                    <p>Your results suggest that you are experiencing mild symptoms of depression. Consider practicing relaxation techniques and talking to someone you trust about your feelings.</p>
                  </div>
                )}
                {score > 40 && score <= 60 && (
                  <div>
                    <h4 style={{ color: '#f57c00', marginBottom: '10px' }}>Moderate Depression</h4>
                    <p>Your results suggest that you are experiencing moderate symptoms of depression. Consider seeking support from a mental health professional to learn coping strategies.</p>
                  </div>
                )}
                {score > 60 && (
                  <div>
                    <h4 style={{ color: '#f44336', marginBottom: '10px' }}>Severe Depression</h4>
                    <p>Your results suggest that you may be experiencing severe symptoms of depression. It is recommended that you consult with a mental health professional for proper evaluation and support.</p>
                  </div>
                )}
              </div>
              
              {/* Depression Result Component */}
              <DepressionResult score={score} />  {/* यह लाइन जोड़ें */}
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
              to="/depression-resources"
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

export default DepressionQuiz;
  