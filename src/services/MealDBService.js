// services/MealDBService.js

import axios from 'axios';

const API_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/categories.php`);
    return response.data.categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

export const fetchMealsByCategory = async (category) => {
  try {
    const response = await axios.get(`${API_URL}/filter.php?c=${category}`);
    return response.data.meals;
  } catch (error) {
    console.error(`Error fetching meals for category ${category}:`, error);
    return [];
  }
};

export const fetchRandomMeal = async () => {
  try {
    const response = await axios.get(`${API_URL}/random.php`);
    return response.data.meals[0];
  } catch (error) {
    console.error('Error fetching random meal:', error);
    return null;
  }
};
