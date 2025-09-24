
import React from "react";


function ClassificationBadge({ classification }) {
  let style = "bg-gray-100 text-gray-800";
  if (classification === "Safe") style = "bg-green-100 text-green-800";
  else if (classification === "Unsafe") style = "bg-red-100 text-red-700";
  else if (classification === "Moderate Risk") style = "bg-yellow-100 text-yellow-800";
  return (
    <span className={`px-3 py-1 rounded text-xs font-medium ${style}`}>
      {classification}
    </span>
  );
}


const sampleRows = [
  { id: "WS001", site: "Site A", date: "2024-01-15", Pb: "0.050", Cd: "0.003", Cr: "0.020", As: "0.008", Hg: "0.0010", Ni: "0.015", HPI: "25.4", HEI: "18.2", classification: "Safe" },
  { id: "WS002", site: "Site B", date: "2024-01-16", Pb: "0.120", Cd: "0.008", Cr: "0.045", As: "0.015", Hg: "0.0020", Ni: "0.032", HPI: "58.7", HEI: "42.3", classification: "Unsafe" },
  { id: "WS003", site: "Site C", date: "2024-01-17", Pb: "0.080", Cd: "0.005", Cr: "0.028", As: "0.012", Hg: "0.0015", Ni: "0.021", HPI: "35.2", HEI: "26.8", classification: "Moderate Risk" },
  { id: "WS004", site: "Site A", date: "2024-01-18", Pb: "0.040", Cd: "0.002", Cr: "0.018", As: "0.006", Hg: "0.0008", Ni: "0.012", HPI: "22.1", HEI: "15.7", classification: "Safe" },
  { id: "WS005", site: "Site D", date: "2024-01-19", Pb: "0.150", Cd: "0.009", Cr: "0.052", As: "0.018", Hg: "0.0025", Ni: "0.038", HPI: "68.9", HEI: "51.2", classification: "Unsafe" },
];


const AnalysisTable = () => {
  return (
    <div className="rounded-2xl shadow bg-white p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-lg font-bold text-gray-800">Analysis Results</div>
          <div className="text-gray-500 text-sm">Computed HPI and HEI values with safety classifications (5 samples)</div>
        </div>
        <button className="border border-gray-300 bg-white hover:bg-gray-50 px-4 py-2 rounded-lg flex items-center gap-2 text-gray-700 text-sm font-semibold">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M6 10v4a2 2 0 002 2h4a2 2 0 002-2v-4M4 8l6 6 6-6" stroke="#444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Export
        </button>
      </div>


      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-gray-800 border-separate [border-spacing:0]">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 pr-2 font-semibold">Sample ID</th>
              <th className="text-left py-2 pr-2 font-semibold">Location</th>
              <th className="text-left py-2 pr-2 font-semibold">Date</th>
              <th className="text-left py-2 pr-2 font-semibold">Pb (mg/L)</th>
              <th className="text-left py-2 pr-2 font-semibold">Cd (mg/L)</th>
              <th className="text-left py-2 pr-2 font-semibold">Cr (mg/L)</th>
              <th className="text-left py-2 pr-2 font-semibold">As (mg/L)</th>
              <th className="text-left py-2 pr-2 font-semibold">Hg (mg/L)</th>
              <th className="text-left py-2 pr-2 font-semibold">Ni (mg/L)</th>
              <th className="text-left py-2 pr-2 font-semibold">HPI</th>
              <th className="text-left py-2 pr-2 font-semibold">HEI</th>
              <th className="text-left py-2 pr-2 font-semibold">Classification</th>
            </tr>
          </thead>
          <tbody>
            {sampleRows.map((row) => (
              <tr key={row.id} className="border-b hover:bg-gray-50">
                <td className="py-2 pr-2 font-semibold">{row.id}</td>
                <td className="py-2 pr-2">{row.site}</td>
                <td className="py-2 pr-2">{row.date}</td>
                <td className="py-2 pr-2">{row.Pb}</td>
                <td className="py-2 pr-2">{row.Cd}</td>
                <td className="py-2 pr-2">{row.Cr}</td>
                <td className="py-2 pr-2">{row.As}</td>
                <td className="py-2 pr-2">{row.Hg}</td>
                <td className="py-2 pr-2">{row.Ni}</td>
                <td className="py-2 pr-2 font-semibold">{row.HPI}</td>
                <td className="py-2 pr-2 font-semibold">{row.HEI}</td>
                <td className="py-2 pr-2">
                  <ClassificationBadge classification={row.classification} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default AnalysisTable;
