// import React from "react";

// // Reuse your iconMap
// const iconMap = [
//   // Droplet
//   (
//     <span className="bg-green-100 p-3 rounded-xl shadow-sm">
//       <svg viewBox="0 0 24 24" className="h-7 w-7 text-green-700" fill="none">
//         <path
//           d="M12 2C12 2 7 10.5 7 14.5a5 5 0 1010 .01C17 10.5 12 2 12 2z"
//           stroke="#166534"
//           strokeWidth="2"
//           fill="none"
//         />
//       </svg>
//     </span>
//   ),
//   // File/Document
//   (
//     <span className="bg-green-100 p-3 rounded-xl shadow-sm">
//       <svg viewBox="0 0 24 24" className="h-7 w-7 text-green-700" fill="none">
//         <rect
//           x="6"
//           y="3"
//           width="12"
//           height="18"
//           rx="2"
//           stroke="#166534"
//           strokeWidth="2"
//         />
//         <path
//           d="M9 7h6M9 11h6M9 15h6"
//           stroke="#166534"
//           strokeWidth="2"
//           strokeLinecap="round"
//         />
//       </svg>
//     </span>
//   ),
//   // Chart/Bar
//   (
//     <span className="bg-green-100 p-3 rounded-xl shadow-sm">
//       <svg viewBox="0 0 24 24" className="h-7 w-7 text-green-700" fill="none">
//         <rect
//           x="4"
//           y="10"
//           width="3"
//           height="8"
//           rx="1.5"
//           stroke="#166534"
//           strokeWidth="2"
//         />
//         <rect
//           x="10.5"
//           y="6"
//           width="3"
//           height="12"
//           rx="1.5"
//           stroke="#166534"
//           strokeWidth="2"
//         />
//         <rect
//           x="17"
//           y="13"
//           width="3"
//           height="5"
//           rx="1.5"
//           stroke="#166534"
//           strokeWidth="2"
//         />
//       </svg>
//     </span>
//   ),
//   // User/group
//   (
//     <span className="bg-green-100 p-3 rounded-xl shadow-sm">
//       <svg viewBox="0 0 24 24" className="h-7 w-7 text-green-700" fill="none">
//         <circle cx="12" cy="10" r="4" stroke="#166534" strokeWidth="2" />
//         <path
//           d="M4 20c0-3.314 3.134-6 7-6s7 2.686 7 6"
//           stroke="#166534"
//           strokeWidth="2"
//         />
//       </svg>
//     </span>
//   ),
//   // Map
//   (
//     <span className="bg-green-100 p-3 rounded-xl shadow-sm">
//       <svg viewBox="0 0 24 24" className="h-7 w-7 text-green-700" fill="none">
//         <rect
//           x="3"
//           y="6"
//           width="7"
//           height="13"
//           rx="2"
//           stroke="#166534"
//           strokeWidth="2"
//         />
//         <rect
//           x="14"
//           y="3"
//           width="7"
//           height="16"
//           rx="2"
//           stroke="#166534"
//           strokeWidth="2"
//         />
//       </svg>
//     </span>
//   ),
//   // Shield
//   (
//     <span className="bg-green-100 p-3 rounded-xl shadow-sm">
//       <svg viewBox="0 0 24 24" className="h-7 w-7 text-green-700" fill="none">
//         <path
//           d="M12 3l7 4v5c0 5.25-3.996 9.705-7 11-3.004-1.295-7-5.75-7-11V7l7-4z"
//           stroke="#166534"
//           strokeWidth="2"
//           fill="none"
//         />
//       </svg>
//     </span>
//   ),
// ];

// const features = [
//   {
//     title: "Data Upload & Processing",
//     description:
//       "Upload CSV/Excel datasets and automatically compute HPI and HEI indices with instant validation",
//   },
//   {
//     title: "Comprehensive Reports",
//     description:
//       "Generate detailed PDF and Excel reports with WHO guideline comparisons and recommendations",
//   },
//   {
//     title: "Interactive Dashboard",
//     description:
//       "Visualize trends with advanced charts, filter by location and time, search specific samples",
//   },
//   {
//     title: "Citizen Access",
//     description:
//       "Simple interface for communities to check local water quality with clear safety indicators",
//   },
//   {
//     title: "Geographic Mapping",
//     description:
//       "Interactive maps with color-coded safety indicators and detailed sample information popups",
//   },
//   {
//     title: "Role-Based Security",
//     description:
//       "Secure access controls for researchers, administrators, and citizens with appropriate data permissions",
//   },
// ];

