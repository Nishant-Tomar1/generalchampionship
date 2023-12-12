import React from 'react';
import Styles from '../Styles/Home.module.css';
import { FaQuestion } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";
import { FaPaintBrush } from "react-icons/fa";
import { TfiThought } from "react-icons/tfi";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


function Home() {

  const variant = {
    entry : {
        opacity: [0,1], 
        transition:{
            duration:1.5,
            times:[0,1],
        }
    },
    exit : {
        opacity: [1,0], 
        transition:{
            duration:1.5,
            times:[0,1],
        }
    },
}
  return (
    <>
    <motion.div className={Styles.homediv} variants={variant} animate='entry' exit='exit'>

        <div className={Styles.homecontentDiv}> 

          <div className={Styles.optImage}> </div>
          <div className={Styles.homeContentText}> Unveiling the COSMOS <br></br>At <br ></br>IIT Bhubaneswar</div>
        </div>

        <div className={Styles.about} >

          <span className={Styles.abouthead}>ABOUT</span> <span className={Styles.aboutheadLarge}>ABOUT Astro_Champ 2024</span><br></br>
          
            <div className={Styles.aboutContent}>
                Welcome to ASTROCHAMP 2024, a celestial extravaganza set to illuminate the skies at Indian Institute of Technology, Bhubaneswar on January 15-16. Immerse yourself in the wonders of the universe as we bring together astronomers, space enthusiasts, and inquisitive minds for two days of cosmic exploration. <br></br><br></br>

                ASTROCHAMP is not just an event, it's a gateway to the cosmos. Join us in discovering the mysteries of the universe through captivating talks by renowned astronomers, hands-on workshops, and mesmerizing stargazing sessions. Whether you're a seasoned stargazer or a budding astronomer, this festival offers a unique opportunity to connect with the celestial wonders. <br></br><br></br>

                Mark your calendars for a weekend filled with astronomical delight, where curiosity knows no bounds, and the cosmos unfolds its secrets. ASTROCHAMP 2024 invites you to be part of this extraordinary journey, where the skies above and the knowledge within converge for an unforgettable experience. 
              
            </div> 

          </div>

          {/* Events */}

          <div><span className={Styles.abouthead2}>EVENTS</span></div>
<section className="text-white body-font">

  <div className="container px-4 py-3  mx-auto flex flex-wrap">


    <div className="flex relative pt-10 pb-10 md:pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-white pointer-events-none "></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-8 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm border-1">1</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-black text-white rounded-full inline-flex items-center justify-center border-2">
          <FaQuestion style={{fontSize: '50px'}}/>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-purple-600 mb-1 text-xxl md:text-4xl">Space Quiz</h2>
          <p className="leading-relaxed md:text-lg">A two-round Quiz competition based on astronomy, aerospace and astrophysics that will be conducted in collaboration with the Quiz Society of IIT Bhubaneswar.</p>
        </div>

      </div>
    </div>

    
    <div className="flex relative pb-10 md:pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-white pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm border-1">2</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-black text-white rounded-full inline-flex items-center justify-center border-2">
          <FaSearch style={{fontSize: '45px'}}/>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-pink-700  mb-1 text-xxl md:text-4xl">Asteroid Venture</h2>
          <p className="leading-relaxed md:text-lg">An exciting case study based competition where a problem statement related to asteroid mining will be given and you have to solve it in a limited time period given to you.</p>
        </div>
      </div>
    </div>


    <div className="flex relative pb-10 md:pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-white pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm border-1">3</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-black text-white rounded-full inline-flex items-center justify-center border-2">
          <IoMdRocket  style={{fontSize: '50px'}}/>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-purple-600 mb-1 text-xxl md:text-4xl">Blast Off</h2>
          <p className="leading-relaxed md:text-lg">A water bottle rocket competition in which you have to make your own water bottle rocket and then launch it using the launch pads provided by the organizers.</p>
        </div>
      </div>
    </div>


    <div className="flex relative pb-10 md:pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-white pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm border-1">4</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-black text-white rounded-full inline-flex items-center justify-center border-2">
          <FaPaintBrush style={{fontSize: '50px'}}/>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-pink-700 mb-1 text-xxl md:text-4xl">Space Art</h2>
          <p className="leading-relaxed md:text-lg">A Space Art based Competition, to showcase your artistic skills, that will be organized in collaboration with KALAKRITI, the Fine Arts Society of IIT Bhubaneswar. </p>
        </div>
      </div>
    </div>


    <div className="flex relative pb-10 md:pb-20 sm:items-center md:w-2/3 mx-auto">

      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-white pointer-events-none "></div>
      </div>

      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-8 sm:mt-0 inline-flex items-center justify-center bg-black text-white relative z-10 title-font font-medium text-sm border-1">5</div>

      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-black text-white rounded-full inline-flex items-center justify-center border-2">
          <TfiThought style={{fontSize: '50px'}} />
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-purple-600 mb-1 text-xxl md:text-4xl">Starborn Sagas</h2>
          <p className="leading-relaxed md:text-lg">A competition where you can express your creativity and thoughts in form of words! Give the beginning of an exciting story, your job is to complete it int the most amazing way possible!</p>
          <div className={Styles.KnowMorebtn }>
      <Link to='/events' style={{textDecoration:'none',color:'antiquewhite'}} onClick={()=>  window.scrollTo(0,0)}>Know More  </Link>
    </div>
        </div>

      </div>
    </div>

  </div>
  

</section> 
  


    {/* Footer */}
    <div className={Styles.FooterDiv} style={{color:'gray !important'}}>

      <div> Astro_Champ </div>
      <div className={Styles.FooterFont}> Dive into the cosmic adventure at AstroChamp 2024! Explore the universe through quizzes, art, science, and more. <br ></br> Join us in this celestial celebration!"</div>


      <div className={Styles.FooterEnd}> 
        <div>© Copyright 2024 | All rights Reserved </div>
        <div> Designed and developed by <a href="https://www.github.com/DEV-NISHANT-HERE" style={{textDecoration:'none',color:'purple'}}>Nishant Tomar</a> (team Astro_Champ) </div>
      </div>

    </div>


    </motion.div>

    
    </>
  )
}

export default Home;
