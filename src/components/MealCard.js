// src/components/MealCard.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import './MealCard.css'; // Make sure to add necessary styles here

const MealCard = ({ meal, removeFromFavourites }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
    // Optionally, you can perform other actions when toggling favourite state
    // For example, add/remove from a favourites list
    if (isFavourite) {
      // removeFromFavourites(meal.idMeal);
    } else {
      // Add to favourites list or perform other actions
    }
  };

  return (
    <div className='meal-card-body'>
      <div className="meal-card">
      <div className="meal-image">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </div>
      <div className="meal-details">
        <h3>{meal.strMeal}</h3>
      
      </div>
    </div>
        <FontAwesomeIcon 
          icon={isFavourite ? solidHeart : regularHeart} 
          className={`heart-icon ${isFavourite ? 'favourite' : ''}`} 
          onClick={toggleFavourite} 
        />
    </div>
    
    
  );
};

export default MealCard;
