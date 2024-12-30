
import { CircleArrowRight } from 'lucide-react';
import React from 'react';

const About = () => {
  return (
    <div className='bg-white p-4 sm:p-7'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl text-center text-black font-medium'>
        <span className='text-gray-300'>/</span>
        <span>About Us</span>
      </h1>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 sm:gap-7 p-4 sm:p-7">
        <div className="hr text-gray-300 hidden lg:flex items-center">
          <div className='w-[200px] sm:w-[300px] lg:w-[500px] bg-gray-300 h-[1px]' />
          <CircleArrowRight/>
        </div>

        <div className="p text-black max-w-[600px] lg:max-w-[500px]">
          <p className='text-sm sm:text-base text-center lg:text-left'>
            <span className='block'>At Griyo Real Estate, we provide tailored property solutions, expert guidance and,</span>
            <span className='block'>exceptional service to ensure seamless transactions and satisfaction in every real</span>
            <span>estate deal.</span>
          </p>
        </div>
      </div>

      <div className="px-4 sm:px-8 lg:px-16 mt-8">
        <div className="relative w-full pb-[56.25%]">
          <img 
            src="/m23.jpg" 
            alt="About Griyo Real Estate" 
            className='absolute top-0 left-0 w-full h-full object-cover'
          />
        </div>
      </div>

      <div className="px-4 sm:px-8 lg:px-20 mt-5">
        <p className='text-gray-500 text-sm sm:text-base text-center lg:text-left'>
          <span className='block'>Find comprehensive to all your Naturaly travel questions</span>
          <span>right here. Wheather Find comprehensive answers to all </span>
        </p>
      </div>

      <hr className='bg-gray-300 h-[2px] w-full mt-8 sm:mt-12' />
    </div>
  );
};

export default About;