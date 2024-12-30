


import { CircleArrowRight } from 'lucide-react';
import { IoIosArrowDown } from "react-icons/io";
import React from 'react';

const Discover = () => {
  const images = [
    { src: "/m14.jpg", title: "Elite Estate Advisors", offset: true },
    { src: "/m15.jpg", title: "Grand Kalijaga", large: true },
    { src: "/m16.jpg", title: "Skyline Reality Group", offset: true },
    { src: "/m17.jpg", title: "Skyline Reality Group", offset: true },
  ];

  return (
    <div className='bg-white p-4 sm:p-7'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl text-black font-medium'>
        <span className='text-gray-300'>/</span>Discover
      </h1>

      <div className="flex flex-col lg:flex-row justify-between p-3 sm:p-7">
        <div className="hr text-gray-300 hidden lg:flex items-center flex-1 max-w-[900px]">
          <div className='flex-1 bg-gray-300 h-[1px]' />
          <CircleArrowRight/>
        </div>

        <div className="p text-black lg:max-w-[500px]">
          <p className='text-sm sm:text-base'>
            <span className='block'>Discover a real estate agency that prioritizes client needs, offering</span>
            <span className='block'>expert guidance personalized solutions, and seamless property</span>
            <span>transactions.</span>
          </p>

          <div className='rounded-full border border-gray-500 inline-flex items-center py-2 px-4 mt-5 hover:bg-gray-50 transition-colors cursor-pointer'>
            <button className='text-sm sm:text-base'>Learn More</button>
            <IoIosArrowDown className='ml-1'/>
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto lg:overflow-visible p-4 sm:p-16">
        <div className="flex flex-nowrap lg:flex-wrap gap-4 lg:gap-7">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`flex-none lg:flex-auto flex flex-col
                ${image.offset ? 'lg:mt-9' : ''}
                ${image.large ? 'w-[280px] sm:w-[350px]' : 'w-[180px] sm:w-[220px]'}
              `}
            >
              <img 
                src={image.src} 
                alt={image.title}
                className={`object-cover
                  ${image.large 
                    ? 'h-[280px] sm:h-[350px]' 
                    : 'h-[200px] sm:h-[250px]'}
                  w-full
                `}
              />
              <h3 className='text-black p-1 text-sm sm:text-base'>{image.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <hr className='bg-gray-300 h-[2px] w-full' />
    </div>
  );
};

export default Discover;