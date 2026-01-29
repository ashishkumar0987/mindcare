import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Ocd.css'; // Separate CSS file (content below)

const Ocd = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true); // Optional auto-play

  const images = [
    {
      src: 'https://www.therecoveryvillage.com/wp-content/uploads/2022/04/1-OCD-Statistics.webp',
      alt: 'Statistics on OCD prevalence and demographics'
    },
    {
      src: 'https://www.kff.org/wp-content/uploads/2023/03/share-of-adults-reporting-symptoms-of-anxiety-and-or-depressive-disorder-february-2023-Feature-image-v2-2.png',
      alt: 'Chart on anxiety and depressive disorder symptoms in adults'
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
    <div className="ocd-page">
      {/* Navigation Back Link */}
      <Link to="/articles" className="back-link">
        ← Back to Articles
      </Link>

      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="main-title">Obsessive-Compulsive Disorder (OCD)</h1>
        <p className="hero-subtitle">Managing Obsessions and Compulsions for a Balanced Life</p>
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
        <h2>Understanding OCD</h2>
        <p>Obsessive-Compulsive Disorder (OCD) is a mental health condition characterized by obsessions and compulsions. Obsessions are intrusive, distressing, and persistent thoughts, images, or urges that cause anxiety or distress. Compulsions are repetitive behaviors or mental acts that individuals feel compelled to perform in response to obsessions, often to reduce associated distress.</p>
      </section>

      {/* Symptoms Section */}
      <section className="content-section">
        <h2>Symptoms of OCD</h2>
        <p>OCD symptoms typically involve both obsessions and compulsions. Common examples include:</p>
        <ul className="feature-list">
          <li><strong>Obsessions:</strong> Fears of contamination, harm to oneself or others, concerns about order or symmetry, and unwanted taboo thoughts or images.</li>
          <li><strong>Compulsions:</strong> Repetitive behaviors like excessive handwashing, checking locks repeatedly, counting, or mentally repeating phrases to alleviate anxiety.</li>
        </ul>
      </section>

      {/* Treatment Section */}
      <section className="content-section">
        <h2>Treatment for OCD</h2>
        <p>OCD is treatable with several effective options. Treatment plans should be personalized based on symptom severity and individual needs:</p>
        <ul className="feature-list">
          <li><strong>Cognitive-Behavioral Therapy (CBT):</strong> Particularly Exposure and Response Prevention (ERP), where individuals face obsessions gradually while resisting compulsions to reduce anxiety.</li>
          <li><strong>Medications:</strong> Selective Serotonin Reuptake Inhibitors (SSRIs) to lessen symptom severity (may take weeks to work fully).</li>
          <li><strong>Combination Therapy:</strong> CBT paired with medication for severe or treatment-resistant OCD.</li>
          <li><strong>Mindfulness-Based Therapies:</strong> Techniques like mindfulness-based cognitive therapy (MBCT) or stress reduction (MBSR) to increase awareness and acceptance of obsessions without compulsive reactions.</li>
          <li><strong>Support Groups:</strong> Connecting with others who have OCD for emotional support, coping strategies, and reduced isolation.</li>
          <li><strong>Deep Brain Stimulation (DBS):</strong> For rare, severe, treatment-resistant cases, involving surgical electrode implantation to modulate brain activity.</li>
          <li><strong>Lifestyle Changes:</strong> Regular exercise, balanced diet, and stress management to support overall well-being and complement other treatments.</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Seek Help Today</h2>
        <p>Early intervention is key for managing OCD effectively. If you or someone you know is experiencing symptoms, consult a mental health professional like a psychologist or psychiatrist for diagnosis and tailored treatment. With the right support, individuals can significantly improve their quality of life.</p>
        <Link to="/contact" className="cta-button">Get Support</Link> {/* Adjust link as needed */}
      </section>
    </div>
  );
};

export default Ocd;
