import React from 'react';
import AllProperties from './AllPropertiesCards';

const RenterHome = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Welcome to HouseHunt</h1>
        <p>Explore rental properties and find your next home.</p>
      </header>

      <main style={styles.main}>
        <AllProperties />
      </main>

      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} HouseHunt. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    padding: '2rem',
    backgroundColor: '#1e88e5',
    color: '#fff',
    textAlign: 'center',
  },
  main: {
    padding: '2rem',
  },
  footer: {
    padding: '1rem',
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    fontSize: '0.9rem',
  },
};

export default RenterHome;
