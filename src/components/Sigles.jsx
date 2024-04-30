import React from 'react';

import  SiglePic  from '../assets/sigles/siglepic.png';



const Sigles = () => {
    return (
        <div className='flex flex-row items-center justify-center gap-x-4'>
            <img src={SiglePic} alt='Vegan' className='h-[270px]'></img>
        </div>
      );
};

export default Sigles;
