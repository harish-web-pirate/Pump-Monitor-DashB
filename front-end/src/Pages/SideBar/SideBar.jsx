import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // ✅ Initialize navigation

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        className="fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Container */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="p-6 pl-16 text-lg font-bold">Dashboard Menu</div>
        <ul className="space-y-4 p-5">
          <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Dashboard</li>
          <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Reports</li>
          <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Analatics</li>
          
          {/* Logout Button - Redirect to Login Page */}
          <li
            className="p-2 hover:bg-red-600 rounded cursor-pointer"
            onClick={() => navigate("/")} // ✅ Redirects to Login Page
          >
            Logout
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
