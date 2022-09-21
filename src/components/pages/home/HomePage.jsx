import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Layout from '../../layout/Layout';

import { Navigation, Pagination, Keyboard } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SliderItem from './slider/SliderItem';

const HomePage = () => {
   const sliderItems = [
      {
         imgUrl: 'images/img1.jpg',
         title: 'Zay eCommerce',
         text1: 'Tiny and Perfect eCommerce Template',
         text2: 'Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap. This template is 100% free provided by TemplateMo website. Image credits go to stories.freepik.com, unsplash.com and icons8.com',
      },
      {
         imgUrl: 'images/img2.jpg',
         title: 'Proident occaecat',
         text1: 'Aliquip ex ea commodo consequat',
         text2: 'You are permitted to use this Zay CSS template for your commercial websites. Mauris viverra quam ut dolor commodo, vel posuere libero hendrerit. Curabitur eleifend felis eu erat.',
      },
      {
         imgUrl: 'images/img3.jpg',
         title: 'Repr in voluptate',
         text1: 'Ullamco laboris nisi ut',
         text2: 'We bring you 100% free CSS templates for your websites. Id arcu consectetur, nec porttitor mi porttitor. Donec venenatis dui eget erat vestibulum, dictum gravida massa convallis. Integer id.',
      },
   ];

   return (
      <Layout>
         <Swiper
            slidesPerView={1}
            loop={true}
            keyboard={{
               enabled: true,
            }}
            pagination={{
               clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Keyboard]}>
            {sliderItems.map((item) => (
               <SwiperSlide>
                  <SliderItem item={item} />
               </SwiperSlide>
            ))}
         </Swiper>
      </Layout>
   );
};

export default HomePage;
