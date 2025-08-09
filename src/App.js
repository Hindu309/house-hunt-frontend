import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RenterHome from './modules/user/renter/RenterHome';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<RenterHome />} />
          {/* Add more routes below as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
