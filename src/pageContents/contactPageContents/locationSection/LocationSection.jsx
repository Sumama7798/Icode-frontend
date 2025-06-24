import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../components/animation/Animation';



const LocationSection = () => {
    return (
        <div className="flex flex-col sm:flex-row bg-[rgb(56,56,56)] text-white p-8 ">
            {/* Text Section */}
            <motion.div
                variants={fadeIn('up', 0.3, 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}  
                className="flex-1 flex flex-col justify-center p-4">
                <h1 className="text-4xl font-bold mb-4">Location</h1>
                <p className="text-lg mb-4">
                    Set up a meeting with our consultants, or simply<br/> stop by if you're in the neighborhood.
                </p>
                <p className="text-lg mb-4">
                    113/C Umar Market, Mater City, Gujranwala, Pakistan
                </p>


                <div className='flex flex-col sm:flex-row lg:flex-row sm:space-x-5'>
                {/* Hours */}
                <div className="my-4">
                    <h2 className="text-2xl font-bold mb-2">Hours</h2>
                    <p>I-V: 9:00 - 18:00</p>
                    <p>VI - VII: Closed</p>
                </div>

                {/* Contacts */}
                <div className="my-4">
                    <h2 className="text-2xl font-bold mb-2">Contacts</h2>
                    <p>+123455667789</p>
                    <p>info@icodeltd.com</p>
                </div>
                </div>
            </motion.div>

            {/* Map Section */}
            <motion.div
            variants={fadeIn('up', 0.3, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}  
            className="flex-1 p-4">
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8713.658210607807!2d73.6857355763594!3d32.138948141178554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f397ddc9c900d%3A0x5aeff2798db8ddbd!2sMaster%20City%20Gujranwala!5e0!3m2!1sen!2s!4v1618245871663!5m2!1sen!2s"
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </motion.div>
            
        </div>
    );
};

export default LocationSection;
