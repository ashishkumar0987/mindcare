import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase-config';

// In a real app, you would integrate with a payment gateway like Razorpay, Stripe, etc.
// This is a mock implementation for demonstration purposes

export const initiatePayment = async (appointmentDetails) => {
  try {
    // In a real app, you would call the payment gateway API here
    // For demo purposes, we'll simulate a successful payment
    
    const paymentDetails = {
      appointmentId: appointmentDetails.id,
      therapistId: appointmentDetails.therapistId,
      patientId: appointmentDetails.patientId,
      amount: appointmentDetails.amount,
      paymentMethod: appointmentDetails.paymentMethod,
      status: 'completed',
      transactionId: 'txn_' + Math.random().toString(36).substr(2, 9),
      timestamp: serverTimestamp()
    };
    
    // Save payment details to Firestore
    await addDoc(collection(db, 'payments'), paymentDetails);
    
    return {
      success: true,
      transactionId: paymentDetails.transactionId,
      message: 'Payment successful'
    };
  } catch (error) {
    console.error('Payment error:', error);
    return {
      success: false,
      message: 'Payment failed. Please try again.'
    };
  }
};

// For Razorpay integration (example)
export const initiateRazorpayPayment = (appointmentDetails) => {
  return new Promise((resolve) => {
    const options = {
      key: 'rzp_test_YOUR_KEY_ID', // Replace with your Razorpay key
      amount: appointmentDetails.amount * 100, // Amount in paise
      currency: 'INR',
      name: 'Mind Care',
      description: 'Payment for therapy session',
      image: 'https://example.com/logo.png',
      handler: function(response) {
        // Payment successful
        resolve({
          success: true,
          transactionId: response.razorpay_payment_id,
          message: 'Payment successful'
        });
      },
      prefill: {
        name: appointmentDetails.patientName,
        email: appointmentDetails.patientEmail,
        contact: appointmentDetails.patientPhone
      },
      notes: {
        appointmentId: appointmentDetails.id,
        therapistId: appointmentDetails.therapistId
      },
      theme: {
        color: '#4a6fa5'
      },
      modal: {
        ondismiss: function() {
          resolve({
            success: false,
            message: 'Payment cancelled'
          });
        }
      }
    };
    
    const rzp = new window.Razorpay(options);
    rzp.open();
  });
};