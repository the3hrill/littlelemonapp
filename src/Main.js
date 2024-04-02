import React from 'react';
import './Main.css';
import greeksalad from './assets/greek salad.jpg';
import bruchetta from './assets/bruchetta.svg';
import lemondessert from './assets/lemon dessert.jpg';

function Main() {
  return (
    <div>
      <div className="special-container">
        <section className="specials-title">
          <h1 className="special-head">This Weeks Specials</h1>
          <button className="button-menu">On The Menu</button>
        </section>
        <section className="wrapper">
          <article className="highlight-specials">
            <img
              src={greeksalad}
              alt="food specials"
              className="highlights-image"
            />
            <div className="highlights-info">
              <header className="nameprice">
                <h1 className="nameprice-name">Greek Salad</h1>
                <h1 className="nameprice-price">$12.00</h1>
              </header>
              <p className="highlights-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <footer className="orderdelivery">Order Delivery</footer>
            </div>
          </article>
          <article className="highlight-specials">
            <img
              src={bruchetta}
              alt="food specials"
              className="highlights-image"
            />
            <div className="highlights-info">
              <header className="nameprice">
                <h1 className="nameprice-name">Greek Salad</h1>
                <h1 className="nameprice-price">$12.00</h1>
              </header>
              <p className="highlights-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <footer className="orderdelivery">Order Delivery</footer>
            </div>
          </article>
          <article className="highlight-specials">
            <img
              src={lemondessert}
              alt="food specials"
              className="highlights-image"
            />
            <div className="highlights-info">
              <header className="nameprice">
                <h1 className="nameprice-name">Greek Salad</h1>
                <h1 className="nameprice-price">$12.00</h1>
              </header>
              <p className="highlights-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </p>
              <footer className="orderdelivery">Order Delivery</footer>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

export default Main;
