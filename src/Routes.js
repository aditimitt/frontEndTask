// src/Routes.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import FavouritesPage from './pages/FavouritesPage';
import RandomMealPage from './pages/RandomMealPage';
import AboutMePage from './pages/AboutMePage';
import CategoryPage from './pages/CategoryPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/menu" element={<MenuPage />} />
    <Route path="/favourites" element={<FavouritesPage />} />
    <Route path="/random" element={<RandomMealPage />} />
    <Route path="/about" element={<AboutMePage />} />
    <Route path="/meals/:categoryName" element={<CategoryPage />} /> 
  </Routes>
);

export default AppRoutes;
