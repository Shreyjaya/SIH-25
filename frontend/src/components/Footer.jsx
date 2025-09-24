import React from 'react';

const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="bg-green-100 text-gray-900 py-16 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="space-y-3">
            <h3 className="text-2xl font-extrabold text-green-800 mb-2">HMPI Monitor</h3>
            <p className="text-sm text-gray-700">
              Advanced groundwater heavy metal pollution analysis and monitoring system.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-green-700 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => setCurrentPage('dashboard')} className="text-gray-700 hover:text-green-800 transition">
                  Dashboard
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('upload')} className="text-gray-700 hover:text-green-800 transition">
                  Upload Data
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('map')} className="text-gray-700 hover:text-green-800 transition">
                  Interactive Map
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold text-green-700 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => setCurrentPage('reports')} className="text-gray-700 hover:text-green-800 transition">
                  Reports
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('citizen')} className="text-gray-700 hover:text-green-800 transition">
                  Citizen Portal
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-green-800 transition">
                  WHO Guidelines
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-green-700 mb-4">Contact</h4>
            <p className="text-gray-700 text-sm">Environmental Research Lab</p>
            <p className="text-gray-700 text-sm">University Campus</p>
            <p className="text-gray-700 text-sm">research@hmpi.edu</p>
          </div>
        </div>

        <div className="mt-12 pt-6 text-center text-sm text-gray-500 border-t border-gray-300">
          © 2024 HMPI Monitor. Built for environmental research and public safety.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
