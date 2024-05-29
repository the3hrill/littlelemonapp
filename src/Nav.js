import React, { useState } from 'react';
import navlogo from './assets/Logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscChromeClose } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="container">
        <span>
          <img src={navlogo} alt="navlogo" className="navlogo" />
        </span>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <Link to="/" onClick={closeMobileMenu} className="links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" onClick={closeMobileMenu} className="links">
              About
            </Link>
          </li>
          <li>
            <Link to="/Menu" onClick={closeMobileMenu} className="links">
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="/Reservations"
              onClick={closeMobileMenu}
              className="links"
            >
              Reservations
            </Link>
          </li>
          <li>
            <Link to="/Order" onClick={closeMobileMenu} className="links">
              Order
            </Link>
          </li>
          <li>
            <Link to="/LogIn" onClick={closeMobileMenu} className="links">
              Log In
            </Link>
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
