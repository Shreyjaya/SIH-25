// import React from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip as PieTooltip,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Legend,
//   Tooltip,
//   LineChart,
//   Line,
//   ResponsiveContainer,
// } from "recharts";

// // Demo data
// const donutData = [
//   { name: "Safe", value: 50, color: "#22c55e" },
//   { name: "Moderate Risk", value: 30, color: "#facc15" },
//   { name: "Unsafe", value: 20, color: "#ef4444" },
// ];
// const barData = [
//   { site: "Site A", HPI: 22, HEI: 16 },
//   { site: "Site B", HPI: 45, HEI: 31 },
//   { site: "Site C", HPI: 29, HEI: 21 },
//   { site: "Site D", HPI: 58, HEI: 38 },
// ];
// const lineData = [
//   { month: "Jan", Pb: 0.03, Cd: 0.028, Cr: 0.01, As: 0.012, Hg: 0.011 },
//   { month: "Feb", Pb: 0.029, Cd: 0.027, Cr: 0.011, As: 0.013, Hg: 0.012 },
//   { month: "Mar", Pb: 0.026, Cd: 0.024, Cr: 0.009, As: 0.009, Hg: 0.009 },
//   { month: "Apr", Pb: 0.028, Cd: 0.025, Cr: 0.012, As: 0.015, Hg: 0.013 },
//   { month: "May", Pb: 0.031, Cd: 0.029, Cr: 0.013, As: 0.015, Hg: 0.013 },
//   { month: "Jun", Pb: 0.037, Cd: 0.033, Cr: 0.017, As: 0.01, Hg: 0.012 },
// ];
// const sampleRows = [
//   {
//     id: "WS001",
//     site: "Site A",
//     date: "2024-01-15",
//     Pb: "0.050",
//     Cd: "0.003",
//     Cr: "0.020",
//     As: "0.008",
//     Hg: "0.0010",
//     Ni: "0.015",
//     HPI: "25.4",
//     HEI: "18.2",
//     classification: "Safe",
//   },
//   {
//     id: "WS002",
//     site: "Site B",
//     date: "2024-01-16",
//     Pb: "0.120",
//     Cd: "0.008",
//     Cr: "0.045",
//     As: "0.015",
//     Hg: "0.0020",
//     Ni: "0.032",
//     HPI: "58.7",
//     HEI: "42.3",
//     classification: "Unsafe",
//   },
//   {
//     id: "WS003",
//     site: "Site C",
//     date: "2024-01-17",
//     Pb: "0.080",
//     Cd: "0.005",
//     Cr: "0.028",
//     As: "0.012",
//     Hg: "0.0015",
//     Ni: "0.021",
//     HPI: "35.2",
//     HEI: "26.8",
//     classification: "Moderate Risk",
//   },
//   {
//     id: "WS004",
//     site: "Site A",
//     date: "2024-01-18",
//     Pb: "0.040",
//     Cd: "0.002",
//     Cr: "0.018",
//     As: "0.006",
//     Hg: "0.0008",
//     Ni: "0.012",
//     HPI: "22.1",
//     HEI: "15.7",
//     classification: "Safe",
//   },
//   {
//     id: "WS005",
//     site: "Site D",
//     date: "2024-01-19",
//     Pb: "0.150",
//     Cd: "0.009",
//     Cr: "0.052",
//     As: "0.018",
//     Hg: "0.0025",
//     Ni: "0.038",
//     HPI: "68.9",
//     HEI: "51.2",
//     classification: "Unsafe",
//   },
// ];

// function ClassificationBadge({ classification }) {
//   let style = "bg-gray-100 text-gray-800";
//   if (classification === "Safe") style = "bg-green-100 text-green-800";
//   else if (classification === "Unsafe") style = "bg-red-100 text-red-700";
//   else if (classification === "Moderate Risk")
//     style = "bg-yellow-100 text-yellow-800";
//   return (
//     <span className={`px-3 py-1 rounded text-xs font-medium ${style}`}>
//       {classification}
//     </span>
//   );
// }

