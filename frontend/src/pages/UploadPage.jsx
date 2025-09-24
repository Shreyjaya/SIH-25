import React, { useState, useEffect } from "react";
import UploadExcel from "../components/UploadExcel";
import {
  DocumentIcon,
  ArrowPathIcon,
  ChartBarIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

const iconMap = [
  <span className="bg-blue-100 p-3 rounded-xl shadow-sm">
    <DocumentIcon className="h-6 w-6 text-blue-600" />
  </span>,
  <span className="bg-purple-100 p-3 rounded-xl shadow-sm">
    <ArrowPathIcon className="h-6 w-6 text-purple-600" />
  </span>,
  <span className="bg-pink-100 p-3 rounded-xl shadow-sm">
    <ChartBarIcon className="h-6 w-6 text-pink-600" />
  </span>,
  <span className="bg-teal-100 p-3 rounded-xl shadow-sm">
    <UsersIcon className="h-6 w-6 text-teal-600" />
  </span>,
];



const UploadPage = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [recentUploads, setRecentUploads] = useState([
    {
      filename: "samples_may2024.csv",
      uploadedAt: "15/05/2024",
      samples: 45,
      status: "Processed",
    },
    {
      filename: "water_data.xlsx",
      uploadedAt: "10/05/2024",
      samples: 120,
      status: "Processed",
    },
    {
      filename: "test_samples.csv",
      uploadedAt: "05/05/2024",
      samples: 12,
      status: "Processing",
    },
  ]);
  const [selectedIndex, setSelectedIndex] = useState("BOTH");
  const [compareWHO, setCompareWHO] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [selectedDatasetId, setSelectedDatasetId] = useState(null); // set this when file uploads
    // ✅ Fetch latest uploads on page load
  useEffect(() => {
    const fetchRecent = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/datasets/recent");
        const data = await res.json();
        setRecentUploads(data);
      } catch (err) {
        console.error("❌ Failed to fetch recent uploads", err);
      }
    };

    fetchRecent();
  }, []);
  // ✅ When user uploads a file
  const handleUploadSuccess = (file, datasetId) => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-GB");

    const newEntry = {
      filename: file.name,
      uploadedAt: formattedDate,
      samples: "—",
      status: "Processing", // show immediately
      datasetId,
    };

    // Add new upload to the top
    setRecentUploads((prev) => [newEntry, ...prev]);

    // Also set current datasetId
    setSelectedDatasetId(datasetId);
  };

  // ✅ One unified handleProcessData
