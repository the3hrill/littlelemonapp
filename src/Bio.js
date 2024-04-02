import React from 'react';
import './Bio.css';
import biopicone from './assets/Mario and Adrian A.jpg';
import biopictwo from './assets/Mario and Adrian b.jpg';

function Bio() {
  return (
    <div className="bio-wrapper">
      <section className="bio-words">
        <h1 className="bio-name">Little Lemon</h1>
        <h2 className="bio-city">Chicago</h2>
        <p className="bio-par">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa id
          neque aliquam vestibulum morbi blandit cursus risus.
        </p>
      </section>
      <section className="bio-pictures">
        <img src={biopicone} alt="pic of owners" className="biopicone" />
        <img
          src={biopictwo}
          alt="another pic of owners"
          className="biopictwo"
        />
      </section>
    </div>
  );
}

export default Bio;
