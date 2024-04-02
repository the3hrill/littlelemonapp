import React from 'react';
import footerlogo from './assets/Logof.svg';
import './Footer.css';

function Footer() {
  return (
    <div className="footerbody-wrapper">
      <div className="footer-main">
        <section className="footpic">
          <img src={footerlogo} alt="footer logo" className="footerlogo" />
        </section>
        <section className="footer-links">
          <article className="links-container">
            <h1 className="links-name">Document Navigation</h1>
            <div className="link-list">
              <p>Home</p>
              <p>About</p>
              <p>Menu</p>
              <p>Reservations</p>
              <p>Order Online</p>
              <p>Log In</p>
            </div>
          </article>
          <article className="links-container">
            <h1 className="links-name">Contact</h1>
            <div className="link-list">
              <p>Address</p>
              <p>Phone Number</p>
              <p>Email</p>
            </div>
          </article>
          <article className="links-container">
            <h1 className="links-name">Social</h1>
            <div className="link-list">
              <p>Address</p>
              <p>Phone Number</p>
              <p>Email</p>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

export default Footer;
