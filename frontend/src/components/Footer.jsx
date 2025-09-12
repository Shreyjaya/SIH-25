import React from 'react';

const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="bg-white-800 text-black py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-6">HMPI Monitor</h3>
            <p className="text-sm">Advanced groundwater heavy metal pollution analysis and monitoring system.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => setCurrentPage('dashboard')} className="text-sm hover:text-blue-300">Dashboard</button></li>
              <li><button onClick={() => setCurrentPage('upload')} className="text-sm hover:text-blue-300">Upload Data</button></li>
              <li><button onClick={() => setCurrentPage('map')} className="text-sm hover:text-blue-300">Interactive Map</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><button onClick={() => setCurrentPage('reports')} className="text-sm hover:text-blue-300">Reports</button></li>
              <li><button onClick={() => setCurrentPage('citizen')} className="text-sm hover:text-blue-300">Citizen Portal</button></li>
              <li><a href="#" className="text-sm hover:text-blue-300">WHO Guidelines</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm">Environmental Research Lab</p>
            <p className="text-sm">University Campus</p>
            <p className="text-sm">research@hmpi.edu</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          © 2024 HMPI Monitor. Built for environmental research and public safety.
        </div>
      </div>
    </footer>
  );
};

export default Footer;