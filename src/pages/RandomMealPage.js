// src/pages/RandomMealPage.js

import React, { useState } from 'react';
import RandomMealCard from '../components/RandomMealCard'; // Adjusted import path
import { fetchRandomMeal } from '../services/MealDBService';
import MenuIcon from '../components/MenuIcon'; // Adjusted import path
import './RandomMealPage.css'; // Import CSS for styling

const RandomMealPage = () => {
  const [randomMeal, setRandomMeal] = useState(null);

  // Function to generate a random meal
  const generateRandomMeal = async () => {
    const meal = await fetchRandomMeal();
    setRandomMeal(meal);
  };

  // Function to remove the random meal from favourites
  const removeFromFavourites = () => {
    setRandomMeal(null);
  };

  // Function to add the meal to favourites
  const addToFavourites = (meal) => {
    console.log(`Added to favourites: ${meal.strMeal}`);
    // Implement your logic here to add meal to favourites
  };

  return (
    <div className="random-meal-page">
      <MenuIcon /> {/* Include MenuIcon component */}
      <div className="main-content">
        <h1>Random Meal</h1>
        <div className="random-meal-container">
          {randomMeal && <RandomMealCard meal={randomMeal} addToFavourites={addToFavourites} />}
          <button className="generate-button" onClick={generateRandomMeal}>Generate</button>
        </div>
      </div>
    </div>
  );
};

export default RandomMealPage;