// const PlatformFeatures = () => (
//   <section className="py-20 bg-gradient-to-b from-green-50 via-white to-green-50">
//     <div className="container mx-auto px-4">
//       <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-4">
//         Comprehensive Analysis Platform
//       </h2>
//       <p className="text-lg text-center text-gray-600 mb-14 max-w-3xl mx-auto">
//         Advanced tools for researchers, environmental agencies, and communities
//         to monitor and analyze heavy metal pollution
//       </p>
//       <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className="rounded-2xl border border-gray-200 bg-white/90 backdrop-blur-sm shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col items-start gap-4"
//           >
//             {iconMap[index]}
//             <h3 className="text-xl font-bold text-gray-900">
//               {feature.title}
//             </h3>
//             <p className="text-gray-700 text-base">{feature.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default PlatformFeatures;


// // import React from 'react';

// // // Icon map
// // const iconMap = [
// //   // Droplet
// //   (
// //     <span className="bg-green-100 p-3 rounded-lg">
// //       <svg viewBox="0 0 24 24" className="h-7 w-7 text-green-700" fill="none">
// //         <path d="M12 2C12 2 7 10.5 7 14.5a5 5 0 1010 .01C17 10.5 12 2 12 2z" stroke="#166534" strokeWidth="2" fill="none"/>
// //       </svg>
// //     </span>
// //   ),
// //   // File/Document
// //   (
// //     <span className="bg-green-100 p-3 rounded-lg">
// //       <svg viewBox="0 0 24 24" className="h-7 w-7 text-green-700" fill="none">
// //         <rect x="6" y="3" width="12" height="18" rx="2" stroke="#166534" strokeWidth="2"/>
// //         <path d="M9 7h6M9 11h6M9 15h6" stroke="#166534" strokeWidth="2" strokeLinecap="round"/>
// //       </svg>
// //     </span>
// //   ),
// //   // Chart/Bar
// //   (
// //     <span className="bg-green-100 p-3 rounded-lg">
// //       <svg viewBox="0 0 24 24" className="h-7 w-7 text-green-700" fill="none">
// //         <rect x="4" y="10" width="3" height="8" rx="1.5" stroke="#166534" strokeWidth="2"/>
// //         <rect x="10.5" y="6" width="3" height="12" rx="1.5" stroke="#166534" strokeWidth="2"/>
// //         <rect x="17" y="13" width="3" height="5" rx="1.5" stroke="#166534" strokeWidth="2"/>
// //       </svg>
// //     </span>
// //   ),
// //   // User/group
// //   (
// //     <span className="bg-green-100 p-3 rounded-lg">
// //       <svg viewBox="0 0 24 24" className="h-7 w-7 text-green-700" fill="none">
// //         <circle cx="12" cy="10" r="4" stroke="#166534" strokeWidth="2"/>
// //         <path d="M4 20c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="#166534" strokeWidth="2"/>
// //       </svg>
// //     </span>
// //   ),
// //   // Map
// //   (
// //     <span className="bg-green-100 p-3 rounded-lg">
// //       <svg viewBox="0 0 24 24" className="h-7 w-7 text-green-700" fill="none">
// //         <rect x="3" y="6" width="7" height="13" rx="2" stroke="#166534" strokeWidth="2"/>
// //         <rect x="14" y="3" width="7" height="16" rx="2" stroke="#166534" strokeWidth="2"/>
// //       </svg>
// //     </span>
// //   ),
// //   // Shield
// //   (
// //     <span className="bg-green-100 p-3 rounded-lg">
// //       <svg viewBox="0 0 24 24" className="h-7 w-7 text-green-700" fill="none">
// //         <path d="M12 3l7 4v5c0 5.25-3.996 9.705-7 11-3.004-1.295-7-5.75-7-11V7l7-4z" stroke="#166534" strokeWidth="2" fill="none"/>
// //       </svg>
// //     </span>
// //   )
// // ];

// // const features = [
// //   {
// //     title: "Data Upload & Processing",
// //     description: "Upload CSV/Excel datasets and automatically compute HPI and HEI indices with instant validation"
// //   },
// //   {
// //     title: "Comprehensive Reports",
// //     description: "Generate detailed PDF and Excel reports with WHO guideline comparisons and recommendations"
// //   },
// //   {
// //     title: "Interactive Dashboard",
// //     description: "Visualize trends with advanced charts, filter by location and time, search specific samples"
// //   },
// //   {
// //     title: "Citizen Access",
// //     description: "Simple interface for communities to check local water quality with clear safety indicators"
// //   },
// //   {
// //     title: "Geographic Mapping",
// //     description: "Interactive maps with color-coded safety indicators and detailed sample information popups"
// //   },
// //   {
// //     title: "Role-Based Security",
// //     description: "Secure access controls for researchers, administrators, and citizens with appropriate data permissions"
// //   }
// // ];

