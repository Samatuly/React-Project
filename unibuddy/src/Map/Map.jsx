import React from "react";
import { useState, useEffect } from "react";
import "./Map.css";
import { MapImages } from "./map-images";
const Map = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % MapImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + MapImages.length) % MapImages.length
    );
  };
  useEffect(() => {
    // Auto-advance to the next slide every 2000 milliseconds (2 seconds)
    const intervalId = setInterval(nextSlide, 2000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount
  return (
    <div className="map-wrapper">
      <div class="slider-container">
        {MapImages.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          >
            <img src={image.link} alt={`Image ${index + 1}`} />
          </div>
        ))}
        <button onClick={prevSlide} className="prev-button">
          Previous
        </button>
        <button onClick={nextSlide} className="next-button">
          Next
        </button>
      </div>
    </div>
  );
};

export default Map;
