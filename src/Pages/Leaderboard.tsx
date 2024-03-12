import React from "react";
import Leader from "../Components/Leader.tsx";
import LeaderboardTable from "../Components/LeaderBoard/leaderboard_table.tsx";
import { motion } from "framer-motion";
import { Data } from "../Components/LeaderBoard/model.tsx";

export const data: Data[] = [
  {
    branch: "EE",
    score: "300",
  },
  {
    branch: "CSE",
    score: "600",
  },
  {
    branch: "ECE-META",
    score: "100",
  },
  { branch: "MECH", score: "300" },
  { branch: "MSC-ITEP", score: "0" },
  { branch: "MTECH", score: "0" },
  { branch: "PHD", score: "0" },
  { branch: "CIVIL", score: "1700" },
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
