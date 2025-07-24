import React from 'react';
import PropTypes from 'prop-types';
const ProjectCard = ({ projectsCard = {} }) => {
  const {
    image = 'default-image.jpg',
    heading = 'No Title',
    description = 'No description available.',
  } = projectsCard;

  return (
    <div className="m-auto text-white w-full h-full flex flex-col items-center justify-start">
      {/* Image container with animation */}
      <img
        src={image}
        alt={heading || 'project image'}
        className="w-full h-[300px] object-cover rounded-2xl shadow-md shadow-black"
      />

      <h1>
        {heading}
      </h1>

      <p className="text-sm font-prompt mt-2 px-4 w-[90%] text-center">
        {description}
      </p>
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
