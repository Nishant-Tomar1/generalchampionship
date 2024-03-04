import React from 'react'
import Podium from './LeaderBoard/podium.tsx'

function Leader(props) {
  return (
    <>
        <div className='flex flex-col justify-center items-center w-5/6 md:w-3/4 lg:w-7/12 md:pt-6'>
          <Podium data={props.data}/>         
        </div>
        </>
  )
}

export default Leader
