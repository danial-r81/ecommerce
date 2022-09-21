import React from 'react';
import { FaStar } from 'react-icons/fa';

const FeaturedItem = ({ title, url, starRating, price, reviews }) => {
   return (
      <div className='w-[30%] flex flex-col bg-white rounded-md relative overflow-hidden'>
         <img className='w-full cursor-pointer' src={url} alt='' />
         <div className='w-full flex flex-col p-4'>
            <div className='w-full flex justify-between items-center py-4'>
               <div className='flex items-center justify-between'>
                  {starRating.map((isActive) => (
                     <FaStar
                        size={25}
                        className={`${
                           isActive ? 'text-yellow-400' : 'text-slate-300'
                        } px-[1px]`}
                     />
                  ))}
               </div>
               <p className='text-[#BEBEC9] text-lg'>${price}</p>
            </div>
            <div className='w-full flex flex-col mb-3'>
               <a href='#' className='text-3xl font-light text-dark'>
                  {title}
               </a>
               <p className='font-extralight py-1'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  in culpa qui officia deserunt.
               </p>
            </div>
            <div className='w-full'>
               <p className='text-[#BEBEC9]'>Reviews ({reviews})</p>
            </div>
         </div>
      </div>
   );
};

export default FeaturedItem;
