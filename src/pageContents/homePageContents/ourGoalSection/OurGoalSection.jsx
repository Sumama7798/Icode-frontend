import React from 'react'
import './OurGoalSection.css'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../components/animation/Animation'


const OurGoalSection = () => {
    

  return (
    <div className='gs-banner flex flex-col h-1/5 justify-center p-10 mx-auto'>

        <motion.div
        variants={fadeIn('up', 0.3, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}  
        className='flex sm:flex-row lg:flex-row flex-col m-auto text-4xl sm:text-6xl 
        lg:text-6xl font-prompt font-semibold text-white items-center justify-center  
        mx-auto mb-5'>          
        <h1>Our Mission</h1>        
        </motion.div>

        <div className='flex m-auto text-lg font-prompt justify-center items-center pt-5 mx-auto'>
          
        <motion.div
        variants={fadeIn('up', 0.3, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}  
        className='flex sm:flex-row lg:flex-row flex-col m-auto text-xl sm:text-2xl 
        lg:text-2xl font-prompt font-semibold text-white items-center justify-center  
        mx-auto mb-5'>
        <p>Our mission is to help businesses launch their MVPs within 4 weeks—reducing time to market, lowering development costs, and ensuring product-market fit from day one</p>
        </motion.div>
        
        </div>
        
        </div>
  )
}

export default OurGoalSection