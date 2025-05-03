import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

type ImageSliderProps = {
  images: string[];
  className?: string;
};

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`w-full  h-full  ${className}`}>
      <div className="relative w-full overflow-hidden aspect-video">
        {/* Image */}
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
        {/* Arrows and Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center space-x-4">
          <FaArrowLeft
            onClick={goToPrevious}
            className="cursor-pointer text-black"
          />
          {/* Dots */}
          <div className="flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full border cursor-pointer transition-colors duration-300 ${
                  currentIndex === index
                    ? "bg-black border-black"
                    : "bg-white border-gray-400"
                }`}
              ></div>
            ))}
          </div>
          <FaArrowLeft
            onClick={goToNext}
            className="rotate-180 cursor-pointer text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
