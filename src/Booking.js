import React, { useReducer } from 'react';
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
