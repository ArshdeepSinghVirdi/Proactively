import React from 'react';
import '../../styles/HeroSection.css';
import Column1_1 from '../assets/Column1_1.png';
import Column1_2 from '../assets/Column1_2.png';
import Column1_3 from '../assets/Column1_3.png';
import Column1_4 from '../assets/Column1_4.png';
import Column2_1 from '../assets/column2_1.png';
import Column2_2 from '../assets/column2_2.png';
import Column2_3 from '../assets/column2_3.png';
import Column2_4 from '../assets/column2_4.png';
import Column2_5 from '../assets/column2_5.png';
import VectorImage from '../assets/line.png'; 

const HeroSection = ({ children }) => {
  const allImages = [
    Column1_1, Column1_2, Column1_3, Column1_4,
    Column2_1, Column2_2, Column2_3, Column2_4, Column2_5,
    Column1_1, Column1_2, Column1_3, Column1_4,
    Column2_1, Column2_2, Column2_3, Column2_4, Column2_5
  ];

  return (
    <section className="hero-section">
      <div className="blue-gradient-top-right"></div>
      <div className="hero-container">
        <div className="hero-content">
          {/* Desktop: Column 1 - Images moving down */}
          <div className="hero-images">
            <div className="images-animated-col1">
              <img src={Column1_1} alt="Lifestyle 1" className="hero-image-col1" />
              <img src={Column1_2} alt="Lifestyle 2" className="hero-image-col1" />
              <img src={Column1_3} alt="Lifestyle 3" className="hero-image-col1" />
              <img src={Column1_4} alt="Lifestyle 4" className="hero-image-col1" />
            </div>
          </div>

          {/* Desktop: Column 2 - Images moving up with yellow background */}
          <div className="yellow-gradient-bg"></div>
          <div className="hero-images-col2-container">
            <div className="hero-images-col2">
              <div className="images-animated-col2">
                <img src={Column2_1} alt="Medicine 1" className="hero-image-col2" />
                <img src={Column2_2} alt="Medicine 2" className="hero-image-col2" />
                <img src={Column2_3} alt="Medicine 3" className="hero-image-col2" />
                <img src={Column2_4} alt="Medicine 4" className="hero-image-col2" />
                <img src={Column2_5} alt="Medicine 5" className="hero-image-col2" />
              </div>
            </div>
          </div>

          {/* Desktop: Text Content */}
          <div className="hero-text-block">
            <div className="hero-title-block">
              <div className="hero-title-line1">Book an appointment with</div>
              <div className="hero-title-line2">
                <span className="hero-gradient-text">lifestyle medicine</span> experts
              </div>
              <div className="hero-subtitle">Optimize your lifestyle and reverse chronic diseases.</div>
            </div>
          </div>
        </div>
        <div className="vector-image-container vector-image-mobile-behind-search">
          <img src={VectorImage} alt="Decorative vector" className="vector-image" />
        </div>
        {children && <div className="hero-search-bar-wrapper">{children}</div>}
        <div className="mobile-images-container">
          <div className="mobile-images-scroll">
            {allImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Lifestyle ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;