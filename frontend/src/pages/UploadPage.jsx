import React, { useState } from 'react';
import UploadExcel from '../components/UploadExcel';

const Upload = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file upload logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-extrabold text-green-800 mb-8">Data Upload & Processing</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Upload Box and Requirements */}
          <div>
            <UploadExcel
              isDragging={isDragging}
              handleDragOver={handleDragOver}
              handleDragLeave={handleDragLeave}
              handleDrop={handleDrop}
            />
            <div className="mt-8 bg-green-50 p-5 rounded-lg border border-green-100">
              <h3 className="font-semibold text-green-800 mb-2">File Requirements</h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>CSV or Excel format (.csv, .xlsx, .xls)</li>
                <li>Required columns: Sample ID, Location, Date, and metal concentrations</li>
                <li>Maximum file size: 10MB</li>
              </ul>
            </div>
          </div>
          {/* Recent Uploads and Processing Options */}
          <div className="flex flex-col gap-8">
            <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
              <h3 className="text-xl font-bold text-green-800 mb-4">Recent Uploads</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-3">
                  <div>
                    <p className="font-medium">samples_may2024.csv</p>
                    <p className="text-sm text-gray-600">Uploaded: 15/05/2024, 45 samples</p>
                  </div>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Processed</span>
                </div>
                <div className="flex justify-between items-center border-b pb-3">
                  <div>
                    <p className="font-medium">water_data.xlsx</p>
                    <p className="text-sm text-gray-600">Uploaded: 10/05/2024, 120 samples</p>
                  </div>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">Processed</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">test_samples.csv</p>
                    <p className="text-sm text-gray-600">Uploaded: 05/05/2024, 12 samples</p>
                  </div>
                  <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded">Processing</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
              <h3 className="text-xl font-bold text-green-800 mb-4">Processing Options</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Index Calculation</label>
                  <select className="w-full border border-gray-300 rounded px-3 py-2">
                    <option>HPI (Heavy Metal Pollution Index)</option>
                    <option>HEI (Heavy Metal Evaluation Index)</option>
                    <option>Both HPI and HEI</option>
                  </select>
                </div>
                <div>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-green-600" />
                    <span className="ml-2 text-sm text-gray-700">Compare with WHO guidelines</span>
                  </label>
                </div>
                <button className="w-full bg-green-700 text-white py-2 rounded font-bold hover:bg-green-800 transition">
                  Process Data
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
