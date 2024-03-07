import React, { useState, useEffect } from 'react'

// import cse from '../Assets/IMAGES/cse.png'
// import ece_meta from '../Assets/IMAGES/ece-meta.png'
// import ee from '../Assets/IMAGES/ee.png'
// import mech from '../Assets/IMAGES/mech.png'
// import civil from '../Assets/IMAGES/civil.png'
// import mtech from '../Assets/IMAGES/mtech.png'
// import msc from '../Assets/IMAGES/msc.png'
// import phd from './../Assets/IMAGES/phd.png'

import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./../Components/Eventscomponents/table";
// import axios from 'axios'
import { motion } from 'framer-motion'

const roughMatches = [
];
const cultdummydata = [
    {

        event_name: "Asian Parliamentary Debate",
        Date: "2024-03-23",
        Time: "1 PM",
        Venue: "SAC",
    },
    {

        event_name: "Asian Parliamentary Debate",
        Date: "2024-03-24",
        Time: "1 PM",
        Venue: "SAC",
    },
    {

        event_name: "Scrabble",
        Date: "2024-03-20",
        Time: "7 PM",
        Venue: "LBC/LHC",
    },
    {

        event_name: "Scrabble",
        Date: "2024-03-21",
        Time: "7 PM",
        Venue: "LBC/LHC",
    },
    {

        event_name: "Potpourri",
        Date: "2024-03-19",
        Time: "7 PM",
        Venue: "LBC",
    },
    {

        event_name: "Adalat",
        Date: "2024-03-15",
        Time: "6 PM",
        Venue: "LBC/LHC",
    },
    {

        event_name: "Kavya Paath",
        Date: "2024-04-12",
        Time: "6 PM",
        Venue: "LBC/LHC",
    },
    {

        event_name: "Hindi Poetry Writing",
        Date: "2024-03-21",
        Time: "6 PM",
        Venue: "LBC/LHC",
    },
    {

        event_name: "Hindi Creative Writing",
        Date: "2024-03-19",
        Time: "6 PM",
        Venue: "LBC/LHC",
    },
    {

        event_name: "India Quiz",
        Date: "2024-03-18",
        Time: "6:30 PM",
        Venue: "LHC P0-120-1",
    },
    {

        event_name: "General Quiz",
        Date: "2024-03-21",
        Time: "6:30 PM",
        Venue: "LHC P0-120-1",
    },
    {

        event_name: "Mela Quiz",
        Date: "2024-03-29",
        Time: "6:30 PM",
        Venue: "LHC P0-120-1",
    },
    {

        event_name: "Sports Quiz",
        Date: "2024-04-02",
        Time: "6:30 PM",
        Venue: "LHC P0-120-1",
    },
    {

        event_name: "Solo Music Competition",
        Date: "2024-03-06",
        Time: "6:30 PM",
        Venue: "CC",
    },
    {

        event_name: "Music Composition Challenge",
        Date: "2024-03-06",
        Time: "12 am",
        Venue: "Online",
    },
    {

        event_name: "Improv Battle",
        Date: "2024-03-11",
        Time: "6 PM",
        Venue: "LHC",
    },
    {

        event_name: "Mono Act",
        Date: "2024-03-13",
        Time: "6 PM",
        Venue: "LHC",
    },
    {

        event_name: "Skit",
        Date: "2024-03-23",
        Time: "4 PM",
        Venue: "CC",
    },
    {

        event_name: "Duo/Trio Dance Competition",
        Date: "2024-03-19",
        Time: "7 PM",
        Venue: "BB Court",
    },
    {

        event_name: "Solo Dance Competition",
        Date: "2024-03-23",
        Time: "6 PM",
        Venue: "BB Court",
    },
    {

        event_name: "Group Dance Competition",
        Date: "2024-03-31",
        Time: "6 PM",
        Venue: "BB Court",
    },
    {

        event_name: "B-Roll Making",
        Date: "2024-03-06",
        Time: "",
        Venue: "",
    },
    {

        event_name: "Short Film Making",
        Date: "2024-03-06",
        Time: "",
        Venue: "",
    },
    {

        event_name: "Ad Making",
        Date: "2024-03-06",
        Time: "",
        Venue: "",
    },
    {

        event_name: "51 Hour Short Film Making",
        Date: "2024-03-29",
        Time: "9 PM",
        Venue: "",
    },
    {

        event_name: "Online Photography Competition",
        Date: "2024-03-06",
        Time: "",
        Venue: "",
    },
    {

        event_name: "Photostory Competition",
        Date: "2024-03-06",
        Time: "",
        Venue: "",
    },
    {

        event_name: "Street Photography",
        Date: "2024-03-06",
        Time: "",
        Venue: "",
    },
    {

        event_name: "Painting Competition",
        Date: "2024-03-11",
        Time: "6 PM",
        Venue: "LBC",
    },
    {

        event_name: "Live Sketching",
        Date: "2024-03-23",
        Time: "9 am",
        Venue: "Main Building",
    },
    {

        event_name: "Charcoal Art",
        Date: "2024-03-18",
        Time: "6 PM",
        Venue: "SAC 1st Floor",
    },
    {

        event_name: "Comic Strip Making",
        Date: "2024-03-21",
        Time: "11:59 PM",
        Venue: "Online",
    },
    {

        event_name: "Quest for Change",
        Date: "2024-03-10",
        Time: "6:30 PM",
        Venue: "LHC",
    },
    {

        event_name: "Meme Making",
        Date: "2024-03-21",
        Time: "11:59 PM",
        Venue: "Online",
    },
    {

        event_name: "A Fashion Affair",
        Date: "2024-03-24",
        Time: "6:30 PM",
        Venue: "CC",
    },
    {

        event_name: "Dumb Charades",
        Date: "2024-03-22",
        Time: "6 PM",
        Venue: "BB Court",
    },
    {

        event_name: "Antakshari",
        Date: "2024-03-30",
        Time: "7 PM",
        Venue: "BB Court",
    },

];
const data_tech = [
    {

        event_name: "Game Development Hackathon",
        Date: "2024-03-15",
        Time: "10 PM",
        Venue: "Online",
    },
    {

        event_name: "Capture the Flag",
        Date: "2024-03-23",
        Time: "10 AM",
        Venue: "Online",
    },
    {

        event_name: "Software Development Hackathon",
        Date: "2024-03-29",
        Time: "10 PM",
        Venue: "Online",
    },
    {

        event_name: "Handwriting to Text",
        Date: "2024-03-06",
        Time: "10 PM",
        Venue: "",
    },
    {

        event_name: "ArduGem",
        Date: "2024-03-17",
        Time: "12 AM",
        Venue: "",
    },
    {

        event_name: "ESP-Trade",
        Date: "2024-03-17",
        Time: "12 AM",
        Venue: "",
    },
    {

        event_name: "Web Development Hackathon",
        Date: "2024-03-22",
        Time: "10 PM",
        Venue: "Online",
    },
    {

        event_name: "GC Design Battle",
        Date: "2024-03-15",
        Time: "10 PM",
        Venue: "Online",
    },
    {

        event_name: "ML Hackathon",
        Date: "2024-03-22",
        Time: "10 PM",
        Venue: "Online",
    },
    {

        event_name: "Astro photography",
        Date: "2024-03-15",
        Time: "12 AM",
        Venue: "Online",
    },
    {

        event_name: "Observational Astronomy",
        Date: "2024-03-11",
        Time: "10:30 PM",
        Venue: "SAC Terrace",
    },
    {

        event_name: "Blast Off",
        Date: "2024-03-17",
        Time: "09:30 AM",
        Venue: "MHR/Hockey Ground",
    },
    {

        event_name: "Strategic Spotlight",
        Date: "2024-03-23",
        Time: "11 AM",
        Venue: "LHC",
    },
    {

        event_name: "Optimax",
        Date: "2024-03-08",
        Time: "12:01 AM",
        Venue: "Online",
    }

];

