import React from "react";


const Filters = () => {
  return (
    <div className="rounded-2xl shadow bg-white p-6 mb-8 border border-gray-100">
      <div className="flex items-center gap-2 mb-5 font-bold text-lg text-gray-800">
        <svg className="h-6 w-6 text-gray-500" viewBox="0 0 24 24" fill="none">
          <path d="M4 6h16M8 10h8M10 14h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        Filters & Search
      </div>


      <div className="mb-4">
        <label htmlFor="sample-id" className="block text-base font-medium text-gray-800 mb-1">
          Search Sample ID
        </label>
        <input
          id="sample-id"
          type="text"
          placeholder="Enter sample ID..."
          className="w-full border border-gray-300 rounded px-3 py-2 text-gray-800 placeholder-gray-400"
        />
      </div>


      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <select className="w-full border border-gray-300 rounded px-3 py-2">
          <option>All Metals</option>
          <option>Lead</option>
          <option>Mercury</option>
          <option>Arsenic</option>
        </select>
        <select className="w-full border border-gray-300 rounded px-3 py-2">
          <option>All Locations</option>
          <option>Site A</option>
          <option>Site B</option>
        </select>
        <select className="w-full border border-gray-300 rounded px-3 py-2">
          <option>All Time</option>
          <option>Last Week</option>
          <option>Last Month</option>
        </select>
        <select className="w-full border border-gray-300 rounded px-3 py-2">
          <option>All Classifications</option>
          <option>Safe</option>
          <option>Moderate Risk</option>
          <option>Unsafe</option>
        </select>
      </div>


      <div className="flex justify-end col-span-full mt-2">
        <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">
          <span>&times;</span>Clear Filters
        </button>
      </div>
    </div>
  );
};


export default Filters;