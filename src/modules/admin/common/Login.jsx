// src/modules/common/Login.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy role logic (you can replace with real backend check)
    if (email === 'admin@househunt.com') {
      navigate('/admin');
    } else if (email.includes('owner')) {
      navigate('/owner');
    } else {
      navigate('/renter');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Email</label><br />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        /><br />

        <label>Password</label><br />
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        /><br />

        <button type="submit" style={buttonStyle}>Login</button>
      </form>

      <p style={{ marginTop: '10px' }}>
        <a href="/forgot-password">Forgot Password?</a>
      </p>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '10px 0',
  borderRadius: '4px',
  border: '1px solid #ccc'
};

const buttonStyle = {
  backgroundColor: '#1976d2',
  color: '#fff',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '5px',
  width: '100%',
  fontSize: '16px',
  cursor: 'pointer'
};

export default Login;
