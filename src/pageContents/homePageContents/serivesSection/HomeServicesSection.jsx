import React from 'react'
import './HomeServicesSection.css'
import { useCard } from '../../../hooks/useCard.js'
import { useEffect } from 'react';
import ServicesCrad from './ServicesCrad.jsx';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../components/animation/Animation.jsx';


const HomeServicesSection = () => {
    const { getCardsByAdress, getCardsForSection } = useCard();
    const cards = getCardsForSection('homePage', 'services section');

    useEffect(() => {
        if (!cards.length) {
            getCardsByAdress('homePage', 'services section');
        }
    }, [getCardsByAdress, cards]);



  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1673235966910-f2a443bdbaaf?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
     h-full pt-20 pb-36 justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 bg-cover bg-center bg-no-repeat">
            
            {/* Heading */}
        
        <div className='flex flex-col items-center'>
        <motion.div
        variants={fadeIn('up', 0.3, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}  
        className='pb-20 text-2xl sm:text-5xl lg:text-5xl text-white font-sans font-semibold'> 
        <h1>Full-Fledged<br/> Mobile App<br/> Development Services</h1>
        </motion.div>

        <motion.div
        variants={fadeIn('up', 0.3, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}  
        className='text-lg sm:text-xl lg:text-xl text-white font-sans font-semibold'> 
        <p>ICode is a team of trailblazers, UX-obsessed designers,<br/> and mobile app developers
            in Pakistan passionate to disrupt the<br/> ordinary and solve real-world problems with innovation.<br/>
            Whether it’s a sleek native app or a scalable cross-platform<br/> application, our mobile app development
            services enable<br/> changemakers to lead, innovate, and transform industries.</p>
        </motion.div>

        </div>

        <div className='flex-col grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mx-auto gap-x-3 gap-y-16 items-centers'>

            {cards?.map((servicesCard)=> (
                <ServicesCrad key={servicesCard._id} servicesCard={servicesCard}/>
            )) }
          
        </div>


        </div>
  )
}

export default HomeServicesSection















//   {/* card 1 */}
// <div className='m-auto text-4xl text-white'>
// <img src='https://images.unsplash.com/photo-1547628641-ec2098bb5812?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470' alt='services' className='flex justify-center mx-auto h-32 w-80 rounded-md fill-inherit shadow-md shadow-black'/>
// <h1 className='flex text-3xl font-serif justify-center mx-auto mt-2'>Services</h1>
// <p className='paragraph flex justify-center text-lg mt-2 mx-auto w-80 h-40  p-3'>We provide the best services in the world</p>
// </div>


// {/* card 2 */}
// <div className='m-auto text-4xl text-white'>
// <img src='https://images.unsplash.com/photo-1548602088-9d12a4f9c10f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D' alt='services' className='flex justify-center mx-auto h-32 w-80 rounded-md fill-inherit shadow-md shadow-black'/>
// <h1 className='flex text-3xl font-serif justify-center mx-auto mt-2'>Services</h1>
// <p className='paragraph flex justify-center text-lg mt-2 mx-auto w-80 h-40  p-3'>We provide the best services in the world</p>
// </div>        
// </div >



// {/* card 3 */}
// <div className='flex justify-center items-centers mt-28'>

// <div className='m-auto text-4xl text-white'>
// <img src='https://images.unsplash.com/photo-1547628641-ec2098bb5812?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470' alt='services' className='flex justify-center mx-auto h-32 w-80 rounded-md fill-inherit shadow-md shadow-black'/>
// <h1 className='flex text-3xl font-serif justify-center mx-auto mt-2'>Services</h1>
// <p className='paragraph flex justify-center text-lg mt-2 mx-auto w-80 h-40  p-3'>We provide the best services in the world</p>
// </div>


// {/* card 4 */}
// <div className='m-auto text-4xl text-white'>
// <img src='https://images.unsplash.com/photo-1548602088-9d12a4f9c10f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D' alt='services' className='flex justify-center mx-auto h-32 w-80 rounded-md fill-inherit shadow-md shadow-black'/>
// <h1 className='flex text-3xl font-serif justify-center mx-auto mt-2'>Services</h1>
// <p className='paragraph flex justify-center text-lg mt-2 mx-auto w-80 h-40  p-3'>We provide the best services in the world</p>
// </div>