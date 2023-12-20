import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Events from './Components/Events';
import Team from './Components/Team';
import ContactUs from './Components/ContactUs';
import Feedback from './Components/Feedback';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <AnimatePresence mode='wait'>
    <Router>

      <Navbar />
  
      <Routes>
          <Route exact path='/AstroChamp_Frontend' element={<Home/>}></Route>
          {/* <Route exact path='/' element={<Home/>}></Route> */}
          <Route exact path='/AstroChamp_Frontend/home' element={<Home/>}></Route>
          <Route exact path='/AstroChamp_Frontend/events' element={<Events/>}></Route>
          <Route exact path='/AstroChamp_Frontend/team' element={<Team/>}></Route>
          <Route exact path='/AstroChamp_Frontend/contactus' element={<ContactUs/>}></Route>
          <Route exact path='/AstroChamp_Frontend/feedback' element={<Feedback/>}></Route>
      </Routes> 

    </Router>
    </AnimatePresence>
    </> 
  );
}

export default App;
