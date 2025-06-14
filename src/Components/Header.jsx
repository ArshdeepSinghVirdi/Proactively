import React, { useState } from 'react';
import '../../styles/Header.css';
import logo from '../assets/Vector.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navItems = [
    'List your practice',
    'For Employers', 
    'Courses',
    'Books',
    'Speakers',
    'Doctors'
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo-section">
          <img src={logo} alt="ProVital Logo" className="logo-img" />
          <span className="logo-text">ProVital</span>
        </div>
        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          {navItems.map((item) => (
            <a key={item} href="#" className="nav-link">
              {item}
            </a>
          ))}
        </nav>
        {/* Login/Signup Dropdown (Desktop) */}
        <div className={`login-dropdown-desktop ${isDropdownOpen ? 'open' : ''}`}>
          <button
            onClick={toggleDropdown}
            className="login-button"
          >
            <span>Login / Signup</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <div className="dropdown-section">
                <div className="dropdown-row">
                  <span className="dropdown-label">Doctor</span>
                  <div className="dropdown-links">
                    <a href="#">Login</a>
                    <a href="#">Sign up</a>
                  </div>
                </div>
                <div className="dropdown-divider"></div>
                <div className="dropdown-row">
                  <span className="dropdown-label">Patients</span>
                  <div className="dropdown-links">
                    <a href="#">Login</a>
                    <a href="#">Sign up</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Hamburger Menu Button (Mobile) */}
        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          ) : (
            <>
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
              <div className="hamburger-line"></div>
            </>
          )}
        </button>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
  <div className="mobile-menu active">
    <div className="mobile-login-section no-bg">
      <div className="mobile-login-row">
        <span className="mobile-login-label">Doctor</span>
        <div className="mobile-login-links">
          <a href="#">Login</a>
          <a href="#">Sign up</a>
        </div>
      </div>
      <div className="divider-line"></div>
      <div className="mobile-login-row">
        <span className="mobile-login-label">Patients</span>
        <div className="mobile-login-links">
          <a href="#">Login</a>
          <a href="#">Sign up</a>
        </div>
      </div>
    </div>
    <div className="mobile-nav tighter">
      {navItems.map((item) => (
        <a key={item} href="#" className="mobile-nav-link">
          {item}
        </a>
      ))}
    </div>
  </div>
)}

    </header>
  );
};

export default Header;