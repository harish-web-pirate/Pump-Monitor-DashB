import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "./../../Assets/power.png";
import Google from "./../../Assets/google.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {showToast} from "./../../components/Toast/toast.jsx";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  // const [userData, setUserData] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!username.trim() || !password.trim()) {
      showToast("Empty Field!", "error");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost/pump_prj_mrch_6/backend/login.php?t=${Date.now()}`, 
        { username, password }
      );

      if (response.data.success) {
        showToast(response.data.message, "success");
        setTimeout(() => navigate("/dashboard"), 500);
      } else {
        showToast(response.data.message, "error");  
      }
    } catch (error) {
      showToast("Something went wrong. Please try again.", "error");
    }
  };
  
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md text-center">
      <ToastContainer />
        {/* Logo Image Centered */}
        <div className="flex justify-center">
          <img src={loginImage} alt="Login" className="w-16 h-16 mb-3" />
        </div>

        <h2 className="text-2xl font-semibold text-gray-800">
          Pump Monitoring Dashboard
        </h2>
        <p className="text-purple-600 text-lg font-medium">Hi, Welcome Back!</p>

        {/* Show error message if login fails */}
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        {/* Username Input */}
        <div className="mt-4 text-left relative">
          <label className="block text-base font-medium text-gray-700">Username</label>
          <FontAwesomeIcon icon={faUser} className="absolute left-3 top-2/3 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 pl-9 text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your username"
            required
          />
        </div>

        {/* Password Input */}
        <div className="mt-3 text-left relative">
          <label className="block text-base font-medium text-gray-700">Password</label>
          <FontAwesomeIcon icon={faLock} className="absolute left-3 top-2/3 transform -translate-y-1/2 text-gray-400" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 pl-9 text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-purple-600 text-white text-lg font-semibold py-2 rounded-md mt-4 hover:bg-purple-700 active:scale-95 transition"
        >
          Login
        </button>

        {/* OR Divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-gray-600 text-base font-medium">Or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Google Sign-in Button */}
        <div className="flex justify-center">
          <button className="flex items-center justify-center gap-2 border py-2 px-4 rounded-md text-lg font-semibold hover:bg-gray-100 active:scale-95 transition">
            <img src={Google} alt="Google" className="w-5 h-5" />
            <span className="text-gray-700">Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
