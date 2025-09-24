import React from "react";


// SVG icons
const DropletIcon = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8 text-green-700 inline" fill="none">
    <path d="M12 2C12 2 7 10.5 7 14.5a5 5 0 1010 .01C17 10.5 12 2 12 2z" stroke="#166534" strokeWidth="2" fill="none" />
  </svg>
);
const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="inline-block h-6 w-6 text-gray-400 mr-2">
    <path d="M12 21s7-7.5 7-12A7 7 0 005 9c0 4.5 7 12 7 12z" stroke="#999" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="9" r="2.5" stroke="#999" strokeWidth="2"/>
  </svg>
);
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="inline-block h-6 w-6 text-gray-600 mr-2">
    <path d="M12 3l7 4v5c0 5.25-3.996 9.705-7 11-3.004-1.295-7-5.75-7-11V7l7-4z" stroke="#374151" strokeWidth="2" fill="none"/>
  </svg>
);
const WarningIcon = () => (
  <svg className="h-7 w-7 text-red-500 mb-1" fill="none" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" fill="#fee2e2"/>
    <path d="M12 8v4m0 4h.01" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);


const whoGuidelines = [
  [
    { label: "Lead (Pb)", desc: "Neurological damage prevention", value: "0.01 mg/L" },
    { label: "Cadmium (Cd)", desc: "Kidney protection", value: "0.003 mg/L" },
  ],
  [
    { label: "Chromium (Cr)", desc: "Liver function safety", value: "0.05 mg/L" },
    { label: "Arsenic (As)", desc: "Cancer prevention", value: "0.01 mg/L" },
  ],
  [
    { label: "Mercury (Hg)", desc: "Brain development protection", value: "0.006 mg/L" },
    { label: "Nickel (Ni)", desc: "Skin health maintenance", value: "0.07 mg/L" },
  ],
];


const searchSuggestions = ["Downtown", "Industrial Zone", "Residential Area", "Mining District"];


const CitizenView = () => (
  <div className="bg-gray-50 min-h-screen py-12 px-4">
    {/* Header */}
    <div className="text-center mb-8">
      <DropletIcon />
      <h1 className="text-4xl font-extrabold text-gray-900 inline ml-2">Water Quality Check</h1>
      <p className="mt-4 text-xl text-gray-700">
        Check if your local water is safe to drink. Enter your region or district below to get instant results.
      </p>
    </div>
    {/* Main Search Card */}
    <div className="max-w-4xl mx-auto mb-10 bg-white rounded-2xl p-8 shadow border border-gray-200">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Check Your Area</h2>
        <p className="mb-6 text-gray-700">Enter your region, district, or neighborhood name</p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
        <div className="flex-1 w-full">
          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
            <PinIcon />
            <input
              className="flex-1 bg-transparent outline-none text-lg text-gray-600"
              placeholder="e.g., Downtown, Industrial Zone, Residential Area..."
              type="text"
            />
          </div>
        </div>
        <button
          className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg px-6 py-3 text-lg transition"
        >
          <span className="inline-block mr-2 align-middle"><svg className="w-6 h-6" fill="none" stroke="white" strokeWidth={2} viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35" strokeLinecap="round"/></svg></span>
          Check Water Quality
        </button>
      </div>
      <div className="mt-2 text-gray-700 text-center">Try searching for:</div>
      <div className="flex flex-wrap justify-center gap-3 mt-3">
        {searchSuggestions.map(name => (
          <button key={name} className="rounded-lg px-4 py-2 bg-gray-100 text-gray-800 font-semibold hover:bg-gray-200">{name}</button>
        ))}
      </div>
    </div>
    {/* WHO Safety Guidelines */}
<div className="max-w-5xl mx-auto bg-green-100 rounded-2xl p-6 border border-gray-200 mb-8">
  <div className="flex items-center text-xl font-bold text-gray-900 mb-4">
    <ShieldIcon />
    WHO Safety Guidelines
  </div>
  <div className="text-gray-600 mb-4 text-sm">
    World Health Organization maximum allowable concentrations for heavy metals in drinking water
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    {whoGuidelines.flat().map(({ label, desc, value }) => (
      <div
        key={label}
        className="cursor-pointer bg-white p-3 rounded-lg shadow-sm text-sm flex flex-col justify-between hover:scale-[1.02] transform transition-transform duration-300"
        title={`${label}: ${desc}\nLimit: ${value}`}
        tabIndex={0}
        role="button"
        aria-label={`${label} guideline: ${desc}, limit ${value}`}
      >
        <div>
          <h3 className="font-semibold text-base mb-1">{label}</h3>
          <p className="text-gray-700 leading-tight">{desc}</p>
        </div>
        <span className="mt-4 px-4 py-1 rounded-lg font-mono text-sm border border-gray-300 bg-gray-50 text-gray-800 font-semibold text-center select-none">
          {value}
        </span>
      </div>
    ))}
  </div>
</div>




    {/* Emergency Contact */}
  <div className="max-w-4xl mx-auto bg-red-50 rounded-2xl border border-red-200 py-8 px-4 text-center flex flex-col items-center shadow">
 <WarningIcon />
  <div className="text-2xl font-bold text-gray-900 mb-2">Emergency Contact</div>
  <div className="text-base md:text-lg text-gray-800 font-normal">
    If you suspect water contamination or have health concerns, contact your local health department immediately or call the emergency hotline: <span className="font-bold text-gray-900">1-800-WATER-HELP</span>
  </div>
</div>


  </div>
);


export default CitizenView;
