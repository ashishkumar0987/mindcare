import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Depression.css'; // Separate CSS file (content below)

const Depression = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true); // Optional auto-play

  const images = [
    {
      src: 'https://assets-global.website-files.com/60b79f6742e9397ba3ee0357/640b4ccc0771bdf381e60449_depression%20by%20demographic-1.png',
      alt: 'Infographic on depression rates by demographic groups'
    },
    {
      src: 'https://www.cdc.gov/nchs/images/databriefs/351-400/db379-fig2.gif',
      alt: 'CDC chart showing trends in depression prevalence over time'
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
    <div className="depression-page">
      {/* Navigation Back Link */}
      <Link to="/articles" className="back-link">
        ← Back to Articles
      </Link>

      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="main-title">Depression</h1>
        <p className="hero-subtitle">Recognizing Symptoms, Types, and Pathways to Recovery</p>
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

      {/* Symptoms Section */}
      <section className="content-section">
        <h2>Symptoms of Depression</h2>
        <p>Depression manifests in various emotional, physical, and cognitive ways. Common symptoms include:</p>
        <ul className="feature-list">
          <li>Persistent sadness or low mood</li>
          <li>Loss of interest or pleasure in activities once enjoyed</li>
          <li>Fatigue and decreased energy levels</li>
          <li>Changes in appetite or weight (gain or loss)</li>
          <li>Sleep disturbances (insomnia or oversleeping)</li>
          <li>Feelings of worthlessness or excessive guilt</li>
          <li>Difficulty concentrating, making decisions, or remembering things</li>
          <li>Recurrent thoughts of death or suicide</li>
        </ul>
      </section>

      {/* Types Section */}
      <section className="content-section">
        <h2>Types of Depression</h2>
        <p>Depression can take different forms, each with unique characteristics:</p>
        <ul className="feature-list">
          <li><strong>Major Depressive Disorder (MDD):</strong> Severe and persistent symptoms that interfere with daily life.</li>
          <li><strong>Persistent Depressive Disorder (Dysthymia):</strong> A milder but chronic form lasting for two years or more.</li>
          <li><strong>Bipolar Disorder:</strong> Alternating periods of depression and mania or hypomania.</li>
          <li><strong>Seasonal Affective Disorder (SAD):</strong> Depression linked to specific seasons, often winter.</li>
          <li><strong>Postpartum Depression:</strong> Affects new mothers after childbirth, with intense mood swings.</li>
          <li><strong>Atypical Depression:</strong> Features like increased appetite, hypersomnia, and sensitivity to rejection.</li>
        </ul>
      </section>

      {/* Treatment Section */}
      <section className="content-section">
        <h2>Treatment for Depression</h2>
        <p>Effective treatment often involves a combination of approaches tailored to the individual:</p>
        <ul className="feature-list">
          <li><strong>Psychotherapy:</strong> Talk therapies like cognitive-behavioral therapy (CBT) or interpersonal therapy (IPT) to manage thoughts and emotions.</li>
          <li><strong>Medication:</strong> Antidepressants such as SSRIs or SNRIs, prescribed by a psychiatrist.</li>
          <li><strong>Lifestyle Changes:</strong> Regular exercise, balanced diet, adequate sleep, and stress management techniques.</li>
          <li><strong>Support Networks:</strong> Building connections with friends, family, or support groups.</li>
          <li><strong>Advanced Therapies:</strong> Electroconvulsive therapy (ECT) or transcranial magnetic stimulation (TMS) for severe, treatment-resistant cases.</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Seek Help Today</h2>
        <p>Depression is a treatable condition. If you or someone you know is struggling, reaching out to a mental health professional, healthcare provider, or helpline can provide the support needed for recovery and improved quality of life.</p>
        <Link to="/contact" className="cta-button">Get Support</Link> {/* Adjust link as needed */}
      </section>
    </div>
  );
};

export default Depression;
