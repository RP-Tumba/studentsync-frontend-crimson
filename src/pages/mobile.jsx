import React from "react";
import "../index.css"
export default function Appp() {
  return (
    <div className="all">
    <div className="melo">
      {/* Header */}
      <header>
        <div>
          <img src="logo.png" alt="" />
          <span className="std">STUDENTSYNC</span>
        </div>
        <div>&#9776;</div>
      </header>

      {/* Hero Section */}
      <section>
        <div className="management"><p>Students management platform</p>
        <h1>
          STUDENTSYNC <br /> MANAGEMENT WEB APP
        </h1>
        <h4>Students for the Academic Year 2025/2026</h4>
        <div>
          <button className="more">Learn More</button>
          <button className="all">All Schools</button>
        </div>
        </div>
      </section>

      {/* Image Section */}
      <section>
        <img src="./p1.jpg" alt="" />
        <img src="./p2.jpg"/>
        <img src="/" alt="" />
        <img src="/" alt="" />
      </section>

      {/* Culture Section */}
      <section>
        <div className="vibrant">
        <p>Vibrant Culture</p>
        <h2>The Gym College StudentSync</h2><br></br><br></br>
        </div>
      </section>

      {/* Cards Section */}
      <section>
        <article>
            <div className="digital">
          <h3>Digital Transformation</h3><br></br>
          <p>
            Digital transformation empowers students with tools and 
            skills that extend beyond technical proficiency. Students in 
            learning environments where ethical digital citizenship and proper online 
            conduct become the bedrock of their future success in an increasingly connected world.
          </p></div>
        </article>

        <article>
          <h3>Race towards success</h3>
          <p>
            Competing and striving in goodness, having speed and accuracy in doing good deeds. 
            Trained to act swiftly in matters, completing tasks quickly and efficiently.
          </p>
        </article>
      </section>
    </div>
    </div>
  );
}
