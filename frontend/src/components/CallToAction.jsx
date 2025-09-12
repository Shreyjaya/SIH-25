import React from 'react';

const CallToAction = ({ setCurrentPage }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Start Monitoring Today</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Join researchers and environmental agencies worldwide in protecting communities from heavy metal contamination
        </p>
        <div className="flex justify-center gap-4">
          <button 
            onClick={() => setCurrentPage('upload')}
            className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition"
          >
            Upload Your Data
          </button>
          <button 
            onClick={() => setCurrentPage('dashboard')}
            className="border border-white text-white-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 hover:text-white transition-colors duration-300"
          >
            View Demo Dashboard
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;