import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [bgColor, setBgColor] = useState('bg-transparent');
  const location = useLocation(); // Hook to detect route changes

  useEffect(() => {
    // Scroll to the top whenever the route changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor('bg-red-500 bg-opacity-80 transition ease-in-out duration-500');
      } else {
        setBgColor('bg-gray-900 transition ease-in-out duration-500');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar fixed top-0 z-50 w-svw sm:w-screen h-15 min-w-auto flex justify-center items-center ${bgColor}`}>
      <img
        src="https://assets.zyrosite.com/mv0jZE6zNeiKbo2r/website-YNqJa2ZnkjUPr5Bd.svg"
        className="icon h-10 w-10 sm:h-24 sm:w-24"
        alt="Logo"
      />
      <ul className="flex justify-center items-center px-3 sm:px-60 space-x-3 sm:space-x-6">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/blog">
          <li>Blog</li>
        </Link>
        <Link to="/services">
          <li>Services</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>

      <button className='justify-end sm:block bg-gray-900 text-white py-2 px-4 rounded-full hover:bg-red-800 transition duration-300'>
        Book a Free Consultation
      </button>
    </nav>
  );
};

export default Navbar;
