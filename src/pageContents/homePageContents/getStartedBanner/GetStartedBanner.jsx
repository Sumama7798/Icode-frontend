import React from 'react'
import './GetStartedBanner.css'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../components/animation/Animation'
import { useNavigate } from 'react-router-dom'

const GetStartedBanner = () => {
    const navigate = useNavigate()

  return (
    <div className=' bg-zinc-800 flex flex-col h-1/5 justify-center p-10 mx-auto'>

        <motion.div
        variants={fadeIn('up', 0.3, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}  
        className='flex sm:flex-row lg:flex-row flex-col m-auto text-4xl sm:text-6xl 
        lg:text-6xl font-prompt font-semibold text-white items-center justify-center  
        mx-auto mb-5'>          
        <h1>Book a Free Consultation</h1>        
        </motion.div>

        <div className='flex m-auto text-lg font-prompt justify-center items-center pt-5 mx-auto'>
          
        <motion.button
        variants={fadeIn('up', 0.3, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}  
        onClick={() => navigate('/contact')} className='bg-black text-white py-3 px-5 rounded-full w-60 hover:bg-zinc-800 ease-in duration-300 '>
          CLICK HERE
        </motion.button>
        
        </div>
        
        </div>
  )
}

export default GetStartedBanner