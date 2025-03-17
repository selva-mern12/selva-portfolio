import { useState, useEffect } from "react";
import "./index.css";

const ImageSlider = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showSlide = (index) => {
    setCurrentIndex((index + images.length) % images.length);
  };

  const nextSlide = () => showSlide(currentIndex + 1);
  const prevSlide = () => showSlide(currentIndex - 1);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="slider">
      <div
        className="slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="slide">
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="nav-buttons">
        <button className="nav-button" onClick={prevSlide}>❮</button>
        <button className="nav-button" onClick={nextSlide}>❯</button>
      </div>
    </div>
  );
};

export default ImageSlider;
