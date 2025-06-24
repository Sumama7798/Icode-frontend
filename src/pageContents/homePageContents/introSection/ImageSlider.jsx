import React, { useState , useEffect} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import './HomeIntroSection.css'

export default function ImageSlider({ imageUrls }) {

    const [ImageIndex, setImageIndex] = useState(0);

    const ShowNextImg = () => {
        if (ImageIndex !== imageUrls.length - 1) {
            setImageIndex(ImageIndex + 1);
        } else {
            setImageIndex(0);
        }
    };

    const ShowPrevImg = () => {
        if (ImageIndex !== 0) {
            setImageIndex(ImageIndex - 1);
        } else {
            setImageIndex(imageUrls.length - 1);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            ShowNextImg();
        }, 3000);
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [imageUrls.length, ImageIndex]);

    return (
      <div style={{ position: "relative" }}>

        <div style={{ display: "flex" , width: 'screen', height: 'full', overflow: 'hidden'}}>
            {imageUrls.map(url => ( 
            <img key={url} src={url} alt='slider'
            className='img-slider-img w-screen h-full sm:w-screen sm:h-screen lg:w-screen lg:h-screen'
            style={{ transform: `translateX(-${ImageIndex * 100}%)` }}/>
            ))}
        </div>

        <button onClick={ShowPrevImg} className="img-slider-btn" style={{left: '0'}}>
            <ChevronLeft  size={40}/>
        </button>

        <button onClick={ShowNextImg} className="img-slider-btn" style={{right: '0'}}>
            <ChevronRight size={40}/>
        </button>
        
      </div>
    );
  }