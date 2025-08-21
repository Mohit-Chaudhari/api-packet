import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import RequestPanel from './RequestPanel';
import ResponsePanel from './ResponsePanel';
import Footer from './Footer';

const MainLayout = () => {
  const [showResponse, setShowResponse] = useState(true);

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        
        <div className="flex flex-col flex-grow">
          <RequestPanel />
          
          {/* Resizer handle */}
          <div 
            className="h-1 bg-gray-700 cursor-row-resize flex items-center justify-center hover:bg-blue-600 transition-colors"
            onClick={() => setShowResponse(!showResponse)}
          >
            <div className="w-16 h-1 bg-gray-600"></div>
          </div>
          
          {showResponse && (
            <div className="flex-1 overflow-hidden">
              <ResponsePanel />
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MainLayout;
