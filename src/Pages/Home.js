import React from 'react'
import Hero from '../Components/Hero'
import Carousel from '../Components/Carousel'
import Leader from '../Components/Leader.tsx'

function GcHome() {
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <Hero/>
      <Carousel/>
      <Leader/>
    </div>
  )
}

export default GcHome
