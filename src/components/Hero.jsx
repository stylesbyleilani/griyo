

import React from 'react';
import { ArrowBigDownDash, LocateIcon } from 'lucide-react';

const SearchInput = ({ placeholder }) => (
  <div className="flex-1 min-w-[250px] mx-2 mb-4">
    <div className="flex justify-between bg-gray-200 p-2 rounded-sm">
      <div className="flex gap-2 flex-1">
        <LocateIcon className="w-5 text-gray-900 h-5 flex-shrink-0" />
        <input 
          type="text" 
          placeholder={placeholder} 
          className="bg-transparent  outline-none w-full"
        />
      </div>
      <ArrowBigDownDash className="w-5 text-gray-900 h-5 flex-shrink-0" />
    </div>
  </div>
);

const Home = () => {
  const searchCategories = [
    { label: "Location", placeholder: "Find location" },
    { label: "Property Type", placeholder: "Select type" },
    { label: "Price", placeholder: "Select range" },
    { label: "Bedrooms", placeholder: "Choose number" }
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[url(/m22.jpg)] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-2xl md:text-5xl lg:text-5xl mt-16 md:mt-0 tracking-widest font-medium leading-tight mb-6 text-white">
              <span className="block mb-2">Helping You Find The Most</span>
              <span>Comfortable Place</span>
            </h1>
            <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
              <span className="block">Luxurious spaces, redefined designs, personalized services and modern</span>
              <span>amenities for a sophisticated, upscale lifestyle.</span>
            </p>
          </div>
        </div>

        <div className="w-full mt-9 md:mt-0 px-4 pb-8">
          <div className="bg-white rounded-lg shadow-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {searchCategories.map(({ label }, index) => (
                <div key={index} className="text-black font-medium">
                  {label}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {searchCategories.map(({ placeholder }, index) => (
                <SearchInput key={index} placeholder={placeholder} />
              ))}
            </div>

            {/* Search button */}
            {/* <div className="flex justify-center mt-6">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
                Search Properties
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;