function sortEventsByDateup(events) {
    return events.slice().sort((a, b) => {
        const dateA = new Date(a.Date);
        const dateB = new Date(b.Date);
        return dateA - dateB;
    });
}
function sortEventsByDatedown(events) {
    return events.slice().sort((a, b) => {
        const dateA = new Date(a.Date);
        const dateB = new Date(b.Date);
        return dateB - dateA;
    });
}
function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    return `${day}-${month}-${year}`;
}
function formatDatetomonth(inputDate) {
    const dateObject = new Date(inputDate);

    const options = { day: 'numeric', month: 'long' };
    const formattedDate = dateObject.toLocaleDateString(undefined, options);

    const [month, day] = formattedDate.split(' ');
    return `${day} ${month}  `;
}
function filterUpcomingEvents(matches, currentDate) {
    const filteredEvents = matches.filter(
        (match) => new Date(match.Date).setHours(0, 0, 0, 0) > currentDate
    );

    return filteredEvents;
}
function filterpastEvents(matches, currentDate) {
    const filteredEvents = matches.filter(
        (match) => new Date(match.Date).setHours(0, 0, 0, 0) <= currentDate
    );

    return filteredEvents;
}

export const columns = [
    {
        accessorKey: "event_name",
        header: "EVENT",
        cell: ({ row }) => <div className='capitalize'>{row.getValue("event_name")}</div>,
    },
    {
        accessorKey: "combinedDateTime",
        header: "DATE",
        cell: ({ row }) => <div className="capitalize">{row.getValue("combinedDateTime")}</div>,
    },

    {
        accessorKey: "Venue",
        header: "VENUE",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("Venue")}</div>
        ),
    },

];


