import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 border-t border-gray-700 py-2 px-4 text-xs flex items-center justify-between">
      <div>
        <span>Status: Connected</span>
        <span className="ml-3">Version: 1.0.0</span>
      </div>
      <div>
        <span>© {new Date().getFullYear()} API-Packet</span>
      </div>
    </footer>
  );
};

export default Footer;
