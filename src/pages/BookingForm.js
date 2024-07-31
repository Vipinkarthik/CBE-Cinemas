import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const BookingForm = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [seats, setSeats] = useState(1);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/bookings`, { movieId: id, name, seats })
      .then(response => {
        history.push(`/confirmation/${response.data.bookingId}`);
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Book Tickets</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Seats:
          <input type="number" value={seats} onChange={(e) => setSeats(e.target.value)} min="1" required />
        </label>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
