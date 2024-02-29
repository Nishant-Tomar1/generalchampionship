import React from 'react';  
import Styles from "../Styles/Navbar.module.css"
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowUp } from "react-icons/fa";
import logo from "../Assets/IMAGES/GClogo.png";


export default function Navbar() {
  
  return (
<>
  <motion.nav className=" navbar fixed-top navbar-expand-lg navbar-dark bg-black p-1 p-md-1 shadow-xl">
  { <div   className={Styles.Stickybtn} onClick={()=> window.scrollTo(0,0)}>  <button > <FaArrowUp /> </button></div> }
    <div className="container-fluid " >
    
    <div className={Styles.PCText}><Link className={`d-flex justify-center items-center navbar-brand head fs-4 fw-bold px-2 pt-1 Head`} to =""> <img style={{width:"3rem",height:"3rem",margin:"0px 5px"}} src={logo} alt="logo"/> General Championship 2024</Link></div>
    <div className={Styles.PhoneText}><Link className={`d-flex justify-center items-center navbar-brand head fs-3 gap-1 fw-bold px-0 pt-1 ps-md-2 Head`} to =""><img style={{width:"2.75rem",height:"2.5rem",marginRight:"3px"}} src={logo} alt="logo"/>  GC 2024</Link></div>

    <button className={`navbar-toggler ${Styles.Toggler}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>


    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent" >
      
      <div className="navbar-nav ms-auto mb-2 mb-lg-0 px-2 gap-md-4 gap-3 pb-3 pb-md-0 rounded-bottom">
        <div className="pt-3 pt-lg-0">
          <Link className = {Styles.NavlinkListElement} aria-current="page" to ="/home" onClick={()=> window.scrollTo(0,0)}> Home </Link>
        </div>
        <div >
          <Link className={Styles.NavlinkListElement} to ="/home" onClick={()=> window.scrollTo(0,0)}>Events </Link>
        </div>
        <div className="nav-item">
          <Link className={Styles.NavlinkListElement} to ="/home" onClick={()=> window.scrollTo(0,0)}>Leaderboard</Link>
        </div>
        <div className="nav-item">
          <Link className={Styles.NavlinkListElement} to ="/team" onClick={()=> window.scrollTo(0,0)}>Team</Link>
        </div>
        <div className="nav-item">
          <Link className={Styles.NavlinkListElement} to ="/home" onClick={()=> window.scrollTo(0,0)}>Rulebook</Link>
        </div>

       
      </div>
    </div>
  </div>
  
</motion.nav>
</>

  )
}