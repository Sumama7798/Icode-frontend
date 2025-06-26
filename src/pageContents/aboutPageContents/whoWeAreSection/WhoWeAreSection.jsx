import React from 'react'
import { useCard } from '../../../hooks/useCard.js'
import { useEffect } from 'react';
import WWAcard from './WWAcard.jsx';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../components/animation/Animation.jsx';



const WhoWeAreSection = () => {
    const { getCardsByAdress, getCardsForSection } = useCard();
    const cards = getCardsForSection('aboutPage', 'WhoWeAreSection');

    useEffect(() => {
        if (!cards.length) {
            getCardsByAdress('aboutPage', 'WhoWeAreSection');
        }
    }, [getCardsByAdress, cards]);



  return (
    <div className=' h-full pt-20 pb-36 justify-center '>
            
            {/* Heading */}
        
        
       <motion.div
        variants={fadeIn('up', 0.3, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}                
        className='flex flex-col sm:flex-row relative  justify-center mx-auto right-0 sm:mr-[35%] sm:mt-12 
        pb-20  text-5xl text-white font-sans font-semibold'> <h1>Who We Are</h1></motion.div>
        



        
        <div className='flex pt-12 p-5 flex-col sm:flex-col mx-auto gap-x-1 gap-y-16 top-0 items-centers'>

            {cards?.map((wwacard,index)=> (
                <WWAcard key={wwacard._id} wwacard={wwacard} index={index} className='card-item'/>
            )) }
         


        </div>
        

    </div>
  )
}

export default WhoWeAreSection















