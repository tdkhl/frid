import React from 'react';


import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

import { EffectFade, Autoplay } from 'swiper/modules';

import Img1 from '../assets/slider/1.jpg';
import Img2 from '../assets/slider/2.jpg';
import Img3 from '../assets/slider/3.jpg';

const slides = [
  {title: 'Découvrir la gamme',
    bg: Img1,
    btnText: 'Réserver',
  },
  {title: 'Tester ce produit',
    bg: Img2,
    btnText: 'Réserver',
  },
  {title: "J'en profite !",
    bg: Img3,
    btnText: 'Réserver',
  },
]

const HeroSlider = () => {
  return (
    <Swiper modules={[EffectFade, Autoplay]} effect={'fade'} loop={true} autoplay={{delay:3000, disableOnInteraction:false}}className='heroSlider h-[600px] lg:h-[700px]'>
      {slides.map((slide, index) =>{
        const {title, bg, btnText} = slide
        return <SwiperSlide className='h-full bg-pink-300 relative flex justify-center items-center' key={index}>
          <div className='absolute top-0 w-full h-full'>
            <img className='object-cover h-full w-full z-20' src={bg} alt={title}></img>
          </div>
          <div className='absolute bottom-10 left-10'>
            <button className=" border-gray-950 border-2 bg-transparent hover:bg-gray-950 hover:text-white text-gray-950 font-bold py-2 px-4 rounded">
              {title}
            </button>
          </div>
        </SwiperSlide>;
      })};
    </Swiper>
  );
};

export default HeroSlider;
