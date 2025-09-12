import React from 'react';

// Droplet SVG icon
const DropletIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" width={20} height={20}>
    <path d="M12 2C12 2 7 10.5 7 14.5a5 5 0 1010 .01C17 10.5 12 2 12 2z" stroke="#166534" strokeWidth="2" fill="none"/>
  </svg>
);

const Hero = ({ setCurrentPage }) => {
  return (
    <section className="bg-gray-50 text-black py-24">
      <div className="container mx-auto px-4 text-center">
        {/* Pill badge */}
        <div className="mb-6">
          <span className="bg-gray-900 text-white text-sm font-semibold px-4 py-1 rounded-full">Environmental Monitoring System</span>
        </div>
        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-0">
          Groundwater Heavy Metal
        </h1>
        <h2 className="text-5xl sm:text-6xl font-extrabold text-green-700 mb-6">
          Pollution Analysis
        </h2>
        {/* Subtitle */}
        <p className="text-gray-600 text-xl max-w-2xl mx-auto mb-12">
          Advanced monitoring and analysis system for detecting heavy metal contamination in groundwater. Protect communities with real-time data and comprehensive reporting.
        </p>
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => setCurrentPage('upload')}
            className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white text-lg font-semibold px-8 py-3 rounded"
          >
            <DropletIcon className="h-5 w-5" />
            Get Started
          </button>
          <button
            onClick={() => setCurrentPage('citizen')}
            className="flex items-center gap-2 bg-white border border-gray-400 text-gray-800 text-lg font-semibold px-8 py-3 rounded hover:bg-gray-100"
          >
            <DropletIcon className="h-5 w-5" />
            Citizen Portal
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
