import React from 'react'
import { useCard } from '../../../hooks/useCard.js';
import { useEffect  } from 'react';
import {Link, Navigate} from 'react-router-dom';
import CaseStudyCard from './CaseStudyCard.jsx';




const BlogSection = () => {

    const { getCardsByAdress, getCardsForSection } = useCard();
        const cards = getCardsForSection('homePage', 'project section');
    
        useEffect(() => {
            if (!cards.length) {
                getCardsByAdress('homePage', 'project section');
            }
        }, [getCardsByAdress, cards]);


    

  return (
    <div className='h-full pt-20 pb-36 justify-center px-5 bg-[rgb(255,255,255)]'>
                
                {/* Heading */}
            
    
    
    
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mx-auto gap-x-1 gap-y-16 items-centers'>
    
            {cards?.map((CSCard) => (
                    <Link
                    key={CSCard._id}
                    to={{
                        pathname: `/case-studies/${CSCard._id}`,
                    }}
                    state={{ CSCard }} // Pass BCard as state
                >
                        <CaseStudyCard CSCard={CSCard} />
                    </Link>
                ))}
              
            </div>
    
    
            </div>
  )
}

export default BlogSection