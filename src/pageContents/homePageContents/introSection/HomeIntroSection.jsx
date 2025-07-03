import React from 'react'
import './HomeIntroSection.css'
import ImageSlider from './ImageSlider'

const HomeIntroSection = () => {
  const img1 = 'https://media.canva.com/v2/image-resize/format:JPG/height:452/quality:92/uri:ifs%3A%2F%2FM%2F0e9ec9fd-a940-4a7d-bcfb-ac5a2f2508be/watermark:F/width:800?csig=AAAAAAAAAAAAAAAAAAAAAIYSAPXIX2q74m2ZsntJh_mifkhfO8sevOs-uQxu_jiX&exp=1751554519&osig=AAAAAAAAAAAAAAAAAAAAAD9E6nhqgKu9nlO09w6Dr7ahAbcZng_MkVRvJ0ZOcqh4&signer=media-rpc&x-canva-quality=screen'
  const img2 = 'https://media.canva.com/v2/image-resize/format:JPG/height:452/quality:92/uri:ifs%3A%2F%2FM%2F487e488b-20a9-4f63-aa47-f630f594976e/watermark:F/width:800?csig=AAAAAAAAAAAAAAAAAAAAAKC0u1-2QM-YWKxNzNTEPV_DRxyAyEavcPvYUYPV9Ece&exp=1751554716&osig=AAAAAAAAAAAAAAAAAAAAAMSUlQi9-7FyEwejnQQgTnx-AJZjuexKqznEFjJ1tjUQ&signer=media-rpc&x-canva-quality=screen'

  const Images = [img1, img2]

  return (
    
    <div className='intro flex w-full h-fit-content sm:h-screen lg:h-screen'>
        <ImageSlider imageUrls={Images} />
        
        
    </div>
    
  )
}

export default HomeIntroSection