import React from "react";
import { useMemo } from "react";
import { useTable, Column, HeaderGroup, Row } from "react-table";
import { Data, TableProps } from "./model.tsx";


const LeaderboardTable: React.FC<TableProps> = ({ data, showTopThree }) => {

  let sortedData : Data[] = data.sort((a, b) => Number(b.score) - Number(a.score)).map((team, index) => ({ ...team, position: index + 1 }));

  sortedData = showTopThree ? sortedData : sortedData.slice(3);

  const columns = useMemo<Column<Data>[]>(
    () => [
      {
        Header: "Position",
        Cell: ({ row: { index } }: { row: { index: number } }) => (
          <p>{showTopThree ? index + 1 : index + 4}</p>
        ),
      },
      {
        Header: "Logo",
        accessor: (row: Data) => row.branch,
        Cell: ({ value }: { value: string }) => (
          <div className="flex items-center justify-center">
          <img
            src={require('../../Assets/IMAGES/' + value.toLowerCase() + '.png')}
            alt="Icon"
            className=" h-7 w-auto sm:h-8 md:h-10 lg:h-12 xl:h-14 2xl:h-16"
          />
          </div>
        ),
      },
      {
        Header: "Branch",
        accessor: "branch",
      },
      {
        Header: "Points",
        accessor: "score",
      },
    ],
    [showTopThree]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: sortedData });

  return (
    <div className="w-11/12 mt-2 md:mt-4">
      <table
        {...getTableProps()}
        className="w-full divide-y divide-gray-200 table-auto"
      >
        <thead className="bg-gray-900">
          {headerGroups.map((headerGroup: HeaderGroup<Data>) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="py-3 text-center text-sm sm:text-md md:text-base lg:text-lg xl:text-xl font-medium text-gray-300 uppercase tracking-wider w-1/4"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          {...getTableBodyProps()}
          className="bg-gray-800 divide-y divide-gray-700"
        >
          {rows.map((row: Row<Data>) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className=" text-center px-6 py-4 whitespace-nowrap w-1/4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;
