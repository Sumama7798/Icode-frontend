import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard.jsx';

const CardSlider = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const showPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      showNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="relative w-full max-w-[500px] mx-auto overflow-hidden">
      {/* Outer slider track */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {cards.map((card) => (
          <div
            key={card._id}
            className="w-full flex-shrink-0 px-2"
            style={{ flex: '0 0 100%' }} // ⚠️ KEY FIX: each slide is exactly 100% of the container
          >
            <ProjectCard projectsCard={card} />
          </div>
        ))}
      </div>
      {/* Buttons */}
      <button
        onClick={showPrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={showNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default CardSlider;
