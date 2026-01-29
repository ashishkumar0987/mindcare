// src/pages/TherapistListPage.jsx
import React, { useState, useEffect } from 'react';
import { db } from '../components/firebase-config'; // Path adjust karna pad sakta hai
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const TherapistListPage = () => {
  const [therapists, setTherapists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTherapists = async () => {
      try {
        const therapistsCollection = collection(db, 'therapists');
        const therapistSnapshot = await getDocs(therapistsCollection);
        const therapistList = therapistSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setTherapists(therapistList);
      } catch (error) {
        console.error("Error fetching therapists: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTherapists();
  }, []);

  if (loading) {
    return <div className="loading-container">Loading therapists...</div>;
  }

  return (
    <>
      <div className="therapist-list-container">
        <h1>Our Expert Therapists</h1>
        <div className="therapist-grid">
          {therapists.length > 0 ? (
            therapists.map(therapist => (
              <div key={therapist.id} className="therapist-card">
                <h3>{therapist.name}</h3>
                <p><strong>Specialization:</strong> {therapist.specialization}</p>
                <p><strong>Experience:</strong> {therapist.experience}</p>
                <p><strong>Fee per Session:</strong> ₹{therapist.pricePerSession}</p>
                <Link to={`/therapist/${therapist.id}`} className="view-profile-btn">View Profile & Book</Link>
              </div>
            ))
          ) : (
            <p>No therapists available at the moment.</p>
          )}
        </div>
      </div>

      <style jsx>{`
        .loading-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 50vh;
          font-size: 1.5rem;
          color: #555;
        }
        .therapist-list-container {
          padding: 40px 20px;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        .therapist-list-container h1 {
          color: #2c3e50;
          margin-bottom: 30px;
        }
        .therapist-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 25px;
          margin-top: 20px;
        }
        .therapist-card {
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          padding: 25px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
          background-color: #ffffff;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .therapist-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.12);
        }
        .therapist-card h3 {
          margin-top: 0;
          color: #3498db;
        }
        .therapist-card p {
          font-size: 16px;
          line-height: 1.6;
          color: #555;
        }
        .view-profile-btn {
          display: inline-block;
          margin-top: 20px;
          padding: 12px 20px;
          background-color: #3498db;
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }
        .view-profile-btn:hover {
          background-color: #2980b9;
        }
      `}</style>
    </>
  );
};

export default TherapistListPage;