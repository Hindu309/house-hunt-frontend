// src/modules/admin/AllUser.jsx

import React from 'react';

const users = [
  {
    id: 1,
    name: 'Ravi Kumar',
    email: 'ravi@gmail.com',
    role: 'Owner',
    status: 'Active'
  },
  {
    id: 2,
    name: 'Sita Patel',
    email: 'sita@gmail.com',
    role: 'Renter',
    status: 'Active'
  },
  {
    id: 3,
    name: 'Admin User',
    email: 'admin@househunt.com',
    role: 'Admin',
    status: 'Active'
  }
];

const AllUser = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>All Users</h2>
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUser;
