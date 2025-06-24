import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../../../components/animation/Animation';


const ClientsCard = ({Ccard}) => {
    const {image, heading, description } = Ccard;

    return (
  
        <div className='flex flex-col sm:flex-row m-auto text-white items-center font-prompt font-semibold justify-center mb-5' >
            <motion.div
            variants={fadeIn('up', 0.3, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}  
            className='flex m-auto mx-3 text-white h-[175px] w-[175px] object-fill '>

        <img src={image} alt="img"
         className='rounded-2xl items-center'  />

            </motion.div>

        <div className='flex flex-col m-auto text-white text-left items-center justify-center'>
  
      <motion.h1
        variants={fadeIn('up', 0.3, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}  
      className='text-2xl sm:text-4xl lg:text-4xl py-5 flex justify-center'>{heading}</motion.h1>

      <motion.p
        variants={fadeIn('up', 0.3, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}  
        className='text-sm sm:text-sm lg:text-sm flex justify-center w-96'>{description}</motion.p>

      </div>   
     </div>
  
    )
}

export default ClientsCard