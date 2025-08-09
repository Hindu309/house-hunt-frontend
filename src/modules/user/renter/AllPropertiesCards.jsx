import React from 'react';
import p1 from '../../../images/p1.jpg';
import p2 from '../../../images/p2.jpg';
import p3 from '../../../images/p3.jpg';
import p4 from '../../../images/p4.jpg';



const properties = [
  {
    id: 1,
    title: 'Urban Apartment',
    location: 'New York, NY',
    image: p1,
    price: '$1,200/mo',
  },
  {
    id: 2,
    title: 'Beachside Bungalow',
    location: 'Santa Monica, CA',
    image: p2,
    price: '$2,100/mo',
  },
  {
    id: 3,
    title: 'Family Home',
    location: 'Austin, TX',
    image: p3,
    price: '$1,800/mo',
  },
  {
    id: 4,
    title: 'Modern Condo',
    location: 'Seattle, WA',
    image: p4,
    price: '$1,500/mo',
  },
];

const AllPropertiesCards = () => {
  return (
    <div style={styles.grid}>
      {properties.map((property) => (
        <div key={property.id} style={styles.card}>
          <img src={property.image} alt={property.title} style={styles.image} />
          <div style={styles.content}>
            <h3>{property.title}</h3>
            <p>{property.location}</p>
            <strong>{property.price}</strong>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    padding: '2rem 0',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    transition: 'transform 0.2s',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
  },
  content: {
    padding: '1rem',
    textAlign: 'left',
  },
};

export default AllPropertiesCards;
