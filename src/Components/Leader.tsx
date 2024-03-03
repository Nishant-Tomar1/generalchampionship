import React from 'react'
import Podium from './LeaderBoard/podium.tsx'

const data: Data[] = [
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
  { branch: "MSC", score: "150" },
  { branch: "MTECH", score: "100" },
  { branch: "PHD", score: "103" },
  { branch: "CIVIL", score: "130" },
];

function Leader(props) {
  return (
    <>
        <div className='flex flex-col justify-center items-center w-5/6 md:w-3/4 lg:w-7/12 md:pt-6'>
          <Podium data={data}/>         
        </div>
        </>
  )
}

export default Leader
