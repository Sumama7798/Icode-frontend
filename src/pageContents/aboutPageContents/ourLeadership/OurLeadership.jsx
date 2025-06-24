import React from 'react'
import LeadershipCard from './LeadershipCard.jsx';
import { useCard } from '../../../hooks/useCard.js';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../components/animation/Animation.jsx';

const OurLeadership = () => {

const { getCardsByAdress, getCardsForSection } = useCard();
    const cards = getCardsForSection('aboutPage', 'LeadershipSection');

    useEffect(() => {
        if (!cards.length) {
            getCardsByAdress('aboutPage', 'LeadershipSection');
        }
    }, [getCardsByAdress, cards]);





  return (
   <div className='h-auto sm:h-1/5 justify-center p-5  bg-[rgb(69,69,69)]'>

    <motion.h1
      variants={fadeIn('up', 0.3, 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className='flex justify-center mx-auto mb-10 text-4xl text-white font-sans font-semibold'>Our Leadership</motion.h1>
     

      <motion.p
      variants={fadeIn('up', 0.4, 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className='flex justify-center text-center mx-auto mb-10 text-md text-white font-sans font-semibold'>
              Our leadership team, comprised of industry veterans with extensive expertise <br/>
              in software development and technology strategy, drives our company’s vision and <br/>
              innovation.
      </motion.p>
     

     
    <div className='flex flex-col sm:flex-row flex-wrap text-4xl sm:text-6xl lg:text-6xl font-prompt 
    font-semibold text-white items-center justify-between '>

      {cards?.map((Lcard,index)=> (
                    <LeadershipCard key={Lcard._id} Lcard={Lcard} index={index}/>
                )) }

    </div>

    
   </div>
  )
}

export default OurLeadership