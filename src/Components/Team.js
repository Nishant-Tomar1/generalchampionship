import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Styles from '../Styles/Home.module.css';
import { motion } from 'framer-motion';
import het from "../Components/IMAGES/het.jpg";
import harsh from "../Components/IMAGES/harsh.jpg";
import vamsi from "../Components/IMAGES/mvvvs raju.jpg";
import yash from "../Components/IMAGES/yash.jpg";
import bibushree from "../Components/IMAGES/bibushree.jpg";
import nishant from "../Components/IMAGES/nishant.jpg";
import bhavya from "../Components/IMAGES/bhavya.jpg";
import sharath from "../Components/IMAGES/sharath.png"
import saisantosh from "../Components/IMAGES/sai santosh.jpg"


function Team() {

  const variant = {
    entry : {
        opacity: [0,1], 
        transition:{
            duration:0.2,
            times:[0,1],
        }
    },
    exit : {
        opacity: [1,0], 
        transition:{
            duration:0.2,
            times:[0,1],
        }
    },
}

  return (
    <motion.div variants={variant} animate='entry' exit='exit' >
      <section className={`text-gray-400 body-font`}> 

  <div className="container pt-32 pb-12 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="text-xxl font-bold title-font mb-3 text-orange-400 tracking-wide md:text-5xl">ASTROCHAMP TEAM</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base md:text-lg ">Our team is a diverse and collaborative group of individuals, each bringing unique skills and perspectives. Together, we thrive on innovation and a shared passion for achieving common goals.</p>
    </div>


    <div className="flex flex-wrap justify-center lg:pl-6 items-center">


    <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-center justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={''}></img>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-xl text-orange-500">Mubbashir Akhtar</h2>
            <h3 className="text-gray-500 mb-3 text-lg">Governor</h3>
            <span className="inline-flex text-white text-lg gap-2">
              <a href='https://www.instagram.com/'><FaInstagram /></a>
              <a href='https://www.linkedin.com/'><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
      </div>


      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={saisantosh} ></img>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-xl text-orange-500">A.V Sai Santosh</h2>
            <h3 className="text-gray-500 mb-3 text-lg">Governor</h3>
            <span className="inline-flex text-white text-lg gap-2">
              <a href='https://www.instagram.com/aguru_santosh_official' target='#'><FaInstagram /></a>
              <a href='https://www.linkedin.com/in/aguru-venkata-saisantosh-patnaik-1b7393239' target="#"><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
      </div>


      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-center justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={''}></img>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-xl text-orange-500">Akshat Burman</h2>
            <h3 className="text-gray-500 mb-3 text-lg">Governor</h3>
            <span className="inline-flex text-white text-lg gap-2">
              <a href='https://www.instagram.com/'><FaInstagram /></a>
              <a href='https://www.linkedin.com/'><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
  </div>


      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-center justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={bhavya}></img>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-xl text-orange-500">Doddi Bhavya</h2>
            <h3 className="text-gray-500 mb-3 text-lg">Secretary</h3>
            <span className="inline-flex text-white text-lg gap-2">
              <a href='https://www.instagram.com/bhavya__0901' target='#'><FaInstagram /></a>
              <a href='https://www.linkedin.com/in/bhavya-doddi-993b60255' target='#'><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
      </div>


      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={het} ></img>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-xl text-orange-500">Het Sarsava</h2>
            <h3 className="text-gray-500 mb-3 text-lg">Events Head</h3>
            {/* <p className="mb-4"> A Second year CSE Undergraduate from Ahmedabad, Gujrat.</p> */}
            <span className="inline-flex text-white text-lg gap-2">
              <a href='https://www.instagram.com/hetsarsava' target='#'><FaInstagram /></a>
              <a href='https://www.linkedin.com/in/het-sarsava-3982a5260' target='#'><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
      </div>


      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={harsh} />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-xl text-orange-500">Harsh Sharma</h2>
            <h3 className="text-gray-500 mb-3 text-lg">Publicity Head</h3>
            <span className="inline-flex text-white text-lg gap-2">
              <a href='https://www.instagram.com/harshsharma_.26' target='#'><FaInstagram /></a>
              <a href='https://www.linkedin.com/in/harsh-sharma-54554a232' target='#'><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
      </div>


      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={nishant}></img>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-xl text-orange-500">Nishant Tomar</h2>
            <h3 className="text-gray-500 mb-3 text-lg">Management Head</h3>
            <span className="inline-flex text-white text-lg gap-2">
              <a href='https://www.instagram.com/myself_nishant' target='#'><FaInstagram /></a>
              <a href='https://www.linkedin.com/in/nishant-tomar-7694aa2aa/' target='#'><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
      </div>


      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={yash}></img>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-xl text-orange-500">Yash Goyal</h2>
            <h3 className="text-gray-500 mb-3 text-lg">Publicity Team </h3>
            <span className="inline-flex text-white text-lg gap-2"></span>
              <a href='https://www.instagram.com/_im_ag_ine' target='#'><FaInstagram /></a>
              <a href='https://www.linkedin.com/in/yash-goyal-686405294' target='#'><FaLinkedinIn /></a>
          </div>
        </div>
      </div>


      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={sharath} ></img>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-xl text-orange-500">Sharath Kumar</h2>
            <h3 className="text-gray-500 mb-3 text-lg">Core Team Member</h3>
            <span className="inline-flex text-white text-lg gap-2">
              <a href='https://www.instagram.com/sharathkumarbakam' target='#'><FaInstagram /></a>
              <a href='https://www.linkedin.com/' target='#'><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
      </div>




      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={bibushree}></img>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-xl text-orange-500">Bibushree Mahapatra</h2>
            <h3 className="text-gray-500 mb-3 text-lg">Sponsorhip Team</h3>
            <span className="inline-flex text-white text-lg gap-2">
              <a href='https://www.instagram.com/_kumaneko24' target='#'><FaInstagram /></a>
              <a href='https://www.linkedin.com/in/bibhushree-mahapatra-935a63258' target='#'><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
      </div>

      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={vamsi}></img>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-xl text-orange-500">Vamsi</h2>
            <h3 className="text-gray-500 mb-3 text-lg">Core Team Member</h3>
            <span className="inline-flex text-white text-lg gap-2">
              <a href='https://www.instagram.com/_vamsi_manthena' target='#'><FaInstagram /></a>
              <a href='https://www.linkedin.com/in/' target='#'><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
      </div>


    </div>
  </div>

  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-col text-center w-full mb-10">
      <h1 className=" font-bold title-font mb-4 text-orange-400 md:text-5xl">ASSOCIATES</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base md:text-lg">AstroChamp's student associates play a crucial role in ensuring the seamless execution and success of the fest, contributing their dedication and skills throughout the event.</p>
    </div>

    <div className="flex flex-wrap -m-2">

      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-3 rounded-lg text-center">
          <div className="flex-grow">
            <h2 className="text-pink-600 title-font font-medium text-xl">Ayush Mittal</h2>
          </div>
        </div>
      </div>

      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-3 rounded-lg text-center">
          <div className="flex-grow">
            <h2 className="text-pink-600 title-font font-medium text-xl">Sudhanshu Jha</h2>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-3 rounded-lg text-center">
          <div className="flex-grow">
            <h2 className="text-pink-600 title-font font-medium text-xl">Kunal</h2>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-3 rounded-lg text-center">
          <div className="flex-grow">
            <h2 className="text-pink-600 title-font font-medium text-xl">Spandan Satapathy</h2>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-3 rounded-lg text-center">
          <div className="flex-grow">
            <h2 className="text-pink-600 title-font font-medium text-xl">Anurag Mishra</h2>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-3 rounded-lg text-center">
          <div className="flex-grow">
            <h2 className="text-pink-600 title-font font-medium text-xl">Gagan Gupta</h2>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-3 rounded-lg text-center">
          <div className="flex-grow">
            <h2 className="text-pink-600 title-font font-medium text-xl">Ganesh</h2>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-3 rounded-lg text-center">
          <div className="flex-grow">
            <h2 className="text-pink-600 title-font font-medium text-xl">Shashank</h2>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-3 rounded-lg text-center">
          <div className="flex-grow">
            <h2 className="text-pink-600 title-font font-medium text-xl">Jahnavi</h2>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-3 rounded-lg text-center">
          <div className="flex-grow">
            <h2 className="text-pink-600 title-font font-medium text-xl">Rishikesh</h2>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-3 rounded-lg text-center">
          <div className="flex-grow">
            <h2 className="text-pink-600 title-font font-medium text-xl">Sohan</h2>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-3 rounded-lg text-center">
          <div className="flex-grow">
            <h2 className="text-pink-600 title-font font-medium text-xl">Venkat Mohith</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
    
    {/* Footer */}
    <div className={Styles.FooterDiv} style={{color:'gray !important',marginLeft:'2.5vw'}}>

      <div> Astro_Champ </div>
      <div className={Styles.FooterFont}> Dive into the cosmic adventure at AstroChamp 2024! Explore the universe through quizzes, art, science, and more. <br ></br> Join us in this celestial celebration!"</div>


      <div className={Styles.FooterEnd}> 
        <div>© Copyright 2024 | All rights Reserved </div>
        <div> Designed and developed by <a href="https://www.github.com/DEV-NISHANT-HERE" style={{textDecoration:'none',color:'purple'}}>Nishant Tomar</a> (team Astro_Champ) </div>
      </div>

    </div>

    

</section>
    </motion.div>
  )
}

export default Team
