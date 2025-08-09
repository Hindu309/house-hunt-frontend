// src/modules/common/ForgetPassword.jsx

import React, { useState } from 'react';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, send a reset link via backend
    console.log("Reset password link sent to:", email);
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Forgot Password</h2>
      {submitted ? (
        <p>A password reset link has been sent to <b>{email}</b>.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Enter your email:</label><br />
          <input
            type="email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '8px', width: '100%', margin: '10px 0' }}
          />
          <button type="submit" style={{
            backgroundColor: '#1976d2',
            color: '#fff',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%'
          }}>
            Send Reset Link
          </button>
        </form>
      )}
    </div>
  );
};

export default ForgetPassword;
