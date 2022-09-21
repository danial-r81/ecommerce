import React from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

const Layout = ({ children }) => {
   return (
      <div className='max-w-[1600px]'>
         <Navbar />
         {children}
         <Footer />
      </div>
   );
};

export default Layout;
