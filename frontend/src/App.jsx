import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
// import Dashboard from './pages/Dashboard';
 import Upload from './pages/UploadPage';
// import Reports from './pages/Reports';
// import Map from './pages/Map';
// import Login from './pages/Login';
// import CitizenPortal from './pages/CitizenPortal';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
      // case 'login':
      //   return <Login setIsLoggedIn={setIsLoggedIn} setCurrentPage={setCurrentPage} />;
      // case 'citizen':
      //   return <CitizenPortal />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;