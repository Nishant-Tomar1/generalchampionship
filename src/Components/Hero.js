import React from 'react'
import Styles from "../Styles/Home.module.css"
import logo from "../Assets/IMAGES/GClogo.png"

function Hero() {
  return (
    <>
      <div className={Styles.MainDiv}>


<div className='grid md:grid-flow-col md:grid-col-12 md:gap-3 py-12 lg:px-2 md:py-8'>
  
  <div className='rounded-lg md:col-span-6 md:pt-6'><img src={logo} alt="" /></div>
  <div className='flex flex-col items-center justify-center md:col-span-6 text-center text-lg md:pt-10 px-3'>
    <h2 className='lg:text-5xl lg:pb-2 font-bold xl:text-5xl'>General Championship <hr /></h2>
    <span className='text-sm lg:text-lg 2xl:text-xl'>           
    Get ready to witness the pinnacle of departmental competition at the annual General Championship. As departments clash in Technical, Cultural, and Sports events, the quest for pride and camaraderie unfolds.</span>

    <button className='mt-6 flex shadow-lg rounded-3xl bg-pink-700 px-5 py-2 hover:bg-pink-800 font-semibold'>Rulebook</button>      
  </div>
</div>



</div>
    </>
  )
}

export default Hero
