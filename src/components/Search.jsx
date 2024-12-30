


import { FileChartColumnIncreasing, GitPullRequestDraft, SearchIcon, XIcon } from 'lucide-react';
import React from 'react';

const Search = () => {
  const steps = [
    {
      number: "No.1",
      title: "Research Market",
      description: [
        "Explore neighborhoods, property types, and prices to find",
        "the right real estate opportunities"
      ]
    },
    {
      number: "No.2",
      title: "Secure Financing",
      description: [
        "Arrange mortgage options and gather necessary funds to",
        "ensure a smooth purchasing process."
      ]
    },
    {
      number: "No.3",
      title: "Close Deal",
      description: [
        "Finalize paperwork, negotiate terms, and transfer",
        "ownership to complete your real estate purchase."
      ]
    }
  ];

  const StepCard = ({ number, title, description }) => (
    <div className="flex flex-col gap-2 p-2">
      <h1 className="font-semibold text-sm sm:text-base">{number}</h1>
      <h2 className="text-black font-semibold text-base sm:text-lg">{title}</h2>
      <p className="text-gray-600 text-sm sm:text-base">
        {description.map((line, index) => (
          <span key={index} className="block">{line}</span>
        ))}
      </p>
    </div>
  );

  return (
    <div className="bg-white p-3 py-6 sm:py-9 text-gray-950">
      {/* Search Bar */}
      <div className="relative max-w-5xl mx-auto">
        <div className="border-2 border-gray-300 py-2 px-3 sm:px-4 flex items-center justify-between rounded-full">
          <div className="flex items-center gap-2 flex-1">
            <SearchIcon className="w-5 h-5 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search Properties Location" 
              className="w-full text-black outline-none bg-transparent text-sm sm:text-base placeholder:text-gray-500"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Clear search"
            >
              <XIcon className="w-5 h-5" />
            </button>
            <button className="px-3 py-1 rounded-full bg-black text-gray-100 flex items-center gap-2 hover:bg-gray-800 transition-colors">
              <GitPullRequestDraft className="w-4 h-4" />
              <span className="text-sm sm:text-base">Filter</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5 border-t border-b border-gray-300 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto px-3 sm:px-4">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;