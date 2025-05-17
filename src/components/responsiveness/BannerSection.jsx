import React from "react";
import "./BannerSection.css";
import youngwoman from '../../images/young-woma.jpg';
import softwaredevelopeer from '../../images/software-developer-logo-png.png';
import students2 from '../../images/students2.jpg';

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
        <img src={youngwoman} alt="Woman at desk" />
      </div>
      <div className="banna-image-1">
         <img className=" banner-1-image" src={students2} alt="Woman at desk" />
         <img className=" banner-2-image" src={softwaredevelopeer} alt="Woman at desk" />
      </div>
    </section>
  );
};

export default BannerSection;
