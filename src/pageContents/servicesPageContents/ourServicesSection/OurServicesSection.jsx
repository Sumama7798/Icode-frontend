import { useCard } from '../../../hooks/useCard.js'
import { useEffect } from 'react';
import OurServicesCard from './OurServicesCard.jsx';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../components/animation/Animation.jsx';
import { Link } from 'react-router-dom';


const OurServicesSection = () => {
  const { getCardsByAdress, getCardsForSection } = useCard();
      const cards = getCardsForSection('servicesPage', 'ourServicesSection');
  
      useEffect(() => {
          if (!cards.length) {
              getCardsByAdress('servicesPage', 'ourServicesSection');
          }
      }, [getCardsByAdress, cards]);
  
  
  
    return (
      <div className=' h-full pt-36 pb-36 justify-center '>
              
              {/* Heading */}
          
          
          <motion.div
            variants={fadeIn('up', 0.3, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}  
            className='flex flex-col sm:flex-row relative justify-center mx-auto  
          pb-10  text-5xl text-black font-sans font-bold'> <h1>Our Services</h1>
          
          </motion.div>

          <motion.p
            variants={fadeIn('up', 0.3, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}  
            className='flex relative justify-center text-center mx-auto'>
                We offer custom software development, mobile and web app solutions, and <br/> IT consulting to elevate your business.
          </motion.p>
  
  
  
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mx-auto gap-x-1 gap-y-16 items-centers'>
    
            {cards?.map((SCard) => (
                    <Link
                    key={SCard._id}
                    to={{
                        pathname: `/services/${SCard._id}`,
                    }}
                    state={{ SCard }} // Pass BCard as state
                >
                        <BlogCard SCard={SCard} />
                    </Link>
                ))}
              
            </div>
  
      </div>
    )
}

export default OurServicesSection;