import React from "react";
import "./css/AboutUs.css";
import sampleImg from "../assets/img/Untitled design.png"; // replace with your own image

const AboutUs = () => {
  return (
    <section className="aboutus">
   

      {/* ====== ABOUT US SECTION ====== */}
      <div className="aboutus-container">
        {/* LEFT SIDE TEXT */}
        <div className="aboutus-text">
          <h4 className="aboutus-subtitle">About Me</h4>
          <h2 className="aboutus-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
          <p className="aboutus-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
            pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in
            ullamcorper quis vestibulum ligula elementum ut.
          </p>
          <button className="aboutus-btn">View Services</button>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="aboutus-image-wrapper">
          <img src={sampleImg} alt="About us" className="aboutus-image" />
          <div className="aboutus-card">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              purus lectus viverra in semper nec pretium mus.
            </p>
          </div>
        </div>
      </div>

         {/* ====== FEATURE CARDS SECTION ====== */}
      <div className="feature-cards">
        <div className="feature-card">
          <div className="feature-icon">🍏</div>
          <h3>Holistic Athlete Management</h3>
          <p>ATIUM empowers you to manage athletes comprehensively, from tracking and monitoring training programs to gaining intelligent insights.</p>
          <a href="/">More</a>
        </div>
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Performance Intelligence</h3>
          <p>We leverage data against evidence-backed research to provide actionable insights, enabling you to enhance high-performance standards and cultivate elite athletes.</p>
          <a href="/">More</a>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🥗</div>
          <h3>Single Data Layer</h3>
          <p>All stakeholders can collaborate seamlessly on a unified platform, ensuring efficient communication and a cohesive approach to athlete development.</p>
          <a href="/">More</a>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📱</div>
          <h3>Efficient Collaboration</h3>
          <p>Bring athletes, coaches, medical staff, and leaders together for streamlined collaboration and communication.</p>
          <a href="/">More</a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
