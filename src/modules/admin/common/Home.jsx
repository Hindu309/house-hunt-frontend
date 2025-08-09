// src/modules/common/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ padding: '30px', textAlign: 'center' }}>
      <h1>🏠 Welcome to HouseHunt</h1>
      <p>Find your perfect rental home or list your property with ease!</p>

      <div style={{ marginTop: '30px' }}>
        <Link to="/login">
          <button style={buttonStyle}>Login</button>
        </Link>
        <Link to="/register">
          <button style={buttonStyle}>Register</button>
        </Link>
      </div>
    </div>
  );
};

const buttonStyle = {
  backgroundColor: '#1976d2',
  color: '#fff',
  padding: '12px 20px',
  margin: '10px',
  border: 'none',
  borderRadius: '6px',
  fontSize: '16px',
  cursor: 'pointer'
};

export default Home;
