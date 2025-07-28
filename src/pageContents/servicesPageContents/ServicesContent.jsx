import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Footer from '../../pageContents/homePageContents/footer/Footer';
import OurGoalSection from '../homePageContents/ourGoalSection/OurGoalSection';
import FAQSection from '../homePageContents/faqSection/FAQSection';


const ServicesContent = () => {
  const location = useLocation();
      const { Scard } = location.state || {}; // Retrieve the passed state
  
      const {
          image = 'default-image.jpg',
          heading = 'No Title',
          description = 'No description available.',
         
      } = Scard;

  return (
    <div className="m-auto text-black">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 p-10">

        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-6xl font-bold mb-10 text-center mr-28">{heading}</h1>
          <p className="text-2xl text-center items-center justify-end w-[80%]">{description}</p>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src={image}
            alt={heading}
            className="h-full w-full object-cover rounded-lg shadow-md"
          />
        </div>

      </div>

      <OurGoalSection />


      <div className='flex flex-row justify-center text-black text-center'><h1 className="text-6xl font-bold mb-4">{heading}</h1></div>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 p-10">
        {/* Image */}
        <div className="flex-1">
          <img
            src={image}
            alt={heading}
            className="h-full w-full object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <p className="text-2xl leading-relaxed text-center w-[80%]">{description}</p>
        </div>


      </div>

      <FAQSection />

      <Footer />
    </div>
  );
};

export default ServicesContent;
