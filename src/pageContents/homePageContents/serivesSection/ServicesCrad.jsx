import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../components/animation/Animation';

const ServicesCrad = ({ servicesCard = {} }) => {
    const { image = 'default-image.jpg', heading = 'No Title', description = 'No description available.' } = servicesCard;

    return (
        <div className='m-auto text-4xl text-white'>
            <motion.img
                variants={fadeIn('up', 0.3, 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}        
                src={image}
                alt={heading || 'service image'}
                className='flex justify-center mx-auto h-40 w-[350px] rounded-2xl fill-inherit shadow-md shadow-black'
            />

            <motion.h1
            variants={fadeIn('up', 0.3, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}  
            className='flex text-3xl font-prompt justify-center mx-auto mt-4'>{heading}
            </motion.h1>

            <motion.p
            variants={fadeIn('up', 0.3, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}  
            className='paragraph flex justify-center text-sm mt-4 mx-auto rounded-sm w-[350px] h-60 p-3 overflow-hidden'>{description}
            </motion.p>

        </div>
    );
};

ServicesCrad.propTypes = {
    card: PropTypes.shape({
        image: PropTypes.string,
        heading: PropTypes.string,
        description: PropTypes.string,
    }),
};

export default ServicesCrad;
