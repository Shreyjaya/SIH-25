import React from "react";
import { ExclamationTriangleIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";

const heavyMetals = [
  { metal: "Lead (Pb)", effect: "Neurological damage" },
  { metal: "Mercury (Hg)", effect: "Brain and kidney damage" },
  { metal: "Arsenic (As)", effect: "Cancer and skin lesions" },
  { metal: "Cadmium (Cd)", effect: "Kidney and bone damage" },
];

const protections = [
  "Regular water quality testing",
  "WHO guideline compliance",
  "Early contamination detection",
  "Community health monitoring",
];

const ContaminationRisks = () => (
  <section className="py-20 bg-gradient-to-br from-red-50 via-white to-green-50 min-h-screen flex items-center justify-center">
    <div className="max-w-6xl w-full mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-red-100 rounded-full p-3">
            <ExclamationTriangleIcon className="h-10 w-10 text-red-500" />
          </div>
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3">
          Heavy Metal Contamination Risks
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Understanding the serious health implications of heavy metals in drinking water
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Heavy Metals Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-red-100 p-8 hover:shadow-xl transition">
          <h3 className="text-2xl font-bold text-red-700 mb-6 flex items-center gap-2">
            <ExclamationTriangleIcon className="h-7 w-7 text-red-600" />
            Common Heavy Metals
          </h3>
          <ul className="space-y-4">
            {heavyMetals.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 bg-red-50 rounded-lg px-4 py-3"
              >
                <span className="mt-1">
                  <svg
                    className="h-3 w-3 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 8 8"
                  >
                    <circle cx="4" cy="4" r="4" />
                  </svg>
                </span>
                <span>
                  <span className="font-semibold text-gray-900">
                    {item.metal}
                  </span>
                  <span className="text-gray-700 ml-2">- {item.effect}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Protections Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-green-100 p-8 hover:shadow-xl transition">
          <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-2">
            <ShieldCheckIcon className="h-7 w-7 text-green-600" />
            Health Protection
          </h3>
          <ul className="space-y-4">
            {protections.map((protection, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 bg-green-50 rounded-lg px-4 py-3"
              >
                <span className="mt-1">
                  <svg
                    className="h-5 w-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-gray-800">{protection}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ContaminationRisks;


// import React from 'react';
// import { ExclamationTriangleIcon } from '@heroicons/react/24/solid'; // Make sure Heroicons is installed

// const heavyMetals = [
//   { metal: 'Lead (Pb)', effect: 'Neurological damage' },
//   { metal: 'Mercury (Hg)', effect: 'Brain and kidney damage' },
//   { metal: 'Arsenic (As)', effect: 'Cancer and skin lesions' },
//   { metal: 'Cadmium (Cd)', effect: 'Kidney and bone damage' },
// ];

// const protections = [
//   'Regular water quality testing',
//   'WHO guideline compliance',
//   'Early contamination detection',
//   'Community health monitoring',
// ];

// const ContaminationRisks = () => (
//   <section className="py-16 bg-red-50 min-h-screen flex items-center justify-center">
//     <div className="bg-white border border-red-200 rounded-2xl shadow p-12 max-w-6xl w-full mx-auto">
//       <div className="flex flex-col items-center mb-4">
//         <div className="bg-red-100 rounded-full p-3 mb-3">
//           <ExclamationTriangleIcon className="h-8 w-8 text-red-400" />
//         </div>
//         <h2 className="text-3xl font-bold text-center mb-2">Heavy Metal Contamination Risks</h2>
//         <p className="text-gray-500 text-center mb-8 max-w-2xl">
//           Understanding the serious health implications of heavy metals in drinking water
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Common Heavy Metals */}
//         <div>
//           <h3 className="text-xl font-bold text-red-700 mb-4">Common Heavy Metals</h3>
//           <ul>
//             {heavyMetals.map((item, idx) => (
//               <li key={idx} className="flex items-start mb-2">
//                 <span className="mt-1 mr-2">
//                   <svg className="h-3 w-3 text-red-600" fill="currentColor" viewBox="0 0 8 8">
//                     <circle cx="4" cy="4" r="4" />
//                   </svg>
//                 </span>
//                 <span>
//                   <span className="font-semibold">{item.metal}</span>
//                   <span className="text-gray-700 ml-1">- {item.effect}</span>
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Health Protection */}
//         <div>
//           <h3 className="text-xl font-bold text-green-700 mb-4">Health Protection</h3>
//           <ul>
//             {protections.map((protection, idx) => (
//               <li key={idx} className="flex items-start mb-2">
//                 <span className="mt-1 mr-2">
//                   <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//                   </svg>
//                 </span>
//                 <span className="text-gray-700">{protection}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// export default ContaminationRisks;
