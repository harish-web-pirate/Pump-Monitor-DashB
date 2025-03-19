import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/montserrat/400.css"; // Specific weight
import "@fontsource/montserrat/700.css"; // Bold weight


// import Login from "./Pages/Login/login";
import DashboardLayout from "./Pages/Dashboard/Dashboard";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/*" element={<DashboardLayout />} />
      </Routes>
    </Router>
    
  );
}
