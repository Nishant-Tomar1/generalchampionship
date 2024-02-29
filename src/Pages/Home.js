import React from 'react'
import Hero from '../Components/Hero'
import Carousel from '../Components/Carousel'
import LeaderBoard from '../Components/LeaderBoard'
// import Footer from '../Components/Footer'

function GcHome() {
  return (
    <div className='flex flex-col justify-center items-center '>
      <Hero/>
      <Carousel/>
      <LeaderBoard/>
      {/* <Footer/> */}
    </div>
  )
}

export default GcHome
