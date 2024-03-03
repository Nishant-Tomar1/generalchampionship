import React, { useState, useEffect } from 'react'
import cse from '../Assets/IMAGES/cse.png'
import ece_meta from '../Assets/IMAGES/ece-meta.png'
import ee from '../Assets/IMAGES/ee.png'
import mech from '../Assets/IMAGES/mech.png'
import civil from '../Assets/IMAGES/civil.png'
import mtech from '../Assets/IMAGES/mtech.png'
import msc from '../Assets/IMAGES/msc.png'
import phd from './../Assets/IMAGES/phd.png'
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
import axios from 'axios'


const roughMatches = [
    {
        matchname: "Football",
        type: "Semifinal",
        venue: "Football Ground",
        Date: "2024-03-22",
        teams: {
            teamA: {
                Name: "Electrical",
                img: ee,
                score: "",
                sets: "",
            },
            teamB: {
                Name: "Mechanical",
                img: mech,
                score: "",
                sets: "",
            },
        },
    },
    {
        matchname: "Cricket",
        type: "Final",
        venue: "MHR Ground",
        Date: "2024-03-12",
        teams: {
            teamA: {
                Name: "CSE",
                img: cse,
                score: "",
                sets: "",
            },
            teamB: {
                Name: "Civil",
                img: civil,
                score: "",
                sets: "",
            },
        },
    },
    {
        matchname: "Basketball",
        type: "League Match ",
        venue: "Basketball Court",
        Date: "2024-03-15",
        teams: {
            teamA: {
                Name: "MTech",
                img: mtech,
                score: "",
                sets: "",
            },
            teamB: {
                Name: "Ece-Meta",
                img: ece_meta,
                score: "",
                sets: "",
            },
        },
    },
    {
        matchname: "Volleyball",
        type: "Quarter final",
        venue: "Baseball Court",
        Date: "2024-02-25",
        winner: "Msc",
        teams: {
            teamA: {
                Name: "MSC",
                img: msc,
                score: "25",
                sets: "2",
            },
            teamB: {
                Name: "PhD",
                img: phd,
                score: "18",
                sets: "1",
            },
        },
    },
    {
        matchname: "Badminton",
        type: "tournament",
        venue: "Tennis Court",
        Date: "2024-02-21",
        winner: "Electrical",
        teams: {
            teamA: {
                Name: "Electrical",
                img: ee,
                score: "21",
                sets: "",
            },
            teamB: {
                Name: "CSE",
                img: cse,
                score: "16",
                sets: "",
            },
        },
    },
];
const cultdummydata = [
    {
        // id: "1",
        event_name: "Dance Battle",
        Date: "2024-03-15",
        Time: "8pm",
        Venue: "LBC",
    },
    {
        // id: "2",
        event_name: "Singing",
        Date: "2024-03-14",
        Time: "10pm",
        Venue: "LBC",
    },
    {
        // id: "3",
        event_name: "Drams",
        Date: "2024-03-19",
        Time: "3pm",
        Venue: "LBC",
    },
    {
        // id: "4",
        event_name: "Drams",
        Date: "2024-03-12",
        Time: "8pm",
        Venue: "LBC",
    },
    {
        // id: "5",
        event_name: "Mic drop",
        Date: "2023-04-15",
        Time: "8pm",
        Venue: "LBC",
    },
    {
        // id: "1",
        event_name: "Singing",
        Date: "2023-07-15",
        Time: "8pm",
        Venue: "LBC",
    },
    {
        // id: "2",
        event_name: "Costume",
        Date: "2024-06-15",
        Time: "8pm",
        Venue: "LBC",
    },
    {
        // id: "5",
        event_name: "Skit",
        Date: "2023-03-16",
        Time: "8pm",
        Venue: "LBC",
    },
];
const data = [
    {
        // id: "1",
        event_name: "GC webathon",
        Date: "2024-03-15",
        Time: "8-9pm",
        Venue: "LBC",
    },
    {
        // id: "2",
        event_name: "GC webathon",
        Date: "2024-03-14",
        Time: "8-9pm",
        Venue: "LBC",
    },
    {
        // id: "3",
        event_name: "GC webathon",
        Date: "2024-03-19",
        Time: "8-9pm",
        Venue: "LBC",
    },
    {
        // id: "4",
        event_name: "GC webathon",
        Date: "2024-03-12",
        Time: "8-9pm",
        Venue: "LBC",
    },
    {
        // id: "5",
        event_name: "GC webathon",
        Date: "2023-04-15",
        Time: "8-9pm",
        Venue: "LBC",
    },
    {
        // id: "1",
        event_name: "GC webathon",
        Date: "2023-07-15",
        Time: "8-9pm",
        Venue: "LBC",
    },
    {
        // id: "2",
        event_name: "GC webathon",
        Date: "2024-06-15",
        Time: "8-9pm",
        Venue: "LBC",
    },
    {
        // id: "3",
        event_name: "GC webathon",
        Date: "2023-04-5",
        Time: "8-9pm",
        Venue: "LBC",
    },
    {
        // id: "4",
        event_name: "GC webathon",
        Date: "2023-03-17",
        Time: "8-9pm",
        Venue: "LBC",
    },
    {
        // id: "5",
        event_name: "GC webathon",
        Date: "2023-03-16",
        Time: "8-9pm",
        Venue: "LBC",
    },
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
    return `${day} ${month}`;
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
                const response = await axios.get('http://localhost:3002/api/event/getEventByCategory?category=cult');
                console.log(response.data.events);
                // setcultevents(response.data.events)
                const upcomingcultraw = filterUpcomingEvents(cultdummydata, currentDate);
                const pastcultraw =  filterpastEvents(cultdummydata, currentDate);
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
                const response = await axios.get('http://localhost:3002/api/event/getEventByCategory?category=tech');
                console.log(response.data.events);
                // setcultevents(response.data.events)
                const upcomingtechsraw = filterUpcomingEvents(data, currentDate);
                const pasttechraw =  filterpastEvents(data, currentDate);
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
                const response = await axios.get('http://localhost:3002/api/event/getEventByCategory?category=sports');
                console.log(response.data.events);
                // setcultevents(response.data.events)
                const upcomingsportsraw = filterUpcomingEvents(roughMatches, currentDate);
                const pastsportsraw =  filterpastEvents(roughMatches, currentDate);
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
        data:showupcomingtech ? upcommingtechevents:pasttechevents,
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
        data: showupcomingcult ? upcommingcultevents: pastcultevents,
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
    return (
        <div className='flex flex-col justify-center items-center'>
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
                    <div className="flex items-center justify-around mt-4 mb-3 md:mt-6 w-4/5 md:w-3/4 lg:w-2/3 gap-3">
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
        </div>
    );
}

export default Events;