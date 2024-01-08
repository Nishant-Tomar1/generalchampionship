import React from 'react'
import {useState} from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import Styles from "../Styles/ContactUs.module.css";
import axios from 'axios';


function ContactUs() {
  const control = useAnimationControls();
  const [btntext, setBtntext] = useState("Send");
  
  const [createForm, setCreateForm] = useState({
    Name:"",
    email:"",
    message:"",
  });

  const updateCreateFormField = (e) => {
    const {name , value} = e.target;
    setCreateForm({
      ...createForm,
      [name] : value,
    })
  }

  const createNote = async (e) => {
  try{
    e.preventDefault();
    await axios.post("https://astrochamp.onrender.com/notes", createForm);
    setCreateForm({Name:"", email:"", message:""});

    control.start({
      scale: [1,0.01,0.01,1],
      transition : {
        times : [0,0.1,0.15,0.25],
        // ease : "easeInOut"
      }
    });

    setBtntext("Sent ✅");
    const btn = e.target.SubmitBtn;
    btn.disabled = true; 
    btn.style.cursor = "not-allowed";
    btn.style.borderColor = "lightgreen";
    btn.style.opacity = "75%";
    btn.classList.remove(`${Styles.hoverClass}`);
  

  
  
    

  }catch(error){
    // console.log(error);
    setCreateForm({Name:"", email:"", message:""});
  }
}

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
    <motion.div variants={variant} animate='entry' exit='exit' className='flex flex-col items-center justify-center'>

  <div className="w-full md:w-4/5 overflow-hidden p-3 flex flex-col gap-6 justify-center items-center mt-16 ">

    <div style={{width:'100%',height:'70vh'}}>
      <iframe width="100%" height="100%" className="relative inset-0" frameBorder="0" title="map" marginHeight="5" marginWidth="5" scrolling="no" src="https://maps.google.com/maps/?width=100%&height=600&hl=en&q= IIT Bhubaneswar, Jatni&t=&z=15&ie=UTF8&iwloc=B&output=embed"
 style={{borderRadius:'16px',border:'2.4px solid gray'}}></iframe>
    </div>   
 
    <div className="w-4/5 md:w-1/2  bg-purple-800 lg:bg-purple-900 absolute flex flex-col py-4 rounded shadow-md opacity-1/2">
        <div className="px-6">
          <h2 className="title-font font-semibold text-black tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">Indian Institute of Technology Bhubaneswar, Argul Khordha-752050, Odisha</p>
        </div>
        <div className=" px-6 mt-1 ">
          <h2 className="title-font font-semibold text-black tracking-widest text-xs">EMAIL</h2>
          <p className="" >secyastronomy@iitbbs.ac.in</p>
        </div>
      </div>
  </div>

<form action="" onSubmit={createNote}>
  <div className="container px-4 px-md-5 py-12 mx-auto">
    <div className="flex flex-col text-center w-full mb-2">
      <h1 className="sm:text-3xl font-medium title-font text-orange-400">Send a Message!</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Feel free to reach out with any questions or messages, and we'll get back to you as soon as we can.</p>
    </div>
    <div className="flex flex-col items-center w-full ">
      <div className="flex flex-wrap ">
        <div className="p-2 w-full md:w-2/5">
          <div className="relative ">
            <label htmlFor="name" className="leading-7 text-gray-400 " >Name</label>
            <input type="text" id="name" name="Name" value={createForm.Name} required onChange={updateCreateFormField}  className="w-full bg-transparent bg-opacity-0 border-2 rounded-xl  border-gray-600  focus:border-white focus:border-2 focus:ring-5 focus:ring-indigo-200 text-base outline-none text-white-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-full md:w-3/5">
          <div className="relative">
            <label htmlFor="email" className="leading-7  text-gray-400">Email</label>
            <input type="email" id="email" name="email" value={createForm.email} required onChange={updateCreateFormField} className="w-full bg-transparent bg-opacity-0 border-2 rounded-xl border-gray-600 focus:border-white focus:ring-5 focus:ring-indigo-200 text-base outline-none text-white-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message"  className="leading-7  text-gray-400">Message</label>
            <textarea id="message" name="message" value={createForm.message} required onChange={updateCreateFormField} className=" border-2 h-32 w-full bg-transparent bg-opacity-0 rounded-xl border-gray-600 focus:border-white focus:ring-5 focus:ring-indigo-200 text-base outline-none text-white-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full text-center">
          <motion.input animate={control} className={`${Styles.SubmitBtn} ${Styles.hoverClass}`} type='Submit' value={btntext} id="SubmitBtn" onChange = {() => null}  />
        </div>
      </div>
    </div>
  </div>
  </form>



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

export default ContactUs


