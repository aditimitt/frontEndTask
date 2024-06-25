// src/pages/CategoryPage.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMealsByCategory } from '../services/MealDBService'; // Adjusted import path
import MenuIcon from '../components/MenuIcon'; // Adjusted import path
import './CategoryPage.css'; // Import CSS for styling
import MealCard from '../components/MealCard'; // Adjusted import path

const CategoryPage = () => {
  const { categoryName } = useParams(); // Extracting category name from URL params
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const data = await fetchMealsByCategory(categoryName);
      setMeals(data);
    };

    fetchMeals();
  }, [categoryName]); // Fetch meals when categoryName changes

  return (
    <div className="category-page">
      <MenuIcon /> {/* Include MenuIcon component */}
      <div className="main-content">
        <h1>{categoryName} Meals</h1>
        <div className="meal-list">
          {meals.length === 0 ? (
            <p>No meals found for {categoryName}.</p>
          ) : (
            meals.map(meal => (
              <MealCard key={meal.idMeal} meal={meal} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
