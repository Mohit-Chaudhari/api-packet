import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white h-14 flex items-center justify-between px-4 border-b border-gray-700">
      <div className="flex items-center space-x-4">
        <div className="text-xl font-bold">API-Packet</div>
        <nav className="hidden md:flex space-x-2">
          <button className="px-3 py-1 rounded hover:bg-gray-700 transition-colors">Collections</button>
          <button className="px-3 py-1 rounded hover:bg-gray-700 transition-colors">APIs</button>
          <button className="px-3 py-1 rounded hover:bg-gray-700 transition-colors">Environments</button>
        </nav>
      </div>
      <div className="flex items-center space-x-3">
        <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm transition-colors">New</button>
        <button className="hover:bg-gray-700 p-2 rounded transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
