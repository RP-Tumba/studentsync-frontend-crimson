import React from "react";
import "../index.css"
export default function Appp() {
  return (
    <fieldset className="set">
    <div className="all">
    <div className="melo">
      {/* Header */}
      <header className="header">
        <div className="logo-cont">
         <img src="./logo.png" alt="" />
          
          <span className="std">STUDENTSYNC</span>
          
        </div>
        <div className="icon">&#9776;</div>
      </header>
      <section>
        <div className="management"><p>Students management platform</p>
        <h1>
          STUDENTSYNC <br /> MANAGEMENT WEB APP
        </h1>
        <h4>Students for the Academic Year 2025/2026</h4>
        <div className="buttons">
          <button className="btn1">Learn More</button>
          <button className="btn2">All Schools</button>
        </div>
        </div>
      </section>

      {/* Image Section */}
      <section>
        <div className="img-grid">
          <div className="img-grid">
        <img src="./p1.jpg"/>
        </div>
        <div className="main-img">
        <img src="./p2.jpg"/>
        <img src="./p3.jpg" alt="" />
        <img src="./p4.jpg" alt="" />
        </div>
        </div>
      </section>

      {/* Culture Section */}
      <section>
        <div className="vibrant">
        <p>Vibrant Culture</p>
        <h2>The Gym College StudentSync</h2>
        </div>
      </section>

      {/* Cards Section */}
      <section>
        <article>
            
           <div className="digital">
          <h3>Digital Transformation</h3>
          <p>
            Digital transformation empowers students with tools and 
            skills that extend beyond technical proficiency. Students in 
            learning environments where ethical digital citizenship and proper online 
            conduct become the bedrock of their future success in an increasingly connected world.
          </p></div>
        </article><br></br>

        <article>
            <div className="race">
          <h3>Race towards success</h3>
          <p>
            Competing and striving in goodness, having speed and accuracy in doing good deeds. 
            Trained to act swiftly in matters, completing tasks quickly and efficiently.
          </p></div>
        </article>
      </section>
      
    </div>
    </div>
    
    </fieldset>
  );
}