// // const PlatformFeatures = () => (
// //   <section className="py-16 bg-white">
// //     <div className="container mx-auto px-4">
// //       <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-3">Comprehensive Analysis Platform</h2>
// //       <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
// //         Advanced tools for researchers, environmental agencies, and communities to monitor and analyze heavy metal pollution
// //       </p>
// //       <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto">
// //         {features.map((feature, index) => (
// //           <div
// //             key={index}
// //             className="rounded-xl border border-gray-200 shadow-sm bg-white p-8 flex flex-col items-start gap-4 hover:shadow transition"
// //           >
// //             {iconMap[index]}
// //             <h3 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h3>
// //             <p className="text-gray-700 text-base">{feature.description}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   </section>
// // );

// // export default PlatformFeatures;




import React from "react";

// 🎨 Colorful Icon Map
const iconMap = [
  // Droplet - Blue
  (
    <span className="bg-blue-100 p-3 rounded-xl shadow-sm">
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-blue-600" fill="none">
        <path
          d="M12 2C12 2 7 10.5 7 14.5a5 5 0 1010 .01C17 10.5 12 2 12 2z"
          stroke="#2563eb"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </span>
  ),
  // File/Document - Orange
  (
    <span className="bg-orange-100 p-3 rounded-xl shadow-sm">
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-orange-600" fill="none">
        <rect
          x="6"
          y="3"
          width="12"
          height="18"
          rx="2"
          stroke="#ea580c"
          strokeWidth="2"
        />
        <path
          d="M9 7h6M9 11h6M9 15h6"
          stroke="#ea580c"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  ),
  // Chart/Bar - Purple
  (
    <span className="bg-purple-100 p-3 rounded-xl shadow-sm">
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-purple-600" fill="none">
        <rect
          x="4"
          y="10"
          width="3"
          height="8"
          rx="1.5"
          stroke="#9333ea"
          strokeWidth="2"
        />
        <rect
          x="10.5"
          y="6"
          width="3"
          height="12"
          rx="1.5"
          stroke="#9333ea"
          strokeWidth="2"
        />
        <rect
          x="17"
          y="13"
          width="3"
          height="5"
          rx="1.5"
          stroke="#9333ea"
          strokeWidth="2"
        />
      </svg>
    </span>
  ),
  // User/group - Pink
  (
    <span className="bg-pink-100 p-3 rounded-xl shadow-sm">
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-pink-600" fill="none">
        <circle cx="12" cy="10" r="4" stroke="#db2777" strokeWidth="2" />
        <path
          d="M4 20c0-3.314 3.134-6 7-6s7 2.686 7 6"
          stroke="#db2777"
          strokeWidth="2"
        />
      </svg>
    </span>
  ),
  // Map - Teal
  (
    <span className="bg-teal-100 p-3 rounded-xl shadow-sm">
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-teal-600" fill="none">
        <rect
          x="3"
          y="6"
          width="7"
          height="13"
          rx="2"
          stroke="#0d9488"
          strokeWidth="2"
        />
        <rect
          x="14"
          y="3"
          width="7"
          height="16"
          rx="2"
          stroke="#0d9488"
          strokeWidth="2"
        />
      </svg>
    </span>
  ),
  // Shield - Red
  (
    <span className="bg-red-100 p-3 rounded-xl shadow-sm">
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-red-600" fill="none">
        <path
          d="M12 3l7 4v5c0 5.25-3.996 9.705-7 11-3.004-1.295-7-5.75-7-11V7l7-4z"
          stroke="#dc2626"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </span>
  ),
];

const features = [
  {
    title: "Data Upload & Processing",
    description:
      "Upload CSV/Excel datasets and automatically compute HPI and HEI indices with instant validation",
  },
  {
    title: "Comprehensive Reports",
    description:
      "Generate detailed PDF and Excel reports with WHO guideline comparisons and recommendations",
  },
  {
    title: "Interactive Dashboard",
    description:
      "Visualize trends with advanced charts, filter by location and time, search specific samples",
  },
  {
    title: "Citizen Access",
    description:
      "Simple interface for communities to check local water quality with clear safety indicators",
  },
  {
    title: "Geographic Mapping",
    description:
      "Interactive maps with color-coded safety indicators and detailed sample information popups",
  },
  {
    title: "Role-Based Security",
    description:
      "Secure access controls for researchers, administrators, and citizens with appropriate data permissions",
  },
];

const PlatformFeatures = () => (
  <section className="py-20 bg-gradient-to-b from-green-50 via-white to-green-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-4">
        Comprehensive Analysis Platform
      </h2>
      <p className="text-lg text-center text-gray-600 mb-14 max-w-3xl mx-auto">
        Advanced tools for researchers, environmental agencies, and communities
        to monitor and analyze heavy metal pollution
      </p>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-2xl border border-gray-200 bg-white/90 backdrop-blur-sm shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col items-start gap-4"
          >
            {iconMap[index]}
            <h3 className="text-xl font-bold text-gray-900">
              {feature.title}
            </h3>
            <p className="text-gray-700 text-base">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PlatformFeatures;
