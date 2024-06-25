// src/components/HeartIcon.js

import React, { useState } from 'react';
import './HeartIcon.css'; // Import CSS for styling

const HeartIcon = ({ onClick }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
    if (onClick) onClick();
  };

  return (
    <span className={`heart-icon ${isFavorited ? 'favorited' : ''}`} onClick={toggleFavorite}>
      &#9829; {/* Unicode for heart symbol */}
    </span>
  );
};

export default HeartIcon;
