import React, { useState } from 'react';
import '../../styles/HowItWorksSection.css';
import line from '../assets/gradient.png'
import left from '../assets/arrow1.png'
import right from '../assets/arrow2.png'

const HowItWorksSection = () => {
  const [activeTab, setActiveTab] = useState('Nutrition');
  
  const tabs = [
    'Nutrition',
    'Physical activity', 
    'Restorative sleep',
    'Stress management',
    'Social connection',
    'Substance abuse'
  ];

  return (
    <section className="how-it-works-section">
       <div className="line-image-wrapper">
        <img src={line} alt="Line" className="line-image" />
      </div>
      <div className="how-it-works-container">
        {/* Section Header */}
        <div className="section-header">
          <p className="section-subtitle">
            HOW IT WORKS
          </p>
          <div className="section-title-row">
            <h2 className="section-title">
             <span className="howitworks-gradient-text">Lifestyle as medicine:</span>
             <span className="normal-title"> The six pillars</span>
           </h2>
           <div className="left-gradient-circle" />
           <div className="arrows-gradient-bg"></div>
            <div className="navigation-arrows">
            <div className="right-gradient-circle" />
            <button className="nav-arrow">
              <img src={right} alt="Previous" className="arrow-img" />
            </button>
            <button className="nav-arrow">
              <img src={left} alt="Next" className="arrow-img" />
            </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="tabs-container">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="mobile-arrows">
          <button className="nav-arrow">
            <svg className="nav-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button className="nav-arrow">
            <svg className="nav-arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;