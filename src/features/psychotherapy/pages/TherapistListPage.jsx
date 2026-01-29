import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db} from "../../../components/firebase-config";
import './TherapistListPage.css';

const TherapistListPage = () => {
  const [therapists, setTherapists] = useState([]);
  const [filteredTherapists, setFilteredTherapists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    specialization: 'all',
    language: 'all',
    priceRange: 'all'
  });

  useEffect(() => {
    const fetchTherapists = async () => {
      try {
        const therapistsQuery = query(
          collection(db, 'therapists'),
          orderBy('rating', 'desc')
        );
        const querySnapshot = await getDocs(therapistsQuery);
        
        const therapistsData = [];
        querySnapshot.forEach((doc) => {
          therapistsData.push({ id: doc.id, ...doc.data() });
        });
        
        setTherapists(therapistsData);
        setFilteredTherapists(therapistsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching therapists:', error);
        setLoading(false);
      }
    };

    fetchTherapists();
  }, []);

  useEffect(() => {
    let result = therapists;
    
    // Apply filters
    if (filters.specialization !== 'all') {
      result = result.filter(therapist => 
        therapist.specialization.includes(filters.specialization)
      );
    }
    
    if (filters.language !== 'all') {
      result = result.filter(therapist => 
        therapist.languages.includes(filters.language)
      );
    }
    
    if (filters.priceRange !== 'all') {
      if (filters.priceRange === 'low') {
        result = result.filter(therapist => therapist.fees <= 500);
      } else if (filters.priceRange === 'medium') {
        result = result.filter(therapist => therapist.fees > 500 && therapist.fees <= 1000);
      } else if (filters.priceRange === 'high') {
        result = result.filter(therapist => therapist.fees > 1000);
      }
    }
    
    setFilteredTherapists(result);
  }, [filters, therapists]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  if (loading) {
    return <div className="loading-container">Loading therapists...</div>;
  }

  return (
    <div className="therapist-list-page">
      <div className="container">
        <h1 className="page-title">Find a Mental Health Professional</h1>
        <p className="page-subtitle">Connect with qualified therapists who can help you</p>
        
        {/* Filters Section */}
        <div className="filters-section">
          <div className="filter-group">
            <label htmlFor="specialization">Specialization</label>
            <select 
              id="specialization" 
              name="specialization" 
              value={filters.specialization} 
              onChange={handleFilterChange}
            >
              <option value="all">All Specializations</option>
              <option value="Anxiety">Anxiety</option>
              <option value="Depression">Depression</option>
              <option value="PTSD">PTSD</option>
              <option value="OCD">OCD</option>
              <option value="Bipolar">Bipolar Disorder</option>
              <option value="Schizophrenia">Schizophrenia</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label htmlFor="language">Language</label>
            <select 
              id="language" 
              name="language" 
              value={filters.language} 
              onChange={handleFilterChange}
            >
              <option value="all">All Languages</option>
              <option value="Hindi">Hindi</option>
              <option value="English">English</option>
              <option value="Bengali">Bengali</option>
              <option value="Tamil">Tamil</option>
              <option value="Telugu">Telugu</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label htmlFor="priceRange">Price Range</label>
            <select 
              id="priceRange" 
              name="priceRange" 
              value={filters.priceRange} 
              onChange={handleFilterChange}
            >
              <option value="all">All Prices</option>
              <option value="low">Under ₹500</option>
              <option value="medium">₹500 - ₹1000</option>
              <option value="high">Above ₹1000</option>
            </select>
          </div>
        </div>
        
        {/* Therapists Grid */}
        <div className="therapists-grid">
          {filteredTherapists.length > 0 ? (
            filteredTherapists.map(therapist => (
              <div key={therapist.id} className="therapist-card">
                <div className="therapist-photo">
                  <img 
                    src={therapist.photoURL || 'https://picsum.photos/seed/therapist/200/200.jpg'} 
                    alt={therapist.name} 
                  />
                  <div className={`availability-indicator ${therapist.isAvailable ? 'available' : 'busy'}`}>
                    {therapist.isAvailable ? 'Available' : 'Busy'}
                  </div>
                </div>
                
                <div className="therapist-info">
                  <h3 className="therapist-name">{therapist.name}</h3>
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
                  
                  <div className="therapist-actions">
                    <Link to={`/therapist/${therapist.id}`} className="view-profile-btn">
                      View Profile
                    </Link>
                    <button className="book-now-btn">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <h3>No therapists found matching your criteria</h3>
              <p>Try adjusting your filters to see more options</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TherapistListPage;