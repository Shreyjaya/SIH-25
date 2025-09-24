import React from 'react';
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip,
  LineChart, Line, ResponsiveContainer
} from 'recharts';


// Demo data
const donutData = [
  { name: "Safe", value: 50, color: "#22c55e" },
  { name: "Moderate Risk", value: 30, color: "#facc15" },
  { name: "Unsafe", value: 20, color: "#ef4444" },
];


const barData = [
  { site: "Site A", HPI: 22, HEI: 16 },
  { site: "Site B", HPI: 45, HEI: 31 },
  { site: "Site C", HPI: 29, HEI: 21 },
  { site: "Site D", HPI: 58, HEI: 38 },
];


const lineData = [
  { month: "Jan", Pb: 0.03, Cd: 0.028, Cr: 0.01, As: 0.012, Hg: 0.011 },
  { month: "Feb", Pb: 0.029, Cd: 0.027, Cr: 0.011, As: 0.013, Hg: 0.012 },
  { month: "Mar", Pb: 0.026, Cd: 0.024, Cr: 0.009, As: 0.009, Hg: 0.009 },
  { month: "Apr", Pb: 0.028, Cd: 0.025, Cr: 0.012, As: 0.015, Hg: 0.013 },
  { month: "May", Pb: 0.031, Cd: 0.029, Cr: 0.013, As: 0.015, Hg: 0.013 },
  { month: "Jun", Pb: 0.037, Cd: 0.033, Cr: 0.017, As: 0.01, Hg: 0.012 },
];


const Charts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Pie Chart */}
      <div className="rounded-2xl shadow bg-white overflow-hidden">
        <div className="bg-green-600 px-6 py-3 flex items-center">
          <span className="h-3 w-3 bg-white rounded-full mr-2"></span>
          <span className="font-bold text-lg text-white">Water Quality Classification</span>
        </div>
        <div className="flex flex-col items-center px-2 pt-4 pb-8">
          <PieChart width={340} height={280}>
            <Pie
              data={donutData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={90}
              outerRadius={140}
              paddingAngle={2}
              label
            >
              {donutData.map((entry, idx) => (
                <Cell key={`cell-${idx}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <div className="flex justify-center gap-8 text-sm mt-6">
            {donutData.map(({ name, color }) => (
              <span key={name} className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full" style={{ background: color }} />
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>


      {/* Bar Chart */}
      <div className="rounded-2xl shadow bg-white overflow-hidden">
        <div className="bg-purple-600 px-6 py-3 flex items-center">
          <span className="h-3 w-3 bg-white rounded-full mr-2"></span>
          <span className="font-bold text-lg text-white">Pollution Indices by Location</span>
        </div>
        <div className="flex items-center justify-center px-2 pt-4 pb-8 h-[380px]">
          <BarChart width={420} height={300} data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="site" />
            <YAxis />
            <Bar dataKey="HPI" fill="#a78bfa" name="HPI" barSize={30} />
            <Bar dataKey="HEI" fill="#06b6d4" name="HEI" barSize={30} />
            <Tooltip />
            <Legend />
          </BarChart>
        </div>
      </div>


      {/* Line Chart */}
      <div className="rounded-2xl shadow bg-white overflow-hidden col-span-full">
        <div className="bg-blue-600 px-6 py-3 flex items-center">
          <span className="h-3 w-3 bg-white rounded-full mr-2"></span>
          <span className="font-bold text-lg text-white">Heavy Metal Concentration Trends</span>
        </div>
        <div className="flex items-center justify-center px-2 pt-4 pb-12 h-80">
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={lineData}>
              <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Line type="monotone" dataKey="Pb" stroke="#3b82f6" name="Pb" strokeWidth={3} />
              <Line type="monotone" dataKey="Cd" stroke="#22c55e" name="Cd" strokeWidth={3} />
              <Line type="monotone" dataKey="Cr" stroke="#ef4444" name="Cr" strokeWidth={3} />
              <Line type="monotone" dataKey="As" stroke="#eab308" name="As" strokeWidth={3} />
              <Line type="monotone" dataKey="Hg" stroke="#a78bfa" name="Hg" strokeWidth={3} />
              <Tooltip />
              <Legend />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};


export default Charts;


