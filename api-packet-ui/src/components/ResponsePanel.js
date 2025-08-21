import React, { useState } from 'react';

const ResponsePanel = () => {
  const [activeTab, setActiveTab] = useState('body');

  // Mock response data
  const responseData = {
    status: 200,
    statusText: 'OK',
    time: '135 ms',
    size: '1.5 KB',
    headers: [
      { key: 'Content-Type', value: 'application/json; charset=utf-8' },
      { key: 'Cache-Control', value: 'no-cache' },
      { key: 'Pragma', value: 'no-cache' },
      { key: 'Date', value: 'Fri, 22 Aug 2025 12:34:56 GMT' },
    ],
    body: {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      status: "active",
      createdAt: "2025-08-10T10:30:00Z"
    }
  };

  return (
    <div className="flex flex-col bg-gray-900 border-t border-gray-700">
      <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            {responseData.status} {responseData.statusText}
          </span>
          <span className="ml-4 text-sm text-gray-400">{responseData.time}</span>
          <span className="ml-4 text-sm text-gray-400">{responseData.size}</span>
        </div>
        <button className="text-sm text-gray-400 hover:text-white">
          Save Response
        </button>
      </div>

      {/* Response Tabs */}
      <div className="bg-gray-800 border-t border-b border-gray-700">
        <div className="flex">
          {['Body', 'Cookies', 'Headers', 'Test Results'].map((tab) => {
            const lowerTab = tab.toLowerCase().replace(' ', '');
            return (
              <button
                key={lowerTab}
                onClick={() => setActiveTab(lowerTab)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === lowerTab 
                    ? 'text-white border-b-2 border-blue-500' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Response Content */}
      <div className="flex-grow p-4 overflow-auto">
        {activeTab === 'body' && (
          <div>
            <div className="flex space-x-3 mb-3">
              <button 
                className="text-sm font-medium text-blue-500 border-b-2 border-blue-500 pb-1"
              >
                Pretty
              </button>
              <button className="text-sm text-gray-400 hover:text-white">Raw</button>
              <button className="text-sm text-gray-400 hover:text-white">Preview</button>
              <button className="text-sm text-gray-400 hover:text-white">Visualize</button>
            </div>
            
            <div className="font-mono bg-gray-800 rounded border border-gray-700 p-4 text-white">
              <pre>{JSON.stringify(responseData.body, null, 2)}</pre>
            </div>
          </div>
        )}
        
        {activeTab === 'headers' && (
          <div className="bg-gray-800 border border-gray-700 rounded">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="px-4 py-2 text-left text-gray-400 font-normal">KEY</th>
                  <th className="px-4 py-2 text-left text-gray-400 font-normal">VALUE</th>
                </tr>
              </thead>
              <tbody>
                {responseData.headers.map((header, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="px-4 py-2 text-white">{header.key}</td>
                    <td className="px-4 py-2 text-white">{header.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        {activeTab === 'testresults' && (
          <div className="bg-gray-800 border border-gray-700 rounded p-4">
            <div className="flex items-center mb-3">
              <svg className="h-5 w-5 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-green-500 font-medium">2/2 Tests passed</span>
            </div>
            <div className="space-y-2">
              <div className="bg-gray-900 p-3 rounded text-sm">
                <div className="flex items-center">
                  <svg className="h-4 w-4 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white">Status code is 200</span>
                </div>
              </div>
              <div className="bg-gray-900 p-3 rounded text-sm">
                <div className="flex items-center">
                  <svg className="h-4 w-4 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white">Response time is less than 500ms</span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'cookies' && (
          <div className="bg-gray-800 border border-gray-700 rounded p-4">
            <p className="text-gray-400 text-center py-4">No cookies found in the response</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResponsePanel;