const handleProcessData = async () => {
  if (!selectedDatasetId) {
    alert("❌ No dataset selected!");
    return;
  }

  try {
    setProcessing(true);

    const response = await fetch(
      `http://127.0.0.1:8000/datasets/${selectedDatasetId}/compute`,
      { method: "POST" }
    );
    const data = await response.json();

    if (!response.ok) throw new Error(data.detail || "Processing failed");

    // ✅ Filter columns if user selected HPI/HEI
    let processed = data.data;
    if (selectedIndex === "HPI") {
      processed = processed.map((row) => ({
        ...row,
        HEI: undefined,
      }));
    } else if (selectedIndex === "HEI") {
      processed = processed.map((row) => ({
        ...row,
        HPI: undefined,
      }));
    }

    // ✅ Update the corresponding entry in recentUploads
    setRecentUploads((prev) =>
      prev.map((upload) =>
        upload.datasetId === selectedDatasetId
          ? {
              ...upload,
              status: "Processed",
              samples: data.samples ?? upload.samples,
            }
          : upload
      )
    );

    console.log("Processed Data:", processed);
    alert("✅ Processing complete!");
  } catch (err) {
    alert("❌ Error: " + err.message);
  } finally {
    setProcessing(false);
  }
};


  return (
    <section className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-green-800 mb-12">
          Data Upload & Processing
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Upload */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-md p-8 backdrop-blur-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                {iconMap[0]}
                <h2 className="text-2xl font-bold text-gray-900">
                  Upload Your Files
                </h2>
              </div>
              <UploadExcel
                isDragging={isDragging}
                handleDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                handleDragLeave={() => setIsDragging(false)}
                handleDrop={() => setIsDragging(false)}
                onUploadSuccess={handleUploadSuccess}
              />
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                {iconMap[1]}
                <h3 className="text-xl font-bold text-green-800">
                  File Requirements
                </h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>CSV or Excel format (.csv, .xlsx, .xls)</li>
                <li>
                  Columns: Sample ID, Location, Date, metal concentrations
                </li>
                <li>Maximum file size: 10MB</li>
              </ul>
            </div>
          </div>

          {/* Right: Recent uploads + Processing */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-200 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                {iconMap[2]}
                <h3 className="text-xl font-bold text-green-800">
                  Recent Uploads
                </h3>
              </div>
              <div className="space-y-4">
                {recentUploads.map((file, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center border-b pb-3"
                  >
                    <div>
                      <p className="font-medium text-gray-900">
                        {file.filename}
                      </p>
                      <p className="text-sm text-gray-600">
                        Uploaded: {file.uploadedAt}, {file.samples} samples
                      </p>
                    </div>
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        file.status === "Processed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {file.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-200 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                {iconMap[3]}
                <h3 className="text-xl font-bold text-green-800">
                  Processing Options
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  {/* --- Index Calculation Dropdown --- */}
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Index Calculation
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={selectedIndex}
                    onChange={(e) => setSelectedIndex(e.target.value)}
                  >
                    <option value="HPI">
                      HPI (Heavy Metal Pollution Index)
                    </option>
                    <option value="HEI">
                      HEI (Heavy Metal Evaluation Index)
                    </option>
                    <option value="BOTH">Both HPI and HEI</option>
                  </select>
                </div>

                <div className="mt-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded text-green-600"
                      checked={compareWHO}
                      onChange={(e) => setCompareWHO(e.target.checked)}
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      Compare with WHO guidelines
                    </span>
                  </label>
                </div>

                <button
                  className="w-full bg-green-700 text-white py-2 rounded-xl font-bold hover:bg-green-800 transition mt-4"
                  disabled={!selectedDatasetId || processing}
                  onClick={handleProcessData}
                >
                  {processing ? "Processing..." : "Process Data"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadPage;

// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import UploadExcel from "../components/UploadExcel";

// const UploadPage = () => {
//   const [isDragging, setIsDragging] = useState(false);
//   const [recentUploads, setRecentUploads] = useState([
//     // initial static examples
//     {
//       filename: "samples_may2024.csv",
//       uploadedAt: "15/05/2024",
//       samples: 45,
//       status: "Processed",
//     },
//     {
//       filename: "water_data.xlsx",
//       uploadedAt: "10/05/2024",
//       samples: 120,
//       status: "Processed",
//     },
//     {
//       filename: "test_samples.csv",
//       uploadedAt: "05/05/2024",
//       samples: 12,
//       status: "Processing",
//     },
//   ]);
//   // Callback when upload succeeds
//   const handleUploadSuccess = (file) => {
//     const today = new Date();
//     const formattedDate = today.toLocaleDateString("en-GB"); // dd/mm/yyyy

//     const newEntry = {
//       filename: file.name,
//       uploadedAt: formattedDate,
//       samples: "—", // backend can send actual count, placeholder for now
//       status: "Processing",
//     };

//     setRecentUploads((prev) => [newEntry, ...prev]); // prepend new upload
//   };
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navbar */}

//       <div className="container mx-auto px-4 py-10">
//         <h1 className="text-3xl font-extrabold text-green-800 mb-8">
//           Data Upload & Processing
//         </h1>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//           {/* Left side: Upload + Requirements */}
//           <div>
//             <UploadExcel
//               isDragging={isDragging}
//               handleDragOver={(e) => {
//                 e.preventDefault();
//                 setIsDragging(true);
//               }}
//               handleDragLeave={() => setIsDragging(false)}
//               handleDrop={() => setIsDragging(false)}
//               onUploadSuccess={handleUploadSuccess}
//             />

//             <div className="mt-8 bg-green-50 p-5 rounded-lg border border-green-100">
//               <h3 className="font-semibold text-green-800 mb-2">
//                 File Requirements
//               </h3>
//               <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
//                 <li>CSV or Excel format (.csv, .xlsx, .xls)</li>
//                 <li>
//                   Required columns: Sample ID, Location, Date, and metal
//                   concentrations
//                 </li>
//                 <li>Maximum file size: 10MB</li>
//               </ul>
//             </div>
//           </div>

//           {/* Right side: Recent Uploads + Processing Options */}
//           <div className="flex flex-col gap-8">
//             {/* Recent Uploads */}
//             <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
//               <h3 className="text-xl font-bold text-green-800 mb-4">
//                 Recent Uploads
//               </h3>
//               <div className="space-y-4">
//                 {recentUploads.map((file, idx) => (
//                   <div
//                     key={idx}
//                     className="flex justify-between items-center border-b pb-3"
//                   >
//                     <div>
//                       <p className="font-medium">{file.filename}</p>
//                       <p className="text-sm text-gray-600">
//                         Uploaded: {file.uploadedAt}, {file.samples} samples
//                       </p>
//                     </div>
//                     <span
//                       className={`px-2 py-1 rounded text-xs ${
//                         file.status === "Processed"
//                           ? "bg-green-100 text-green-700"
//                           : "bg-yellow-100 text-yellow-700"
//                       }`}
//                     >
//                       {file.status}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Processing Options */}
//             <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
//               <h3 className="text-xl font-bold text-green-800 mb-4">
//                 Processing Options
//               </h3>
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Index Calculation
//                   </label>
//                   <select className="w-full border border-gray-300 rounded px-3 py-2">
//                     <option>HPI (Heavy Metal Pollution Index)</option>
//                     <option>HEI (Heavy Metal Evaluation Index)</option>
//                     <option>Both HPI and HEI</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="flex items-center">
//                     <input type="checkbox" className="rounded text-green-600" />
//                     <span className="ml-2 text-sm text-gray-700">
//                       Compare with WHO guidelines
//                     </span>
//                   </label>
//                 </div>
//                 <button className="w-full bg-green-700 text-white py-2 rounded font-bold hover:bg-green-800 transition">
//                   Process Data
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UploadPage;
