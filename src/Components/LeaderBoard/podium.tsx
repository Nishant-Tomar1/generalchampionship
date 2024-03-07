import React from "react";
import { TableProps } from "./model.tsx";

const Podium: React.FC<TableProps> = ({ data }) => {
  const sortedData = [...data]
    .sort((a, b) => Number(b.score) - Number(a.score))
    .map((team, index) => ({ ...team, position: index + 1 }));

  const position1 = sortedData.find((team) => team.position === 1);
  const position2 = sortedData.find((team) => team.position === 2);

  const position3 = sortedData.find((team) => team.position === 3);

  return (
    <>
      <h1>
        Leaderboard <hr />{" "}
      </h1>

      <div
        className="flex justify-center items-end w-full text-shadow gap-1 gap-md-2 border-b-2 border-gray-700 pb-md-0 "
        style={{ height: "360px" }}
      >
        {position2 && (
          <div
            className="order-1 w-1/3 flex flex-col items-center justify-center p-4 shadow bg-gray-600 rounded-t-xl lg:rounded-t-3xl  border-0"
            style={{ height: "83%" }}
          >
            <h4 className="text-center font-bold text-white">
              {position2.branch}
            </h4>

            <img
              src={require("../../Assets/IMAGES/" +
                position2.branch.toLowerCase() +
                ".png")}
              alt="Icon"
              className="h-7 w-auto sm:h-12 md:h-16 lg:h-20 "
              style={{ backdropFilter: "blur(10px)" }}
            />
            <p className="text-xl mt-2 font-semibold text-white">
              {position2.score}
            </p>
          </div>
        )}

        {position1 && (
          <div
            className="order-2 w-1/3 flex flex-col items-center justify-center p-4  shadow rounded-t-xl lg:rounded-t-3xl rounded-b-none  border-0"
            style={{
              height: "100%",
              backgroundColor: "goldenrod",
            }}
          >
            <h4 className="text-center font-bold text-white">
              {position1.branch}
            </h4>
            <img
              src={require("../../Assets/IMAGES/" +
                position1.branch.toLowerCase() +
                ".png")}
              alt="Icon"
              className="h-7 w-auto sm:h-12 md:h-16 lg:h-20 "
              style={{ backdropFilter: "blur(10px)" }}
            />
            <p className="text-xl mt-2 font-semibold text-white">
              {position1.score}
            </p>
          </div>
        )}

        {position3 && (
          <div
            className="order-3 w-1/3 flex flex-col items-center justify-center px-4 py-6 shadow bg-gray-800 rounded-t-xl lg:rounded-t-3xl  border-0"
            style={{
              height: "65%",
              backgroundColor: "#78350f",
            }}
          >
            <h4 className="text-center font-bold text-white">
              {position3.branch}
            </h4>
            <img
              src={require("../../Assets/IMAGES/" +
                position3.branch.toLowerCase() +
                ".png")}
              alt="Icon"
              className="h-7 w-auto sm:h-12 md:h-16 lg:h-20 "
              style={{ backdropFilter: "blur(10px)" }}
            />
            <p className="text-xl mt-2 font-semibold text-white">
              {position3.score}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Podium;
