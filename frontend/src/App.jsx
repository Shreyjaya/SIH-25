import React, { useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Upload from './pages/UploadPage';
import Reports from './pages/Reports';
import Map from './pages/Map';
import Login from './pages/Login';
import CitizenPortal from './pages/CitizenPortal';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const { isSignedIn, isLoaded } = useUser();
  
  // Use Clerk's authentication state
  const isLoggedIn = isSignedIn;

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      // case 'dashboard':
      //   return <Dashboard />;
       case 'upload':
         return <Upload />;
      // case 'reports':
      //   return <Reports />;
      // case 'map':
      //   return <Map />;
      case 'login':
        return <Login setCurrentPage={setCurrentPage} />;
      // case 'citizen':
      //   return <CitizenPortal />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  // Show loading state while Clerk is initializing
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        isLoggedIn={isLoggedIn}
      />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;