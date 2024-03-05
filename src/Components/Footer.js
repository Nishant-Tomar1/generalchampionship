import React from 'react'
import logo from "../Assets/IMAGES/GClogo.png"
import { FaInstagram } from 'react-icons/fa'
import { IoLogoGooglePlaystore } from "react-icons/io5";

function Footer() {
    return (
        <div>

            <footer className="flex flex-col  text-white-600 body-font border-t-2 border-gray-800 mt-4 ">
                <div className="container px-5 py-4 mx-auto flex items-center justify-center lg:flex-row flex-col">

                    <a className="flex title-font font-medium text-gray-900" href='/'>
                        <img className="w-10 h-10" src={logo} alt="" />
                        <span className="py-1  text-xl text-white-700">GC 2024</span>
                    </a>

                    <div className="text-center text-sm text-gray-500 md:ml-4 lg:pl-4 lg:border-l-2 sm:border-gray-200 sm:mt-0 ">© 2024 General Championship — All Rights Reserved
                    </div>


                    <div className="gap-3 lg:ml-auto flex md:mt-2 lg:mt-0 justify-center items-center sm:justify-end text-2xl pt-3 pt-md-0">
                        <a href='https://www.instagram.com/gc.iitbbs' target='#'><FaInstagram /></a>
                        <a href='https://play.google.com/store/apps/details?id=com.samthemathlete.gcapp' target='#'><IoLogoGooglePlaystore /></a>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer