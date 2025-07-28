import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../../homePageContents/footer/Footer';

const BlogContents = () => {
    const location = useLocation();
    const { CSCard } = location.state || {}; // Retrieve the passed state

    const {
        image = 'default-image.jpg',
        heading = 'No Title',
        description = 'No description available.',
        link = 'No Link',
    } = CSCard;


    return (
        <div>

            <div>

                <img
                    src={image}
                    alt={heading || 'service image'}
                    className='h-full w-full object-cover'
                />
            </div>

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


            <Footer />

        </div>

        
    );
};

export default BlogContents;
