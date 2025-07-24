import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../components/animation/Animation';

const ProjectCard = ({ projectCard = {} }) => {
  const {
    image = 'default-image.jpg',
    heading = 'No Title',
    description = 'No description available.',
  } = projectCard;

  return (
    <div className='m-auto text-white w-full h-full flex flex-col items-center justify-start'>
      <motion.img
        variants={fadeIn('up', 0.3, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        src={image}
        alt={heading || 'project image'}
        className="h-[300px] w-full max-w-[480px] object-cover rounded-2xl shadow-md shadow-black"
      />

      <motion.h1
        variants={fadeIn('up', 0.3, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl font-prompt font-bold text-center mt-3"
      >
        {heading}
      </motion.h1>

      <motion.p
        variants={fadeIn('up', 0.3, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-sm font-prompt mt-2 px-4 w-[90%] text-center"
      >
        {description}
      </motion.p>
    </div>
  );
};

ProjectCard.propTypes = {
  projectsCard: PropTypes.shape({
    image: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default ProjectCard;
