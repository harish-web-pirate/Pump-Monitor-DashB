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
        className="fixed top-4 left-4 z-50 bg-white  p-2 rounded-full text-black "
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Container */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#53a0ff]  rounded-b-sm text-black transition-transform duration-200 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        o
      >
        <div className="p-5 pl-16 text-lg font-font  bg-white text-black rounded-t-sm shadow-sm">Dashboard Menu</div>
        <ul className="space-y-4 p-5 ">
          <li className="font-font p-2 hover:bg-white hover:text-black text-white rounded cursor-pointer hover:shadow-md focus:outline-none">Dashboard</li>
          <li className="font-font p-2 hover:bg-white hover:text-black text-white rounded cursor-pointer hover:shadow-md focus:outline-none">Reports</li>
          <li className="font-font  p-2 hover:bg-white hover:text-black text-white rounded cursor-pointer hover:shadow-md focus:outline-none">Analatics</li>
          
          {/* Logout Button - Redirect to Login Page */}
          <li
            className="p-2 hover:bg-white hover:text-black text-white rounded cursor-pointer hover:shadow-md focus:outline-none font-font "
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
