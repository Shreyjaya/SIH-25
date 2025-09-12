import React, { useState } from "react";
// import { uploadExcel } from "../api/sampleApi";

// Green droplet icon (for file card)
const DropletIcon = () => (
  <svg viewBox="0 0 24 24" className="h-7 w-7 text-green-700" fill="none">
    <path d="M12 2C12 2 7 10.5 7 14.5a5 5 0 1010 .01C17 10.5 12 2 12 2z" stroke="#166534" strokeWidth="2" fill="none" />
  </svg>
);

function UploadExcel({ isDragging, handleDragOver, handleDragLeave, handleDrop }) {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setMessage("");
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file first");
      return;
    }
    setLoading(true);
    try {
      // const result = await uploadExcel(file);
      // setMessage(`✅ Uploaded ${result.rows} rows successfully!`);
      setMessage("✅ Upload simulated (replace with actual API)");
    } catch (error) {
      setMessage("❌ Upload failed");
    }
    setLoading(false);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`p-8 bg-white rounded-xl shadow-lg border transition-all
        ${isDragging ? "border-green-600 ring-2 ring-green-200" : "border-gray-200"}`}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="bg-green-100 p-2 rounded-xl">
          <DropletIcon />
        </div>
        <h2 className="text-2xl font-bold text-green-800">Upload Excel File</h2>
      </div>
      <div
        className={`flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 mb-6
          ${isDragging ? "border-green-500 bg-green-50" : "border-gray-300"}`}
      >
        <input
          type="file"
          accept=".csv,.xlsx,.xls"
          onChange={handleFileChange}
          className="mb-2"
        />
        <span className="text-sm text-gray-500">
          {file ? file.name : "Choose File or Drag & Drop here"}
        </span>
      </div>
      <button
        onClick={handleUpload}
        disabled={loading}
        className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold px-4 py-2 rounded-lg transition"
      >
        {loading ? "Uploading..." : "Upload"}
      </button>
      {message && (
        <div className="mt-4 text-center text-sm">
          <span className={message.startsWith("✅") ? "text-green-700" : "text-red-600"}>{message}</span>
        </div>
      )}
    </div>
  );
}

export default UploadExcel;
