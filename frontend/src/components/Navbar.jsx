import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';

const Navbar = ({ currentPage, setCurrentPage, isLoggedIn, setIsLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // All pages including the new "Upload Data"
  const pages = [
    { name: 'Home', key: 'home' },
    { name: 'Upload Data', key: 'upload' },
    { name: 'Dashboard', key: 'dashboard' },
    { name: 'Map', key: 'map' },
    { name: 'Reports', key: 'reports' },
    { name: 'Citizen View', key: 'citizen' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center">
            <svg className="h-7 w-7 text-blue-800 mr-2" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C12 2 7 10.5 7 14.5a5 5 0 1010 .01C17 10.5 12 2 12 2z" stroke="#1e40af" strokeWidth="2" fill="none"/>
            </svg>
            <span className="font-bold text-lg text-gray-900">HMPI Monitor</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-5 ml-10 flex-1">
            {pages.map(page => (
              <button
                key={page.key}
                onClick={() => setCurrentPage(page.key)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  currentPage === page.key 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {page.name}
              </button>
            ))}
            
            <div className="flex items-center space-x-3 ml-auto">
              {isLoggedIn ? (
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
                >
                  Logout
                </button>
              ) : (
                <>
                  <button
                    onClick={() => setCurrentPage('login')}
                    className="text-gray-700 hover:text-gray-900 font-normal px-3 py-2"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setCurrentPage('signup')}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>
          
          {/* Mobile hamburger */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-900 p-2">
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 py-2">
          <div className="container mx-auto flex flex-col px-4 space-y-1">
            {pages.map(page => (
              <button
                key={page.key}
                onClick={() => { setCurrentPage(page.key); setMenuOpen(false); }}
                className={`px-3 py-2 rounded-md text-sm font-medium text-left ${
                  currentPage === page.key 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {page.name}
              </button>
            ))}
            
            <div className="flex items-center space-x-3 pt-3 border-t border-gray-200 mt-2">
              {isLoggedIn ? (
                <button
                  onClick={() => { setIsLoggedIn(false); setMenuOpen(false); }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded text-sm"
                >
                  Logout
                </button>
              ) : (
                <>
                  <button
                    onClick={() => { setCurrentPage('login'); setMenuOpen(false); }}
                    className="text-gray-700 hover:text-gray-900 font-normal px-3 py-2 text-sm"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => { setCurrentPage('signup'); setMenuOpen(false); }}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded text-sm"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;