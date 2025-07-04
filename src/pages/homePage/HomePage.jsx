import React from 'react'

import HomeIntroSection from '../../pageContents/homePageContents/introSection/HomeIntroSection.jsx'
import HomeServicesSection from '../../pageContents/homePageContents/serivesSection/HomeServicesSection.jsx'
import FeaturedProjectSection from '../../pageContents/homePageContents/featuredProjectsSection/FeaturedProjectsSection.jsx'
import AcomplishmentBanner from '../../pageContents/homePageContents/acomplishmentBanner/AcomplishmentBanner.jsx'
import GetStartedBanner from '../../pageContents/homePageContents/getStartedBanner/GetStartedBanner.jsx'
import Footer from '../../pageContents/homePageContents/footer/Footer.jsx'
import OurGoalSection from '../../pageContents/homePageContents/ourGoalSection/OurGoalSection.jsx'

const HomePage = () => {
  return (
    <div>
    <HomeIntroSection />
    <OurGoalSection />
    <GetStartedBanner />
    <HomeServicesSection />
    <FeaturedProjectSection />
    <AcomplishmentBanner bgColor='bg-[rgb(59,59,59)]' />
    <Footer />
    </div>
  )
}

export default HomePage

