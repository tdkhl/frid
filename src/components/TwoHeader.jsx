import React from 'react';
import { useState, useEffect } from 'react';

import UserLogo from '../assets/user.svg'
import LogoBlue from '../assets/logo_blue.png';
import LogoWhite from '../assets/logo_white.png';
import Menu from '../assets/menu.png';
import Close from '../assets/fermer.png';
import { motion } from 'framer-motion';
import Insta from '../assets/instagram.png';
import TikTok from '../assets/tic-tac.png';
import Whatsapp from '../assets/whatsapp.png';
import UserColor from '../assets/user_color.png';

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

import { EffectFade, Autoplay } from 'swiper/modules';

const slides = [
"-10% sur notre gamme à l'ail", "Livraison gratuite à partir de 50€", "Retour gratuit sous 30 jours"]

const Header = () => {
  const [header, setHeader] = useState(false);
  const [menu, setMenu] = useState(false);
  const handleClick = () => {
    setMenu(!menu);
    console.log(menu);
  };
  useEffect(() => {
    window.addEventListener('scroll', () =>{
     
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

  });
  return (
    <div className='fixed z-40 w-full transition-all duration-500'>
      <Swiper modules={[EffectFade, Autoplay]} effect={'fade'} loop={true} autoplay={{delay:5000, disableOnInteraction:false}}className={`${menu ? 'invisible' : 'heroSlider w-full h-[35px] cursor-default'}`}>
        {slides.map((slide) =>{
          return <SwiperSlide className='h-full bg-slate-50 relative flex justify-center items-center' key={slide}>
            <div className='absolute top-0 w-full h-full'>
              <h1 className='text-black  font-tertiary font-bold h-full w-full'>{slide}</h1>
            </div>

          </SwiperSlide>;
        })};
      </Swiper>
      <header className={`${header ? 'bg-gray-950 shadow-lg' : 'bg-transparent'} transition-all duration-500`} onMouseEnter={() => setHeader(true)} onMouseLeave={() => setHeader(false)}>
      <div className='container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between'>
        <div className='w-full flex flex-row items-center justify-between'>
          <div className='lg:hidden'>

          </div>
          <a href="/" className='flex flex-row items-center'>
            { header ? <img src={LogoBlue} alt='logo' className='w-[100px] ml-10'/> : <img src={LogoBlue} alt='logo' className='w-[100px] ml-10'/>}
          </a>
          <img src={Menu} alt='menu' className='w-[20px] mr-5 lg:hidden' onClick={handleClick}></img>
        </div>
       

        
        
        
        

        <nav className={`${header ? 'text-white' : 'text-gray-950'} flex gap-x-4 lg:gap-x-8 font-tertiary tracking-[3px] text-[15px]  uppercase invisible lg:visible`}>
          <a href="/" className='hover:text-accent transition hover:scale-110'>Cheveux</a>
          <a href="/" className='hover:text-accent transition hover:scale-110'>Peau</a>
          <a href="/" className='hover:text-accent transition hover:scale-110'>Sérums</a>
          <a href="/" className='hover:text-accent transition hover:scale-110 '>Contact</a>
          { header ? <img src={UserColor} alt='logo' className='w-[25px] float-right hover:scale-110 cursor-pointer' /> : <img src={UserLogo} alt='logo' className='w-[20px] float-right hover:scale-110 cursor-pointer'/>}
        </nav>
      </div>
      <motion.div
        className={`fixed top-0 right-0 h-full  bg-white w-3/4 shadow-lg transform ${menu ? 'translate-x-0' : 'translate-x-full'}`}
        initial={false}
        animate={{ x: menu ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      >
        
        <nav className='flex flex-col items-center gap-y-4 pt-8 relative'>
          <img src={Close} alt='close' className='w-[25px] absolute right-3 top-5' onClick={handleClick}></img>
          <img src={LogoBlue} alt="logo" className='scale-50'></img>
          <a href="/" className='hover:text-accent transition hover:scale-110 text-amber-800 font-semibold border-b h-10 w-[96%]  font-mono border-gray-400 mt-2'>Cheveux</a>
          <a href="/" className='hover:text-accent transition hover:scale-110 text-amber-800 font-semibold border-b h-10 w-[96%] font-mono border-gray-400'>Peau</a>
          <a href="/" className='hover:text-accent transition hover:scale-110 text-amber-800 font-semibold border-b h-10 w-[96%] font-mono border-gray-400'>Sérums</a>
          <a href="/" className='hover:text-accent transition hover:scale-110 text-amber-800 font-semibold  font-mono'>Contact</a>
          { menu ? <img src={UserLogo} alt='logo' className='invisible' /> : <img src={UserLogo} alt='logo' className='w-[20px] float-right hover:scale-110 cursor-pointer'/>}
          <a href="/" className='hover:text-accent transition hover:scale-110 text-amber-800 font-semibold  font-mono absolute bottom-20 left-5'>Connexion</a>
          <a href="/" className='hover:text-accent transition hover:scale-110 text-amber-800 font-semibold  font-mono absolute bottom-10 left-5'>Panier</a>
          <img src={Insta} alt='close' className='w-[25px] absolute bottom-0 left-5' onClick={handleClick}></img>
          <img src={TikTok} alt='close' className='w-[25px] absolute bottom-0 left-20' onClick={handleClick}></img>
        </nav>
        
      </motion.div>
    </header>
    </div>
    
   
  );
};

export default Header;
