import React from 'react';

import './slider.css';

const SliderItem = ({ item }) => {
   return (
      <div className='w-full flex justify-around items-center bg-snow p-28'>
         <div className='w-[50%] flex flex-col'>
            {item.title.includes('Zay') ? (
               <h2 className='text-6xl font-thin py-3 flex text-green'>
                  <p className='pr-3 font-medium'>Zay</p> eCommerce
               </h2>
            ) : (
               <h2 className='text-6xl font-thin py-3'>{item.title}</h2>
            )}
            <p className='text-3xl pb-3 font-light'>{item.text1}</p>
            <p className='text-lg text-gray'>{item.text2}</p>
         </div>
         <img className='w-[40%]' src={item.imgUrl} alt='' />
      </div>
   );
};

export default SliderItem;
