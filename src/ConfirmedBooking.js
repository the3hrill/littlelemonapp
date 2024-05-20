import React from 'react';
import './ConfirmedBooking.css';

function ConfirmedBooking() {
  return (
    <div className="confirm">
      <div>
        <h1 className="confirmBooked">
          Booking has been <span className="bookspan">Confirmed!</span>
        </h1>
      </div>
    </div>
  );
}

export default ConfirmedBooking;
