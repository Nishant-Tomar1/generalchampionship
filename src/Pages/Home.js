import React from 'react'
import Hero from '../Components/Hero'
import Carousel from '../Components/Carousel'
import Leader from '../Components/Leader.tsx'
import data from './Leaderboard.tsx'
import { Link } from 'react-router-dom'

function GcHome() {
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <Hero/>
      <Carousel/>
      <Leader data={data} />
      <button className=' flex shadow-lg rounded-3xl bg-pink-700 px-5 py-2 hover:bg-pink-800 font-semibold '><Link className=' text-white' style={{textDecoration:"none"}} to ="/leaderboard" onClick={()=> window.scrollTo(0,0)}> See Full Leaderboard</Link>
          </button> 
    </div>
  )
}

export default GcHome
