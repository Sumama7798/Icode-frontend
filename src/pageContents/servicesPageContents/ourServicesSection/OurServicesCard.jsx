import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../components/animation/Animation';

const OurServicesCard = ({ Scard, index }) => {
    const { image = 'default-image.jpg', heading = 'No Title', description = 'No description available.' } = Scard;

    const dynamicFlexDirection = index % 2 === 1 ? 'flex-row-reverse' : 'flex-row'; // Flip flex direction for even index

    return (
        <div className={`m-auto flex ${dynamicFlexDirection} items-center sm:space-x-[100px] justify-center text-4xl text-black`}>
            {/* The image */}
            <motion.img
                variants={fadeIn('up', 0.3, 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }} 
                src={image}
                alt={heading || 'service image'}
                className=' relative flex sm:flex-col justify-center
                h-[204px] w-[304px] sm:h-[420px] sm:w-[600px] rounded-2xl
                fill-inherit shadow-md shadow-black'
            />

            {/* The text (heading and description) */}
            <div className='flex-col items-center justify-center p-3'>
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
                w-[450px] h-28 py-3 '>
                    {description}
                </motion.p>

            </div>
        </div>
    );
};

export default OurServicesCard;
