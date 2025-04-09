// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and Routes
import Dashboard from './pages/Dashboard'; 
import LandingPage from './pages/LandingPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="//dashboard" element={<Dashboard />} /> {/* Use Dashboard as the root route */}
        {/* Add other routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;