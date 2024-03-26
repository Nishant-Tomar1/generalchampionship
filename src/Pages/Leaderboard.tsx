import React from "react";
import Leader from "../Components/Leader.tsx";
import LeaderboardTable from "../Components/LeaderBoard/leaderboard_table.tsx";
import { motion } from "framer-motion";
import { Data } from "../Components/LeaderBoard/model.tsx";

export const data: Data[] = [
  {
    branch: "EE",
    score: "9650",
  },
  {
    branch: "CSE",
    score: "13525",
  },
  {
    branch: "ECE-META",
    score: "8240",
  },
  { branch: "MECH", score: "13605" },
  { branch: "MSC-ITEP", score: "4030" },
  { branch: "MTECH", score: "1375" },
  { branch: "PHD", score: "625" },
  { branch: "CIVIL", score: "12885" },
];

function Leaderboard() {
  const variant = {
    entry: {
      opacity: [0, 1],
      transition: {
        duration: 0.25,
        times: [0, 1],
      },
    },
    exit: {
      opacity: [1, 0],
      transition: {
        duration: 0.25,
        times: [0, 1],
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center pt-16"
      variants={variant}
      animate="entry"
      exit="exit"
    >
      <Leader data={data} />
      <LeaderboardTable data={data} />
    </motion.div>
  );
}

export default Leaderboard;
