// src/pages/FavouritesPage.js

import React, { useState } from 'react';
import MealCard from '../components/MealCard'; // Adjusted import path
import MenuIcon from '../components/MenuIcon'; // Import MenuIcon
import './FavouritesPage.css'; // Import CSS for styling

const FavouritesPage = () => {
  const [favourites, setFavourites] = useState([
    {
      idMeal: "52772",
      strMeal: "Teriyaki Chicken Casserole",
      strMealThumb: "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
    },
    {
      idMeal: "52893",
      strMeal: "Poutine",
      strMealThumb: "https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg",
    }
  ]);

  const removeFromFavourites = (mealId) => {
    const updatedFavourites = favourites.filter(meal => meal.idMeal !== mealId);
    setFavourites(updatedFavourites);
  };

  return (
    <div className="favourites-page">
      <MenuIcon />
      <div className="main-content">
        <div>
        <h1>My Favourites</h1>
      <div className="meal-list">
        {favourites.map(meal => (
          <MealCard key={meal.idMeal} meal={meal} removeFromFavourites={removeFromFavourites} />
        ))}
      </div>

        </div>
      
      </div>
    </div>
  );
};

export default FavouritesPage;
