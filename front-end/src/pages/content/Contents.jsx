// import React from 'react';
// import "./Contents.css";

// function Contents() {
//   return (
//     <div className="dashboard">
//       {/* Left Panel - Pump Data */}
//       <div className="left">
//         <h2 className="title">Pump 1</h2>

//         {/* Electrical Parameters */}
//         <div className="box">
//           <div className="box-header red">Electrical Parameters</div>
//           <div className="gauges">
//             <div className="gauge green"> <h4 className="head-green">Running Frequency</h4> <p>295</p> <span>watts</span> </div>
//             <div className="gauge red"> <h4 className="head-red">Running Frequency</h4> <p>-35</p> <span>watts</span> </div>
//             <div className="gauge red"> <h4 className="head-red">Running Frequency</h4> <p>-35</p> <span>watts</span> </div>
//             <div className="gauge green"> <h4 className="head-green">Running Frequency</h4> <p>295</p> <span>watts</span> </div>
//             <div className="gauge green"> <h4 className="head-green">Running Frequency</h4> <p>295</p> <span>watts</span> </div>
//             <div className="gauge red"> <h4 className="head-red">Running Frequency</h4> <p>-35</p> <span>watts</span> </div>
//           </div>
//         </div>

//         {/* Cumulative Data */}
//         <div className="box">
//           <div className="box-header blue">Cumulative Data</div>
//           <div className="data"><p>Power-on Time</p> <span>1200.5 h</span></div>
//           <div className="data"><p>Running Time</p> <span>800.75 h</span></div>
//           <div className="data"><p>Power Consumption</p> <span className="green">25000.8 kWh</span></div>
//         </div>

//         {/* Control & Feedback */}
//         <div className="box">
//           <div className="box-header green">Control & Feedback</div>
//           <div className="controls">
//             <div className="control"></div>
//             <div className="control"></div>
//           </div>
//         </div>
//       </div>

//       {/* Middle & Right Panels */}
//       <div className="middle">
//         <h2 className="title">Pump 1</h2>

//         {/* Electrical Parameters */}
//         <div className="box">
//           <div className="box-header red">Electrical Parameters</div>
//           <div className="gauges">
//             <div className="gauge green"> <h4 className="head-green">Running Frequency</h4> <p>295</p> <span>watts</span> </div>
//             <div className="gauge red"> <h4 className="head-red">Running Frequency</h4> <p>-35</p> <span>watts</span> </div>
//             <div className="gauge red"> <h4 className="head-red">Running Frequency</h4> <p>-35</p> <span>watts</span> </div>
//             <div className="gauge green"> <h4 className="head-green">Running Frequency</h4> <p>295</p> <span>watts</span> </div>
//             <div className="gauge green"> <h4 className="head-green">Running Frequency</h4> <p>295</p> <span>watts</span> </div>
//             <div className="gauge red"> <h4 className="head-red">Running Frequency</h4> <p>-35</p> <span>watts</span> </div>
//           </div>
//         </div>

//         {/* Cumulative Data */}
//         <div className="box">
//           <div className="box-header blue">Cumulative Data</div>
//           <div className="data"><p>Power-on Time</p> <span>1200.5 h</span></div>
//           <div className="data"><p>Running Time</p> <span>800.75 h</span></div>
//           <div className="data"><p>Power Consumption</p> <span className="green">25000.8 kWh</span></div>
//         </div>

//         {/* Control & Feedback */}
//         <div className="box">
//           <div className="box-header green">Control & Feedback</div>
//           <div className="controls">
//             <div className="control"></div>
//             <div className="control"></div>
//           </div>
//         </div>
//       </div>
//       <div className="right">
//         <h2 className="title">Pump 1</h2>

//         {/* Electrical Parameters */}
//         <div className="box">
//           <div className="box-header red">Electrical Parameters</div>
//           <div className="gauges">
//             <div className="gauge green"> <h4 className="head-green">Running Frequency</h4> <p>295</p> <span>watts</span> </div>
//             <div className="gauge red"> <h4 className="head-red">Running Frequency</h4> <p>-35</p> <span>watts</span> </div>
//             <div className="gauge red"> <h4 className="head-red">Running Frequency</h4> <p>-35</p> <span>watts</span> </div>
//             <div className="gauge green"> <h4 className="head-green">Running Frequency</h4> <p>295</p> <span>watts</span> </div>
//             <div className="gauge green"> <h4 className="head-green">Running Frequency</h4> <p>295</p> <span>watts</span> </div>
//             <div className="gauge red"> <h4 className="head-red">Running Frequency</h4> <p>-35</p> <span>watts</span> </div>
//           </div>
//         </div>

//         {/* Cumulative Data */}
//         <div className="box">
//           <div className="box-header blue">Cumulative Data</div>
//           <div className="data"><p>Power-on Time</p> <span>1200.5 h</span></div>
//           <div className="data"><p>Running Time</p> <span>800.75 h</span></div>
//           <div className="data"><p>Power Consumption</p> <span className="green">25000.8 kWh</span></div>
//         </div>

//         {/* Control & Feedback */}
//         <div className="box">
//           <div className="box-header green">Control & Feedback</div>
//           <div className="controls">
//             <div className="control"></div>
//             <div className="control"></div>
//           </div>
//         </div>
//       </div>
//       </div>
//   );
// }

// export default Contents;






import React from 'react';
import "./Contents.css";

// Gauge Component
function Gauge({ type, title, value, unit }) {
  return (
    <div className={`gauge ${type}`}>
      <h4 className={`head-${type}`}>{title}</h4>
      <p>{value}</p>
      <span>{unit}</span>
    </div>
  );
}

// DataItem Component
function DataItem({ label, value, isGreen = false }) {
  return (
    <div className="data">
      <p>{label}</p>
      <span className={isGreen ? "green" : ""}>{value}</span>
    </div>
  );
}

// Panel Component
function PumpPanel({ title, pumpNumber }) {
  return (
    <div className="panel">
      <h2 className="title">{title}</h2>

      {/* Electrical Parameters */}
      <div className="box">
        <div className="box-header red">Electrical Parameters</div>
        <div className="gauges">
          <Gauge type="green" title="Running Frequency" value="295" unit="watts" />
          <Gauge type="red" title="Running Frequency" value="-35" unit="watts" />
          <Gauge type="red" title="Running Frequency" value="-35" unit="watts" />
          <Gauge type="green" title="Running Frequency" value="295" unit="watts" />
          <Gauge type="green" title="Running Frequency" value="295" unit="watts" />
          <Gauge type="red" title="Running Frequency" value="-35" unit="watts" />
        </div>
      </div>

      {/* Cumulative Data */}
      <div className="box">
        <div className="box-header blue">Cumulative Data</div>
        <div className="data-container">
          <DataItem label="Power-on Time" value="1200.5 h" />
          <DataItem label="Running Time" value="800.75 h" />
          <DataItem label="Power Consumption" value="25000.8 kWh" isGreen={true} />
        </div>
      </div>

      {/* Control & Feedback */}
      <div className="box">
        <div className="box-header green">Control & Feedback</div>
        <div className="controls">
          <div className="control"></div>
          <div className="control"></div>
        </div>
      </div>
    </div>
  );
}

function Contents() {
  // This could be dynamically generated from data if needed
  const pumps = [
    { id: 1, title: "Pump 1" },
    { id: 2, title: "Pump 2" },
    { id: 3, title: "Pump 3" }
  ];

  return (
    <div className="dashboard">
      {pumps.map(pump => (
        <PumpPanel key={pump.id} title={pump.title} pumpNumber={pump.id} />
      ))}
    </div>
  );
}

export default Contents;