// src/components/SideMenu.js

import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = ({ isOpen, closeMenu }) => {
  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Menu', path: '/menu' },
    { label: 'Favorites', path: '/favourites' },
    { label: 'Random Meal', path: '/random' },
  ];

  const menuStyle = {
    width: isOpen ? '250px' : '0',
  };

  return (
    <div className="side-menu" style={menuStyle}>
      <button className="close-btn" onClick={closeMenu}>
        &times;
      </button>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path} onClick={closeMenu}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
