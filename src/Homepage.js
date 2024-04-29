import React from 'react';
import './Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js';
import Main from './Main.js';
import Testimonials from './Testimonials.js';
import Bio from './Bio.js';
import Footer from './Footer.js';
/* import { Nav } from 'react-bootstrap';
import SecondMain from './SecondMain.js'; */

function Homepage() {
  return (
    <>
      <Header />
      <Main />
      <Testimonials />
      <Bio />
      <Footer />
    </>
  );
}

export default Homepage;
