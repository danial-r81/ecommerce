import React from 'react';
import Navbar from '../navbar/Navbar';

const Layout = ({ children }) => {
   return (
      <div className='max-w-[1600px]'>
         <Navbar />
         {children}
      </div>
   );
};

export default Layout;
