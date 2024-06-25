// src/pages/MenuPage.js

import React, { useEffect, useState } from 'react';
import { fetchCategories } from '../services/MealDBService'; // Adjusted import path
import MenuIcon from '../components/MenuIcon'; // Adjusted import path
import './MenuPage.css'; // Import CSS for styling
import { Link } from 'react-router-dom';

const MenuPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategoriesData = async () => {
      const data = await fetchCategories();
      setCategories(data);
    };

    fetchCategoriesData();
  }, []);

  return (
    <div className="menu-page">
      <MenuIcon /> {/* Include MenuIcon component */}
      <div className="main-content">
        <h1>Menu</h1>
        <ul className="category-list">
          {categories.map(category => (
            <li key={category.strCategory}>
              <Link to={`/meals/${category.strCategory}`} className="category-link">
                {category.strCategory}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuPage;
