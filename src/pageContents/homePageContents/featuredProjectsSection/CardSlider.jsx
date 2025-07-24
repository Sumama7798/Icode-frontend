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
    <div className="relative w-full max-w-[500px] h-[420px] mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out w-full h-full"
        style={{
          width: `${cards.length * 100}%`,
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {cards.map((card) => (
          <div
            key={card._id}
            className="flex-shrink-0 flex-grow-0 w-full h-full px-2"
            style={{ flexBasis: '100%' }}
          >
            <ProjectCard projectsCard={card} />
          </div>
        ))}
      </div>

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
