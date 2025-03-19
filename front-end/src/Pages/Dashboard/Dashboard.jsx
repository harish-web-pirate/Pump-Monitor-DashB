import React from "react";
import SideBar from "./../SideBar/SideBar";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const pumps = [1, 2, 3];
  
  // Function to generate random value for parameters
  const getRandomValue = (max) => Math.floor(Math.random() * max);
  
  // Function to determine color based on value percentage
  const getStatusColor = (percentage) => {
    if (percentage < 33) return "#4CAF50"; // Green for low values (SAFE)
    if (percentage < 66) return "#FFC107"; // Yellow for medium values (WARNING)
    return "#F44336"; // Red for high values (DANGER)
  };
  
  // Parameter configurations with max values and units
  const electricalParams = [
    { name: "Running Frequency", maxValue: 60, unit: "Hz", showGauge: true },
    { name: "Output Torque", maxValue: 200, unit: "Newton meter", showGauge: true },
    { name: "Bus Voltage", maxValue: 600, unit: "V", showGauge: false },
    { name: "Output Voltage", maxValue: 480, unit: "V", showGauge: false },
    { name: "Output Current", maxValue: 100, unit: "A", showGauge: false },
    { name: "Output Power", maxValue: 1000, unit: "Watt", showGauge: false }
  ];

  // Separate running speed data
  const runningSpeed = {
    name: "Running Speed",
    maxValue: 3600,
    unit: "RPM"
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <SideBar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar - Original size */}
        <header className="bg-white shadow-sm p-3 flex justify-between items-center">
          <h1 className="text-xl font-semibold pl-4">Power Monitoring Dashboard</h1>
          <button className="bg-blue-600 text-white px-3 py-1.5 rounded-md">Export</button>
        </header>

        {/* Dashboard Content */}
        <main className="p-2.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1.5 overflow-auto">
          {pumps.map((pump) => (
            <div key={pump} className="bg-white shadow-sm rounded-lg p-2">
              <h2 className="text-lg font-semibold text-center text-blue-600">Pump {pump}</h2>

              {/* Cumulative Data */}
              <div className="mt-1.5 p-2 bg-blue-50 rounded-md">
                <h3 className="font-semibold text-sm">Cumulative Data</h3>
                <div className="mt-1 grid grid-cols-3 gap-1 text-center">
                  {[
                    { label: "Power-on", value: `${(Math.random() * 10000).toFixed(0)} h` },
                    { label: "Running", value: `${(Math.random() * 1000).toFixed(0)} h` },
                    { label: "Power Usage", value: `${(Math.random() * 100000).toFixed(0)} kWh`, highlight: true }
                  ].map(({ label, value, highlight }) => (
                    <div key={label} className="bg-white p-1.5 rounded-md shadow-sm flex flex-col">
                      <span className="text-xs text-gray-700">{label}</span>
                      <span className={`text-sm font-bold ${highlight ? "text-green-600" : ""}`}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Electrical Parameters with Gauges */}
              <div className="mt-1.5 p-2 bg-blue-50 rounded-md">
                <h3 className="font-semibold text-sm">Electrical Parameters</h3>
                <div className="grid grid-cols-2 gap-1 mt-1">
                  {electricalParams.map((param) => {
                    // Create random value for each parameter
                    const value = getRandomValue(param.maxValue);
                    const percentage = (value / param.maxValue) * 100;
                    const statusColor = getStatusColor(percentage);
                    
                    if (param.showGauge) {
                      // Display with gauge
                      return (
                        <div key={param.name} className="bg-white p-1 rounded-md shadow-sm">
                          <p className="text-xs font-medium text-gray-700">{param.name}:</p>
                          
                          {/* Gauge */}
                          <div className="flex flex-col items-center">
                            <div className="h-24 w-full">
                              <ResponsiveContainer width="100%" height="100%">
                                <RadialBarChart 
                                  cx="50%" 
                                  cy="60%" 
                                  innerRadius="60%" 
                                  outerRadius="90%" 
                                  barSize={10} 
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
                                    cornerRadius={8}
                                  />
                                  {/* Value inside gauge */}
                                  <text
                                    x="50%"
                                    y="55%"
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    fill={statusColor}
                                    fontSize="14"
                                    fontWeight="bold"
                                  >
                                    {value}
                                  </text>
                                </RadialBarChart>
                              </ResponsiveContainer>
                            </div>
                            
                            {/* Unit below gauge */}
                            <p className="text-xs text-gray-600 -mt-4">
                              {param.unit}
                            </p>
                          </div>
                        </div>
                      );
                    } else {
                      // Display as text box
                      return (
                        <div key={param.name} className="bg-white p-1 rounded-md shadow-sm">
                          <p className="text-xs font-medium text-gray-700">{param.name}:</p>
                          <div className="mt-1 flex items-center justify-center">
                            <div className="border border-gray-300 rounded p-1 bg-gray-50 w-full text-center">
                              <span className="text-sm font-bold" style={{ color: statusColor }}>
                                {value} <span className="text-xs font-normal text-gray-600">{param.unit}</span>
                              </span>
                            </div>
                          </div>
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
                    <div className="mt-1 col-span-2 bg-white p-1 rounded-md shadow-sm">
                      <p className="text-xs font-medium text-gray-700">{runningSpeed.name}:</p>
                      <div className="mt-1 flex items-center justify-center">
                        <div className="border border-gray-300 rounded p-1 bg-gray-50 w-full text-center">
                          <span className="text-sm font-bold" style={{ color: speedColor }}>
                            {speedValue} <span className="text-xs font-normal text-gray-600">{runningSpeed.unit}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Control & Feedback - Smaller boxes */}
              <div className="mt-1.5 p-2 bg-blue-50 rounded-md">
                <h3 className="font-semibold text-sm">Control & Feedback</h3>
                <div className="mt-1 grid grid-cols-4 gap-1">
                  {[
                    { label: "AI1", value: `${(Math.random() * 10).toFixed(1)} bar` },
                    { label: "AI2", value: `${(Math.random() * 10).toFixed(1)} bar` },
                    { label: "Set Pressure", value: `${(Math.random() * 10).toFixed(1)} bar` },
                    { label: "Feedback", value: `${(Math.random() * 10).toFixed(1)} bar` }
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-white p-0.5 rounded-md shadow-sm text-center">
                      <span className="text-xs text-gray-700">{label}</span>
                      <p className="text-blue-600 font-bold text-xs">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terminal States */}
              <div className="mt-1.5 p-2 bg-blue-50 rounded-md">
                <h3 className="font-semibold text-sm">Terminal States</h3>
                <div className="mt-1 grid grid-cols-2 gap-1">
                  <div className="bg-green-600 text-white p-1 rounded-md text-center text-xs">
                    Input: Active
                  </div>
                  <div className="bg-red-600 text-white p-1 rounded-md text-center text-xs">
                    Output: Inactive
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