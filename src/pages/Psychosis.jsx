import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Psychosis.css'; // See CSS below

const Psychosis = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const images = [
    {
      src: 'https://pbs.twimg.com/media/EYTyL8hWsAAjjXv.jpg',
      alt: 'Brain scan image related to psychosis',
    },
    {
      src: 'https://www.thelancet.com/cms/attachment/7900fe1c-85b6-45bd-a034-4e2622528b34/gr1.jpg',
      alt: 'Graph showing psychosis-related data',
    },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, [currentImage, autoPlay]);

  return (
    <div className="psychosis-page">
      <Link to="/articles" className="back-link">
        ← Back to Articles
      </Link>

      <section className="hero-section">
        <h1 className="main-title">Psychosis</h1>
        <p className="hero-subtitle">Understanding Disconnection from Reality and Pathways to Support</p>
      </section>

      <section
        className="image-slider-section"
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
      >
        <div className="image-container">
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
          <div className="dots-container">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${currentImage === idx ? 'active' : ''}`}
                onClick={() => goToImage(idx)}
                aria-label={`Go to image ${idx + 1}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') goToImage(idx);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2>What is Psychosis?</h2>
        <p>
          Psychosis is a mental health condition characterized by a disconnection from reality, leading to abnormal thoughts, perceptions, emotions, and behaviors. Individuals experiencing psychosis may struggle to distinguish what is real from what is not.
        </p>
      </section>

      <section className="content-section">
        <h2>Symptoms</h2>
        <ul className="feature-list">
          <li><strong>Hallucinations:</strong> Perceiving things without external stimuli, such as hearing voices or seeing things others do not.</li>
          <li><strong>Delusions:</strong> Strongly held false beliefs resistant to reasoning or contradictory evidence.</li>
          <li><strong>Disorganized Thinking:</strong> Difficulty organizing thoughts and expressing them coherently.</li>
          <li><strong>Impaired Insight:</strong> Lack of awareness that thoughts or perceptions are abnormal.</li>
          <li><strong>Impaired Judgment:</strong> Difficulty making sound decisions.</li>
          <li><strong>Changes in Behavior:</strong> Disorganized or abnormal behavior that may be unpredictable.</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>Types of Psychotic Disorders</h2>
        <ul className="feature-list">
          <li><strong>Schizophrenia:</strong> Combination of positive and negative symptoms with social and occupational dysfunction.</li>
          <li><strong>Schizoaffective Disorder:</strong> Psychotic symptoms combined with mood disturbances.</li>
          <li><strong>Brief Psychotic Disorder:</strong> Sudden onset of psychotic symptoms lasting less than one month, often triggered by stress.</li>
          <li><strong>Substance-Induced Psychotic Disorder:</strong> Resulting from drug or alcohol use.</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>Causes and Risk Factors</h2>
        <ul className="feature-list">
          <li><strong>Genetics:</strong> Family history increases risk.</li>
          <li><strong>Brain Structure and Neurochemistry:</strong> Imbalances in neurotransmitters, especially dopamine.</li>
          <li><strong>Prenatal Factors:</strong> Complications during pregnancy or birth.</li>
          <li><strong>Substance Use:</strong> Use of cannabis, LSD, amphetamines, and other substances.</li>
          <li><strong>Trauma:</strong> Exposure to severe stress or trauma.</li>
        </ul>
      </section>

      <section className="content-section">
        <h2>Treatment</h2>
        <ul className="feature-list">
          <li><strong>Antipsychotic Medications:</strong> To manage and alleviate symptoms.</li>
          <li><strong>Psychotherapy:</strong> Cognitive-behavioral therapy (CBT) to address distorted thinking.</li>
          <li><strong>Hospitalization:</strong> For severe or acute episodes.</li>
          <li><strong>Community Support:</strong> Rehabilitation and social services to aid daily functioning.</li>
          <li><strong>Family Education and Support:</strong> Involving family in treatment and support.</li>
        </ul>
      </section>

      <section className="cta-section">
        <h2>Seek Help Today</h2>
        <p>
          Early intervention and professional help are essential for managing psychosis effectively. Consult mental health professionals for accurate diagnosis and personalized treatment plans. With support, many individuals can improve their quality of life.
        </p>
        <Link to="/contact" className="cta-button">
          Get Support
        </Link>
      </section>
    </div>
  );
};

export default Psychosis;