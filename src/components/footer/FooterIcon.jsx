import React from 'react';

const FooterIcon = ({ children }) => {
   return (
      <div className='w-[40px] h-[40px] flex justify-center items-center border border-gray rounded-full'>
         {children}
      </div>
   );
};

export default FooterIcon;
