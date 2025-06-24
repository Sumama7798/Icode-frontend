import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../components/animation/Animation'

const BlogCard = ({BCard}) => {
    const { image = 'default-image.jpg', heading = 'No Title', 
    description = 'No description available.',header ='No Header', footer = 'No Footer' } = BCard;

    return (
        <div className='m-auto text-4xl text-white max-h-[600px]'>
            <motion.img
                variants={fadeIn('up', 0.3, 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }} 
                src={image}
                alt={heading || 'service image'}
                className='flex justify-center mx-auto h-[350px] w-[550px] fill-inherit '
            />

            <motion.p
            variants={fadeIn('up', 0.3, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}  
            className=' flex text-left text-lg my-4 mx-auto w-[550px]  pt-3 overflow-hidden'>{header}</motion.p>

            <motion.h1
            variants={fadeIn('up', 0.3, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}  
            className='flex text-xl font-bold text-left w-[550px] font-prompt  mx-auto mt-4'>{heading}</motion.h1>

            <motion.p
            variants={fadeIn('up', 0.3, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}  
            className=' flex text-left text-lg mt-4 mx-auto w-[550px]  pt-3 overflow-hidden'>{description}</motion.p>

            <motion.p
            variants={fadeIn('up', 0.3, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}  
            className=' flex text-left text-lg my-4 mx-auto w-[550px]  pt-3 overflow-hidden'>{footer}</motion.p>

        </div>
    );
  
    
}

export default BlogCard