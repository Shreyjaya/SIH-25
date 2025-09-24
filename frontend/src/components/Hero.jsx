// import React from 'react';

// // Droplet SVG icon
// const DropletIcon = ({ className }) => (
//   <svg className={className} viewBox="0 0 24 24" fill="none" width={20} height={20}>
//     <path d="M12 2C12 2 7 10.5 7 14.5a5 5 0 1010 .01C17 10.5 12 2 12 2z" stroke="#166534" strokeWidth="2" fill="none"/>
//   </svg>
// );

// const Hero = ({ setCurrentPage }) => {
//   return (
//     <section className="bg-gray-50 text-black py-24">
//       <div className="container mx-auto px-4 text-center">
//         {/* Pill badge */}
//         <div className="mb-6">
//           <span className="bg-gray-900 text-white text-sm font-semibold px-4 py-1 rounded-full">Environmental Monitoring System</span>
//         </div>
//         {/* Main heading */}
//         <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-0">
//           Groundwater Heavy Metal
//         </h1>
//         <h2 className="text-5xl sm:text-6xl font-extrabold text-green-700 mb-6">
//           Pollution Analysis
//         </h2>
//         {/* Subtitle */}
//         <p className="text-gray-600 text-xl max-w-2xl mx-auto mb-12">
//           Advanced monitoring and analysis system for detecting heavy metal contamination in groundwater. Protect communities with real-time data and comprehensive reporting.
//         </p>
//         {/* Action buttons */}
//         <div className="flex flex-col sm:flex-row justify-center gap-4">
//           <button
//             onClick={() => setCurrentPage('upload')}
//             className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white text-lg font-semibold px-8 py-3 rounded"
//           >
//             <DropletIcon className="h-5 w-5" />
//             Get Started
//           </button>
//           <button
//             onClick={() => setCurrentPage('citizen')}
//             className="flex items-center gap-2 bg-white border border-gray-400 text-gray-800 text-lg font-semibold px-8 py-3 rounded hover:bg-gray-100"
//           >
//             <DropletIcon className="h-5 w-5" />
//             Citizen Portal
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;




import React from "react";
import { motion } from "framer-motion";

// Droplet SVG icon
const DropletIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    width={20}
    height={20}
  >
    <path
      d="M12 2C12 2 7 10.5 7 14.5a5 5 0 1010 .01C17 10.5 12 2 12 2z"
      stroke="#166534"
      strokeWidth="2"
      fill="url(#waterGradient)"
    />
    <defs>
      <linearGradient id="waterGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#22c55e" /> {/* green */}
        <stop offset="100%" stopColor="#0d9488" /> {/* teal */}
      </linearGradient>
    </defs>
  </svg>
);

const Hero = ({ setCurrentPage }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-green-50 to-white text-black py-24">
      {/* Decorative background with water waves */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full h-40 text-green-700"
        >
          <path
            fill="currentColor"
            d="M0,160L60,186.7C120,213,240,267,360,261.3C480,256,600,192,720,149.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Pill badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="bg-gray-900 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-lg shadow-gray-400/40">
            Environmental Monitoring System
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-0 drop-shadow-xl"
        >
          Groundwater Heavy Metal
        </motion.h1>
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl font-extrabold text-green-700 mb-6 drop-shadow-lg"
        >
          Pollution Analysis
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-gray-600 text-xl max-w-2xl mx-auto mb-12"
        >
          Advanced monitoring and analysis system for detecting heavy metal
          contamination in groundwater. Protect communities with real-time data
          and comprehensive reporting.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button
            onClick={() => setCurrentPage("upload")}
            className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white text-lg font-semibold px-8 py-3 rounded-xl shadow-xl shadow-green-700/30 hover:scale-105 transition-transform"
          >
            <DropletIcon className="h-5 w-5" />
            Get Started
          </button>
          <button
            onClick={() => setCurrentPage("citizen")}
            className="flex items-center gap-2 bg-white border border-gray-300 text-gray-800 text-lg font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-gray-100 hover:scale-105 transition-transform"
          >
            <DropletIcon className="h-5 w-5" />
            Citizen Portal
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
