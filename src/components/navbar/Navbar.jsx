import React from 'react';
import { FaRegEnvelope, FaCartArrowDown, FaUser } from 'react-icons/fa';
import { AiOutlinePhone } from 'react-icons/ai';
import { BiSearchAlt2 } from 'react-icons/bi';
import {
   FaFacebookF,
   FaInstagram,
   FaTwitter,
   FaLinkedin,
} from 'react-icons/fa';

const Navbar = () => {
   return (
      <div className='w-full h-32 flex flex-col'>
         {/* top nav */}
         <div className='w-full h-[33%] bg-dark hidden lg:flex justify-between items-center px-24'>
            <div className='w-[240px] h-full flex justify-between'>
               <div className='h-full flex items-center cursor-pointer'>
                  <FaRegEnvelope className='text-white text-sm' />
                  <p className='pl-2 text-white text-xs'>mail@domain.com</p>
               </div>
               <div className='h-full flex items-center cursor-pointer'>
                  <AiOutlinePhone className='text-white text-sm' />
                  <p className='text-white pl-2 flex justify-center items-center text-xs'>
                     010-020-0340{' '}
                  </p>
               </div>
            </div>
            <div className='w-[90px] h-full flex justify-between items-center'>
               <FaFacebookF className='text-white cursor-pointer text-xs' />
               <FaInstagram className='text-white cursor-pointer text-xs' />
               <FaTwitter className='text-white cursor-pointer text-xs' />
               <FaLinkedin className='text-white cursor-pointer text-xs' />
            </div>
         </div>
         {/* end of top nav */}
         {/* bottom nav */}
         <div className='w-full h-[60%] bg-white flex items-center justify-around'>
            <div className='flex justify-center items-center h-full text-5xl font-medium text-green'>
               <h1 className='cursor-pointer'>Zay</h1>
            </div>
            <ul className='w-[36%] h-full flex justify-between items-center'>
               <li className='text-dark font-normal'>
                  <a href='#'>Home</a>
               </li>
               <li className='text-dark font-normal'>
                  <a href='#'>About</a>
               </li>
               <li className='text-dark font-normal'>
                  <a href='#'>Shop</a>
               </li>
               <li className='text-dark font-normal'>
                  <a href='#'>Contact</a>
               </li>
            </ul>
            <div className='w-[110px] h-full flex items-center justify-between'>
               <BiSearchAlt2 className='text-xl cursor-pointer' />
               <div className='relative cursor-pointer'>
                  <FaCartArrowDown className='text-xl' />
                  <span className='absolute top-[-18px] right-[-15px] w-[27px] h-[27px] bg-snow rounded-full flex justify-center items-center'>
                     7
                  </span>
               </div>
               <div className='relative cursor-pointer'>
                  <FaUser className='text-xl' />
                  <span className='absolute top-[-18px] right-[-20px] w-[40px] h-[27px] bg-snow rounded-full flex justify-center items-center'>
                     +99
                  </span>
               </div>
            </div>
         </div>
         {/* end of bottom nav */}
      </div>
   );
};

export default Navbar;
