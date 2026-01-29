import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Anxiety.css'; // Separate CSS file (content below)

const Anxiety = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true); // Optional auto-play

  const images = [
    {
      src: 'https://whereispillmythoughts.com/wp-content/uploads/2018/12/common-teenage-anxiety-depression-symptoms.jpg',
      alt: 'Chart showing symptoms of anxiety and depression in children'
    },
    {
      src: 'https://assets.weforum.org/editor/ZM8M512ZI2ZMZagSB3MwmmX1URuwvccSy5ISTECukwo.PNG',
      alt: 'Infographic on global mental health and anxiety statistics'
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
    <div className="anxiety-page">
      {/* Navigation Back Link */}
      <Link to="/articles" className="back-link">
        ← Back to Articles
      </Link>

      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="main-title">Anxiety Disorder</h1>
        <p className="hero-subtitle">Understanding and Managing Excessive Worry and Fear</p>
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

      {/* Introduction Section */}
      <section className="content-section">
        <h2>Understanding Anxiety Disorders</h2>
        <p>Anxiety disorders encompass a range of conditions characterized by excessive and persistent feelings of anxiety and fear. These feelings can interfere with daily activities, relationships, and overall quality of life. Some common types include:</p>
        <ul className="feature-list">
          <li><strong>Generalized Anxiety Disorder (GAD):</strong> Excessive worry about various life aspects without a specific cause.</li>
          <li><strong>Panic Disorder:</strong> Recurring panic attacks with intense fear, rapid heartbeat, sweating, and a sense of doom.</li>
          <li><strong>Social Anxiety Disorder (Social Phobia):</strong> Intense fear of social situations due to judgment or embarrassment.</li>
          <li><strong>Specific Phobias:</strong> Irrational fear of objects or situations like heights, spiders, or flying.</li>
          <li><strong>Obsessive-Compulsive Disorder (OCD):</strong> Intrusive thoughts leading to compulsive behaviors to reduce anxiety.</li>
          <li><strong>Post-Traumatic Stress Disorder (PTSD):</strong> Trauma-related intrusive memories, nightmares, and emotional distress.</li>
        </ul>
      </section>

      {/* Phobias Section */}
      <section className="content-section">
        <h2>Phobias: A Deeper Look</h2>
        <p>Phobias are intense, irrational fears of specific objects, situations, or activities, often leading to avoidance. They can be categorized as:</p>
        <ul className="feature-list">
          <li><strong>Specific Phobias:</strong> Fears of animals, heights, water, flying, or blood.</li>
          <li><strong>Social Phobia (Social Anxiety Disorder):</strong> Fear of social judgment or embarrassment.</li>
          <li><strong>Agoraphobia:</strong> Fear of places where escape is difficult, like crowds or open spaces.</li>
        </ul>
      </section>

      {/* Treatment Section */}
      <section className="content-section">
        <h2>Treatment Options</h2>
        <p>Treatment combines therapy, medication, and lifestyle changes for effective management:</p>
        <ul className="feature-list">
          <li><strong>Therapy:</strong> Cognitive-behavioral therapy (CBT) and exposure therapy to face fears gradually.</li>
          <li><strong>Medications:</strong> Antidepressants or anti-anxiety meds prescribed by professionals.</li>
          <li><strong>Relaxation Techniques:</strong> Deep breathing, mindfulness, and progressive muscle relaxation.</li>
          <li><strong>Lifestyle Changes:</strong> Exercise, balanced diet, sleep, and avoiding caffeine/alcohol.</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Seek Help Today</h2>
        <p>If you or someone you know is struggling with anxiety or phobias, professional support can make a big difference. These conditions are treatable—reach out to a mental health provider for personalized strategies.</p>
        <Link to="/contact" className="cta-button">Get Support</Link> {/* Adjust link as needed */}
      </section>
    </div>
  );
};

export default Anxiety;
