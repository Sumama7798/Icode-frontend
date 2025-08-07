import React from 'react';
import './Footer.css';
import FacebookIcon from './imgs/facebook.png';
import InstaIcon from './imgs/instagram.png';
import LinkedinIcon from './imgs/linkedin.png';
import ThreadsIcon from './imgs/threads.png';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../components/animation/Animation';
import logo from '../../../assets/images/Logo.svg'; // Adjust the path as necessary

const Footer = () => {
  const socialLinks = [
    { href: "https://www.facebook.com/people/iCode-Limited/", src: FacebookIcon, alt: "Facebook Icon" },
    { href: "https://www.instagram.com/icodeltd/", src: InstaIcon, alt: "Instagram Icon" },
    { href: "https://www.linkedin.com/company/icodeltd/", src: LinkedinIcon, alt: "LinkedIn Icon" },
    { href: "https://www.threads.net/@icodeltd", src: ThreadsIcon, alt: "Threads Icon" },
  ];

  return (
    <div className="footer h-1/5 flex-col sm:flex-row p-10 bg-gray-900">
      <div className="flex flex-col sm:flex-row justify-between">
        {/* Logo and Social Icons */}
        <div className="flex flex-col sm:ml-20 items-center">

          <motion.img
            variants={fadeIn('up', 0.3, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }} 
            src={logo}
            className="icon h-24 w-24 flex-col"
            alt="Logo"
          />

          <div className="flex flex-row space-x-5 mt-3">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                <motion.img
                  variants={fadeIn('up', 0.3, 0.3)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}  
                  src={link.src} alt={link.alt} className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Contact, Location, and Hours */}
        <div className="flex flex-col sm:flex-row sm:mr-20 sm:space-x-10">

          <motion.div
          variants={fadeIn('up', 0.3, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}  
          className="flex-col text-left">
            <p className="text-white text-3xl mb-2">Contacts</p>
            <p className="text-white text-lg">+92-307-6256808</p>
            <p className="text-white text-lg">+92-324-7806438</p>
            <p className="text-white text-lg">info@icodeltd.com</p>
          </motion.div>

          <motion.div 
          variants={fadeIn('up', 0.3, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }} 
          className="flex-col text-left">
            <p className="text-white text-3xl mb-2">Location</p>
            <p className="text-white text-lg">113/C Umar Market, Master</p>
            <p className="text-white text-lg">City, Gujranwala, Pakistan</p>
          </motion.div>

          <motion.div
          variants={fadeIn('up', 0.3, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}  
          className="flex-col text-left">
            <p className="text-white text-3xl mb-2">Hours</p>
            <p className="text-white text-lg">I-V 9:00-18:00</p>
            <p className="text-white text-lg">VI - VII Closed</p>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
