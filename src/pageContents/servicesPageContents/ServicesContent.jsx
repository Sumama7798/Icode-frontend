import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../../homePageContents/footer/Footer';

const ServicesContent = () => {
    const location = useLocation();
    const { BCard } = location.state || {}; // Retrieve the passed state

    const {
        image = 'default-image.jpg',
        heading = 'No Title',
        description = 'No description available.',
        header = 'No Header',
        footer = 'No Footer',
        blog = 'No blog available.',
        createdAt = 'No date available.',
    } = BCard;

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
            <div className="flex flex-col mt-24 text-center justify-center">
                <h1 className="flex text-3xl font-extrabold font-prompt mx-auto mt-4">
                    {heading}
                </h1>
                <p className="flex text-lg mt-1 mx-auto max-w-[850px] pt-1 overflow-hidden">
                    {description}
                </p>
                <p className="flex text-lg my-1 mx-auto pt-1 overflow-hidden">
                    {header}
                </p>
                <p className="flex text-lg my-1 mx-auto pt-1 overflow-hidden">
                    {footer}
                </p>
                <p className="flex text-lg my-1 mx-auto pt-1 overflow-hidden">
                    {formattedDate}
                </p>
            </div>



            <div className="flex flex-col mt-5 bg-[rgb(69,69,69)] py-10 text-center justify-center">
                <img
                    src={image}
                    alt={heading || 'service image'}
                    className="flex justify-center mx-auto h-[375px] w-[800px] fill-inherit"
                />

                <p className='flex mt-12 text-left max-w-[800px] text-lg my-1 mx-auto pt-1 overflow-hidden'>{blog}</p>

            </div>

            <Footer/>
        </div>
    );
};

export default ServicesContent;
