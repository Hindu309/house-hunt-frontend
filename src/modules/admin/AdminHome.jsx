
// src/modules/admin/AdminHome.jsx


import React from 'react';
import { Link } from 'react-router-dom';

const AdminHome = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>🏠 Admin Home</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><Link to="/admin/users">User List</Link></li>
        <li><Link to="/admin/properties">Property List</Link></li>
        <li><Link to="/admin/bookings">Booking List</Link></li>
      </ul>
    </div>
  );
};

export default AdminHome;





