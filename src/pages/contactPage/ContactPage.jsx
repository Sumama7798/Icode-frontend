import React from 'react'
import LocationSection from '../../pageContents/contactPageContents/locationSection/LocationSection'
import Footer from '../../pageContents/homePageContents/footer/Footer'
import ContactForum from '../../pageContents/contactPageContents/contactForum/ContactForum'

const ContactPage = () => {
  return (
    <div>
      <ContactForum/>
      <LocationSection />
      <Footer/>
    </div>
  )
}

export default ContactPage