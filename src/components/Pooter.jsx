

import React from 'react'

const Footer = () => {
  return (
    <div className='bg-white p-7'>
      <div className='bg-white text-black p-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className="div1 flex gap-2 flex-col">
          <p>Main Street Plaza, Downtown Business District</p>
          <p>+1(555)123-4567</p>
        </div>

        <div className="div2 flex gap-2 flex-col">
          <p>Home</p>
          <p>Properties</p>
          <p>Our Projects</p>
          <p>Market</p>
        </div>

        <div className="div3 flex gap-2 flex-col">
          <p>Get in Touch</p>
          <h1 className='text-xl sm:text-3xl lg:text-5xl font-thin'>Griyo@Business.com</h1>
        </div>
      </div>

      <h1 className='text-5xl sm:text-6xl lg:text-9xl text-black font-medium'>
        <span className='text-gray-300'>/</span>
        <span>Griyo</span>
      </h1>

      <p className='text-end text-black text-sm sm:text-base'>
        Terms & Conditions | Privacy Policy
      </p>
    </div>
  )
}

export default Footer
