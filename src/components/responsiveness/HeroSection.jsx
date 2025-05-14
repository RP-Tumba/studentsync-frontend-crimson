import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>STUDENTSYNC MANAGEMENT WEB APP</h1>
        <p>Students for the Academic Year 2025/2026</p>
        <div className="hero-buttons">
          <button className="btn primary">Get Started</button>
          <button className="btn secondary">Learn More</button>
        </div>
      </div>
      <div className="hero-images">
        <img src="/images/students1.jpg" alt="Students" />
        <img src="/images/students2.jpg" alt="Class" />
        <img src="/images/students3.jpg" alt="Event" />
        <img src="/images/students4.jpg" alt="Discussion" />
      </div>
    </section>
  );
};

export default HeroSection;
