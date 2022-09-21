import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { BiEnvelope } from 'react-icons/bi';
import {
   FaFacebookF,
   FaInstagram,
   FaTwitter,
   FaLinkedin,
} from 'react-icons/fa';
import FooterItem from './FooterItem';
import FooterColumn from './FooterColumn';

const Footer = () => {
   return (
      <div className='w-full h-[600px] bg-dark px-20'>
         <div className='w-full flex justify-around py-10 border-b border-gray'>
            <FooterColumn title={'Zay Shop'}>
               <FooterItem text={'123 Consectetur at ligula 10660'}>
                  <MdLocationOn />
               </FooterItem>
               <FooterItem text={'010-020-0340'}>
                  <BsTelephoneFill />
               </FooterItem>
               <FooterItem text={'mail@domain.com'}>
                  <BiEnvelope />
               </FooterItem>
            </FooterColumn>
            <FooterColumn title={'Products'}>
               <FooterItem text={'Luxury'} />
               <FooterItem text={'Sport Wear'} />
               <FooterItem text={"Men's Shoes"} />
               <FooterItem text={"Women's Shoes"} />
               <FooterItem text={'Popular Dress'} />
               <FooterItem text={'Gym Accessories'} />
               <FooterItem text={'Sport Shoes'} />
            </FooterColumn>
            <FooterColumn title={'Further Info'}>
               <FooterItem text={'Home'} />
               <FooterItem text={'About Us'} />
               <FooterItem text={'Shop Locations'} />
               <FooterItem text={'FAQs'} />
               <FooterItem text={'Contact'} />
            </FooterColumn>
         </div>
         <div className='w-full flex justify-between items-center py-7'>
            <div className='flex w-[200px] justify-between'>
               <div className='w-[40px] h-[40px] flex justify-center items-center border border-gray rounded-full'>
                  <FaFacebookF className='flex justify-center items-center text-lg text-snow' />
               </div>
               <div className='w-[40px] h-[40px] flex justify-center items-center border border-gray rounded-full'>
                  <FaInstagram className='flex justify-center items-center text-lg text-snow' />
               </div>
               <div className='w-[40px] h-[40px] flex justify-center items-center border border-gray rounded-full'>
                  <FaTwitter className='flex justify-center items-center text-lg text-snow' />
               </div>
               <div className='w-[40px] h-[40px] flex justify-center items-center border border-gray rounded-full'>
                  <FaLinkedin className='flex justify-center items-center text-lg text-snow' />
               </div>
            </div>
            <div className='w-[200p] flex border border-gray rounded-md border-b'>
               <input
                  type='text'
                  placeholder='Email address'
                  className='bg-transparent outline-none p-2 text-snow'
               />
               <button className='text-snow bg-green rounded-r-md p-2'>
                  subscribe
               </button>
            </div>
         </div>
         <div className='w-full bg-red-200'></div>
      </div>
   );
};

export default Footer;
