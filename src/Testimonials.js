import React from 'react';
import './Testimonials.css';
import profilepic from './assets/profilepic.svg';

function Testimonials() {
  return (
    <div className="testimonial-head">
      <div className="testimonial-container">
        <header className="testimonial-title">
          <h1>Testimonials</h1>
        </header>
        <section className="customer-reviews">
          <article>
            <div className="review-wrapper">
              <p className="rate-name">name</p>
              <div className="picandrating">
                <img src={profilepic} alt="face" className="face-picture" />
                <p>rating</p>
              </div>
              <p>review</p>
            </div>
          </article>
          <article>
            <div className="review-wrapper">
              <p>name</p>
              <div className="picandrating">
                <img src={profilepic} alt="face" className="face-picture" />
                <p>rating</p>
              </div>
              <p>review</p>
            </div>
          </article>
          <article>
            <div className=" review-wrapper">
              <p>name</p>
              <div className="picandrating">
                <img src={profilepic} alt="face" className="face-picture" />
                <p>rating</p>
              </div>
              <p>review</p>
            </div>
          </article>
          <article>
            <div className=" review-wrapper">
              <p>name</p>
              <div className="picandrating">
                <img src={profilepic} alt="face" className="face-picture" />
                <p>rating</p>
              </div>
              <p>review</p>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
export default Testimonials;