function Events() {
    const [showcult, setshowcult] = useState(false);
    const [showtech, setshowtech] = useState(false);
    const [showsports, setshowsports] = useState(true);
    const [showupcomingsports, setshowupcomingsports] = useState(true);
    const [showpastsports, setshowpastsports] = useState(false);
    const [showupcomingcult, setshowupcomingcult] = useState(true);
    const [showpastscult, setshowpastcult] = useState(false);
    const [showupcomingtech, setshowupcomingtech] = useState(true);
    const [showpasttech, setshowpasttech] = useState(false);
    const [sorting, setSorting] = React.useState([]);
    const [columnFilters, setColumnFilters] = React.useState([]);
    const [columnVisibility, setColumnVisibility] = React.useState({});
    const [rowSelection, setRowSelection] = React.useState({});
    const [upcommingcultevents, setupcomingcultevents] = useState([]);
    const [pastcultevents, setpastcultevents] = useState([]);
    const [upcommingsportsevents, setupcommingsportsevents] = useState([]);
    const [pastsportsevents, setpastsportsevents] = useState([]);
    const [upcommingtechevents, setupcomingtechevents] = useState([]);
    const [pasttechevents, setpasttechevents] = useState([]);
    const currentDate = new Date().setHours(0, 0, 0, 0);
    // console.log("sdvb")
    useEffect(() => {
        const fetchdata = async () => {
            try {
                // const response = await axios.get('http://localhost:3002/api/event/getEventByCategory?category=cult');
                // console.log(response.data.events);
                // setcultevents(response.data.events)
                const upcomingcultraw = filterUpcomingEvents(cultdummydata, currentDate);
                const pastcultraw = filterpastEvents(cultdummydata, currentDate);
                const filteredcultdummydataup1 = filterUpcomingEvents(upcomingcultraw, currentDate);
                const filteredcultdummydatapast1 = filterpastEvents(pastcultraw, currentDate);
                const upcomingcult = sortEventsByDateup(filteredcultdummydataup1);
                const pastcult = sortEventsByDatedown(filteredcultdummydatapast1);
                const filteredcultdummydataup = upcomingcult.map((item) => ({
                    ...item,
                    combinedDateTime: `${formatDatetomonth(item.Date)} ${(item.Time)}`,
                }));
                const filteredcultdummydatapast = pastcult.map((item) => ({
                    ...item,
                    combinedDateTime: `${formatDatetomonth(item.Date)} ${(item.Time)}`,
                }));
                setupcomingcultevents(filteredcultdummydataup);
                setpastcultevents(filteredcultdummydatapast);
            }
            catch (e) {
                console.log(e);
            }
        }
        fetchdata();
    }, [currentDate])

    useEffect(() => {
        const fetchdata = async () => {
            try {
                // const response = await axios.get('http://localhost:3002/api/event/getEventByCategory?category=tech');
                // console.log(response.data.events);
                // setcultevents(response.data.events)
                console.log(data_tech)
                const upcomingtechsraw = filterUpcomingEvents(data_tech, currentDate);
                const pasttechraw = filterpastEvents(data_tech, currentDate);
                const dummyup1 = filterUpcomingEvents(upcomingtechsraw, currentDate);
                const dummypast1 = filterpastEvents(pasttechraw, currentDate);
                const upcomingtech = sortEventsByDateup(dummyup1);
                const pasttech = sortEventsByDatedown(dummypast1);
                const filteredtechdummydataup = upcomingtech.map((item) => ({
                    ...item,
                    combinedDateTime: `${formatDatetomonth(item.Date)} ${(item.Time)}`,
                }));
                const filteredtechdummydatapast = pasttech.map((item) => ({
                    ...item,
                    combinedDateTime: `${formatDatetomonth(item.Date)} ${(item.Time)}`,
                }));
                setupcomingtechevents(filteredtechdummydataup);
                setpasttechevents(filteredtechdummydatapast);
            }
            catch (e) {
                console.log(e);
            }
        }
        fetchdata();
    }, [currentDate])
    useEffect(() => {
        const fetchdata = async () => {
            try {
                // const response = await axios.get('http://localhost:3002/api/event/getEventByCategory?category=sports');
                // console.log(response.data.events);
                // setcultevents(response.data.events)
                console.log(roughMatches)
                const upcomingsportsraw = filterUpcomingEvents(roughMatches, currentDate);
                const pastsportsraw = filterpastEvents(roughMatches, currentDate);
                const dummyup1 = filterUpcomingEvents(upcomingsportsraw, currentDate);
                const dummypast1sports = filterpastEvents(pastsportsraw, currentDate);
                const upcomingsports = sortEventsByDateup(dummyup1);
                console.log(upcomingsports);
                setupcommingsportsevents(upcomingsports);
                setpastsportsevents(dummypast1sports);
            }
            catch (e) {
                console.log(e);
            }
        }
        fetchdata();
    }, [currentDate])
    const table = useReactTable({
        data: showupcomingtech ? upcommingtechevents : pasttechevents,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });
    const table1 = useReactTable({
        data: showupcomingcult ? upcommingcultevents : pastcultevents,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    const variant = {
        entry: {
            opacity: [0, 1],
            transition: {
                duration: 0.25,
                times: [0, 1],
            }
        },
        exit: {
            opacity: [1, 0],
            transition: {
                duration: 0.25,
                times: [0, 1],
            }
        },
    }
    return (
        <motion.div className='flex flex-col  items-center min-h-screen' variants={variant} animate='entry' exit='exit'>
            <h1 className="text-5xl font-semibold text-center mt-20 mb-3">Events</h1>
            <div className="bg-blur w-5/6 shadow-lg md:w-3/4 lg:w-2/3 py-1 lg:py-2 mx-auto flex items-center justify-around px-auto rounded-full mt-7 border-3 border-pink-600">
                <button
                    className={`duration-300 py-1 px-8 rounded-3xl text-white font-bold text-md md:text-lg hover:bg-pink-500 ${showcult ? "bg-pink-500 decoration- " : ""} cursor-pointer`}
                    onClick={() => {
                        setshowcult(true);
                        setshowsports(false);
                        setshowtech(false);
                    }}
                >
                    Cult
                </button>
                <button
                    className={`duration-300 py-1 px-4 rounded-3xl text-white font-bold text-md md:text-lg hover:bg-pink-500 ${showsports ? "bg-pink-500" : ""} cursor-pointer`}
                    onClick={() => {
                        setshowcult(false);
                        setshowsports(true);
                        setshowtech(false);
                    }}
                >
                    Sports
                </button>
                <button
                    className={`duration-300 py-1 px-4 rounded-3xl text-white font-bold text-md md:text-lg hover:bg-pink-500 ${showtech ? "bg-pink-500" : ""} cursor-pointer`}
                    onClick={() => {
                        setshowcult(false);
                        setshowsports(false);
                        setshowtech(true);
                    }}
                >
                    Tech
                </button>
            </div>

            {showcult && (
                <>
                    <div className="flex items-center justify-around mt-4 mb-3 md:mt-6 w-5/6 md:w-3/4 lg:w-2/3 gap-3 ">
                        <button
                            onClick={() => {
                                setshowupcomingcult(true);
                                setshowpastcult(false);
                            }}
                            className={`duration-300 md:text-xl ${showupcomingcult ? "text-pink-700 font-bold border-b-2 border-pink-700" : "text-gray-400"}`}
                        >
                            Upcoming Events
                        </button>
                        <button
                            onClick={() => {
                                setshowupcomingcult(false);
                                setshowpastcult(true);
                            }}
                            className={`duration-300 md:text-xl ${showpastscult ? "text-pink-700 font-bold border-b-2 border-pink-700" : "text-gray-400"}`}
                        >
                            Past Events
                        </button>
                    </div>

                    {showupcomingcult && (
                        <>
                            <div className="w-11/12 md:w-7/12 rounded-xl border-2">
                                <Table >
                                    <TableHeader >
                                        {table1.getHeaderGroups().map((headerGroup) => (
                                            <TableRow key={headerGroup.id}>
                                                {headerGroup.headers.map((header) => {
                                                    return (
                                                        <TableHead key={header.id} className='text-md w-1/3 font-bold text-center'>
                                                            {header.isPlaceholder
                                                                ? null
                                                                : flexRender(
                                                                    header.column.columnDef.header,
                                                                    header.getContext()
                                                                )}
                                                        </TableHead>
                                                    );
                                                })}
                                            </TableRow>
                                        ))}
                                    </TableHeader>
                                    <TableBody>
                                        {table1.getRowModel().rows?.length ? (
                                            table1.getRowModel().rows.map((row) => (
                                                <TableRow
                                                    key={row.id}
                                                    data-state={row.getIsSelected() && "selected"}
                                                >
                                                    {row.getVisibleCells().map((cell) => (
                                                        <TableCell key={cell.id} className='text-md text-center px-4 w-1/3'>
                                                            {flexRender(
                                                                cell.column.columnDef.cell,
                                                                cell.getContext()
                                                            )}
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                            ))
                                        ) : (
                                            <TableRow>
                                                <TableCell
                                                    colSpan={columns.length}
                                                    className="h-24 text-center"
                                                >
                                                    No results.
                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </div>
                        </>
                    )}
                    {showpastscult && (
                        <>
                            <div className="w-11/12 md:w-7/12 rounded-xl border-2">
                                <Table>
                                    <TableHeader>
                                        {table1.getHeaderGroups().map((headerGroup) => (
                                            <TableRow key={headerGroup.id}>
                                                {headerGroup.headers.map((header) => {
                                                    return (
                                                        <TableHead key={header.id} className='text-md w-1/3 font-bold text-center '>
                                                            {header.isPlaceholder
                                                                ? null
                                                                : flexRender(
                                                                    header.column.columnDef.header,
                                                                    header.getContext()
                                                                )}
                                                        </TableHead>
                                                    );
                                                })}
                                            </TableRow>
                                        ))}
                                    </TableHeader>
                                    <TableBody>
                                        {table1.getRowModel().rows?.length ? (
                                            table1.getRowModel().rows.map((row) => (
                                                <TableRow
                                                    key={row.id}
                                                    data-state={row.getIsSelected() && "selected"}
                                                >
                                                    {row.getVisibleCells().map((cell) => (
                                                        <TableCell key={cell.id} className='w-1/3 px-4 text-md text-center'>
                                                            {flexRender(
                                                                cell.column.columnDef.cell,
                                                                cell.getContext()
                                                            )}
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                            ))
                                        ) : (
                                            <TableRow>
                                                <TableCell
                                                    colSpan={columns.length}
                                                    className="h-24 text-center"
                                                >
                                                    No results.
                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </div>
                        </>
                    )}


                </>
            )}
            {showtech && (
                <>
                    <div className="flex items-center justify-around mt-4 mb-3 md:mt-6 w-5/6 md:w-3/4 lg:w-2/3 gap-3">
                        <button
                            onClick={() => {
                                setshowupcomingtech(true);
                                setshowpasttech(false);
                            }}
                            className={`md:text-xl ${showupcomingtech ? "text-pink-700 font-bold border-b-2 border-pink-700" : "text-gray-400"}`}
                        >
                            Upcoming Events
                        </button>
                        <button
                            onClick={() => {
                                setshowupcomingtech(false);
                                setshowpasttech(true);
                            }}
                            className={` md:text-xl ${showpasttech ? "text-pink-700 font-bold border-b-2 border-pink-700" : "text-gray-400"}`}
                        >
                            Past Events
                        </button>
                    </div>
                    {showpasttech && (
                        <>
                            <div className="w-11/12 md:w-7/12 rounded-xl border-2">
                                <Table>
                                    <TableHeader>
                                        {table.getHeaderGroups().map((headerGroup) => (
                                            <TableRow key={headerGroup.id}>
                                                {headerGroup.headers.map((header) => {
                                                    return (
                                                        <TableHead key={header.id} className='text-md w-1/3 font-bold text-center'>
                                                            {header.isPlaceholder
                                                                ? null
                                                                : flexRender(
                                                                    header.column.columnDef.header,
                                                                    header.getContext()
                                                                )}
                                                        </TableHead>
                                                    );
                                                })}
                                            </TableRow>
                                        ))}
                                    </TableHeader>
                                    <TableBody>
                                        {table.getRowModel().rows?.length ? (
                                            table.getRowModel().rows.map((row) => (
                                                <TableRow
                                                    key={row.id}
                                                    data-state={row.getIsSelected() && "selected"}
                                                >
                                                    {row.getVisibleCells().map((cell) => (
                                                        <TableCell key={cell.id} className='w-1/3 text-md text-center px-4 '>
                                                            {flexRender(
                                                                cell.column.columnDef.cell,
                                                                cell.getContext()
                                                            )}
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                            ))
                                        ) : (
                                            <TableRow>
                                                <TableCell
                                                    colSpan={columns.length}
                                                    className="h-24 text-center"
                                                >
                                                    No results.
                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </div>
                        </>
                    )}
                    {showupcomingtech && (
                        <>
                            <div className="w-11/12 md:w-7/12 rounded-xl border-2">
                                <Table>
                                    <TableHeader>
                                        {table.getHeaderGroups().map((headerGroup) => (
                                            <TableRow key={headerGroup.id}>
                                                {headerGroup.headers.map((header) => {
                                                    return (
                                                        <TableHead key={header.id} className='text-md w-1/3 font-bold text-center'>
                                                            {header.isPlaceholder
                                                                ? null
                                                                : flexRender(
                                                                    header.column.columnDef.header,
                                                                    header.getContext()
                                                                )}
                                                        </TableHead>
                                                    );
                                                })}
                                            </TableRow>
                                        ))}
                                    </TableHeader>
                                    <TableBody>
                                        {table.getRowModel().rows?.length ? (
                                            table.getRowModel().rows.map((row) => (
                                                <TableRow
                                                    key={row.id}
                                                    data-state={row.getIsSelected() && "selected"}
                                                >
                                                    {row.getVisibleCells().map((cell) => (
                                                        <TableCell key={cell.id} className='w-1/3 text-md text-center px-4 '>
                                                            {flexRender(
                                                                cell.column.columnDef.cell,
                                                                cell.getContext()
                                                            )}
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                            ))
                                        ) : (
                                            <TableRow>
                                                <TableCell
                                                    colSpan={columns.length}
                                                    className="h-24 text-center"
                                                >
                                                    No results.
                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </div>
                        </>
                    )}
                </>
            )}
            {showsports && (
                <>
                    <div className="flex items-center justify-around mt-4 mb-2 md:mt-6 w-4/5 md:w-3/4 lg:w-2/3 gap-3">

                        <button onClick={() => {
                            setshowupcomingsports(true);
                            setshowpastsports(false);
                        }} className={`duration-300 md:text-xl ${showupcomingsports ? "text-pink-700 font-bold border-b-2 border-pink-700" : "text-gray-400"}`}>Upcoming Events</button>


                        <button onClick={() => {
                            setshowupcomingsports(false);
                            setshowpastsports(true);
                        }} className={`duration-300 md:text-xl ${showpastsports ? "text-pink-700 font-bold border-b-2 border-pink-700" : "text-gray-400"}`}>Past Events</button>
                    </div>


                    {showupcomingsports && (

                        <div className="flex flex-col justify-center items-center w-full">

                            {upcommingsportsevents.map((match, index) => (


                                <div key={index} className="flex flex-col bg-gray-500 border-3 border-black rounded-2xl  md:rounded-3xl shadow-lg shadow-black w-5/6 md:w-3/4 lg:w-2/3 my-2 my-lg-3 overflow-hidden">

                                    <div className="text-2xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white text-center my-2 md:my-4 px-1">
                                        {match.matchname} - {match.type}
                                    </div>

                                    <div className="flex items-center justify-around px-3">

                                        <div className="flex flex-col items-center justify-center my-2">
                                            <div><img className=" w-24 h-24 lg:w-32 lg:h-32 mb-3  border-black" src={match.teams.teamA.img} alt={match.teams.teamA.Name} /></div>

                                            <h5 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">{match.teams.teamA.Name}</h5>
                                        </div>

                                        <div className="flex flex-col items-center text-center mx-3">
                                            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">V/S</h2>
                                        </div>

                                        <div className="flex flex-col items-center justify-center my-2">
                                            <div> <img className=" w-24 h-24 lg:w-32 lg:h-32 mb-3" src={match.teams.teamB.img} alt={match.teams.teamB.Name} /></div>

                                            <h5 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">{match.teams.teamB.Name}</h5>
                                        </div>

                                    </div>


                                    <div className="text-lg lg:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center ">Venue :- {match.venue}</div>

                                    <div className="text-md lg:text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center mb-3">Date :- {formatDate(match.Date)}</div>
                                </div>
                            ))}
                        </div>
                    )}

                    {showpastsports && (
                        <div className="flex flex-col justify-center items-center w-full">

                            {pastsportsevents.map((match, index) => (

                                <div key={index} className="flex flex-col bg-gray-500 border-3 border-black rounded-2xl md:rounded-3xl shadow-lg shadow-black w-5/6 md:w-3/4 lg:w-2/3 my-2 my-lg-3 overflow-hidden">

                                    <div className="text-2xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white text-center my-2 md:my-4">
                                        {match.matchname} - {match.type}
                                    </div>

                                    <div className="flex items-center justify-around px-3">

                                        <div className="flex flex-col items-center justify-center my-2">
                                            <div><img className=" w-24 h-24 lg:w-32 lg:h-32 mb-3  border-black" src={match.teams.teamA.img} alt={match.teams.teamA.Name} /></div>

                                            <h5 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">{match.teams.teamA.Name}</h5>
                                        </div>

                                        <div className="flex flex-col items-center text-center mx-3">
                                            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">V/S</h2>
                                        </div>

                                        <div className="flex flex-col items-center justify-center my-2">
                                            <div> <img className=" w-24 h-24 lg:w-32 lg:h-32 mb-3" src={match.teams.teamB.img} alt={match.teams.teamB.Name} /></div>

                                            <h5 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">{match.teams.teamB.Name}</h5>
                                        </div>

                                    </div>


                                    <div className="text-2xl lg:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white text-center ">(2) 32 - 33 (1)</div>

                                    <div className="text-md lg:text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center mb-3">{match.winner} Won</div>
                                </div>


                            ))}
                        </div>
                    )}
                </>
            )}
        </motion.div>
    );
}

export default Events;