import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Events from './Components/Events';
import Team from './Components/Team';
import ContactUs from './Components/ContactUs';
// import Register from './Components/Register';
import { AnimatePresence } from 'framer-motion';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <AnimatePresence mode='wait'>
    <Router>

      <Navbar />
  
      <Routes>
          <Route exact path='' element={<Home/>}></Route>
          <Route exact path='home' element={<Home/>}></Route>
          <Route exact path='events' element={<Events/>}></Route>
          <Route exact path='team' element={<Team/>}></Route>
          <Route exact path='contactus' element={<ContactUs/>}></Route>
          {/* <Route exact path='register' element={<Register/>}></Route> */}
      </Routes> 

    </Router>
    </AnimatePresence>
    </> 
  );
}

export default App;
