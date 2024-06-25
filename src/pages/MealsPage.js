// pages/MealsPage.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMealsByCategory } from '../services/MealDBService';

const MealsPage = () => {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const data = await fetchMealsByCategory(category);
      setMeals(data);
    };

    fetchMeals();
  }, [category]);

  return (
    <div>
      <h2>Meals Page - Category: {category}</h2>
      <div className="meal-list">
        {meals.map(meal => (
          <div key={meal.idMeal} className="meal-card">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>{meal.strMeal}</p>
            {/* Add/remove from favourites functionality */}
            {/* Example: <button onClick={() => addToFavorites(meal)}>Add to Favorites</button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealsPage;
