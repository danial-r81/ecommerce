import React from 'react';

const FooterColumn = ({ title, children }) => {
   return (
      <div className='w-[30%] flex flex-col'>
         <h4
            className={`w-full text-3xl ${
               title === 'Zay Shop'
                  ? 'text-green font-medium'
                  : 'text-snow font-light'
            } border-b border-gray pb-6`}>
            {title}
         </h4>
         <ul className='w-full flex flex-col mt-5'>{children}</ul>
      </div>
   );
};

export default FooterColumn;
