import React from 'react';

const Hero = () => {
  return (
    <div className='w-full h-screen'>
      <div class="relative w-full h-screen">
        <img
          class="absolute inset-0 w-full h-full object-cover"
          src="https://img.freepik.com/free-photo/medium-shot-smiley-woman-exterior-portrait_23-2149351979.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722470400&semt=ais_hybrid"
          alt="/"
        />
      </div>

      <div className=' absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
            FOR BETTER HEALTHCARE & EDUCATION
          </h1>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>

          </p>
          <button className='bg-white text-black '></button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
