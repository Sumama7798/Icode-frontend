import React from 'react'
import './HomeIntroSection.css'
import ImageSlider from './ImageSlider'

const HomeIntroSection = () => {
  const img1 = 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/mv0jZE6zNeiKbo2r/empower-your-business-with-custom-software-solutions-3-YBgpvrWKXJS4Nzl4.png'
  const img2 = 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/mv0jZE6zNeiKbo2r/empower-your-business-with-custom-software-solutions-2-m5KvZwJpWQIE9e2q.png'

  const Images = [img1, img2]

  return (
    
    <div className='intro flex w-full h-fit-content sm:h-screen lg:h-screen'>
        <ImageSlider imageUrls={Images} />
        
        
    </div>
    
  )
}

export default HomeIntroSection