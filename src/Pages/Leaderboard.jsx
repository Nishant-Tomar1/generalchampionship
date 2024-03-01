import React from 'react'
import Leader from '../Components/Leader.tsx'
import LeaderboardTable from '../Components/LeaderBoard/leaderboard_table.tsx'

function Leaderboard() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Leader/>
      {/* <LeaderboardTable/> */}
    </div>
  )
}

export default Leaderboard
