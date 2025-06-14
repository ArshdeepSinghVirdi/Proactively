import React from 'react';
import '../../styles/SearchSection.css';
import location from '../assets/location.png'
import insurance from '../assets/insurance.png'

const SearchSection = () => {
  return (
    <section className="search-section">
      <div className="search-container">
        <div className="search-card">
          <div className="search-grid">
            <div className="search-field">
              <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <input
                type="text"
                placeholder="Condition, procedure, speciality..."
                className="search-input"
              />
            </div>

            <div className="search-field">
            <img src={location} alt="Location" className="search-icon" />
              <input
                type="text"
                placeholder="City, state, or zipcode"
                className="search-input"
              />
            </div>

            <div className="search-field">
            <img src={insurance} alt="Location" className="search-icon" />
              <input
                type="text"
                placeholder="Insurance carrier"
                className="search-input"
              />
            </div>

            <button className="search-button">
              <svg className="search-button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <span>Find now</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;