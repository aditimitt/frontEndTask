// src/pages/AboutMePage.js

import React from 'react';
import MenuIcon from '../components/MenuIcon'; // Adjusted import path
import './AboutMePage.css'; // Import CSS for styling

const AboutMePage = () => {
  return (
    <div className="about-me-page">
      <MenuIcon /> {/* Include MenuIcon component */}
      <div className="main-content">
        <h1>About Me</h1>
        <p>Personal comments and information.</p>
      </div>
    </div>
  );
};

export default AboutMePage;
