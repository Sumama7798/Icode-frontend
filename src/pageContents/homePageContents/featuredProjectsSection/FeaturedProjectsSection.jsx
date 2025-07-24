import React, { useEffect } from 'react';
import './FeaturedProjectsSection.css';
import { useCard } from '../../../hooks/useCard.js';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../components/animation/Animation.jsx';
import CardSlider from './CardSlider.jsx';

const FeaturedProjectSection = () => {
  const { getCardsByAdress, getCardsForSection } = useCard();
  const cards = getCardsForSection('homePage', 'project section');

  useEffect(() => {
    if (!cards.length) {
      getCardsByAdress('homePage', 'project section');
    }
  }, [getCardsByAdress, cards]);

  return (
    <div className='fp-main h-full pt-20 pb-2 px-5 mb-auto mx-auto justify-center items-center'>

      {/* Heading */}
      <motion.div
        variants={fadeIn('up', 0.3, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className='flex justify-center mx-auto mb-20 text-4xl text-white font-sans font-semibold'
      >
        <h1>Featured Projects</h1>
      </motion.div>

      {/* Slider */}
      <div className="pt-5 pb-10">
        {cards.length > 0 && <CardSlider cards={cards} />}
      </div>

    </div>
  );
};

export default FeaturedProjectSection;
