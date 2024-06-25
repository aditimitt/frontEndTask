// src/components/NavBar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideMenu from './SideMenu';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </button>
        <Link to="/" className="navbar-brand">
          Home Page Heading
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/menu" className="nav-link">
          Menu
        </Link>
        <Link to="/favourites" className="nav-link">
          Favorites
        </Link>
        <Link to="/random" className="nav-link">
          Random Meal
        </Link>
      </div>
      <SideMenu isOpen={isMenuOpen} closeMenu={closeMenu} />
    </nav>
  );
};

export default NavBar;
