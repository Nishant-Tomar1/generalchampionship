import React from 'react'
import Podium from './LeaderBoard/podium.tsx'
import { Data } from './LeaderBoard/model.tsx';

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
  { branch: "MSC", score: "100" },
  { branch: "MTECH", score: "100" },
  { branch: "PHD", score: "100" },
  { branch: "CIVIL", score: "100" },
];

function Leader() {
  return (
    <>
        <div className='flex flex-col justify-center items-center w-5/6 md:w-3/4 lg:w-7/12 md:pt-6'>
        <h1>Leaderboard <hr /> </h1>
          <Podium data={data}/>
        </div>
        </>
  )
}

export default Leader
