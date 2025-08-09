// src/modules/common/Register.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'renter'
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered:", formData);

    // Navigate based on selected role
    if (formData.role === 'admin') navigate('/admin');
    else if (formData.role === 'owner') navigate('/owner');
    else navigate('/renter');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label><br />
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        /><br />

        <label>Email</label><br />
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        /><br />

        <label>Password</label><br />
        <input
          type="password"
          name="password"
          required
          value={formData.password}
          onChange={handleChange}
          style={inputStyle}
        /><br />

        <label>Role</label><br />
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="renter">Renter</option>
          <option value="owner">Owner</option>
          <option value="admin">Admin</option>
        </select><br />

        <button type="submit" style={buttonStyle}>Register</button>
      </form>
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
  backgroundColor: '#2e7d32',
  color: '#fff',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '5px',
  width: '100%',
  fontSize: '16px',
  cursor: 'pointer'
};

export default Register;
