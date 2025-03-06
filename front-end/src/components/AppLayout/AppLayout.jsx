import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../../Pages/login_page/Login';
import DashboardLayoutBasic from '../../Pages/DashBoard/DashboardLayout';

function AppLayout() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardLayoutBasic />} />
      </Routes>
    </Router>
  );
}

export default AppLayout;
