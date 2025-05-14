import React from "react";

export default function Appp() {
  return (
    <div>
      {/* Header */}
      <header>
        <div>
          <img src="/logo.png" alt="StudentSync Logo" />
          <span>STUDENTSYNC</span>
        </div>
        <div>&#9776;</div>
      </header>

      {/* Hero Section */}
      <section>
        <p>Students management platform</p>
        <h1>
          STUDENTSYNC <br /> MANAGEMENT WEB APP
        </h1>
        <p>Students for the Academic Year 2025/2026</p>
        <div>
          <button>Learn More</button>
          <button>All Schools</button>
        </div>
      </section>

      {/* Image Section */}
      <section>
        <img src="/p1.png" alt="Main" />
        <img src="/p2.png" alt="1" />
        <img src="/" alt="2" />
        <img src="/" alt="3" />
      </section>

      {/* Culture Section */}
      <section>
        <p>Vibrant Culture</p>
        <h2>The Gym College StudentSync</h2>
      </section>

      {/* Cards Section */}
      <section>
        <article>
          <h3>Digital Transformation</h3>
          <p>
            Digital transformation empowers students with tools and 
            skills that extend beyond technical proficiency. Students in 
            learning environments where ethical digital citizenship and proper online 
            conduct become the bedrock of their future success in an increasingly connected world.
          </p>
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
  );
}
