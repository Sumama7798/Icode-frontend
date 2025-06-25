import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../components/animation/Animation.jsx';

const WWACrad = ({ wwacard, index }) => {
    const { image = 'default-image.jpg', heading = 'No Title', description = 'No description available.' } = wwacard;

    return (
        <div className="m-auto flex flex-col items-center sm:space-x-[500px] sm:flex-row text-4xl text-white">
            <div className="flex flex-col sm:block items-center gap-8">
  <motion.img
    variants={fadeIn('up', 0.3, 0.3)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    src={image}
    alt={heading || 'service image'}
    className={`card-image relative sm:absolute mx-auto 
      rounded-2xl shadow-md shadow-black
      ${
        index % 2 === 1
          ? 'sm:h-[350px] sm:w-[500px] sm:ml-[130px]'
          : 'sm:h-[300px] sm:w-[400px] sm:ml-[260px]'
      } 
      h-[200px] w-[300px]`}
  />
</div>
            <div className="flex-col">
                <motion.h1
                variants={fadeIn('up', 0.3, 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }} 
                className="card-heading flex text-3xl sm:mt-32 font-prompt justify-center mx-auto">
                    {heading}
                </motion.h1>
                <motion.p
                variants={fadeIn('up', 0.3, 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }} 
                className="card-description flex justify-center font-prompt text-sm mt-4 text-center 
                w-[350px] h-28 p-3 overflow-hidden"
                >
                    {description}
                </motion.p>
            </div>
        </div>
    );
};

WWACrad.propTypes = {
    wwacard: PropTypes.shape({
        image: PropTypes.string,
        heading: PropTypes.string,
        description: PropTypes.string,
    }),
};

export default WWACrad;












// import React from 'react';
// import PropTypes from 'prop-types';



// const WWACrad = ({ wwacard,index }) => {
//     const { image = 'default-image.jpg', heading = 'No Title', description = 'No description available.' } = wwacard;

//     const dynamicImgStyle = {

//         height: index % 2 === 1 ? '350px' : '300px',
//         width: index % 2 === 1 ? '500px' : '400px',
//         marginLeft: `${index * 130}px`,
        
//     };

//     return (
        
//         <div className='m-auto flex flex-col items-center sm:space-x-[500px] sm:flex-row text-4xl text-white'>
           
//             <img
//                 src={image}
//                 alt={heading || 'service image'}
//                 style={dynamicImgStyle}
//                 className='card-image relative left-4 sm:absolute  sm:left-32 flex justify-center mx-auto 
//                 h-[204px] w-[304px] sm:h-[300px] sm:w-[400px] rounded-2xl
//                 fill-inherit shadow-md shadow-black'
//             />

//             <div className='flex-col'>
//             <h1 className='card-heading flex text-3xl sm:mt-32 font-prompt justify-center mx-auto '>{heading}</h1>
//             <p className='card-description flex justify-center font-prompt text-sm mt-4 text-center 
//              w-[350px] h-28 p-3 overflow-hidden'>
//                 {description}
//             </p>

//             </div>  
//         </div>
//     );
// };

// WWACrad.propTypes = {
//     card: PropTypes.shape({
//         image: PropTypes.string,
//         heading: PropTypes.string,
//         description: PropTypes.string,
//     }),
// };

// export default WWACrad;
