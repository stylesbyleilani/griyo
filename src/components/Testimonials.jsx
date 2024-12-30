


import { CircleArrowLeft, CircleArrowRight } from 'lucide-react'
import React from 'react'

const Testimonials = () => {
  return (
    <div className='bg-white p-7'>
      <h1 className='text-5xl sm:text-6xl lg:text-7xl text-black font-medium'>
        <span className='text-gray-300'>/</span>
        <span>Testimonial</span>
      </h1>

      <div className="flex flex-col lg:flex-row gap-6 p-7">
        <div className="w-full sm:w-[300px] lg:w-[300px] h-[auto] p-3 ">
          <div className="flex gap-3 items-center">
            <img src="/hum.jpg" alt="Adriana" className='w-12 h-12 rounded-full object-cover' />
            <div className="flex flex-col">
              <span className='block text-black text-lg font-semibold'>Adriana O'Sullivan</span>
              <span className='text-gray-400 text-sm'>adriana@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="w-full   p-4 ">
          <p className='text-gray-900 text-sm sm:text-base'>
            <span className='block'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum quibusdam ducimus pariatur error, minima, sint at expedita, veritatis deserunt dicta ex aut distinctio consectetur eos fugit totam quas eaque! Itaque.</span>
            <span className='block'>sit amet consectetur adipisicing elit. Dolorum quibusdam ducimus pariatur error, minima, sint at expedita, veritatis deserunt dicta ex aut distinctio consectetur eos fugit totam quas eaque!</span>
            <span className='block mt-2'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum quibusdam ducimus pariatur error, minima, sint at expedita, veritatis deserunt dicta ex aut distinctio consectetur eos fugit totam quas eaque! Itaque.</span>
            <span className='block'>sit amet consectetur adipisicing elit. Dolorum quibusdam ducimus pariatur error, minima, sint at expedita, veritatis deserunt dicta ex aut distinctio consectetur eos fugit totam quas eaque!</span>
          </p>
          <div className="flex items-center gap-3 mt-4">
            <CircleArrowLeft className='text-gray-300' />
            <p className='text-gray-400'>4</p>
            <hr className='bg-gray-300 w-full h-[1px] ' />
            <p className='text-gray-400'>24</p>
            <CircleArrowRight className='text-gray-300' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
