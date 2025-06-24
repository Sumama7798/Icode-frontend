import React from 'react'
import './AcomplishmentBanner.css'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../components/animation/Animation'

function AcomplishmentBanner() {
  return (
    <div className='banner h-auto sm:h-1/5 justify-center p-5 mx-auto'>

      <div className='flex sm:flex-row flex-col items-center justify-between'>

        <motion.div
          variants={fadeIn('up', 0.3, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className='flex-col m-auto text-white items-center justify-center mx-auto mb-5'>
          <h1 className='text-4xl sm:text-6xl lg:text-6xl font-prompt font-semibold py-10 flex justify-center'>22</h1>
          <p className='text-2xl sm:text-4xl lg:text-4xl font-prompt'>Qualified employees</p>
        </motion.div>

        <motion.div
        variants={fadeIn('up', 0.3, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}  
        className='flex-col m-auto text-white items-center justify-center mx-auto mb-5'>
          <h1 className='text-4xl sm:text-6xl lg:text-6xl font-prompt font-semibold py-10 flex justify-center'>117</h1>
          <p className='text-2xl sm:text-4xl lg:text-4xl font-prompt'>Projects deliveres</p>
        </motion.div>

        <motion.div
        variants={fadeIn('up', 0.3, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}  
        className='flex-col m-auto text-white items-center justify-center mx-auto mb-5'>
          <h1 className='text-4xl sm:text-6xl lg:text-6xl font-prompt font-semibold py-10 flex justify-center'> 4</h1>
          <p className='text-2xl sm:text-4xl lg:text-4xl font-prompt'>Key industries</p>
        </motion.div>

      </div>
    </div>
  )
}

export default AcomplishmentBanner