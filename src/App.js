// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Login from './pages/Login'; // Dummy or existing login component

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard currentPage={currentPage} setCurrentPage={setCurrentPage} />} />
        <Route path="/profile" element={<Profile currentPage={currentPage} setCurrentPage={setCurrentPage} />} />
      </Routes>
    </Router>
  );
}

export default App;
