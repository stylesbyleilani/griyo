



import { CircleArrowRight } from 'lucide-react';
import { IoIosArrowDown } from 'react-icons/io';
import React from 'react';

const Project = () => {
  const smallProjects = [
    { id: 1, image: "/m13.jpg", year: "2023", title: "Villa in Seminyak" },
    { id: 2, image: "/m14.jpg", year: "2023", title: "Villa in Seminyak" },
    { id: 3, image: "/m15.jpg", year: "2020", title: "Villa in Seminyak" },
    { id: 4, image: "/m16.jpg", year: "2020", title: "Villa in Seminyak" }
  ];

  const SmallProjectCard = ({ image, year, title }) => (
    <div className="flex-shrink-0 w-[150px] sm:w-[180px] lg:w-[150px]">   
      <img 
        src={image} 
        alt={title} 
        className="w-full h-[150px] object-cover"
      />
      <div className="mt-2 space-y-1"> 
        <h2 className="text-black font-semibold text-sm sm:text-base">{year}</h2>
        <h2 className="text-gray-500 font-medium text-sm sm:text-base">{title}</h2>
      </div>
    </div>
  );

  return (
    <div className="bg-white p-4 sm:p-7">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-black font-medium">
        <span className="text-gray-300">/</span>
        <span>Our</span>
        <span className="block">Projects</span>
      </h1>

      <div className="flex flex-col lg:flex-row justify-between p-4 sm:p-7">
        <div className="hr text-gray-300 hidden lg:flex items-center flex-1 max-w-[900px]">
          <div className="flex-1 bg-gray-300 h-[1px]" />
          <CircleArrowRight/>
        </div>

        <div className="p text-black lg:max-w-[500px]">
          <p className="text-sm sm:text-base">
            <span className="block">Our projects showcase innovative designs, prime locations, and sustainable development,</span>
            <span className="block">offering modern living spaces that elevate lifestyle and comfort.</span>
            <span>transactions.</span>
          </p>

          <div className="rounded-full border border-gray-500 inline-flex items-center py-2 px-4 mt-5 hover:bg-gray-50 transition-colors cursor-pointer">
            <button className="text-sm sm:text-base">Learn More</button>
            <IoIosArrowDown className="ml-1"/>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 p-4 sm:p-8 lg:p-20">
        <div className="w-full lg:w-[60%]">   
          <img 
            src="/m12.jpg" 
            alt="Skyline Residence" 
            className="w-full h-[250px] sm:h-[350px] object-cover"
          />
          <div className="space-y-2 mt-2"> 
            <h2 className="text-black font-semibold">2024</h2>
            <h2 className="text-black font-semibold">Skyline Residence</h2>
            <p className="text-gray-500 text-sm sm:text-base">
              <span className="block">Luxury high-rise apartments with panoramic views, modern amenities,</span>
              <span>and a prime downtown</span>
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[40%] space-y-5">
          <div className="overflow-x-auto lg:overflow-visible">
            <div className="flex gap-4 lg:gap-8 pb-2 lg:pb-0">
              {smallProjects.slice(0, 2).map(project => (
                <SmallProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>

          <div className="overflow-x-auto lg:overflow-visible">
            <div className="flex gap-4 lg:gap-8 pb-2 lg:pb-0">
              {smallProjects.slice(2).map(project => (
                <SmallProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <hr className="bg-gray-300 h-[2px] w-full" />
    </div>
  );
};

export default Project;