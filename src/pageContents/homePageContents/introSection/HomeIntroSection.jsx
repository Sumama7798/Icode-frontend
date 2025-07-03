import React from 'react'
import './HomeIntroSection.css'
import ImageSlider from './ImageSlider'
import img1 from '../../../public/images/1.png'
import img2 from '../../../public/images/2.png'

const HomeIntroSection = () => {

  const Images = [img1, img2]

  return (
    
    <div className='intro flex w-full h-fit-content sm:h-screen lg:h-screen'>
        <ImageSlider imageUrls={Images} />
        
        
    </div>
    
  )
}

export default HomeIntroSection