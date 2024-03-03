import React from 'react'
import Hero from '../Components/Hero'
import Carousel from '../Components/Carousel'
import Leader from '../Components/Leader.tsx'
import data from './Leaderboard.tsx'

function GcHome() {
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <Hero/>
      <Carousel/>
      <Leader data={data} />
    </div>
  )
}

export default GcHome
