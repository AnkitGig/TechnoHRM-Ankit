// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Login from "./pages/Login"; // Dummy or existing login component
import Attendance from "./pages/Attendance"; // Assuming you have an Attendance component
import Leave from "./pages/Leave"; // Assuming you have a Leave component
import Payroll from "./pages/Payroll"; // Assuming you have a Payroll component
import CompnayPolicy from "./pages/CompnayPolicy"; // Assuming you have a CompanyPolicy component

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route
          path="/attendance"
          element={
            <Attendance
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route
          path="/leave"
          element={
            <Leave currentPage={currentPage} setCurrentPage={setCurrentPage} />
          }
        />
         <Route
          path="/payroll"
          element={
            <Payroll currentPage={currentPage} setCurrentPage={setCurrentPage} />
          }
        />
         <Route
          path="/company-policy"
          element={
            <CompnayPolicy currentPage={currentPage} setCurrentPage={setCurrentPage} />
          }
        />
      </Routes>
      
    </Router>
  );
}

export default App;
