import React from 'react';
//import './App.css';
import './Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
/* import Homepage from './Homepage.js';
import LogIn from './LogIn'; */
/* import Main from './Main.js';
import Header from './Header.js';
import Testimonials from './Testimonials.js';
import Bio from './Bio.js';
import Footer from './Footer.js';
import SecondMain from './SecondMain.js'; */
import Nav from './Nav.js';
import { Routes, Route } from 'react-router-dom';
import LogIn from './LogIn.js';
//import Reservations from './Reservations.js';
import Homepage from './Homepage.js';
import BookingForm from './BookingForm.js';
import ConfirmedBooking from './ConfirmedBooking.js';
import About from './About.js';

function App() {
  return (
    <div className="App">
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/About" element={<About />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/Reservations" element={<BookingForm />} />
          <Route path="/ConfirmedBooking" element={<ConfirmedBooking />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
