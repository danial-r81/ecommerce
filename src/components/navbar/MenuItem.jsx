import React from 'react';

const MenuItem = ({ children }) => {
   return (
      <li className='text-black font-normal text-[17px]'>
         <a href='#' className='hover:text-green transition duration-300'>
            {children}
         </a>
      </li>
   );
};

export default MenuItem;
