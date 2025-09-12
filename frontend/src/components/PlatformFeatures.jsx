import React from 'react';

// Icon map
const iconMap = [
  // Droplet
  (
    <span className="bg-green-100 p-3 rounded-lg">
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-green-700" fill="none">
        <path d="M12 2C12 2 7 10.5 7 14.5a5 5 0 1010 .01C17 10.5 12 2 12 2z" stroke="#166534" strokeWidth="2" fill="none"/>
      </svg>
    </span>
  ),
  // File/Document
  (
    <span className="bg-green-100 p-3 rounded-lg">
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-green-700" fill="none">
        <rect x="6" y="3" width="12" height="18" rx="2" stroke="#166534" strokeWidth="2"/>
        <path d="M9 7h6M9 11h6M9 15h6" stroke="#166534" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </span>
  ),
  // Chart/Bar
  (
    <span className="bg-green-100 p-3 rounded-lg">
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-green-700" fill="none">
        <rect x="4" y="10" width="3" height="8" rx="1.5" stroke="#166534" strokeWidth="2"/>
        <rect x="10.5" y="6" width="3" height="12" rx="1.5" stroke="#166534" strokeWidth="2"/>
        <rect x="17" y="13" width="3" height="5" rx="1.5" stroke="#166534" strokeWidth="2"/>
      </svg>
    </span>
  ),
  // User/group
  (
    <span className="bg-green-100 p-3 rounded-lg">
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-green-700" fill="none">
        <circle cx="12" cy="10" r="4" stroke="#166534" strokeWidth="2"/>
        <path d="M4 20c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="#166534" strokeWidth="2"/>
      </svg>
    </span>
  ),
  // Map
  (
    <span className="bg-green-100 p-3 rounded-lg">
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-green-700" fill="none">
        <rect x="3" y="6" width="7" height="13" rx="2" stroke="#166534" strokeWidth="2"/>
        <rect x="14" y="3" width="7" height="16" rx="2" stroke="#166534" strokeWidth="2"/>
      </svg>
    </span>
  ),
  // Shield
  (
    <span className="bg-green-100 p-3 rounded-lg">
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-green-700" fill="none">
        <path d="M12 3l7 4v5c0 5.25-3.996 9.705-7 11-3.004-1.295-7-5.75-7-11V7l7-4z" stroke="#166534" strokeWidth="2" fill="none"/>
      </svg>
    </span>
  )
];

const features = [
  {
    title: "Data Upload & Processing",
    description: "Upload CSV/Excel datasets and automatically compute HPI and HEI indices with instant validation"
  },
  {
    title: "Comprehensive Reports",
    description: "Generate detailed PDF and Excel reports with WHO guideline comparisons and recommendations"
  },
  {
    title: "Interactive Dashboard",
    description: "Visualize trends with advanced charts, filter by location and time, search specific samples"
  },
  {
    title: "Citizen Access",
    description: "Simple interface for communities to check local water quality with clear safety indicators"
  },
  {
    title: "Geographic Mapping",
    description: "Interactive maps with color-coded safety indicators and detailed sample information popups"
  },
  {
    title: "Role-Based Security",
    description: "Secure access controls for researchers, administrators, and citizens with appropriate data permissions"
  }
];

const PlatformFeatures = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-3">Comprehensive Analysis Platform</h2>
      <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Advanced tools for researchers, environmental agencies, and communities to monitor and analyze heavy metal pollution
      </p>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 shadow-sm bg-white p-8 flex flex-col items-start gap-4 hover:shadow transition"
          >
            {iconMap[index]}
            <h3 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h3>
            <p className="text-gray-700 text-base">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PlatformFeatures;
