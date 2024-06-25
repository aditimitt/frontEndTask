// src/components/MenuIcon.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MenuIcon.css'; // Import CSS for styling

const MenuIcon = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div className="menu-lines">
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>

      {/* Sidebar or Menu */}
      <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/menu" className="sidebar-link" onClick={toggleMenu}>
          Menu
        </Link>
        <Link to="/favourites" className="sidebar-link" onClick={toggleMenu}>
          Favorites
        </Link>
        <Link to="/random" className="sidebar-link" onClick={toggleMenu}>
          Random Meal
        </Link>
        <Link to="/about" className="sidebar-link about-link" onClick={toggleMenu}>
          About Me
        </Link>
      </div>
    </div>
  );
};

export default MenuIcon;
