import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../../homePageContents/footer/Footer';

const ServicesContent = () => {
    const location = useLocation();
    const { SCard } = location.state || {}; // Retrieve the passed state

    const {
        image = 'default-image.jpg',
        heading = 'No Title',
        description = 'No description available.',
    } = SCard;

    // Format the date
    const formattedDate = createdAt !== 'No date available.'
        ? new Date(createdAt).toLocaleDateString('en-US', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        })
        : createdAt;

    return (
        <div className="m-auto text-4xl text-white">
            <div className='flex flex-row justify-between'>

                <div className='flex-col'>
                    
                    <h1 className='text-4xl font-bold text-center'>{heading}</h1>
                    <p className='text-lg text-center'>{description}</p>

                    

                </div>

                <div className='flex-col justify-end pr-3'>

                    <img src={image} alt={heading} className='h-[500px] w-[50%] object-cover rounded-lg '/>   

                </div>


            </div>
            
            <Footer/>
        </div>
    );
};

export default ServicesContent;
