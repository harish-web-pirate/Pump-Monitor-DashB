import React from "react";
import SideBar from "./../SideBar/SideBar";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const pumps = [1, 2, 3];
  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <SideBar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold pl-11">Power Monitoring Dashboard</h1>
          <button className="bg-blue-600 text-white px-3 py-2 rounded-md">User</button>
          
        </header>

        {/* Dashboard Content */}
        <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pumps.map((pump) => (
            <div key={pump} className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-xl font-semibold text-center text-blue-600">Pump {pump}</h2>

              {/* Electrical Parameters */}
              <div className="mt-4 p-3 bg-blue-100 rounded-md">
                <h3 className="font-semibold">Electrical Parameters</h3>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {[
                    "Running Frequency",
                    "Bus Voltage",
                    "Output Voltage",
                    "Output Current",
                    "Output Power",
                    "Output Torque"
                  ].map((param) => (
                    <div key={param} className="bg-white p-3 rounded-md shadow">
                      <p className="text-sm font-medium text-gray-700">{param}:</p>
                      <p className="text-xl font-bold text-green-600">
                        {param === "Running Speed" ? "1500 RPM" : `${(Math.random() * 1000).toFixed(0)} watts`}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cumulative Data */}
              <div className="mt-4 p-3 bg-blue-100 rounded-md">
                <h3 className="font-semibold">Cumulative Data</h3>
                <div className="mt-2 space-y-2">
                  {[
                    { label: "Power-on Time", value: `${(Math.random() * 10000).toFixed(1)} h` },
                    { label: "Running Time", value: `${(Math.random() * 1000).toFixed(1)} h` },
                    { label: "Power Consumption", value: `${(Math.random() * 100000).toFixed(1)} kWh`, highlight: true }
                  ].map(({ label, value, highlight }) => (
                    <div key={label} className="bg-white p-2 rounded-md shadow flex justify-between">
                      <span>{label}</span>
                      <span className={`font-bold ${highlight ? "text-green-600" : ""}`}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Control & Feedback */}
              <div className="mt-4 p-4 bg-blue-100 rounded-md shadow-md">
                <h3 className="font-semibold text-gray-700">Control & Feedback</h3>
                <div className="mt-2 grid grid-cols-2 gap-4">
                  {[
                    { label: "AI1 Value", value: `${(Math.random() * 10).toFixed(1)} bar` },
                    { label: "AI2 Value", value: `${(Math.random() * 10).toFixed(1)} bar` },
                    { label: "Setting Pressure", value: `${(Math.random() * 10).toFixed(2)} bar` },
                    { label: "Feedback Pressure", value: `${(Math.random() * 10).toFixed(2)} bar` }
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-white p-4 rounded-md shadow-md text-center">
                      <span className="text-gray-700 font-medium">{label}</span>
                      <p className="text-blue-600 font-bold text-lg">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terminal States */}
              <div className="mt-4 p-3 bg-blue-100 rounded-md">
                <h3 className="font-semibold">Terminal States</h3>
                <div className="mt-2 space-y-2">
                  <div className="bg-green-600 text-white p-2 rounded-md shadow text-center">
                    Terminal Input State: Active
                  </div>
                  <div className="bg-red-600 text-white p-2 rounded-md shadow text-center">
                    Terminal Output State: Inactive

                  </div>
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
