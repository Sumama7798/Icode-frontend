import axios from '../../../lib/axios';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../components/animation/Animation';

const ContactForum = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        interestedIn: '',
        budget: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        if (type === 'select-multiple') {
            const selectedOptions = Array.from(e.target.selectedOptions).map(opt => opt.value);
            setFormData({ ...formData, [name]: selectedOptions });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/message/sendEmail', formData);

            if (response.status === 200) {
                alert('Message sent successfully!');
                setFormData({
                    name: '',
                    company: '',
                    email: '',
                    phone: '',
                    interestedIn: '',
                    budget: '',
                    message: '',
                });
            } else {
                alert('Failed to send the message. Please try again.');
            }
        } catch (error) {
            alert('An error occurred. Please try again later.');
            console.error(error);
        }
    };

    return (
        <div className="flex flex-col sm:flex-row bg-[rgb(26,26,26)] text-white p-8">
            {/* Contact Details */}
            <div className="flex-1 p-4">
                <motion.h1
                    variants={fadeIn('up', 0.3, 0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-6xl font-bold mb-4">
                    Get in touch
                </motion.h1>

                <motion.p
                    variants={fadeIn('up', 0.3, 0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-lg mb-4">
                    Got a project in mind? Get in touch with iCode Limited today and<br /> let's bring your vision to life!
                </motion.p>

                <motion.p
                    variants={fadeIn('up', 0.3, 0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-lg mb-2">
                    <strong>Phone</strong>: <br />+92-307-6256808,<br /> +92-324-7806438
                </motion.p>

                <motion.p
                    variants={fadeIn('up', 0.3, 0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="text-lg mb-2">
                    <strong>Email</strong>: <br />info@icodeltd.com
                </motion.p>
            </div>

            {/* Form */}
            <motion.form
                variants={fadeIn('up', 0.3, 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                onSubmit={handleSubmit}
                className="flex-1 flex flex-col p-4 space-y-4"
            >
                <div>
                    <label className="block text-sm font-medium">Name*</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-4 mt-1 border rounded-md text-black"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Company*</label>
                    <input
                        type="text"
                        name="company"
                        placeholder="Your company name"
                        value={formData.company}
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
                        placeholder="Your email address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-4 mt-1 border rounded-md text-black"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Phone Number*</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-4 mt-1 border rounded-md text-black"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Interested In*</label>
                    <select
                        name="interestedIn"
                        value={formData.interestedIn}
                        onChange={handleChange}
                        aria-placeholder='Select a field'
                        className="w-full p-4 mt-1 border rounded-md text-black"
                        required
                    >
                        <option value="Web Development">Web Development</option>
                        <option value="App Development">App Development</option>
                        <option value="UI/UX">UI/UX</option>
                        <option value="AI App Development">AI App Development</option>
                        <option value="MVP Development">MVP Development</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium">Project Budget*</label>
                    <select
                        name="budget"
                        value={formData.budget}
                        aria-placeholder="Select a budget range"
                        onChange={handleChange}
                        className="w-full p-4 mt-1 border rounded-md text-black"
                        required
                    >
                        <option value="$2K–$3K">$2K–$3K</option>
                        <option value="$3K–$10K">$3K–$10K</option>
                        <option value="$10K–$30K">$10K–$30K</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium">Tell us more about your project*</label>
                    <textarea
                        name="message"
                        placeholder="Enter details about your project"
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

