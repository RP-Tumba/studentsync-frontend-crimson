import React from "react";
import "./BannerSection.css";

const BannerSection = () => {
  return (
    <section className="banner">
      <div className="banner-text">
        <h1>
          DON'T JUST
          <br />
          WATCH. LEARN.
        </h1>
        <p>
          Learn technical skills faster through immersive
          <br />
          experience-based on-demand training
        </p>
        <button className="banner-btn">Get Started</button>
      </div>
      <div className="banner-image">
        <img src="/images/woman-desk.png" alt="Woman at desk" />
      </div>
    </section>
  );
};

export default BannerSection;
