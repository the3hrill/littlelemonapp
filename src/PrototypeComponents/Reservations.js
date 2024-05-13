/* import React from 'react';
import './Booking.js';
import { useState } from 'react';
import './Reservations.css';
import './SecondMain.js'; */

/* const Reservations = (props) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [people, setPeople] = useState('1');
  const [occasion, setOccasion] = useState(''); // Fixed typo in setOccasion function name

  return (
    <main className="form-main">
      <h1>Reservations</h1>
      <form className="form-res">
        <fieldset>
          <div>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={setDate}
              required
            />
          </div>
          <div>
            <label htmlFor="time">Time of Visit</label>
            <select
              id="time"
              name="time"
              value={time}
              onChange={setTime}
              required
            >
              <option value="">Select a Time</option>
              {time}
            </select>
          </div>
          <div>
            <label htmlFor="quantity">Number of People</label>
            <input
              type="number"
              id="people"
              name="people"
              min="1"
              max="10"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              name="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              required
            >
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
            </select>
          </div>
          <div>
            <input type="submit" className="reservebutton" value="Reserve" />
          </div>
        </fieldset>
      </form>
    </main>
  );
}; */

/* const Reservations = (props) => {
  const [date, setDate] = useState('');
  const [times, setTimes] = useState('');
  const [people, setPeople] = useState('1');
  const [occasion, setOccasion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.SubmitForm(e);
  };

  const handleChange = (e) => {
    setDate(e); */
/* if (typeof props.dispatch === 'function') {
      props.dispatch(e);
    } */
/*     props.dispatch(e.target.value);
  };

  return (
    <main className="form-main">
      <h1>Reservations</h1>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="book-date">Choose Date</label>
              <input
                id="book-date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                type="date"
                required
              />
            </div>

            <div>
              <label htmlFor="time">Time of Visit</label>
              <select
                id="time"
                value={times}
                onChange={(e) => setTimes(e.target.value)}
                required
              >
                <option value="">Select a Time</option> */
{
  /*                 <option>8.00</option>
                <option>9.00</option>
                <option>10.00</option>
                <option>11.00</option>
                <option>12.00</option>
                <option>13.00</option> */
}
{
  /* {props.availableTimes.map((time, index) => (
                  <option key={index}>{time}</option>
                ))} */
}
/*              {(availabletimes) => <option key={index}>{time}</option>}
              </select>
            </div>

            <div>
              <label htmlFor="number-guests">Number of People</label>
              <input
                type="number"
                id="people"
                name="people"
                min="1"
                max="10"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="occasion">Occasion</label>
              <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
              >
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
              </select>
            </div>

            <div>
              <input type="submit" className="reservebutton" value="Reserve" />
            </div>
          </fieldset>
        </form>
      </section>
    </main>
  );
};

export default Reservations; */
