import React from 'react'
import './FeaturedProjectsSection.css'
import { useCard } from '../../../hooks/useCard.js'
import { useEffect } from 'react';
import ProjectCard from './ProjectCard.jsx';
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
    <div className='fp-main h-full pt-20 pb-2 px-5 mb-auto mx-auto justify-center items-center '>

            {/* Heading */}
        <motion.div
        variants={fadeIn('up', 0.3, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}  
        className='flex justify-center  mx-auto mb-20 text-4xl text-white font-sans font-semibold'>
        <h1>Featured Projects</h1>
        </motion.div>

        <div className="pt-5 pb-10">
                {cards.length > 0 && <CardSlider cards={cards} />}
        </div>


        </div>
  )
}

export default FeaturedProjectSection








//   {/* card 1 */}
//   <div className='m-auto text-4xl text-white'>
//   <img src='https://images.unsplash.com/photo-1547628641-ec2098bb5812?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470' alt='services' className='flex justify-center mx-auto h-80 w-64 rounded-md fill-inherit shadow-md shadow-black'/>
// <h1 className='flex text-3xl font-serif justify-center mx-auto mt-2'>Projects</h1>
// <p className='flex justify-center text-lg mt-2 mx-auto w-80'>We provide the best services in the world</p>
// </div>
//  {/* card 2 */}
// <div className='m-auto text-4xl text-white'>
//   <img src='https://images.unsplash.com/photo-1548602088-9d12a4f9c10f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D' alt='services' className='flex justify-center mx-auto h-80 w-64 rounded-md fill-inherit shadow-md shadow-black'/>
// <h1 className='flex text-3xl font-serif justify-center mx-auto mt-2'>Projects</h1>
// <p className='flex justify-center text-lg mt-2 mx-auto w-80 '>We provide the best services in the world</p>
// </div>        
// </div >

//   {/* card 3 */}
// <div className='flex justify-center items-centers mt-28'>

// <div className='m-auto text-4xl text-white'>
//   <img src='https://images.unsplash.com/photo-1547628641-ec2098bb5812?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470' alt='services' className='flex justify-center mx-auto h-80 w-64 rounded-md fill-inherit shadow-md shadow-black'/>
// <h1 className='flex text-3xl font-serif justify-center mx-auto mt-2'>Projects</h1>
// <p className='flex justify-center text-lg mt-2 mx-auto w-80'>We provide the best services in the world</p>
// </div>
//   {/* card 4 */}
// <div className='m-auto text-4xl text-white'>
//   <img src='https://images.unsplash.com/photo-1548602088-9d12a4f9c10f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D' alt='services' className='flex justify-center mx-auto h-80 w-64 rounded-md fill-inherit shadow-md shadow-black'/>
// <h1 className='flex text-3xl font-serif justify-center mx-auto mt-2'>Projects</h1>
// <p className='flex justify-center text-lg mt-2 mx-auto w-80 '>We provide the best services in the world</p>
// </div>