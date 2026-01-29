import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Schizophrenia.css'; // Separate CSS file (content below)

const Schizophrenia = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true); // Optional auto-play

  const images = [
    {
      src: 'https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fs41537-020-0102-z/MediaObjects/41537_2020_102_Fig1_HTML.png',
      alt: 'Diagram of schizophrenia brain pathways and symptoms'
    },
    {
      src: 'https://www.analysisgroup.com/globalassets/uploadedimages/content/insights/ag_features/health_care_bulletin/bulletin_fall_2016/economic_burden_of_schizophrenia_in_the_us_exceeded_$155_billion_in_2013/schizophrenia_graph.gif',
      alt: 'Graph on the economic burden and prevalence of schizophrenia'
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
    <div className="schizophrenia-page">
      {/* Navigation Back Link */}
      <Link to="/articles" className="back-link">
        ← Back to Articles
      </Link>

      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="main-title">Schizophrenia</h1>
        <p className="hero-subtitle">Understanding Thoughts, Emotions, and Pathways to Support</p>
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
        <h2>Understanding Schizophrenia</h2>
        <p>Schizophrenia is a serious mental health disorder that affects how a person thinks, feels, and behaves. It often involves a disconnection from reality, leading to challenges in daily functioning. While the exact cause is unknown, it typically emerges in late adolescence or early adulthood and can be managed with treatment, though it's a lifelong condition.</p>
      </section>

      {/* Symptoms Section */}
      <section className="content-section">
        <h2>Symptoms of Schizophrenia</h2>
        <p>Symptoms are often grouped into positive (added experiences), negative (lost abilities), and cognitive categories:</p>
        <ul className="feature-list">
          <li><strong>Positive Symptoms:</strong> Hallucinations (e.g., hearing voices), delusions (false beliefs), disorganized thinking or speech, and unusual movements.</li>
          <li><strong>Negative Symptoms:</strong> Reduced emotions, lack of motivation, social withdrawal, flat affect (limited facial expressions), and difficulty experiencing pleasure.</li>
          <li><strong>Cognitive Symptoms:</strong> Problems with memory, attention, decision-making, and executive functioning.</li>
        </ul>
      </section>

      {/* Types Section */}
      <section className="content-section">
        <h2>Types of Schizophrenia</h2>
        <p>Schizophrenia is classified into subtypes based on predominant symptoms (though modern diagnosis often uses a spectrum approach):</p>
        <ul className="feature-list">
          <li><strong>Paranoid Schizophrenia:</strong> Dominated by delusions and hallucinations, often involving persecution or grandeur.</li>
          <li><strong>Disorganized Schizophrenia:</strong> Features disorganized speech, behavior, and flat or inappropriate emotions.</li>
          <li><strong>Catatonic Schizophrenia:</strong> Involves disturbances in movement, such as rigidity, agitation, or stupor.</li>
          <li><strong>Undifferentiated Schizophrenia:</strong> Symptoms from multiple subtypes without a clear dominant one.</li>
          <li><strong>Residual Schizophrenia:</strong> Occurs after an acute episode, with lingering negative symptoms but no active positive ones.</li>
        </ul>
      </section>

      {/* Causes Section */}
      <section className="content-section">
        <h2>Causes of Schizophrenia</h2>
        <p>The disorder results from a complex interplay of factors:</p>
        <ul className="feature-list">
          <li><strong>Genetic Factors:</strong> Higher risk if a close family member has schizophrenia (heritability estimated at 80%).</li>
          <li><strong>Biological Factors:</strong> Imbalances in brain chemicals (e.g., dopamine, glutamate) and structural differences in the brain.</li>
          <li><strong>Environmental Factors:</strong> Prenatal exposure to viruses, malnutrition, stress, or drug use (e.g., cannabis in adolescence) can trigger onset.</li>
        </ul>
      </section>

      {/* Treatment Section */}
      <section className="content-section">
        <h2>Treatment for Schizophrenia</h2>
        <p>Treatment focuses on managing symptoms and improving quality of life through a combination of approaches:</p>
        <ul className="feature-list">
          <li><strong>Medications:</strong> Antipsychotics (e.g., risperidone, olanzapine) to reduce positive symptoms and prevent relapses.</li>
          <li><strong>Psychotherapy:</strong> Cognitive-behavioral therapy (CBT) to cope with hallucinations/delusions, and family therapy for support.</li>
          <li><strong>Social and Vocational Rehabilitation:</strong> Skills training for daily living, employment, and social interactions.</li>
          <li><strong>Lifestyle and Support:</strong> Healthy diet, exercise, avoiding substances, and coordinated specialty care (CSC) programs for early intervention.</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Seek Help Today</h2>
        <p>Early diagnosis and ongoing support from mental health professionals are crucial for managing schizophrenia. If you or someone you know shows signs, consult a psychiatrist or healthcare provider for evaluation and a personalized plan. With treatment, many individuals lead productive lives.</p>
        <Link to="/contact" className="cta-button">Get Support</Link> {/* Adjust link as needed */}
      </section>
    </div>
  );
};

export default Schizophrenia;