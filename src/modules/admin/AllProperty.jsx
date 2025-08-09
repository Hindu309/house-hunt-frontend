// src/modules/admin/AllProperty.jsx

import React from 'react';

const properties = [
  {
    id: 1,
    title: '2BHK Flat - Gachibowli',
    location: 'Hyderabad',
    owner: 'Ravi Kumar',
    price: '₹14,500/month',
    status: 'Available'
  },
  {
    id: 2,
    title: '3BHK Villa - HSR Layout',
    location: 'Bangalore',
    owner: 'Meena Singh',
    price: '₹22,000/month',
    status: 'Booked'
  }
];

const AllProperty = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>All Properties</h2>
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Location</th>
            <th>Owner</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property.id}>
              <td>{property.id}</td>
              <td>{property.title}</td>
              <td>{property.location}</td>
              <td>{property.owner}</td>
              <td>{property.price}</td>
              <td>{property.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProperty;
