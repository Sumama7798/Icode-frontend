import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Footer from '../../homePageContents/footer/Footer';


const ServicesContent = () => {
  const location = useLocation();
      const { SCard } = location.state || {}; // Retrieve the passed state
  
      const {
          image = 'default-image.jpg',
          heading = 'No Title',
          description = 'No description available.',
         
      } = SCard;

  return (
    <div className="m-auto text-black">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 p-10">

        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">{heading}</h1>
          <p className="text-lg leading-relaxed">{description}</p>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src={image}
            alt={heading}
            className="h-[400px] w-full object-cover rounded-lg shadow-md"
          />
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default ServicesContent;
