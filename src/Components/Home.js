import React from 'react'
import Styles from "../Styles/Home.module.css"
import logo from "./IMAGES/GClogo.png"

function GcHome() {
  return (
    <>
      <div className={Styles.MainDiv}>


          <div className='grid md:grid-flow-col md:grid-col-12 gap-3 py-12 lg:px-2 md:py-8'>
            
            <div className='rounded-lg md:col-span-6 md:pt-6'><img src={logo} alt="" /></div>
            <div className='flex flex-col items-center justify-center md:col-span-6 text-center text-lg md:pt-10 px-3'>
              <h2 className='lg:text-5xl pb-2 font-bold'>General Championship <hr /></h2>
              <span>
The General Championship is an annual inter-departmental tournament fostering departmental pride, encouraging healthy interaction among students of different years. <br /> Winners and runners in Technical, Cultural, and Sports events earn points, contributing to their department's aggregate. The department with the highest total points is crowned the General Champion.</span>

              <button className='mt-6 flex shadow-lg rounded-3xl bg-pink-700 px-5 py-2'>Know More</button>      
            </div>
          </div>
          


        </div>
    </>
  )
}

export default GcHome
