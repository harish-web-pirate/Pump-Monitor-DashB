import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faUser,faLock } from '@fortawesome/free-solid-svg-icons'; 



const Login = () => {
  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-gray-100 to-gray-200 h-screen px-4">
      <div className="flex flex-col space-y-6 bg-white p-10 rounded-2xl shadow-xl w-[510px] max-w-full hover:shadow-2xl transition duration-300">
        
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
          Pump-Monitor
        </h2>

      
        <div className='relative'>
        <FontAwesomeIcon icon={faUser}  className='absolute left-4 top-1/3'/>
          <input
            placeholder="Enter your username"
            type="text"
            name="username"
            id="username"
            maxLength={100}
            minLength={6}
            required
            className="border-2 pl-10 rounded-md p-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 hover:border-purple-500 hover:shadow-md transition duration-200 placeholder-gray-600"
          />
        </div>

      
        <div className='relative'>
        <FontAwesomeIcon icon={faLock} className='absolute left-4 top-1/3'/>
          <input
            placeholder="Enter your password"
            type="password"
            name="password"
            id="password"
            maxLength={100}
            minLength={6}
            required
            className="border-2 pl-10 rounded-md p-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 hover:border-purple-500 hover:shadow-md transition duration-200 placeholder-gray-600"
          />
        </div>

        
        <button
          name="submit"
          type="submit"
          className="bg-purple-700 text-white rounded-xl py-4 px-6 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 hover:bg-purple-900 hover:shadow-lg transition duration-300 font-semibold"
        >
          Login
        </button>

  
        <div className="relative flex items-center">
          <div className="w-full border-t border-gray-300"></div>
          <span className="bg-white px-3 text-gray-500 text-sm font-medium absolute left-1/2 transform -translate-x-1/2">
            OR
          </span>
        </div>

       
        <button
          className="bg-gray-200 text-black py-4 px-6 w-full rounded-xl  hover:shadow-md transition duration-300 flex items-center justify-center font-semibold"
        >
          <FontAwesomeIcon icon={faGoogle} className='  mr-2 text-lg'/>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
