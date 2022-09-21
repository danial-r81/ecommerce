import React from 'react';
import FeaturedItem from './FeaturedItem';

const FeaturedProduct = () => {
   return (
      <div className='w-full bg-snow2'>
         <div className='w-full flex flex-col justify-center items-center'>
            <h3 className='text-5xl font-thin text-gray py-5'>
               Featured Product
            </h3>
            <div className='w-[45%]'>
               <p className='w-full text-gray text-lg text-center'>
                  Reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident.
               </p>
            </div>
         </div>
         <div className='w-full h-[600px] flex justify-around items-center px-20'>
            <FeaturedItem
               title='Gym Weight'
               url='images/feature_prod_01.jpg'
               starRating={[true, true, true, false, false]}
               price={'240.00'}
               reviews={24}
            />
            <FeaturedItem
               title='Cloud Nike Shoes'
               url='images/feature_prod_02.jpg'
               starRating={[true, true, true, false, false]}
               price={'240.00'}
               reviews={24}
            />
            <FeaturedItem
               title='Summer Addides Shoes'
               url='images/feature_prod_03.jpg'
               starRating={[true, true, true, false, false]}
               price={'240.00'}
               reviews={24}
            />
         </div>
      </div>
   );
};

export default FeaturedProduct;
