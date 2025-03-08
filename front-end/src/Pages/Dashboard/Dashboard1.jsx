import React, { useState } from "react";
import SideBar from "./../SideBar/SideBar";
import { Menu } from "lucide-react";

const Dashboard = () => {
  const pumps = [1, 2, 3];
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <SideBar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              className="text-gray-700 md:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu size={24} />
            </button>
            <h1 className="text-xl font-semibold">Power Monitoring Dashboard</h1>
          </div>
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-3 py-2 rounded-md">Export</button>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pumps.map((pump) => (
            <div key={pump} className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-xl font-semibold text-center text-blue-600">Pump {pump}</h2>

              {/* Electrical Parameters */}
              <div className="mt-4 p-4 bg-blue-100 rounded-md">
                <h3 className="font-semibold">Electrical Parameters</h3>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  {["Output Power", "Output Torque"].map((param) => (
                    <div key={param} className="bg-white p-3 rounded-md shadow">
                      <p className="text-sm font-medium text-gray-700">{param}:</p>
                    </div>
                  ))}
                  {["Running Frequency", "Bus Voltage", "Output Voltage", "Output Current"].map((param, index) => (
                    <div key={index} className={`p-3 rounded-md shadow ${index % 2 === 0 ? "bg-green-100" : "bg-red-100"}`}>
                      <p className="text-sm font-medium text-gray-700">{param}:</p>
                      <p className="text-xl font-bold text-center">295 watts</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cumulative Data */}
              <div className="mt-4 p-4 bg-blue-100 rounded-md">
                <h3 className="font-semibold">Cumulative Data</h3>
                <div className="mt-2 space-y-2">
                  {[
                    { label: "Power-on Time", value: "1200.5 h" },
                    { label: "Running Time", value: "800.75 h" },
                    { label: "Power Consumption", value: "25000.8 kWh", highlight: true }
                  ].map(({ label, value, highlight }) => (
                    <div key={label} className="bg-white p-2 rounded-md shadow flex justify-between">
                      <span>{label}</span> 
                      <span className={`font-bold ${highlight ? "text-green-600" : ""}`}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Control & Feedback */}
              <div className="mt-4 p-4 bg-blue-100 rounded-md">
                <h3 className="font-semibold">Control & Feedback</h3>
                <div className="mt-2 flex justify-between">
                  {[
                    { label: "AI1 Value", value: "3.6 v" },
                    { label: "AI2 Value", value: "4.2 v" }
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-white p-2 rounded-md shadow w-full text-center">
                      <span className="text-sm">{label}</span>
                      <p className="font-bold">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-2 flex justify-between">
                  {["Setting Pressure", "Feedback Pressure"].map((label) => (
                    <div key={label} className="bg-white p-2 rounded-md shadow w-full text-center">
                      <span className="text-sm">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terminal States */}
              <div className="mt-4 p-4 bg-blue-100 rounded-md">
                <h3 className="font-semibold">Terminal States</h3>
                <div className="mt-2 space-y-2">
                  <div className="bg-blue-600 text-white p-2 rounded-md shadow text-center">
                    Terminal Input State <span className="bg-green-500 px-2 py-1 rounded-md ml-2">Active</span>
                  </div>
                  <div className="bg-blue-600 text-white p-2 rounded-md shadow text-center">
                    Terminal Output State <span className="bg-red-500 px-2 py-1 rounded-md ml-2">Inactive</span>
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
