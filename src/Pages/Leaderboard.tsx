import React from 'react'
import Leader from '../Components/Leader.tsx'
import LeaderboardTable from '../Components/LeaderBoard/leaderboard_table.tsx'

export const data: Data[] = [
  {
    branch: "EE",
    score: "120",
  },
  {
    branch: "CSE",
    score: "110",
  },
  {
    branch: "ECE-META",
    score: "105",
  },
  { branch: "MECH", score: "100" },
  { branch: "MSC", score: "100" },
  { branch: "MTECH", score: "100" },
  { branch: "PHD", score: "103" },
  { branch: "CIVIL", score: "130" },
];



function Leaderboard() {
  return (
    <div className='flex flex-col items-center justify-center pt-16'>
      <Leader data={data}/>
      <LeaderboardTable data={data}/>
    </div>
  )
}

export default Leaderboard
