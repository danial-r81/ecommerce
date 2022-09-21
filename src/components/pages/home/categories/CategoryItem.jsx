import React from 'react';

const CategoryItem = ({ url, category }) => {
   return (
      <div className='w-[30%] flex flex-col justify-center items-center'>
         <img className='w-[80%] rounded-full' src={url} alt='' />
         <p className='font-medium text-lg my-5'>{category}</p>
         <button className='bg-green text-snow py-2 px-3 rounded-md'>
            Go Shop
         </button>
      </div>
   );
};

export default CategoryItem;
