import React from 'react'

function LeaderBoard() {
  return (
    <div className='flex flex-col gap-2 justify-center items-center w-5/6 md:w-2/3 my-8'>
        <h1>--- Leaderboard ---</h1>
        <div className='flex flex-row w-full bg-gray-900 rounded-xl lg:rounded-3xl shadow h-56 md:h-64'>
            {/* <div className='flex flex-col justify-center items-center w-1/3 px-2'>
                <div></div>
                <div className='flex bg-orange-500 '></div>
            </div>
            <div className='flex justify-center items-center w-1/3'>2</div>
            <div className='flex justify-center items-center w-1/3'>3</div> */}
        </div>
    </div>
  )
}

export default LeaderBoard
