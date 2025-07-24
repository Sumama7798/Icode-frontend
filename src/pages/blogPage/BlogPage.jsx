import React from 'react'
import BlogSection from '../../pageContents/blogPageContents/BlogSection/BlogSection'
import GetStartedBanner from '../../pageContents/homePageContents/getStartedBanner/GetStartedBanner'
import Footer from '../../pageContents/homePageContents/footer/Footer'
import { motion } from 'framer-motion'
import { fadeIn } from '../../components/animation/Animation'




const BlogPage = () => {
   

  return (
    <div className='mt-20'>

    <motion.h1
    variants={fadeIn('up', 0.3, 0.3)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }} 
    className='flex justify-center mx-auto mb-10 text-6xl text-black font-sans font-semibold'>Blogs</motion.h1>

    <BlogSection />
    <GetStartedBanner/>
    <Footer/>
    

    </div>
  )
}

export default BlogPage