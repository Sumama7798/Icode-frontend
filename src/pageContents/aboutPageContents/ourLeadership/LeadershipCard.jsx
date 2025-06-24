import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../../../components/animation/Animation';

const LeadershipCard = ({Lcard}) => {

    const { image = 'default-image.jpg', heading = 'No Title', description = 'No description available.' } = Lcard;

  return (

      <div className='flex-col m-auto text-white items-center font-prompt font-semibold justify-center mb-5' >

      <motion.img
      variants={fadeIn('up', 0.3, 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}  
      src={image}
      alt="img"
      className='flex-col m-auto text-white h-[375px] w-[375px] object-fill rounded-lg  mb-5' />

        <div className='flex-col m-auto text-white items-center justify-center'>

    <motion.h1
    variants={fadeIn('up', 0.3, 0.3)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}  
    className='text-lg sm:text-xl lg:text-xl py-10 flex justify-center'>{heading}</motion.h1>

    <motion.p
    variants={fadeIn('up', 0.3, 0.3)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}  
    className='text-2xl sm:text-4xl lg:text-4xl flex justify-center'>{description}</motion.p>       
    </div>   
   </div>

  )
}

export default LeadershipCard