import axios from '../../../lib/axios';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../components/animation/Animation';

const ContactForum = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/message/sendEmail', formData);

            if (response.status === 200) {
                alert('Message sent successfully!');
                setFormData({ firstName: '', lastName: '', email: '', message: '' });
            } else {
                alert('Failed to send the message. Please try again.');
            }
        } catch (error) {
            alert('An error occurred. Please try again later.');
            console.error(error);
        }
    };

    return (
        <div className="flex flex-col sm:flex-row bg-[rgb(26,26,26)] text-white p-8 mt-40">
            {/* Contact Details */}
            <div className="flex-1 p-4">
                <motion.h1
                variants={fadeIn('up', 0.3, 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}  
                className="text-6xl font-bold mb-4">Get in touch</motion.h1>

                <motion.p
                variants={fadeIn('up', 0.3, 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}  
                className="text-lg mb-4">
                    Got a project in mind? Get in touch with iCode Limited today and<br/> let's bring your vision to life!
                </motion.p>

                <motion.p
                variants={fadeIn('up', 0.3, 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}  
                className="text-lg mb-2">
                    <strong>Phone</strong>: <br/>+92-307-6256808,<br/> +92-324-7806438
                </motion.p>

                <motion.p
                variants={fadeIn('up', 0.3, 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}  
                className="text-lg mb-2">
                    <strong>Email</strong>: <br/>info@icodeltd.com
                </motion.p>

            </div>

            {/* Form */}
            <motion.form
            variants={fadeIn('up', 0.3, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}  
            onSubmit={handleSubmit} className="flex-1 flex flex-col p-4 space-y-4">
                <div>
                    <label className="block text-sm font-medium">First Name*</label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder='Your name'
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full p-4 mt-1 border rounded-md text-black"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Last Name*</label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder='Your last name'
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full p-4 mt-1 border rounded-md text-black"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Email*</label>
                    <input
                        type="email"
                        name="email"
                        placeholder='Your email address'
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-4 mt-1 border rounded-md text-black"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Message*</label>
                    <textarea
                        name="message"
                        placeholder='Enter your message'
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-4 mt-1 border rounded-md text-black"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-40 p-4 bg-black rounded-full text-white font-bold"
                >
                    Submit
                </button>
            </motion.form>
        </div>
    );
};

export default ContactForum;
