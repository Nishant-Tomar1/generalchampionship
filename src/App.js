import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Team from './Pages/Team';
import Footer from './Components/Footer';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Events from './Pages/Events';
import Leaderboard from './Pages/Leaderboard.tsx';


function App() {
  return (
    <Router basename={"/"}>
      <Routefunction />
    </Router>
  )
}


function Routefunction() {
  const location = useLocation();

  return (

    <AnimatePresence mode=''>

      <Navbar />

      <Routes location={location} key={location.key}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path='/team' element={<Team />}></Route>
        <Route path='/events' element={<Events />}></Route>
        <Route path='/leaderboard' element={<Leaderboard />}></Route>

      </Routes>

      <Footer />
      

    </AnimatePresence>

  );
}

export default App;
