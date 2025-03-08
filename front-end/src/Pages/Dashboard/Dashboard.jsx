import React from "react";
import SideBar from "./../SideBar/SideBar";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const pumps = [1, 2, 3];
  
  // Function to generate random value for parameters
  const getRandomValue = (max) => Math.floor(Math.random() * max);
  
  // Function to determine color based on value percentage
  // Now correctly assigns green to low values, yellow to medium, red to high
  const getStatusColor = (percentage) => {
    if (percentage < 33) return "#4CAF50"; // Green for low values (SAFE)
    if (percentage < 66) return "#FFC107"; // Yellow for medium values (WARNING)
    return "#F44336"; // Red for high values (DANGER)
  };
  
  // Parameter configurations with max values and units
  const electricalParams = [
    { name: "Running Frequency", maxValue: 60, unit: "Hz", showGauge: true },
    { name: "Bus Voltage", maxValue: 600, unit: "V", showGauge: true },
    { name: "Output Voltage", maxValue: 480, unit: "V", showGauge: true },
    { name: "Output Current", maxValue: 100, unit: "A", showGauge: true },
    { name: "Output Power", maxValue: 1000, unit: "Watt", showGauge: false },
    { name: "Output Torque", maxValue: 200, unit: "Newton meter", showGauge: false }
  ];

  // Separate running speed data
  const runningSpeed = {
    name: "Running Speed",
    maxValue: 3600,
    unit: "Rotation per minute"
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <SideBar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold pl-11">Power Monitoring Dashboard</h1>
          <button className="bg-blue-600 text-white px-3 py-2 rounded-md">Export</button>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pumps.map((pump) => (
            <div key={pump} className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-xl font-semibold text-center text-blue-600">Pump {pump}</h2>

              {/* Electrical Parameters with Gauges */}
              <div className="mt-4 p-3 bg-blue-100 rounded-md">
                <h3 className="font-semibold">Electrical Parameters</h3>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {electricalParams.map((param) => {
                    // Create random value for each parameter
                    const value = getRandomValue(param.maxValue);
                    const percentage = (value / param.maxValue) * 100;
                    const statusColor = getStatusColor(percentage);
                    
                    if (param.showGauge) {
                      // Display with gauge
                      return (
                        <div key={param.name} className="bg-white p-3 rounded-md shadow">
                          <p className="text-sm font-medium text-gray-700">{param.name}:</p>
                          
                          {/* Gauge for parameter with increased size */}
                          <div className="flex flex-col items-center">
                            <div className="h-36 w-full">
                              <ResponsiveContainer width="100%" height="100%">
                                <RadialBarChart 
                                  cx="50%" 
                                  cy="60%" 
                                  innerRadius="60%" 
                                  outerRadius="90%" 
                                  barSize={16} 
                                  data={[
                                    {
                                      name: param.name,
                                      value: percentage,
                                      fill: statusColor
                                    }
                                  ]}
                                  startAngle={180}
                                  endAngle={0}
                                >
                                  <RadialBar
                                    background={{ fill: "#f5f5f5" }}
                                    clockWise
                                    dataKey="value"
                                    cornerRadius={10}
                                  />
                                  {/* Value inside gauge */}
                                  <text
                                    x="50%"
                                    y="55%"
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    fill={statusColor}
                                    fontSize="18"
                                    fontWeight="bold"
                                  >
                                    {value}
                                  </text>
                                </RadialBarChart>
                              </ResponsiveContainer>
                            </div>
                            
                            {/* Unit below gauge */}
                            <p className="text-sm font-medium text-gray-600 -mt-6">
                              {param.unit}
                            </p>
                          </div>
                        </div>
                      );
                    } else {
                      // Display as text box (for Output Power, Output Torque)
                      return (
                        <div key={param.name} className="bg-white p-3 rounded-md shadow">
                          <p className="text-sm font-medium text-gray-700">{param.name}:</p>
                          <div className="mt-3 flex items-center justify-center">
                            <div className="border border-gray-300 rounded p-2 bg-gray-50 w-full text-center">
                              <span className="text-lg font-bold" style={{ color: statusColor }}>
                                {value} <span className="text-sm font-normal text-gray-600">{param.unit}</span>
                              </span>
                            </div>
                          </div>
                          <p className="text-xs text-gray-500 mt-2 text-center">Current Usage</p>
                        </div>
                      );
                    }
                  })}
                </div>

                {/* Full width Running Speed box */}
                {(() => {
                  const speedValue = getRandomValue(runningSpeed.maxValue);
                  const speedPercentage = (speedValue / runningSpeed.maxValue) * 100;
                  const speedColor = getStatusColor(speedPercentage);
                  
                  return (
                    <div className="mt-4 col-span-2 bg-white p-3 rounded-md shadow">
                      <p className="text-sm font-medium text-gray-700">{runningSpeed.name}:</p>
                      <div className="mt-3 flex items-center justify-center">
                        <div className="border border-gray-300 rounded p-3 bg-gray-50 w-full text-center">
                          <span className="text-xl font-bold" style={{ color: speedColor }}>
                            {speedValue} <span className="text-sm font-normal text-gray-600">{runningSpeed.unit}</span>
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-2 text-center">Current Usage</p>
                    </div>
                  );
                })()}

                {/* Add legend for color coding */}
                <div className="mt-4 bg-white p-2 rounded-md shadow">
                  <p className="text-xs font-medium text-gray-700 mb-2">Color Legend:</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
                      <span className="text-xs">Low (0-33%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-1"></div>
                      <span className="text-xs">Medium (33-66%)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
                      <span className="text-xs">High (66-100%)</span>
                    </div>
                  </div>
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