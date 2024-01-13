import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Styles from '../Styles/Events.module.css'
import SpaceQuiz from "../Components/IMAGES/SpaceQuiz.jpg"
import AsteroidVenture from "../Components/IMAGES/AsteroidVenture.jpg"
import WaterRocket from "../Components/IMAGES/WaterRocket.png"
import SpaceArt from "../Components/IMAGES/SpaceArt.jpg"
import StarbornSagas from "../Components/IMAGES/StarbornSagas.jpg"
import CosmoMath from "../Components/IMAGES/cosmomath.jpeg"

function Events() {
  const [btn1state, setbtn1State] = useState(true);
  const [btn2state, setbtn2State] = useState(true);
  const [btn3state, setbtn3State] = useState(true);
  const [btn4state, setbtn4State] = useState(true);
  const [btn5state, setbtn5State] = useState(true);
  const [btn6state, setbtn6State] = useState(true);
  const variant = {
    entry : {
        opacity: [0,1], 
        transition:{
            duration:0.125,
            times:[0,1],
        }
    },
    exit : {
        opacity: [1,0], 
        transition:{
            duration:0.125,
            times:[0,1],
        }
    },
}

  return (
    <motion.div variants={variant} animate='entry' exit='exit' className='flex flex-col items-center justify-center'>

<section class="text-gray-600 body-font ">
  
  <div class="container mx-auto flex flex-col px-2 pt-24 lg:pt-24 justify-center items-center">
    <img class="lg:w-2/3 md:w-4/6 w-5/6 mb-6 border-1 border-orange-400 object-cover object-center rounded h-64" alt="" src={SpaceQuiz} />
    <div class="w-full md:w-5/6 flex flex-col mb-16 px-4 items-center text-center">
      <h1 class="title-font sm:text-4xl text-2xl mb-3 font-medium text-orange-400">1. SPACE QUIZ</h1>
      <p class="mb-8 leading-relaxed text-md md:text-lg text-white-400"> A two-round Quiz competition based on astronomy, aerospace and 
astrophysics where your knowledge in these fields will be put to the test. <br></br>
<span className={Styles.SpecialText} >Date : </span> 21 January, 2024. 
<span className={Styles.SpecialText} > Time : </span>11 : 00 am.
<span className={Styles.SpecialText} >  Mode : </span> Offline. <br /> <br />
<Link className={Styles.Registerbtn}  to="https://forms.gle/Gk8jbJzQSSZSPMgr6" target='blank' >Register Now ! </Link> <p><br /></p> <hr />
<details className="dropdown" value=" Show Rules "> 
  <summary className=" text-orange-400 text-md pb-2" onClick={() => {setbtn1State(!btn1state)}} >{btn1state ? " Show Rules" : " Hide Rules"}</summary>
    <span className={Styles.SpecialText} style={{fontSize : "1.5rem"}} >Rules : </span>
    <br />  <br />Open for all.
The Quiz will consist of two rounds. <br />
Round one is question based round where all teams will be give a sheet of 
questions and the top 10 teams with the maximum answers correct will move 
to round 2.
In case of tie in round one, one question will be asked until extra teams are 
eliminated. <br /> <br />
In round two, one question will be asked at a time and the first responders will 
get a chance to answer. If the first team succeeds we move to the next 
question. If the first team fails, then other 9 teams get to answer the question 
for half the points and if the second team successfully answers the question, 
then equal point will be deducted from the first team. <br /> <br />
Any details or justification, if needed, will be shared later.
</details>  
</p>

    </div>
  </div>


  <div class="container mx-auto flex flex-col px-2  justify-center items-center">
    <img class="lg:w-2/3 md:w-4/6 w-5/6 mb-6 border-1 border-orange-400 object-cover object-center rounded h-64  " alt="" src={AsteroidVenture} />
    <div class="w-full md:w-5/6 flex flex-col mb-16 px-4 items-center text-center">
      <h1 class="title-font sm:text-4xl text-2xl mb-3 font-medium text-orange-400">2. ASTEROID VENTURE</h1>
      <p class="mb-8 leading-relaxed text-md md:text-lg text-white-400">An exciting case study based competition where a problem statement related 
to asteroid mining will be given and you have to solve it. <br></br>
<span className={Styles.SpecialText} >Date : </span> ......
<span className={Styles.SpecialText} > Time : </span>......
<span className={Styles.SpecialText} >  Mode : </span> Online. <br /><br />
<Link className={Styles.Registerbtn}  to="https://forms.gle/NA2LF9SghaamyCk57" target='blank' >Register Now ! </Link> <p><br /></p> <hr />
<details className="dropdown" value=" Show Rules "> 
  <summary className=" text-orange-400 text-md pb-2" onClick={() => {setbtn2State(!btn2state)}} >{btn2state ? " Show Rules" : " Hide Rules"}</summary>
  
    <span className={Styles.SpecialText} style={{fontSize : "1.5rem"}} >Rules : </span>
    <br />  Open for all. <br />
From the start date, each team has 7 days to submit their report. <br />
Problem Statement of the case study will be uploaded on unstop. <br />
Any details or justification, if needed, will be shared later.
</details>  
</p>    
    </div>
  </div>


  <div class="container mx-auto flex flex-col px-2  justify-center items-center">
    <img class="lg:w-2/3 md:w-4/6 w-5/6 mb-6 border-1 border-orange-400 object-cover object-center rounded h-64  " alt="" src={WaterRocket} />
    <div class="w-full md:w-5/6 flex flex-col mb-16 px-4 items-center text-center">
      <h1 class="title-font sm:text-4xl text-2xl mb-3 font-medium text-orange-400">3. BLAST OFF</h1>
      <p class="mb-8 leading-relaxed text-md md:text-lg text-white-400">A water bottle rocket competition in which you have to make your own water 
bottle rocket and use the provided launcher to maximize the distance travelled 
by your rocket. <br></br>
<span className={Styles.SpecialText} >Date : </span> ......
<span className={Styles.SpecialText} > Time : </span>......
<span className={Styles.SpecialText} >  Mode : </span> Offline. <br /><br />
<Link className={Styles.Registerbtn}  to="https://forms.gle/5Z9CwRMUJLu5BCun6" target='blank' >Register Now ! </Link> <p><br /></p> <hr />
<details className="dropdown" value=" Show Rules "> 
  <summary className=" text-orange-400 text-md pb-2" onClick={() => {setbtn3State(!btn3state)}} >{btn3state ? " Show Rules" : " Hide Rules"}</summary>
  
    <span className={Styles.SpecialText} style={{fontSize : "1.5rem"}} >Rules : </span> <br />
    You only need the rocket part, launching system will be provided by IIT 
Bhubaneswar.
Only one rocket per team is allowed. 
Only water can be used for propulsion.
The rocket needs to hold a pressure of greater than 60psi.
Multiple staged rockets are not allowed.
Minimum bottle size 2 liters..
Minimum diameter of the water bottle neck should be at least 1.5 inch. <br />
Three tries per team.
Specifications of the launcher will be released soon.
Any details or justification, if needed, will be shared later.
</details>  
</p>    
    </div>
  </div>


  <div class="container mx-auto flex flex-col px-2  justify-center items-center">
    <img class="lg:w-2/3 md:w-4/6 w-5/6 mb-6 border-1 border-orange-400 object-cover object-center rounded h-64  " alt="" src={SpaceArt} />
    <div class="w-full md:w-5/6 flex flex-col mb-16 px-4 items-center text-center">
      <h1 class="title-font sm:text-4xl text-2xl mb-3 font-medium text-orange-400">4. SPACE ART</h1>
      <p class="mb-8 leading-relaxed text-md md:text-lg text-white-400">A Space Art based Competition, to showcase your artistic skills, that will be organized in collaboration with KALAKRITI, the Fine Arts Society of IIT Bhubaneswar.<br></br>
<span className={Styles.SpecialText} >Date : </span> ......
<span className={Styles.SpecialText} > Time : </span>......
<span className={Styles.SpecialText} >  Mode : </span> Offline. <br /><br />

<Link className={Styles.Registerbtn}  to="https://forms.gle/pHAXt1GGsLq4TJka6" target='blank' >Register Now ! </Link> <p><br /></p><hr />
<details className="dropdown" value=" Show Rules "> 
  <summary className=" text-orange-400 text-md pb-2" onClick={() => {setbtn4State(!btn4state)}} >{btn4state ? " Show Rules" : " Hide Rules"}</summary>
  
    <span className={Styles.SpecialText} style={{fontSize : "1.5rem"}} >Rules : </span> <br />
    Canvas will be provided.
Participants need to bring their equipment.
</details>  
</p>    
    </div>
  </div>

  <div class="container mx-auto flex flex-col px-2  justify-center items-center">
    <img class="lg:w-2/3 md:w-4/6 w-5/6 mb-6 border-1 border-orange-400 object-cover object-center rounded h-64  " alt="" src={StarbornSagas} />
    <div class="w-full md:w-5/6 flex flex-col mb-16 px-4 items-center text-center">
      <h1 class="title-font sm:text-4xl text-2xl mb-3 font-medium text-orange-400">5. STARBORN SAGAS</h1>
      <p class="mb-8 leading-relaxed text-md md:text-lg text-white-400">A competition where you can express your creativity and thoughts in form of 
words! Give the beginning of an exciting story, your job is to complete it int the 
most amazing way possible! <br></br>
<span className={Styles.SpecialText} >Date : </span> ......
<span className={Styles.SpecialText} > Time : </span>......
<span className={Styles.SpecialText} >  Mode : </span> Offline. <br /><br />

<Link className={Styles.Registerbtn}  to="https://forms.gle/SShpuiEioYZ3dN9N9" target='blank' >Register Now ! </Link> <p><br /></p><hr />
<details className="dropdown" value=" Show Rules "> 
  <summary className=" text-orange-400 text-md pb-2" onClick={() => {setbtn5State(!btn5state)}} >{btn5state ? " Show Rules" : " Hide Rules"}</summary>
  
    <span className={Styles.SpecialText} style={{fontSize : "1.5rem"}} >Rules : </span> <br />
    A paragraph of 50-100 words will be provided.
The story must begin with the given paragraph.
The story must not be exceeding 1000 words in total (excluding the provided 
paragraph).
The paragraph will be given on the time of event itself. <br />
Any details or justification, if needed, will be shared later.

</details>  
</p>    
    </div>
  </div>

  
  <div class="container mx-auto flex flex-col px-2  justify-center items-center">
    <img class="lg:w-2/3 md:w-4/6 w-5/6 mb-6 border-1 border-orange-400 object-cover object-center rounded h-64  " alt="" src={CosmoMath} />
    <div class="w-full md:w-5/6 flex flex-col mb-16 px-4 items-center text-center">
      <h1 class="title-font sm:text-4xl text-2xl mb-3 font-medium text-orange-400">6. MATHO-STELLAR</h1>
      <p class="mb-8 leading-relaxed text-md md:text-lg text-white-400">A competition where you can express your creativity and thoughts in form of 
words! Give the beginning of an exciting story, your job is to complete it int the 
most amazing way possible! <br></br>
<span className={Styles.SpecialText} >Date : </span> ......
<span className={Styles.SpecialText} > Time : </span>......
<span className={Styles.SpecialText} >  Mode : </span> Online. <br /><br />

<Link className={Styles.Registerbtn}  to="https://forms.gle/iDoEB5Lqxu4FsP7XA" target='blank' >Register Now ! </Link> <p><br /></p>  <hr /> 
<details className="dropdown" value=" Show Rules "> 
  <summary className=" text-orange-400 text-md pb-2" onClick={() => {setbtn6State(!btn6state)}} >{btn6state ? " Show Rules" : " Hide Rules"}</summary>
  
    <span className={Styles.SpecialText} style={{fontSize : "1.5rem"}} >Rules : </span> <br />
    A paragraph of 50-100 words will be provided.
The story must begin with the given paragraph.
The story must not be exceeding 1000 words in total (excluding the provided 
paragraph).
The paragraph will be given on the time of event itself. <br />
Any details or justification, if needed, will be shared later.

</details>  
</p>    
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

  )
}

export default Events



