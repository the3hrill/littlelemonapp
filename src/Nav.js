import React, { useState } from 'react';
import navlogo from './assets/Logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscChromeClose } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <nav className="navbar">
      <div className="container">
        <span>
          <img src={navlogo} alt="navlogo" className="navlogo" />
        </span>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Menu">Menu</Link>
          </li>
          <li>
            <Link to="/Reservations">Reservations</Link>
          </li>
          <li>
            <Link to="/Order">Order</Link>
          </li>
          <li>
            <Link to="/LogIn">Log In</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <VscChromeClose className="icon" />
          ) : (
            <GiHamburgerMenu className="icon" />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
