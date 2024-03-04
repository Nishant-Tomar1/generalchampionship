import React from 'react'
import Hero from '../Components/Hero'
import Carousel from '../Components/Carousel'
import Leader from '../Components/Leader.tsx'
import { Link } from 'react-router-dom'
import {data} from './Leaderboard.tsx'
import { motion } from 'framer-motion'

function GcHome() {

  const variant = {
    entry : {
        opacity: [0,1], 
        transition:{
            duration:0.25,
            times:[0,1],
        }
    },
    exit : {
        opacity: [1,0], 
        transition:{
            duration:0.25,
            times:[0,1],
        }
    },
}
  return (
    <motion.div className='flex flex-col justify-center items-center gap-4' variants={variant} animate='entry' exit='exit'>
      <Hero/>
      <Carousel/>
      <Leader data={data} />
      <button className=' flex shadow-lg rounded-3xl bg-pink-700 px-5 py-2 hover:bg-pink-800 font-semibold '><Link className=' text-white' style={{textDecoration:"none"}} to ="/leaderboard" onClick={()=> window.scrollTo(0,0)}> See Full Leaderboard</Link>
          </button> 
    </motion.div>
  )
}

export default GcHome
