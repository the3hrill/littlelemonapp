/* import React, { useReducer } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Header';
import Booking from './Booking';

const SecondMain = () => {
  const initialState = { availableTimes: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTimes, initialState);

  function updateTimes(state, date) {
    return { availableTimes: fetchAPI(new Date(date)) };
  }

  const navigate = useNavigate();
  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate('/confirmed');
    }
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/Booking"
          element={
            <Booking
              availableTimes={state}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
      </Routes>
    </>
  );
};

export default SecondMain;
 */

/* import React from 'react';
import { useState } from 'react';
import Reservations from './Reservations'; */
//import { c } from 'tar';

/* function SecondMain() {
  const [availableTimes, setAvailableTimes] = useState([
    '8:00',
    '9:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
  ]);

  console.log(availableTimes);

  return <Reservations availableTimes={availableTimes} />;
}

export default SecondMain;
 */
/* import React from 'react';
import { useReducer } from 'react';

const SecondMain = () => {
  const updateTimes = (state, date) => {
    return { availableTimes };
  };

  const initializeTimes = (date) => {
    return { availableTimes };
  };

  availableTimes = useReducer(updateTimes, initializeTimes);
  return <div>SecondMain</div>;
};

export default SecondMain; */
