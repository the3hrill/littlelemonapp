/* import React, { useReducer } from 'react';
import Reservations from './Reservations.js';
import { fetchAPI } from './BookingApi.js';

function Booking() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <Reservations availableTimes={availableTimes} updateTimes={dispatch} />
  );
}

export default Booking;
 */
/* import React from 'react';
import Reservations from './Reservations';

const Booking = (props) => {
  return (
    <Reservations
      availableTimes={props.availableTimes}
      dispatch={props.dispatch}
      SubmitForm={props.SubmitForm}
    />
  );
};

export default Booking; */

/* import React from 'react';
import { useReducer } from 'react';
import BookingForm from './BookingForm';
import { updatedTimes, initializeTimes } from './BookingApi';

const Booking = () => {
  const [availableTimes, dispatch] = useReducer(
    updatedTimes,
    initializeTimes()
  );

  return (
    <div>
      <BookingForm dispatch={dispatch} availableTimes={availableTimes} />
    </div>
  );
};

export default Booking; */

/* import React, { useState, useEffect } from 'react';
import { fetchAPI } from './BookingApi';
import BookingForm from './BookingForm';

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0]
  );
  const [times, setTimes] = useState([]);

  async function updateTimes(date) {
    const newTimes = await fetchAPI(new Date(date));
    setTimes(newTimes);
  }

  useEffect(() => {
    updateTimes(selectedDate);
  }, [selectedDate]);

  return (
    <BookingForm
      times={times}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
      updateTimes={updateTimes}
    />
  );
};

export default Booking;
 */
