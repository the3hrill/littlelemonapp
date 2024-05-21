import React from 'react';
import restaurantpic from './assets/restaurantpic2.jpg';
import './About.css';

function About() {
  return (
    <>
      <div>
        <section className="aboutimg">
          <img
            src={restaurantpic}
            alt="restaurantpic"
            className="restaurantpic"
          />
        </section>
        <section className="aboutsec">
          <h2 className="abouttitle">Our Story</h2>
          <p className="aboutp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
      </div>
    </>
  );
}

export default About;
