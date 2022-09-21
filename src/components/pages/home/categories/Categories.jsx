import React from 'react';
import CategoryItem from './CategoryItem';

const Categories = () => {
   return (
      <div className='w-full'>
         <div className='w-full flex flex-col justify-center items-center my-14'>
            <h3 className='text-5xl font-thin text-gray py-5'>
               Categories of The Month
            </h3>
            <div className='w-[45%]'>
               <p className='w-full text-gray text-lg text-center'>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
               </p>
            </div>
         </div>
         <div className='w-full flex justify-around items-center p-16'>
            <CategoryItem
               category={'Watches'}
               url='images/category_img_01.jpg'
            />
            <CategoryItem category={'Shoes'} url='images/category_img_02.jpg' />
            <CategoryItem
               category={'Accessories'}
               url='images/category_img_03.jpg'
            />
         </div>
      </div>
   );
};

export default Categories;
