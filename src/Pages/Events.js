import React, { useState } from 'react'
import logo from './../Assets/IMAGES/GClogo.png'
const roughMatches = [
    {
        matchname: "Football",
        type: "Semifinal",
        venue: "Football Ground",
        Date: "2024-03-22",
        teams: {
            teamA: {
                Name: "Electrical",
                img: logo,
            },
            teamB: {
                Name: "Mechanical",
                img: logo,
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
                Name: "Computer Science",
                img: logo,
            },
            teamB: {
                Name: "Civil",
                img: logo,
            },
        },
    },
    {
        matchname: "Basketball",
        type: "League Match",
        venue: "Basketball Court",
        Date: "2024-03-15",
        teams: {
            teamA: {
                Name: "Chemical",
                img: logo,
            },
            teamB: {
                Name: "Aerospace",
                img: logo,
            },
        },
    },
    {
        matchname: "Baseball",
        type: "Quarter final",
        venue: "Baseball Court",
        Date: "2024-02-25",
        teams: {
            teamA: {
                Name: "Biomedical",
                img: logo,
            },
            teamB: {
                Name: "Environmental",
                img: logo,
            },
        },
    },
    {
        matchname: "Tennis",
        type: "tournament",
        venue: "Tennis Court",
        Date: "2024-02-21",
        teams: {
            teamA: {
                Name: "Materials",
                img: logo,
            },
            teamB: {
                Name: "Industrial",
                img: logo,
            },
        },
    },
];
const currentDate = new Date().setHours(0, 0, 0, 0);
const upcomingEvents = roughMatches.filter((match) => new Date(match.Date).setHours(0, 0, 0, 0) > currentDate);
const pastEvents = roughMatches.filter((match) => new Date(match.Date).setHours(0, 0, 0, 0) <= currentDate);
// console.log((roughMatches[0].Date).getTime())
function Events() {
    const [showcult, setshowcult] = useState(false);
    const [showtech, setshowtech] = useState(false);
    const [showsports, setshowsports] = useState(true);
    const [showupcomingsports, setshowupcomingsports] = useState(true);
    const [showpastsports, setshowpastsports] = useState(false);
    function formatDate(dateString) {
        const [year, month, day] = dateString.split('-');
        return `${day}-${month}-${year}`;
    }
    return (
        <>
            <h1 className="text-5xl font-semibold text-center my-9">EVENTS</h1>
            <div className="bg-white max-w-80 py-1 mx-auto flex gap-3 items-center justify-between px-8 rounded-full border-4 border-gray-300 mt-7">
                <a
                    className={`py-1 px-2 rounded-md hover:bg-gray-200 ${showcult ? "bg-red-200":""} cursor-pointer`}
                    onClick={() => {
                        setshowcult(true);
                        setshowsports(false);
                        setshowtech(false);
                    }}
                >
                    Cultural
                </a>
                <a
                    className={`py-1 px-2 rounded-md hover:bg-gray-200 ${showsports ? "bg-red-200":""} cursor-pointer`}
                    onClick={() => {
                        setshowcult(false);
                        setshowsports(true);
                        setshowtech(false);
                    }}
                >
                    Sports
                </a>
                <a
                    className={`py-1 px-2 rounded-md hover:bg-gray-200 ${showtech ? "bg-red-200":""} cursor-pointer`}
                    onClick={() => {
                        setshowcult(false);
                        setshowsports(false);
                        setshowtech(true);
                    }}
                >
                    Tech
                </a>
            </div>

            {showcult && <div>Cult events</div>}
            {showtech && <div>Tech events</div>}
            {showsports && (
                <>
                    <div className="flex items-center justify-center mt-5">
                        <button onClick={() => {
                            setshowupcomingsports(true);
                            setshowpastsports(false);
                        }} className={`py-2.5 px-5 me-2 mb-2 text-sm font-medium  focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ${showupcomingsports ? "text-blue-700":"text-gray-900"}`}>Upcomming Events</button>
                        <button onClick={() => {
                            setshowupcomingsports(false);
                            setshowpastsports(true);
                        }} className={`py-2.5 px-5 me-2 mb-2 text-sm font-medium  focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ${showpastsports ? "text-blue-700":"text-gray-900"}`}>Past Events</button>
                    </div>
                    {showupcomingsports && (
                        <div className="max-w-90 my-7">
                            {upcomingEvents.map((match, index) => (
                                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-7 max-w-90">
                                    <div className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center my-3">
                                        {match.matchname} {match.type}
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="flex flex-col items-center pb-10 my-2 mx-10">
                                            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={match.teams.teamA.img} alt={match.teams.teamA.Name} />
                                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{match.teams.teamA.Name}</h5>
                                        </div>
                                        <div className="flex flex-col items-center pb-10 my-5 mx-10">
                                            <h2 className="text-5xl">vs</h2>
                                        </div>
                                        <div className="flex flex-col items-center pb-10 my-2 mx-10">
                                            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={match.teams.teamB.img} alt={match.teams.teamB.Name} />
                                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{match.teams.teamB.Name}</h5>
                                        </div>
                                    </div>
                                    <div className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center mb-4">Venue:-{match.venue}</div>
                                    <div className="text-l font-semibold tracking-tight text-gray-900 dark:text-white text-center mb-4">Date:- {formatDate(match.Date)}</div>
                                </div>
                            ))}
                        </div>
                    )}

                    {showpastsports && (
                        <div className="max-w-90 my-7">
                            {pastEvents.map((match, index) => (
                                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-7 max-w-90">
                                    <div className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center my-3">
                                        {match.matchname} {match.type}
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="flex flex-col items-center pb-10 my-2 mx-10">
                                            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={match.teams.teamA.img} alt={match.teams.teamA.Name} />
                                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{match.teams.teamA.Name}</h5>
                                        </div>
                                        <div className="flex flex-col items-center pb-10 my-5 mx-10">
                                            <h2 className="text-5xl">vs</h2>
                                        </div>
                                        <div className="flex flex-col items-center pb-10 my-2 mx-10">
                                            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={match.teams.teamB.img} alt={match.teams.teamB.Name} />
                                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{match.teams.teamB.Name}</h5>
                                        </div>
                                    </div>
                                    <div className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white text-center mb-4">Venue:-{match.venue}</div>
                                    <div className=" font-semibold tracking-tight text-gray-900 dark:text-white text-center mb-4 text-l" >Date:- {formatDate(match.Date)}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}
        </>
    );
}

export default Events;