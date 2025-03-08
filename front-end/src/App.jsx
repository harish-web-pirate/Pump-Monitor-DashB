import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fontsource/poppins/400.css"; // Regular
import "@fontsource/poppins/500.css"; // Medium
import "@fontsource/poppins/600.css"; // Semi-Bold

import Login from "./Pages/Login/login";
import DashboardLayout from "./Pages/Dashboard/Dashboard";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/*" element={<DashboardLayout />} />
      </Routes>
    </Router>
    
  );
}
