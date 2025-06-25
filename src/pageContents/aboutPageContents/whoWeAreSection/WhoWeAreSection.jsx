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
        
        
       
        



        
        <div className='flex pt-12 p-5 flex-col sm:flex-col mx-auto gap-x-1 gap-y-16 top-0 items-centers'>

            {cards?.map((wwacard,index)=> (
                <WWAcard key={wwacard._id} wwacard={wwacard} index={index} className='card-item'/>
            )) }
         


        </div>
        

    </div>
  )
}

export default WhoWeAreSection















