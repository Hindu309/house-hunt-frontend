// src/modules/admin/AllBooking.jsx

import React from 'react';

const bookings = [
  {
    id: 1,
    renter: 'Sita Patel',
    property: '2BHK Flat - Hyderabad',
    owner: 'Ravi Kumar',
    date: '2025-06-25',
    status: 'Confirmed'
  },
  {
    id: 2,
    renter: 'Ajay Reddy',
    property: '3BHK Villa - Bangalore',
    owner: 'Meena Singh',
    date: '2025-06-22',
    status: 'Pending'
  }
];

const AllBooking = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>All Bookings</h2>
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Renter</th>
            <th>Property</th>
            <th>Owner</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.renter}</td>
              <td>{booking.property}</td>
              <td>{booking.owner}</td>
              <td>{booking.date}</td>
              <td>{booking.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBooking;
