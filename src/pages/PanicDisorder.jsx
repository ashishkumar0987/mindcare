import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PanicDisorder.css'; // Separate CSS file (content below)

const PanicDisorder = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true); // Optional auto-play

  const images = [
    {
      src: 'https://www.researchgate.net/publication/51752088/figure/fig1/AS:601662263672849@1520458870968/Prevalence-of-Diagnostic-and-Statistical-Manual-of-Mental-Disorders-Revised-Third.png',
      alt: 'Prevalence chart of panic disorder from DSM-III-R'
    },
    {
      src: 'https://cdn.koreabiomed.com/news/photo/201703/310_298_3359.jpg',
      alt: 'Infographic on panic disorder symptoms and management'
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
    <div className="panic-page">
      {/* Navigation Back Link */}
      <Link to="/articles" className="back-link">
        ← Back to Articles
      </Link>

      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="main-title">Panic Disorder</h1>
        <p className="hero-subtitle">Navigating Sudden Fear and Finding Calm</p>
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
        <h2>Understanding Panic Disorder</h2>
        <p>Panic Disorder is a mental health condition characterized by recurrent and unexpected panic attacks—intense episodes of extreme fear or discomfort. These attacks can include physical symptoms like heart palpitations, shortness of breath, sweating, trembling, and a feeling of impending doom.</p>
      </section>

      {/* Symptoms Section */}
      <section className="content-section">
        <h2>Symptoms of Panic Disorder</h2>
        <p>Key symptoms revolve around the attacks and their aftermath:</p>
        <ul className="feature-list">
          <li>Recurrent and unexpected panic attacks.</li>
          <li>Persistent worry about future attacks or their consequences.</li>
          <li>Behavioral changes, such as avoiding places or situations where attacks have occurred.</li>
        </ul>
      </section>

      {/* Treatment Section */}
      <section className="content-section">
        <h2>Treatment for Panic Disorder</h2>
        <p>Panic Disorder is effectively treatable with personalized options. A combination of therapies often works best:</p>
        <ul className="feature-list">
          <li><strong>Cognitive-Behavioral Therapy (CBT):</strong> Especially CBT for Panic Disorder (CBT-PD), which identifies and changes irrational thoughts. Includes exposure therapy to confront fears safely.</li>
          <li><strong>Medications - Antidepressants:</strong> SSRIs and SNRIs to reduce attack frequency and severity.</li>
          <li><strong>Medications - Benzodiazepines:</strong> For short-term relief of severe attacks, but not for long-term use due to dependence risk.</li>
          <li><strong>Relaxation Techniques:</strong> Deep breathing, progressive muscle relaxation, and mindfulness to manage anxiety and lessen attack intensity.</li>
          <li><strong>Lifestyle Changes:</strong> Regular exercise, balanced diet, adequate sleep, and stress management to complement treatments.</li>
          <li><strong>Support Groups:</strong> Groups for emotional support, coping strategies, and reduced isolation.</li>
          <li><strong>Self-Help Strategies:</strong> Books, online courses, and apps for guidance on managing symptoms.</li>
          <li><strong>Psychodynamic Psychotherapy:</strong> Explores underlying emotional issues contributing to attacks.</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Seek Help Today</h2>
        <p>Treatment should be individualized—what works best varies by person. Early intervention is key. If you or someone you know is struggling, consult a mental health professional like a psychologist or psychiatrist for assessment and a tailored plan. With support, significant relief and improved quality of life are possible.</p>
        <Link to="/contact" className="cta-button">Get Support</Link> {/* Adjust link as needed */}
      </section>
    </div>
  );
};

export default PanicDisorder;
