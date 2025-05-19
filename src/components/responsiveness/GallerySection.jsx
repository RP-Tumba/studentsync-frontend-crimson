import React from "react";
import "./GallerySection.css";
import student123 from "../../images/student1234.jpg";
import students12 from "../../images/students12.jpg";
import trainer from "../../images/trainer.jpg";

const GallerySection = () => {
  return (
    <section className="gallery-section">
      <h2>  Students Lifestyle</h2>
      <div className="gallery-grid">
        <img src={student123} alt="Gallery 1" />
        <img src={trainer} alt="Gallery 2" />
        <img src={students12} alt="Gallery 3" />
      </div>
    </section>  
  );
};

export default GallerySection;
