import React from 'react';
import './Header.css';
import bruchetta from './assets/bruchetta.svg';

function Header() {
  return (
    <div className="main-heading">
      <div className="heading-container">
        <section class="one">
          <h1 className="header-h1">Little Lemon</h1>
          <h2 className="header-h2">Chicago</h2>
          <p className="header-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed.
          </p>
          <button className="reserve">Reserve Now</button>
        </section>
        <section className="two">
          <img src={bruchetta} alt="food" className="foodone" />
        </section>
      </div>
    </div>
  );
}

export default Header;
