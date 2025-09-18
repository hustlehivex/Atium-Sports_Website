import React from "react";
import "./css/AboutUsGallery.css";

const AboutUsGallery = () => {
  return (
    <section className="aboutus-gallery">
      <div className="aboutus-gallery-container">
        {/* LEFT SIDE TEXT */}
        <div className="aboutus-gallery-text">
          <h2>
            Meet Our <span>Creative Team</span>
          </h2>
          <p>
            Semaj Africa is an online education platform that delivers video
            courses, programs and resources for Individuals, Advertising &
            Media Specialists, Online Marketing Professionals, Freelancers and
            anyone looking to pursue a career in digital marketing, Accounting,
            Web development, Programming, Multimedia and CAD design.
          </p>
        </div>

        {/* RIGHT SIDE GALLERY */}
        <div className="aboutus-gallery-grid">
          <img src="https://www.bing.com/th/id/OIP.6pjI_x9Kh3ALaXpbMcJufQHaFi?w=248&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="gallery1" />
          <img src="https://www.bing.com/th/id/OIP.6pjI_x9Kh3ALaXpbMcJufQHaFi?w=248&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="gallery2" />
          <img src="https://www.bing.com/th/id/OIP.6pjI_x9Kh3ALaXpbMcJufQHaFi?w=248&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="gallery3" />
          <img src="https://www.bing.com/th/id/OIP.6pjI_x9Kh3ALaXpbMcJufQHaFi?w=248&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="gallery4" />
          <img src="https://www.bing.com/th/id/OIP.6pjI_x9Kh3ALaXpbMcJufQHaFi?w=248&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="gallery5" />
          <div className="video-box">
            <span className="youtube-icon">▶</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsGallery;
