import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Confirmation = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    axios.get(`/api/bookings/${id}`)
      .then(response => setBooking(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!booking) return <div>Loading...</div>;

  return (
    <div>
      <h1>Booking Confirmation</h1>
      <p>Booking ID: {booking.id}</p>
      <p>Name: {booking.name}</p>
      <p>Seats: {booking.seats}</p>
      <p>Movie: {booking.movieTitle}</p>
    </div>
  );
};

export default Confirmation;
