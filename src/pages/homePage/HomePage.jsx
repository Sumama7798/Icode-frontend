import React from 'react'

import HomeIntroSection from '../../pageContents/homePageContents/introSection/HomeIntroSection.jsx'
import HomeServicesSection from '../../pageContents/homePageContents/serivesSection/HomeServicesSection.jsx'
import FeaturedProjectSection from '../../pageContents/homePageContents/featuredProjectsSection/FeaturedProjectsSection.jsx'
import GetStartedBanner from '../../pageContents/homePageContents/getStartedBanner/GetStartedBanner.jsx'
import Footer from '../../pageContents/homePageContents/footer/Footer.jsx'
import OurGoalSection from '../../pageContents/homePageContents/ourGoalSection/OurGoalSection.jsx'
import FAQSection from '../../pageContents/homePageContents/faqSection/FAQSection.jsx'

const HomePage = () => {
  return (
    <div>
    <HomeIntroSection />
    <OurGoalSection />
    <HomeServicesSection />
    <GetStartedBanner />
    <FeaturedProjectSection />
    <FAQSection />
    <Footer />
    </div>
  )
}

export default HomePage

