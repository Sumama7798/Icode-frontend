import React from 'react';
import { motion } from 'framer-motion';
import WhoWeAreSection from '../../pageContents/aboutPageContents/whoWeAreSection/WhoWeAreSection.jsx';
import AcomplishmentBanner from '../../pageContents/homePageContents/acomplishmentBanner/AcomplishmentBanner.jsx';
import OurLeadership from '../../pageContents/aboutPageContents/ourLeadership/OurLeadership.jsx';
import HappyClients from '../../pageContents/aboutPageContents/happyClients/HappyClients.jsx';
import GetStartedBanner from '../../pageContents/homePageContents/getStartedBanner/GetStartedBanner.jsx';
import Footer from '../../pageContents/homePageContents/footer/Footer.jsx';

const AboutPage = () => {

  
  return (
    <div>
   
      
      <WhoWeAreSection />     
      <AcomplishmentBanner className="bg-[rgb(59,59,59)]" />      
      <OurLeadership />      
      <HappyClients />
      <GetStartedBanner />
      <Footer />
      
    </div>
  );
};

export default AboutPage;
