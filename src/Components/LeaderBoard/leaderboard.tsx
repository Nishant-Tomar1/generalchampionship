import React from "react";
import LeaderboardTable from "./leaderboard_table.tsx";
import { Data } from "./model.tsx";
import Podium from "./podium.tsx";

const data: Data[] = [
  {
    branch: "EE",
    score: "100",
  },
  {
    branch: "CSE",
    score: "40",
  },
  {
    branch: "ECE-META",
    score: "108",
  },
  { branch: "MECH", score: "100" },
  { branch: "MSC", score: "100" },
  { branch: "MTECH", score: "100" },
  { branch: "PHD", score: "100" },
  { branch: "CIVIL", score: "100" },
];


const Leaderboard = () => (
  <div className="bg-gray-900 h-screen pt-10" style={{ width: "100vw" }}>
    <Podium data={data} showTopThree={true} />
    <LeaderboardTable data={data} showTopThree={false} />
  </div>
);

export default Leaderboard;
