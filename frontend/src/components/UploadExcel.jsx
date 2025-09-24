// import React, { useState, useRef } from "react";
// import { useUser } from "@clerk/clerk-react";

// function DropletIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       className="h-7 w-7 text-green-700 mx-auto mb-3"
//       fill="none"
//     >
//       <path
//         d="M12 2C12 2 7 10.5 7 14.5a5 5 0 1010 .01C17 10.5 12 2 12 2z"
//         stroke="#166534"
//         strokeWidth="2"
//         fill="none"
//       />
//     </svg>
//   );
// }

// export default function UploadExcel() {
//   const { user } = useUser();
//   const [isDragging, setIsDragging] = useState(false);
//   const [uploading, setUploading] = useState(false);
//   const fileInputRef = useRef(null);

//   const uploadFile = async (file) => {
//     if (!file) return;

//     if (!(file.name.endsWith(".xlsx") || file.name.endsWith(".csv"))) {
//       alert("❌ Only .xlsx or .csv files are allowed");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append(
//       "uploaded_by",
//       user?.primaryEmailAddress?.emailAddress || "anonymous"
//     );

//     try {
//       setUploading(true);
//       const response = await fetch("http://127.0.0.1:8000/datasets/upload", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.json();
//       if (!response.ok) throw new Error(data.detail || "Upload failed");

//       alert("✅ " + data.message);
//       // tell parent about new file
//       if (onUploadSuccess) {
//         onUploadSuccess(file);
//       }
//     } catch (err) {
//       alert("❌ Error: " + err.message);
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     uploadFile(file);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     setIsDragging(false);
//     const file = e.dataTransfer.files[0];
//     uploadFile(file);
//   };

//   return (
//     <div
//       className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition 
//         ${isDragging ? "border-blue-500 bg-blue-50" : "border-gray-400"}`}
//       onDragOver={(e) => {
//         e.preventDefault();
//         setIsDragging(true);
//       }}
//       onDragLeave={() => setIsDragging(false)}
//       onDrop={handleDrop}
//     >
//       <DropletIcon />

//       <p className="text-lg text-gray-700">
//         Drag & drop your <span className="font-bold">.xlsx</span> or{" "}
//         <span className="font-bold">.csv</span> file here
//       </p>
//       <p className="text-sm text-gray-500 mt-2">Max size: 10MB</p>

//       {/* Hidden file input */}
//       <input
//         type="file"
//         accept=".csv, .xlsx"
//         ref={fileInputRef}
//         className="hidden"
//         onChange={handleFileChange}
//       />

//       <button
//         className="mt-4 bg-green-700 text-white py-2 rounded font-bold hover:bg-green-800 transition"
//         disabled={uploading}
//         onClick={() => fileInputRef.current.click()}
//       >
//         {uploading ? "Uploading..." : "Upload Excel"}
//       </button>
//     </div>
//   );
// }



// import React, { useState } from "react";
// // import { uploadExcel } from "../api/sampleApi";

// Green droplet icon (for file card)
// const DropletIcon = () => (
//   <svg viewBox="0 0 24 24" className="h-7 w-7 text-green-700" fill="none">
//     <path d="M12 2C12 2 7 10.5 7 14.5a5 5 0 1010 .01C17 10.5 12 2 12 2z" stroke="#166534" strokeWidth="2" fill="none" />
//   </svg>
// );

// function UploadExcel({ isDragging, handleDragOver, handleDragLeave, handleDrop }) {
//   const [file, setFile] = useState(null);
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//     setMessage("");
//   };

//   const handleUpload = async () => {
//     if (!file) {
//       setMessage("Please select a file first");
//       return;
//     }
//     setLoading(true);
//     try {
//       // const result = await uploadExcel(file);
//       // setMessage(`✅ Uploaded ${result.rows} rows successfully!`);
//       setMessage("✅ Upload simulated (replace with actual API)");
//     } catch (error) {
//       setMessage("❌ Upload failed");
//     }
//     setLoading(false);
//   };

//   return (
//     <div
//       onDragOver={handleDragOver}
//       onDragLeave={handleDragLeave}
//       onDrop={handleDrop}
//       className={`p-8 bg-white rounded-xl shadow-lg border transition-all
//         ${isDragging ? "border-green-600 ring-2 ring-green-200" : "border-gray-200"}`}
//     >
//       <div className="flex items-center gap-3 mb-5">
//         <div className="bg-green-100 p-2 rounded-xl">
//           <DropletIcon />
//         </div>
//         <h2 className="text-2xl font-bold text-green-800">Upload Excel File</h2>
//       </div>
//       <div
//         className={`flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 mb-6
//           ${isDragging ? "border-green-500 bg-green-50" : "border-gray-300"}`}
//       >
//         <input
//           type="file"
//           accept=".csv,.xlsx,.xls"
//           onChange={handleFileChange}
//           className="mb-2"
//         />
//         <span className="text-sm text-gray-500">
//           {file ? file.name : "Choose File or Drag & Drop here"}
//         </span>
//       </div>
//       <button
//         onClick={handleUpload}
//         disabled={loading}
//         className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold px-4 py-2 rounded-lg transition"
//       >
//         {loading ? "Uploading..." : "Upload"}
//       </button>
//       {message && (
//         <div className="mt-4 text-center text-sm">
//           <span className={message.startsWith("✅") ? "text-green-700" : "text-red-600"}>{message}</span>
//         </div>
//       )}
//     </div>
//   );
// }

// export default UploadExcel;

import React, { useState, useRef } from "react";
import { useUser } from "@clerk/clerk-react";

function DropletIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7 text-green-700 mx-auto mb-3"
      fill="none"
    >
      <path
        d="M12 2C12 2 7 10.5 7 14.5a5 5 0 1010 .01C17 10.5 12 2 12 2z"
        stroke="#166534"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

export default function UploadExcel({ onUploadSuccess }) {
  const { user } = useUser();
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const uploadFile = async (file) => {
    if (!file) return;

    if (!(file.name.endsWith(".xlsx") || file.name.endsWith(".csv"))) {
      alert("❌ Only .xlsx or .csv files are allowed");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "uploaded_by",
      user?.primaryEmailAddress?.emailAddress || "anonymous"
    );

    try {
      setUploading(true);
      const response = await fetch("http://127.0.0.1:8000/datasets/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.detail || "Upload failed");

      alert("✅ " + data.message);

      // notify parent
      if (onUploadSuccess) {
      onUploadSuccess(file, data.datasetId); // <-- change here
    }
    } catch (err) {
      alert("❌ Error: " + err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    uploadFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    uploadFile(file);
  };

  const handleClick = () => {
    fileInputRef.current.click(); // trigger hidden file input
  };

  return (
    <div
      className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition 
        ${isDragging ? "border-blue-500 bg-blue-50" : "border-gray-400"}`}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      onClick={handleClick} // allow clicking anywhere to open file dialog
    >
      <input
        type="file"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
      />

      <DropletIcon />
      <p className="text-lg text-gray-700">
        Drag & drop your <span className="font-bold">.xlsx</span> or{" "}
        <span className="font-bold">.csv</span> file here
      </p>
      <p className="text-sm text-gray-500 mt-2">Max size: 10MB</p>
      <button
    className="mt-2 bg-green-700 text-white py-2 px-6 rounded-full font-bold hover:bg-green-800 shadow-md transition-all"
    disabled={uploading}
    onClick={handleClick}
  >
        {uploading ? "Uploading..." : "Upload Excel"}
      </button>
    </div>
  );
}
