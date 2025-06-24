import React from 'react'
import { useCard } from '../../../hooks/useCard.js';
import { useEffect } from 'react';
import ClientsCard from './ClientsCard.jsx';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../components/animation/Animation.jsx';

const HappyClients = () => {

const { getCardsByAdress, getCardsForSection } = useCard();
    const cards = getCardsForSection('aboutPage', 'ClientsSection');

    useEffect(() => {
        if (!cards.length) {
            getCardsByAdress('aboutPage', 'ClientsSection');
        }
    }, [getCardsByAdress, cards]);





  return (
   <div className='h-auto sm:h-1/5 justify-center p-5  bg-[rgb(131,131,131)]'>

        
    <motion.h1
    variants={fadeIn('up', 0.3, 0.3)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}  
    className='flex justify-center mx-auto mb-10 text-6xl text-white font-sans font-semibold'>Happy Clients</motion.h1>
        

    <motion.p
    variants={fadeIn('up', 0.3, 0.3)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}  
    className='flex flex-col sm:flex-row justify-center text-center mx-auto mb-10 text-md text-white font-sans font-semibold'>
        Don't just take our word for it – our clients frequently stay in touch with us and work with us on future projects.
    </motion.p>

    <div className='flex flex-col sm:flex-col gap-y-3 flex-wrap text-4xl sm:text-6xl lg:text-6xl font-prompt 
    font-semibold text-white items-center justify-between '>

      {cards?.map((Ccard)=> (
                    <ClientsCard key={Ccard._id} Ccard={Ccard}/>
                )) }

    </div>


   </div>
  )
}

export default HappyClients