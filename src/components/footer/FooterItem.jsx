import React from 'react';

const FooterItem = ({ children, text }) => {
   return (
      <li className='flex items-center text-snow2 font-light text-lg py-2'>
         {children}
         <p
            className={`pl-2 transition duration-200 ${
               text === '123 Consectetur at ligula 10660'
                  ? ''
                  : 'hover:text-green cursor-pointer'
            }`}>
            {text}
         </p>
      </li>
   );
};

export default FooterItem;
