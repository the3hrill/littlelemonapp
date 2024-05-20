/* import React from 'react';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { Form, ErrorMessage } from 'formik';
import { submitAPI } from '../BookingApi';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'; */

/* const BookingForm = ({ dispatch, availableTimes, ...props }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      guests: 1,
      occasion: 'birthday',
      time: availableTimes.times[0],
      date: new Date().toLocaleDateString('en-CA'),
    },
    onSubmit: (values) => {
      const response = submitAPI(values);

      if (response) {
        // eslint-disable-next-line no-undef
        localStorage.setItem('Bookings', JSON.stringify(values));
        navigate('/confirmation');
        // console.log(values);
      }
    },
    validationSchema: Yup.object({
      date: Yup.date().required('Date is required'),
      time: Yup.string()
        .oneOf(availableTimes.time)
        .required('Time is required'),
      occasion: Yup.string()
        .oneOf(['birthday', 'engagement', 'anniversary'])
        .required('Occasion is required'),
      guests: Yup.number()
        .min(1, 'Must be at least 1')
        .max(10, 'Must be at most 10')
        .required('Number of guests is required'),
    }),
  });

  useEffect(() => {
    dispatch({ type: 'UPDATE_TIMES', date: new Date(formik.values.date) });
  }, [formik.values.date]);

  return (
    <div {...props} id="menu">
      <h1>Book Now</h1>

      <Form onSubmit={formik.handleSubmit} noValidate>
        <label htmlFor="res-date">Choose Date</label>
        <input type="date" id="res-date" {...formik.getFieldProps('date')} />
        <ErrorMessage name="date" component="div">
          {formik.touched.date && formik.errors.date}
        </ErrorMessage>
        <label htmlFor="time">Time of Visit</label>
        <select>
          {availableTimes.times.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
        <ErrorMessage name="time" component="div">
          {formik.touched.time && formik.errors.time}
        </ErrorMessage>
        <label htmlFor="number-guests">Number of People</label>
        <input
          min="1"
          max="10"
          placeholder="1"
          type="number"
          id="number-guests"
          {...formik.getFieldProps('guests')}
        />
        <ErrorMessage name="guests" component="div">
          {formik.touched.guests && formik.errors.guests}
        </ErrorMessage>
        <select>
          <label htmlFor="occasion">Occasion</label>
          <option value="birthday">Birthday</option>
          <option value="engagement">Engagement</option>
          <option value="anniversary">Anniversary</option>
        </select>
        <ErrorMessage name="occasion" component="div">
          {formik.touched.occasion && formik.errors.occasion}
        </ErrorMessage>
      </Form>
    </div>
  );
};
 */

/* import React from 'react';
import * as Yup from 'yup';
import { useEffect } from 'react';
import { Form, ErrorMessage } from 'formik';
import { submitAPI } from './BookingApi';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import './Booking';

const BookingForm = ({ dispatch, availableTimes, ...props }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      guests: 1,
      occasion: 'birthday',
      time: availableTimes.time[0],
      date: new Date().toLocaleDateString('en-CA'),
    },
    onSubmit: (values) => {
      const response = submitAPI(values);

      if (response) {
        // eslint-disable-next-line no-undef
        localStorage.setItem('Bookings', JSON.stringify(values));
        navigate('/confirmation');
        // console.log(values);
      }
    },
    validationSchema: Yup.object({
      date: Yup.date().required('Date is required'),
      time: Yup.string()
        .oneOf(availableTimes.time)
        .required('Time is required'),
      occasion: Yup.string()
        .oneOf(['birthday', 'engagement', 'anniversary'])
        .required('Occasion is required'),
      guests: Yup.number()
        .min(1, 'Must be at least 1')
        .max(10, 'Must be at most 10')
        .required('Number of guests is required'),
    }),
  });

  useEffect(() => {
    dispatch({ type: 'UPDATE_TIMES', date: new Date(formik.values.date) });
  }, [formik.values.date, dispatch]);

  return (
    <div {...props} id="menu">
      <h1>Book Now</h1>

      <Form onSubmit={formik.handleSubmit} noValidate>
        <label htmlFor="res-date">Choose Date</label>
        <input type="date" id="res-date" {...formik.getFieldProps('date')} />
        <ErrorMessage name="date" component="div">
          {formik.touched.date && formik.errors.date}
        </ErrorMessage>
        <label htmlFor="time">Time of Visit</label>
        {availableTimes.time.map((time) => (
          <option key={time}>{time}</option>
        ))}
        <ErrorMessage name="time" component="div">
          {formik.touched.time && formik.errors.time}
        </ErrorMessage>
        <label htmlFor="number-guests">Number of People</label>
        <input
          min="1"
          max="10"
          placeholder="1"
          type="number"
          id="number-guests"
          {...formik.getFieldProps('guests')}
        />
        <ErrorMessage name="guests" component="div">
          {formik.touched.guests && formik.errors.guests}
        </ErrorMessage>
        <label htmlFor="occasion">Occasion</label>
        <option value="birthday">Birthday</option>
        <option value="engagement">Engagement</option>
        <option value="anniversary">Anniversary</option>
        <ErrorMessage name="occasion" component="div">
          {formik.touched.occasion && formik.errors.occasion}
        </ErrorMessage>
      </Form>
    </div>
  );
};

export default BookingForm; */

import React, { useState, useEffect } from 'react';
import { fetchAPI, submitAPI } from './BookingApi';
import './BookingForm.css';
//import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState(1);
  const [times, setTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0]
  );
  const [occasion, setOccasion] = useState('birthday');
  const [formData, setFormData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    setTimes(fetchAPI(new Date(selectedDate)));
  }, [selectedDate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData({ date: selectedDate, time: selectedTime });
    if (submitAPI(formData)) {
      //alert('Reservation submitted successfully!');
      navigate('/ConfirmedBooking');
    } else {
      alert('Failed to submit reservation.');
    }
  };

  return (
    <main className="form-main">
      <form className="form-res" onSubmit={handleSubmit}>
        <h1>Book Now</h1>
        <fieldset>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="guests">Number of Guests:</label>
            <input
              id="guests"
              type="number"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="date">Date:</label>
            <input
              id="date"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="time">Select a time:</label>
            <select
              id="time"
              value={selectedTime}
              onChange={(e) => {
                setSelectedTime(e.target.value);
                setFormData({ ...formData, time: e.target.value });
              }}
            >
              {times.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="occasion">Occasion:</label>
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              required
            >
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="engagement">Engagement</option>
            </select>
          </div>
          <div>
            <button type="submit" className="subbutton">
              Submit Reservation
            </button>
          </div>
        </fieldset>
      </form>
    </main>
  );
};
export default BookingForm;
