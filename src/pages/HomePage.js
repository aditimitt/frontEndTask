// src/pages/HomePage.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MenuPage from './MenuPage';
import FavouritesPage from './FavouritesPage';
import RandomMealPage from './RandomMealPage';
import MenuIcon from '../components/MenuIcon';
import './HomePage.css';

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (pageName) => {
    setCurrentPage(pageName);
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case 'menu':
        return <MenuPage />;
      case 'favourites':
        return <FavouritesPage />;
      case 'random':
        return <RandomMealPage />;
      default:
        return (
          <div>
            <h1>Home Page</h1>
            <div className="home-buttons">
          <div className="button-row">
          <Link to="/menu" className="home-btn" onClick={() => handleMenuClick('menu')}>
          Menu
        </Link>
        <Link to="/favourites" className="home-btn" onClick={() => handleMenuClick('favourites')}>
          Favorites
        </Link>
          </div>
         
         
        <Link to="/random" className="home-btn" onClick={() => handleMenuClick('random')}>
          Random Meal
        </Link>
        </div>
          </div>
        );
    }
  };

  return (
    <div className="home-page">
      {/* Menu Icon */}
      <MenuIcon />
  

      {/* Main Content */}
      <div className="main-content">
        {renderPageContent()}
      </div>
    </div>
  );
};

export default HomePage;
