import React from "react";
import "./VisionSection.css";

const VisionSection = () => {
  return (
    <section className="vision-section">
      <h2>Kepler College Students Management</h2>
      <div className="vision-cards">
        <div className="card">
          <h3>Digital Transformation</h3>
          <p>We aim to streamline student services with innovative tech.</p>
        </div>
        <div className="card highlight">
          <h3>Disciplined and Productive</h3>
          <p>Encouraging integrity and student performance culture.</p>
        </div>
        <div className="card">
          <h3>Race Towards Greatness</h3>
          <p>We inspire students to strive for excellence.</p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
