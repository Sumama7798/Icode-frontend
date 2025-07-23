import React from 'react'
import './GetStartedBanner.css'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../components/animation/Animation'
import { useNavigate } from 'react-router-dom'

const GetStartedBanner = () => {
    const navigate = useNavigate()

  return (
    <div className=' bg-white flex flex-col h-full justify-center p-10 mx-auto'>

        <motion.div
        variants={fadeIn('up', 0.3, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}  
        className='flex sm:flex-row lg:flex-row flex-col m-auto text-4xl sm:text-6xl 
        lg:text-6xl font-prompt font-semibold text-red-700 items-center justify-center  
        mx-auto mb-5'>          
        <h1>We Are The Change Makers!</h1>        
        </motion.div>

        <div className='flex m-auto text-lg font-prompt justify-center items-center pt-5 mx-auto'>
          
        <motion.div
        variants={fadeIn('up', 0.3, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}  
        className='flex justify-center text-center mx-auto w-[50%] mb-10 text-md text-red-700 font-serif font-semibold '>
          <p>As a leading mobile app development company, we help ambitious entrepreneurs disrupt the ordinary,
             set new benchmarks, and drive innovation through full-fledged mobile app development services.</p>
        </motion.div>
        
        </div>

        <div className='flex-row justify-center grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 items-center'>
          <motion.div
        variants={fadeIn('up', 0.3, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}  
        className='flex-col justify-center text-center mx-auto text-red-700 font-serif font-semibold '>
          <h1 className='text-4xl'>1,200+</h1> <p className='text-sm font-prompt w-[50%]'>Mobile apps built for diverse industries</p>
        </motion.div>

        <motion.div
        variants={fadeIn('up', 0.3, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}  
        className='flex-col justify-center text-center mx-auto text-red-700 font-serif font-semibold '>
          <h1 className='text-4xl'>$500M+</h1> <p className='text-sm font-prompt w-[50%]'>Raised by clients through funding rounds</p>
        </motion.div>

        <motion.div
        variants={fadeIn('up', 0.3, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}  
        className='flex-col justify-center text-center mx-auto text-red-700 font-serif font-semibold '>
          <h1 className='text-4xl'>12M+</h1> <p className='text-sm font-prompt w-[50%]'>Mobile apps built for diverse industries</p>
        </motion.div>

        <motion.div
        variants={fadeIn('up', 0.3, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}  
        className='flex-col justify-center text-center mx-auto text-red-700 font-serif font-semibold '>
          <h1 className='text-4xl'>50+</h1> <p className='text-sm font-prompt w-[50%]'>5-Star Reviews on Clutch for Mobile App Development Services</p>
        </motion.div>
        </div>
        
        </div>
  )
}

export default GetStartedBanner