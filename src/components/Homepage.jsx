import React from 'react'
import Hero from './Hero'
import Search from './Search'
import Discover from './Discover'
import About from './About'
import Project from './Project'
import Vision from './Vision'
import Testimonials from './Testimonials'

const Homepage = () => {
  return (
    <div>
        <Hero/>
        <Search/>
        <Discover/>
        <About/>
        <Project/>
        <Vision/>
        <Testimonials/>
    </div>
  )
}

export default Homepage