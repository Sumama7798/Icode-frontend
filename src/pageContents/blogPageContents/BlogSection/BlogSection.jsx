import React from 'react'
import { useCard } from '../../../hooks/useCard.js';
import { useEffect  } from 'react';
import {Link, Navigate} from 'react-router-dom';
import BlogCard from './BlogCard.jsx';




const BlogSection = () => {

    const { getCardsByAdress, getCardsForSection } = useCard();
        const cards = getCardsForSection('blogPage', 'blogSection');
    
        useEffect(() => {
            if (!cards.length) {
                getCardsByAdress('blogPage', 'blogSection');
            }
        }, [getCardsByAdress, cards]);


    

  return (
    <div className='h-full pt-20 pb-36 justify-center bg-[rgb(44,44,44)]'>
                
                {/* Heading */}
            
            
            
    
    
    
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mx-auto gap-x-1 gap-y-16 items-centers'>
    
            {cards?.map((BCard) => (
                    <Link
                    key={BCard._id}
                    to={{
                        pathname: `/blog/${BCard._id}`,
                    }}
                    state={{ BCard }} // Pass BCard as state
                >
                        <BlogCard BCard={BCard} />
                    </Link>
                ))}
              
            </div>
    
    
            </div>
  )
}

export default BlogSection