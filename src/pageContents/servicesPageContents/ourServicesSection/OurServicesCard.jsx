import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../components/animation/Animation';

const OurServicesCard = ({ Scard }) => {
    const { heading = 'No Title', description = 'No description available.' } = Scard;


    return (
        <div className={`m-auto flex items-center sm:space-x-[100px] justify-center text-4xl `}>

            {/* The text (heading and description) */}
            <div className='flex-col items-center justify-center p-3 text-black bg-white hover:bg-red-600 hover:text-white transition duration-300 shadow-lg shadow-black rounded-2xl w-[450px] h-[300px]'>
                <motion.h1
                variants={fadeIn('up', 0.3, 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}  
                className=' flex text-3xl font-prompt font-bold text-left '>
                    {heading}
                </motion.h1>

                <motion.p
                variants={fadeIn('up', 0.3, 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}  
                className=' flex text-left font-prompt text-base  
                w-[400px] h-28 py-3 '>
                    {description}
                </motion.p>

            </div>
        </div>
    );
};

export default OurServicesCard;
