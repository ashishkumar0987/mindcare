import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from "../../../components/firebase-config";
import { auth } from "../../../components/firebase-config";
import './TherapistProfilePage.css';

const TherapistProfilePage = () => {
  const { id } = useParams();
  const [therapist, setTherapist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingStep, setBookingStep] = useState(1); // 1: time selection, 2: payment, 3: confirmation
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchTherapist = async () => {
      try {
        const therapistDoc = await getDoc(doc(db, 'therapists', id));
        if (therapistDoc.exists()) {
          setTherapist(therapistDoc.data());
        } else {
          console.log('No such therapist!');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching therapist:', error);
        setLoading(false);
      }
    };

    fetchTherapist();
    
    // Check if user is authenticated
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
    });
    
    return () => unsubscribe();
  }, [id]);

  const handleDaySelection = (day) => {
    setSelectedDay(day);
    setSelectedTime(''); // Reset time when day changes
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const handleBooking = () => {
    if (!isAuthenticated) {
      alert('Please login to book a session');
      return;
    }
    
    if (!selectedDay || !selectedTime) {
      alert('Please select a day and time for your appointment');
      return;
    }
    
    setBookingStep(2); // Move to payment step
  };

  const handlePayment = () => {
    // In a real app, integrate with a payment gateway here
    // For demo purposes, we'll just simulate payment
    setBookingStep(3); // Move to confirmation step
  };

  const renderTimeSlots = () => {
    if (!selectedDay || !therapist.availability[selectedDay]) {
      return <p className="no-slots-message">Please select a day to see available time slots</p>;
    }

    return (
      <div className="time-slots">
        {therapist.availability[selectedDay].map((time, index) => (
          <button
            key={index}
            className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
            onClick={() => handleTimeSelection(time)}
          >
            {time}
          </button>
        ))}
      </div>
    );
  };

  const renderBookingStep = () => {
    switch (bookingStep) {
      case 1:
        return (
          <div className="booking-step">
            <h3>Book an Appointment</h3>
            
            <div className="day-selection">
              <h4>Select a Day</h4>
              <div className="days-grid">
                {Object.keys(therapist.availability).map(day => (
                  <button
                    key={day}
                    className={`day-button ${selectedDay === day ? 'selected' : ''}`}
                    onClick={() => handleDaySelection(day)}
                  >
                    {day.charAt(0).toUpperCase() + day.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            {renderTimeSlots()}
            
            <button 
              className="book-appointment-btn" 
              onClick={handleBooking}
              disabled={!selectedDay || !selectedTime}
            >
              Book Appointment
            </button>
          </div>
        );
      case 2:
        return (
          <div className="booking-step payment-step">
            <h3>Payment Details</h3>
            
            <div className="appointment-summary">
              <h4>Appointment Summary</h4>
              <p><strong>Therapist:</strong> {therapist.name}</p>
              <p><strong>Date:</strong> {selectedDay.charAt(0).toUpperCase() + selectedDay.slice(1)}</p>
              <p><strong>Time:</strong> {selectedTime}</p>
              <p><strong>Duration:</strong> 50 minutes</p>
              <p><strong>Fee:</strong> ₹{therapist.fees}</p>
            </div>
            
            <div className="payment-form">
              <h4>Payment Method</h4>
              <div className="payment-options">
                <label className="payment-option">
                  <input type="radio" name="payment" defaultChecked />
                  <span>Credit/Debit Card</span>
                </label>
                <label className="payment-option">
                  <input type="radio" name="payment" />
                  <span>UPI</span>
                </label>
                <label className="payment-option">
                  <input type="radio" name="payment" />
                  <span>Net Banking</span>
                </label>
              </div>
              
              <div className="card-details">
                <input type="text" placeholder="Card Number" />
                <input type="text" placeholder="Name on Card" />
                <div className="card-row">
                  <input type="text" placeholder="MM/YY" />
                  <input type="text" placeholder="CVV" />
                </div>
              </div>
              
              <button className="pay-now-btn" onClick={handlePayment}>
                Pay ₹{therapist.fees}
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="booking-step confirmation-step">
            <h3>Appointment Confirmed!</h3>
            <div className="confirmation-icon">✓</div>
            <p>Your appointment has been successfully booked.</p>
            <div className="appointment-details">
              <p><strong>Therapist:</strong> {therapist.name}</p>
              <p><strong>Date:</strong> {selectedDay.charAt(0).toUpperCase() + selectedDay.slice(1)}</p>
              <p><strong>Time:</strong> {selectedTime}</p>
              <p><strong>Meeting Link:</strong> Will be sent 30 minutes before the session</p>
            </div>
            <Link to="/meet/abc123" className="join-meeting-btn">
              Join Meeting
            </Link>
          </div>
        );
      default:
        return null;
    }
  };

  if (loading) {
    return <div className="loading-container">Loading therapist profile...</div>;
  }

  if (!therapist) {
    return <div className="error-container">Therapist not found</div>;
  }

  return (
    <div className="therapist-profile-page">
      <div className="container">
        <div className="therapist-header">
          <div className="therapist-photo">
            <img 
              src={therapist.photoURL || 'https://picsum.photos/seed/therapist/300/300.jpg'} 
              alt={therapist.name} 
            />
          </div>
          
          <div className="therapist-basic-info">
            <h1 className="therapist-name">{therapist.name}</h1>
            <p className="therapist-credentials">{therapist.education}</p>
            <p className="therapist-experience">{therapist.experience} experience</p>
            
            <div className="therapist-specialization">
              {therapist.specialization.map((spec, index) => (
                <span key={index} className="specialization-tag">{spec}</span>
              ))}
            </div>
            
            <div className="therapist-languages">
              <strong>Languages:</strong> {therapist.languages.join(', ')}
            </div>
            
            <div className="therapist-rating">
              <div className="stars">
                {[...Array(5)].map((star, i) => (
                  <span key={i} className={i < Math.floor(therapist.rating) ? 'star filled' : 'star'}>
                    ★
                  </span>
                ))}
              </div>
              <span className="rating-value">{therapist.rating}</span>
              <span className="review-count">({therapist.reviews.length} reviews)</span>
            </div>
            
            <div className="therapist-fees">
              <span className="fees-amount">₹{therapist.fees}</span>
              <span className="fees-period">per session</span>
            </div>
            
            <div className={`availability-status ${therapist.isAvailable ? 'available' : 'busy'}`}>
              {therapist.isAvailable ? 'Available for appointments' : 'Currently busy'}
            </div>
          </div>
        </div>
        
        <div className="therapist-content">
          <div className="therapist-about">
            <h2>About</h2>
            <p>{therapist.bio}</p>
          </div>
          
          <div className="therapist-reviews">
            <h2>Patient Reviews</h2>
            {therapist.reviews.length > 0 ? (
              therapist.reviews.map((review, index) => (
                <div key={index} className="review-card">
                  <div className="review-header">
                    <span className="reviewer-name">{review.patientName}</span>
                    <div className="review-rating">
                      {[...Array(5)].map((star, i) => (
                        <span key={i} className={i < review.rating ? 'star filled' : 'star'}>
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="review-date">{review.date}</span>
                  </div>
                  <p className="review-comment">{review.comment}</p>
                </div>
              ))
            ) : (
              <p>No reviews yet</p>
            )}
          </div>
        </div>
        
        <div className="booking-section">
          {renderBookingStep()}
        </div>
      </div>
    </div>
  );
};

export default TherapistProfilePage;