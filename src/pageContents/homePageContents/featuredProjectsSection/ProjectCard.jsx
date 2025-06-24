import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../components/animation/Animation';

const ProjectCard = ({ projectsCard = {} }) => {
    const {
        image = 'default-image.jpg',
        heading = 'No Title',
        description = 'No description available.',
    } = projectsCard;

    return (
        <div className='m-auto text-4xl text-white'>
            <motion.img
                variants={fadeIn('up', 0.3, 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }} 
                src={image}
                alt={heading || 'project image'}
                className='flex relative justify-center mx-auto h-[340px] w-[480px] object-fill rounded-2xl fill-inherit shadow-md shadow-black'
            />

            <motion.h1
            variants={fadeIn('up', 0.3, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}  
            className='flex text-3xl font-prompt font-bold justify-center mx-auto mt-2'>{heading}
            </motion.h1>

            <motion.p
            variants={fadeIn('up', 0.3, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}  
            className='flex justify-center font-prompt  text-sm mt-2 mx-auto w-80 h-auto p-3 overflow-hidden'>{description}
            </motion.p>

        </div>
    );
};

ProjectCard.propTypes = {
    card: PropTypes.shape({
        image: PropTypes.string,
        heading: PropTypes.string,
        description: PropTypes.string,
    }),
};

export default ProjectCard;
