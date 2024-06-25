// src/components/RandomMealCard.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import './RandomMealCard.css'; // Import CSS for styling

const RandomMealCard = ({ meal, addToFavourites }) => {
  return (
    <div className="random-meal-card">
      <img className="meal-image" src={meal.strMealThumb} alt={meal.strMeal} />
      <div className="meal-details">
        <p className="meal-name">{meal.strMeal}</p>
        <button className="heart-icon" onClick={() => addToFavourites(meal)}>
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
    </div>
  );
};

export default RandomMealCard;
