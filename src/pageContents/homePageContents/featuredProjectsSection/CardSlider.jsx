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
    }, 5000); // Auto slide every 5 seconds

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out"
           style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${cards.length * 100}%` }}>
        {cards.map((card) => (
          <div key={card._id} className="w-full flex-shrink-0 px-2">
            <ProjectCard projectsCard={card} />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button onClick={showPrev} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full">
        <ChevronLeft size={24} />
      </button>
      <button onClick={showNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full">
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default CardSlider;
