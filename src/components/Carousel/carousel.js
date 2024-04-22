import React, { useState } from 'react';
import './carousel.css';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="arrow left-arrow">&#10094;</button>
      <img src={images[currentImageIndex]} alt="slide" className="slide" />
      <button onClick={nextSlide} className="arrow right-arrow">&#10095;</button>
    </div>
  );
};

export default Carousel;
