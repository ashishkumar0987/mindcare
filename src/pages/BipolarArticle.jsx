import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BipolarArticle.css'; // Separate CSS file (content below)

const BipolarArticle = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true); // Optional auto-play

  const images = [
    {
      src: 'https://www.cdc.gov/childrensmentalhealth/images/Depression-Anxiety-Behavior-Disorders-chart.jpg?_=03418',
      alt: 'Chart on mood disorders including bipolar symptoms in children'
    },
    {
      src: 'https://assets.weforum.org/editor/ZM8M512ZI2ZMZagSB3MwmmX1URuwvccSy5ISTECukwo.PNG',
      alt: 'Global infographic on bipolar and mood disorder statistics'
    }
  ];

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  // Auto-play effect (pauses on hover)
  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(nextImage, 4000); // Change image every 4 seconds
    }
    return () => clearInterval(interval);
  }, [currentImage, autoPlay]);

  const handleMouseEnter = () => setAutoPlay(false);
  const handleMouseLeave = () => setAutoPlay(true);

  return (
    <div className="bipolar-page">
      {/* Navigation Back Link */}
      <Link to="/articles" className="back-link">
        ← Back to Articles
      </Link>

      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="main-title">Bipolar Affective Disorder</h1>
        <p className="hero-subtitle">Balancing Highs and Lows for Emotional Stability</p>
      </section>

      {/* Image Slider */}
      <section className="image-slider-section">
        <div 
          className="image-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button 
            className="arrow-button prev-button" 
            onClick={previousImage}
            aria-label="Previous image"
          >
            ←
          </button>
          <img 
            src={images[currentImage].src} 
            alt={images[currentImage].alt}
            loading="lazy"
          />
          <button 
            className="arrow-button next-button" 
            onClick={nextImage}
            aria-label="Next image"
          >
            →
          </button>

          {/* Navigation Dots */}
          <div className="dots-container">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentImage === index ? 'active' : ''}`}
                onClick={() => goToImage(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Understanding Section */}
      <section className="content-section">
        <h2>Understanding Bipolar Affective Disorder</h2>
        <p>Bipolar affective disorder, commonly known as bipolar disorder, is a mental health condition characterized by extreme mood swings that include episodes of mania (or hypomania) and depression. These mood swings can be severe and disruptive to a person's life. Bipolar disorder is a chronic condition that cannot be cured but can be effectively managed with treatment.</p>
      </section>

      {/* Types Section */}
      <section className="content-section">
        <h2>Types of Bipolar Disorder</h2>
        <p>There are two main types, each with distinct patterns of mood episodes:</p>
        <ul className="feature-list">
          <li><strong>Bipolar I Disorder:</strong> Involves manic episodes lasting at least seven days or severe enough to require hospitalization. Depressive episodes often accompany or alternate with mania.</li>
          <li><strong>Bipolar II Disorder:</strong> Characterized by recurrent depressive episodes and at least one hypomanic episode. Hypomania is a milder form of mania that doesn't usually cause severe impairment or hospitalization.</li>
        </ul>
      </section>

      {/* Symptoms Section */}
      <section className="content-section">
        <h2>Symptoms of Bipolar Disorder</h2>
        <p>Symptoms vary between manic/hypomanic and depressive phases:</p>
        <ul className="feature-list">
          <li><strong>Mania (or Hypomania) Symptoms:</strong> Euphoria, extreme irritability, increased energy, racing thoughts, decreased need for sleep, increased self-esteem, reckless behavior, and poor judgment.</li>
          <li><strong>Depressive Symptoms:</strong> Persistent sadness, loss of interest in activities, changes in appetite and weight, difficulty concentrating, fatigue, feelings of guilt or worthlessness, and thoughts of suicide.</li>
        </ul>
      </section>

      {/* Causes Section */}
      <section className="content-section">
        <h2>Causes of Bipolar Disorder</h2>
        <p>The exact cause is not fully understood but involves a combination of factors:</p>
        <ul className="feature-list">
          <li>Genetic factors: Family history increases risk.</li>
          <li>Biological factors: Imbalances in brain chemicals and structure.</li>
          <li>Environmental factors: Stressful life events, trauma, or substance use can trigger episodes.</li>
        </ul>
        <p>It often emerges in late adolescence or early adulthood.</p>
      </section>

      {/* Treatment Section */}
      <section className="content-section">
        <h2>Treatment for Bipolar Disorder</h2>
        <p>Treatment typically combines medication, therapy, and lifestyle strategies for long-term management:</p>
        <ul className="feature-list">
          <li><strong>Psychotherapy:</strong> Talk therapies like cognitive-behavioral therapy (CBT) or interpersonal therapy to develop coping strategies and manage symptoms.</li>
          <li><strong>Medications:</strong> Mood stabilizers (e.g., lithium), antipsychotics, and antidepressants to stabilize mood and prevent episodes.</li>
          <li><strong>Lifestyle Management:</strong> Regular sleep schedule, stress reduction, healthy diet, exercise, and avoiding triggers like alcohol or drugs.</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Seek Help Today</h2>
        <p>Working closely with mental health professionals is essential for a personalized treatment plan and regular monitoring. With proper support, many people with bipolar disorder lead fulfilling lives. If you or someone you know is struggling, reach out for help.</p>
        <Link to="/contact" className="cta-button">Get Support</Link> {/* Adjust link as needed */}
      </section>
    </div>
  );
};

export default BipolarArticle;