// const stats = [
//   {
//     label: "Total Samples",
//     value: "1,247",
//     sub: "+12% from last month",
//     color: "from-blue-600 to-blue-400",
//   },
//   {
//     label: "Safe Samples",
//     value: "561",
//     sub: "45% of total samples",
//     color: "from-green-600 to-green-400",
//   },
//   {
//     label: "At Risk Samples",
//     value: "436",
//     sub: "35% moderate risk",
//     color: "from-orange-500 to-yellow-400",
//   },
//   {
//     label: "Average HPI",
//     value: "42.3",
//     sub: "-5.2% from last month",
//     color: "from-purple-500 to-purple-400",
//   },
// ];

// const Dashboard = () => (
//   <div className="bg-gray-50 min-h-screen pb-8">
//     <div className="max-w-7xl mx-auto px-4">
//       {/* Dashboard title */}
//       <div className="mt-6 mb-8 rounded-2xl p-8 bg-gradient-to-r from-green-700 to-blue-600 text-white shadow">
//         <h1 className="text-3xl sm:text-4xl font-extrabold">
//           Analytics Dashboard
//         </h1>
//         <p className="mt-2 text-lg text-white/90">
//           Comprehensive analysis of heavy metal pollution indices and water
//           quality assessments across monitoring sites
//         </p>
//       </div>
//       {/* Stat cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-9">
//         {stats.map((stat, i) => (
//           <div
//             key={i}
//             className={`rounded-xl p-6 shadow bg-gradient-to-br ${stat.color} flex flex-col justify-between`}
//           >
//             <div className="flex items-center justify-between mb-2 text-white">
//               <span className="font-semibold">{stat.label}</span>
//             </div>
//             <div className="text-3xl font-extrabold text-white">
//               {stat.value}
//             </div>
//             <div className="mt-2 text-sm text-white/90">{stat.sub}</div>
//           </div>
//         ))}
//       </div>
//       {/* Filters and search */}
//       <div className="rounded-2xl shadow-md bg-white p-8 mb-8 border border-gray-100">
//         {/* Title */}
//         <div className="flex items-center gap-3 mb-6 font-bold text-xl text-gray-800">
//           <svg
//             className="h-7 w-7 text-green-600"
//             viewBox="0 0 24 24"
//             fill="none"
//           >
//             <path
//               d="M4 6h16M8 10h8M10 14h4"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//             />
//           </svg>
//           Filters & Search
//         </div>

//         {/* Search Input */}
//         <div className="mb-6">
//           <label
//             htmlFor="sample-id"
//             className="block text-base font-semibold text-gray-700 mb-2"
//           >
//             🔍 Search Sample ID
//           </label>
//           <input
//             id="sample-id"
//             type="text"
//             placeholder="Enter sample ID..."
//             className="w-full border border-gray-300 rounded-full px-4 py-2 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-green-400 focus:outline-none shadow-sm"
//           />
//         </div>

//         {/* Filters */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           <select className="w-full border border-gray-300 rounded-full px-4 py-2 shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none">
//             <option>All Metals</option>
//             <option>Lead</option>
//             <option>Mercury</option>
//             <option>Arsenic</option>
//           </select>

//           <select className="w-full border border-gray-300 rounded-full px-4 py-2 shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none">
//             <option>All Locations</option>
//             <option>Site A</option>
//             <option>Site B</option>
//           </select>

//           <select className="w-full border border-gray-300 rounded-full px-4 py-2 shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none">
//             <option>All Time</option>
//             <option>Last Week</option>
//             <option>Last Month</option>
//           </select>

//           <select className="w-full border border-gray-300 rounded-full px-4 py-2 shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none">
//             <option>All Classifications</option>
//             <option>Safe</option>
//             <option>Moderate Risk</option>
//             <option>Unsafe</option>
//           </select>
//         </div>

