


import { ArrowRight, CircleArrowRight } from 'lucide-react';
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const Vision = () => {
  const visionItems = [
    {
      title: "Innovative Living Spaces",
      description: [
        "Blending technology with modern design to create",
        "exceptional forward-thinking homes."
      ]
    },
    {
      title: "Exceptional Real Estate",
      description: [
        "Delivering top-tier properties and unmatched services for a",
        "superior real estate experience."
      ]
    },
    {
      title: "Sustainable Communities",
      description: [
        "Building eco-friendly neighborhoods that enhance quality",
        "of life and environmental responsibility."
      ]
    },
    {
      title: "Quality Craftsmanship",
      description: [
        "Ensuring meticulous attention to details and superior",
        "construction for lasting value."
      ]
    }
  ];

  const VisionItem = ({ title, description }) => (
    <div className="vision-item space-y-2">
      <h1 className="font-semibold text-black text-base sm:text-lg">{title}</h1>
      <p className="text-gray-500 text-sm sm:text-base">
        {description.map((line, index) => (
          <span key={index} className="block">{line}</span>
        ))}
      </p>
      <div className="flex items-center gap-2 cursor-pointer group">
        <div className="flex items-center rounded-full bg-black p-1 group-hover:scale-105 transition-transform">
          <ArrowRight className="w-4 h-4 text-white" />
        </div>
        <h2 className="font-semibold text-base sm:text-lg text-black group-hover:translate-x-1 transition-transform">
          Learn More
        </h2>
      </div>
    </div>
  );

  return (
    <div className="bg-white p-4 sm:p-7">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-center text-black font-medium">
        <span className="text-gray-300">/</span>
        <span>Our</span>
        <span className="block">Vision</span>
      </h1>

      <div className="flex flex-col lg:flex-row justify-between p-4 sm:p-7">
        <div className="hr text-gray-300 hidden lg:flex items-center">
          <div className="w-full max-w-[500px] bg-gray-300 h-[1px]" />
          <CircleArrowRight />
        </div>
        
        <div className="p text-black lg:max-w-[500px]">
          <p className="text-sm sm:text-base">
            <span className="block">Our projects showcase innovative designs, prime locations, and sustainable development,</span>
            <span className="block">offering modern living spaces that elevate lifestyle and comfort.</span>
            <span>transactions.</span>
          </p>

          <div className="rounded-full border border-gray-500 inline-flex items-center py-2 px-4 mt-5 hover:bg-gray-50 transition-colors cursor-pointer">
            <button className="text-sm sm:text-base">Learn More</button>
            <IoIosArrowDown className="ml-1" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 mt-8">
        <div className="w-full lg:w-auto flex justify-center lg:justify-start">
          <img 
            src="/m17.jpg" 
            alt="Vision representation" 
            className="w-full max-w-[300px] h-[340px] object-cover"
          />
        </div>

        <div className="flex-1 grid grid-cols-1 space-y-6 p-6 md:p-0 md:grid-cols-2 gap-x-5 gap-y-3">
          {visionItems.map((item, index) => (
            <div key={index} className="space-y-3">
              <hr className="bg-gray-300 h-[1px] w-full" />
              <VisionItem {...item} />
            </div>
          ))}
        </div>
      </div>

      <hr className="bg-gray-300 h-[2px] w-full mt-8 sm:mt-12" />
    </div>
  );
};

export default Vision;