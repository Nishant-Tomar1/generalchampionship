import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import Styles from '../Styles/Home.module.css';
import { motion } from 'framer-motion';
import het from "../Components/IMAGES/het.jpg";
import nobel from "../Components/IMAGES/nobel.jpg";
import harsh from "../Components/IMAGES/harsh.jpg";
import arshad from "../Components/IMAGES/arshad.jpg";
import yash from "../Components/IMAGES/yash.jpg";
import bibushree from "../Components/IMAGES/bibushree.jpg";
import nishant from "../Components/IMAGES/nishant.jpg"


function Team() {

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
    <motion.div variants={variant} animate='entry' exit='exit' >
      <section className={`text-gray-400 body-font`}>
  <div className="container pt-32 pb-12 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="text-xxl font-bold title-font mb-3 text-orange-400 tracking-wide ">ASTROCHAMP TEAM</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base ">Our team is a diverse and collaborative group of individuals, each bringing unique skills and perspectives. Together, we thrive on innovation and a shared passion for achieving common goals.</p>
    </div>
    <div className="flex flex-wrap -m-4 justify-center items-center">


      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-center justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200"></img>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-xl text-orange-500">Doddi Bhavya</h2>
            <h3 className="text-gray-500 mb-3 text-lg">Secretary</h3>
            {/* <p className="mb-4">A second year CE underagraduate student at IIT Bhubaneswar. </p> */}
            <span className="inline-flex text-white text-lg gap-2">
              <a href='https://www.instagram.com/'><FaInstagram /></a>
              <a href='https://www.linkedin.com/'><FaLinkedinIn /></a>
              <a href='https://www.X.com/'><FiTwitter /></a>           
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
              <a href='https://www.instagram.com/'><FaInstagram /></a>
              <a href='https://www.linkedin.com/'><FaLinkedinIn /></a>
              <a href='https://www.X.com/'><FiTwitter /></a>           
            </span>
          </div>
        </div>
      </div>



      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={harsh} />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-xl text-orange-500">Harsh Sharma</h2>
            <h3 className="text-gray-500 mb-3 text-lg">Designer </h3>
            {/* <p className="mb-4">A second year CE underagraduate at IIT Bhubaneswar.</p> */}
            <span className="inline-flex text-white text-lg gap-2">
              <a href='https://www.instagram.com/'><FaInstagram /></a>
              <a href='https://www.linkedin.com/'><FaLinkedinIn /></a>
              <a href='https://www.X.com/'><FiTwitter /></a>           
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
            {/* <p className="mb-4">A second year EE underagraduate from Ghaziabad, U.P</p> */}
            <span className="inline-flex text-white text-lg gap-2">
              <a href='https://www.instagram.com/'><FaInstagram /></a>
              <a href='https://www.linkedin.com/'><FaLinkedinIn /></a>
              <a href='https://www.X.com/'><FiTwitter /></a>           
            </span>
          </div>
        </div>
      </div>


      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={arshad}></img>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-xl text-orange-500">Arshad Amaan</h2>
            <h3 className="text-gray-500 mb-3 text-lg">UI Developer</h3>
            {/* <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p> */}
            <span className="inline-flex text-white text-lg gap-2">
              <a href='https://www.instagram.com/'><FaInstagram /></a>
              <a href='https://www.linkedin.com/'><FaLinkedinIn /></a>
              <a href='https://www.X.com/'><FiTwitter /></a>           
            </span>
          </div>
        </div>
      </div>




      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={yash}></img>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-xl text-orange-500">Yash Goyal</h2>
            <h3 className="text-gray-500 mb-3 text-lg">Designer</h3>
            {/* <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p> */}
            <span className="inline-flex text-white text-lg gap-2">
              <a href='https://www.instagram.com/'><FaInstagram /></a>
              <a href='https://www.linkedin.com/'><FaLinkedinIn /></a>
              <a href='https://www.X.com/'><FiTwitter /></a>           
            </span>
          </div>
        </div>
      </div>


      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/204x204"></img>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-xl text-orange-500">Sharath Kumar</h2>
            <h3 className="text-gray-500 mb-3 text-lg">UI Developer</h3>
            {/* <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p> */}
            <span className="inline-flex text-white text-lg gap-2">
              <a href='https://www.instagram.com/'><FaInstagram /></a>
              <a href='https://www.linkedin.com/'><FaLinkedinIn /></a>
              <a href='https://www.X.com/'><FiTwitter /></a>           
            </span>
          </div>
        </div>
      </div>




      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={bibushree}></img>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-xl text-orange-500">Bibushree Mahapatra</h2>
            <h3 className="text-gray-500 mb-3 text-lg">Designer</h3>
            {/* <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p> */}
            <span className="inline-flex text-white text-lg gap-2">
              <a href='https://www.instagram.com/'><FaInstagram /></a>
              <a href='https://www.linkedin.com/'><FaLinkedinIn /></a>
              <a href='https://www.X.com/'><FiTwitter /></a>           
            </span>
          </div>
        </div>
      </div>

      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/204x204"></img>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-xl text-orange-500">Vamsi</h2>
            <h3 className="text-gray-500 mb-3 text-lg">UI Developer</h3>
            {/* <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p> */}
            <span className="inline-flex text-white text-lg gap-2">
              <a href='https://www.instagram.com/'><FaInstagram /></a>
              <a href='https://www.linkedin.com/'><FaLinkedinIn /></a>
              <a href='https://www.X.com/'><FiTwitter /></a>           
            </span>
          </div>
        </div>
      </div>




      <div className="p-4 lg:w-1/2">
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={nobel}></img>
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-xl text-orange-500">Nobel Das</h2>
            <h3 className="text-gray-500 mb-3 text-lg">Designer</h3>
            {/* <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p> */}
            <span className="inline-flex text-white text-lg gap-2">
              <a href='https://www.instagram.com/'><FaInstagram /></a>
              <a href='https://www.linkedin.com/'><FaLinkedinIn /></a>
              <a href='https://www.X.com/'><FiTwitter /></a>           
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-col text-center w-full mb-10">
      <h1 className=" font-bold title-font mb-4 text-orange-400 ">ASSOCIATES</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">AstroChamp's student associates play a crucial role in ensuring the seamless execution and success of the fest, contributing their dedication and skills throughout the event.</p>
    </div>

    <div className="flex flex-wrap -m-2">

      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-3 rounded-lg text-center">
          {/* <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"></img> */}
          <div className="flex-grow">
            <h2 className="text-pink-600 title-font font-medium text-xl">Holden Caulfield</h2>
            {/* <p className="text-gray-500">UI Designer</p> */}
          </div>
        </div>
      </div>

      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-3 rounded-lg text-center">
          {/* <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84"></img> */}
          <div className="flex-grow">
            <h2 className="text-pink-600 title-font font-medium text-xl">Henry Letham</h2>
            {/* <p className="text-gray-500">CTO</p> */}
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-3 rounded-lg text-center">
          {/* <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88"></img> */}
          <div className="flex-grow">
            <h2 className="text-pink-600 title-font font-medium text-xl">Oskar Blinde</h2>
            {/* <p className="text-gray-500">Founder</p> */}
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-3 rounded-lg text-center">
          {/* <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/90x90"></img> */}
          <div className="flex-grow">
            <h2 className="text-pink-600 title-font font-medium text-xl">John Doe</h2>
            {/* <p className="text-gray-500">DevOps</p> */}
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-3 rounded-lg text-center">
          {/* <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/94x94"></img> */}
          <div className="flex-grow">
            <h2 className="text-pink-600 title-font font-medium text-xl">Martin Eden</h2>
            {/* <p className="text-gray-500">Software Engineer</p> */}
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-3 rounded-lg text-center">
          {/* <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98"></img> */}
          <div className="flex-grow">
            <h2 className="text-pink-600 title-font font-medium text-xl">Boris Kitua</h2>
            {/* <p className="text-gray-500">UX Researcher</p> */}
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-3 rounded-lg text-center">
          {/* <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/100x90"></img> */}
          <div className="flex-grow">
            <h2 className="text-pink-600 title-font font-medium text-xl">Atticus Finch</h2>
            {/* <p className="text-gray-500">QA Engineer</p> */}
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-3 rounded-lg text-center">
          {/* <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/104x94"></img> */}
          <div className="flex-grow">
            <h2 className="text-pink-600 title-font font-medium text-xl">Alper Kamu</h2>
            {/* <p className="text-gray-500">System</p> */}
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-3 rounded-lg text-center">
          {/* <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98"></img> */}
          <div className="flex-grow">
            <h2 className="text-pink-600 title-font font-medium text-xl">Rodrigo Monchi</h2>
            {/* <p className="text-gray-500">Product Manager</p> */}
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