//         {/* Clear Filters Button */}
//         <div className="flex justify-end mt-6">
//           <button className="flex items-center gap-2 border border-gray-300 px-5 py-2 rounded-full hover:bg-red-50 hover:text-red-600 transition shadow-sm">
//             <span className="text-lg">&times;</span> Clear Filters
//           </button>
//         </div>
//       </div>

//       {/* Charts row */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//         {/* Larger Donut Chart */}
//         <div className="rounded-2xl shadow bg-white overflow-hidden">
//           <div className="bg-green-600 px-6 py-3 flex items-center">
//             <span className="h-3 w-3 bg-white rounded-full mr-2"></span>
//             <span className="font-bold text-lg text-white">
//               Water Quality Classification
//             </span>
//           </div>
//           <div className="flex flex-col items-center px-2 pt-4 pb-8">
//             <PieChart width={340} height={280}>
//               <Pie
//                 data={donutData}
//                 dataKey="value"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 innerRadius={90}
//                 outerRadius={140}
//                 paddingAngle={2}
//                 label
//               >
//                 {donutData.map((entry, idx) => (
//                   <Cell key={`cell-${idx}`} fill={entry.color} />
//                 ))}
//               </Pie>
//               <PieTooltip />
//             </PieChart>
//             <div className="flex justify-center gap-8 text-sm mt-6">
//               {donutData.map(({ name, color }) => (
//                 <span key={name} className="flex items-center gap-2">
//                   <span
//                     className={`h-3 w-3 rounded-full`}
//                     style={{ background: color }}
//                   />
//                   {name}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//         {/* Larger Bar Chart */}
//         <div className="rounded-2xl shadow bg-white overflow-hidden">
//           <div className="bg-purple-600 px-6 py-3 flex items-center">
//             <span className="h-3 w-3 bg-white rounded-full mr-2"></span>
//             <span className="font-bold text-lg text-white">
//               Pollution Indices by Location
//             </span>
//           </div>
//           <div className="flex items-center justify-center px-2 pt-4 pb-8 h-[380px]">
//             <BarChart width={420} height={300} data={barData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="site" />
//               <YAxis />
//               <Bar dataKey="HPI" fill="#a78bfa" name="HPI" barSize={30} />
//               <Bar dataKey="HEI" fill="#06b6d4" name="HEI" barSize={30} />
//               <Tooltip />
//               <Legend />
//             </BarChart>
//           </div>
//         </div>
//       </div>
//       {/* Line Chart */}
//       <div className="rounded-2xl shadow bg-white overflow-hidden mb-8">
//         <div className="bg-blue-600 px-6 py-3 flex items-center">
//           <span className="h-3 w-3 bg-white rounded-full mr-2"></span>
//           <span className="font-bold text-lg text-white">
//             Heavy Metal Concentration Trends
//           </span>
//         </div>
//         <div className="flex items-center justify-center px-2 pt-4 pb-12 h-80">
//           <ResponsiveContainer width="100%" height={280}>
//             <LineChart data={lineData}>
//               <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
//               <XAxis dataKey="month" />
//               <YAxis />
//               <Line
//                 type="monotone"
//                 dataKey="Pb"
//                 stroke="#3b82f6"
//                 name="Pb"
//                 strokeWidth={3}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="Cd"
//                 stroke="#22c55e"
//                 name="Cd"
//                 strokeWidth={3}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="Cr"
//                 stroke="#ef4444"
//                 name="Cr"
//                 strokeWidth={3}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="As"
//                 stroke="#eab308"
//                 name="As"
//                 strokeWidth={3}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="Hg"
//                 stroke="#a78bfa"
//                 name="Hg"
//                 strokeWidth={3}
//               />
//               <Tooltip />
//               <Legend />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//       {/* Analysis Table */}
//       <div className="rounded-2xl shadow bg-white p-6 border border-gray-100">
//         <div className="flex items-center justify-between mb-3">
//           <div>
//             <div className="text-lg font-bold text-gray-800">
//               Analysis Results
//             </div>
//             <div className="text-gray-500 text-sm">
//               Computed HPI and HEI values with safety classifications (5
//               samples)
//             </div>
//           </div>
//           <button className="border border-gray-300 bg-white hover:bg-gray-50 px-4 py-2 rounded-lg flex items-center gap-2 text-gray-700 text-sm font-semibold">
//             <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
//               <path
//                 d="M6 10v4a2 2 0 002 2h4a2 2 0 002-2v-4M4 8l6 6 6-6"
//                 stroke="#444"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//             Export
//           </button>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="min-w-full text-sm text-gray-800 border-separate [border-spacing:0]">
//             <thead>
//               <tr className="border-b">
//                 <th className="text-left py-2 pr-2 font-semibold">Sample ID</th>
//                 <th className="text-left py-2 pr-2 font-semibold">Location</th>
//                 <th className="text-left py-2 pr-2 font-semibold">Date</th>
//                 <th className="text-left py-2 pr-2 font-semibold">Pb (mg/L)</th>
//                 <th className="text-left py-2 pr-2 font-semibold">Cd (mg/L)</th>
//                 <th className="text-left py-2 pr-2 font-semibold">Cr (mg/L)</th>
//                 <th className="text-left py-2 pr-2 font-semibold">As (mg/L)</th>
//                 <th className="text-left py-2 pr-2 font-semibold">Hg (mg/L)</th>
//                 <th className="text-left py-2 pr-2 font-semibold">Ni (mg/L)</th>
//                 <th className="text-left py-2 pr-2 font-semibold">HPI</th>
//                 <th className="text-left py-2 pr-2 font-semibold">HEI</th>
//                 <th className="text-left py-2 pr-2 font-semibold">
//                   Classification
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {sampleRows.map((row) => (
//                 <tr key={row.id} className="border-b hover:bg-gray-50">
//                   <td className="py-2 pr-2 font-semibold">{row.id}</td>
//                   <td className="py-2 pr-2">{row.site}</td>
//                   <td className="py-2 pr-2">{row.date}</td>
//                   <td className="py-2 pr-2">{row.Pb}</td>
//                   <td className="py-2 pr-2">{row.Cd}</td>
//                   <td className="py-2 pr-2">{row.Cr}</td>
//                   <td className="py-2 pr-2">{row.As}</td>
//                   <td className="py-2 pr-2">{row.Hg}</td>
//                   <td className="py-2 pr-2">{row.Ni}</td>
//                   <td className="py-2 pr-2 font-semibold">{row.HPI}</td>
//                   <td className="py-2 pr-2 font-semibold">{row.HEI}</td>
//                   <td className="py-2 pr-2">
//                     <ClassificationBadge classification={row.classification} />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// export default Dashboard;



import React from "react";
import StatsOverview from "../components/StatsOverview";
import Filters from "../components/Filters";
import Charts from "../components/Charts";
import AnalysisTable from "../components/AnalysisTable";


const Dashboard = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Dashboard title */}
        <div className="mt-6 mb-8 rounded-2xl p-8 bg-gradient-to-r from-green-700 to-blue-600 text-white shadow">
          <h1 className="text-3xl sm:text-4xl font-extrabold">Analytics Dashboard</h1>
          <p className="mt-2 text-lg text-white/90">
            Comprehensive analysis of heavy metal pollution indices and water quality assessments across monitoring sites
          </p>
        </div>


        {/* ✅ Stats Overview Section */}
        <StatsOverview />


        {/* ✅ Filters Section */}
        <Filters />


        {/* ✅ Charts Section */}
        <Charts />


        {/* ✅ Analysis Table */}
        <AnalysisTable />
      </div>
    </div>
      );
};


export default Dashboard;