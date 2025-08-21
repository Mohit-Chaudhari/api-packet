import React, { useState } from 'react';

const RequestPanel = () => {
  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('https://api.example.com/endpoint');
  const [activeTab, setActiveTab] = useState('params');
  
  const methods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'];

  return (
    <div className="flex flex-col flex-grow">
      {/* Request URL Bar */}
      <div className="flex items-center p-2 bg-gray-800 border-b border-gray-700">
        <div className="relative inline-block w-24">
          <select 
            className="bg-gray-700 text-white w-full py-1.5 pl-3 pr-8 rounded-l outline-none appearance-none cursor-pointer"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          >
            {methods.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
            </svg>
          </div>
        </div>
        
        <input 
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-grow bg-gray-700 text-white px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Enter request URL"
        />
        
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-r transition-colors">
          Send
        </button>
      </div>
      
      {/* Request Configuration Tabs */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="flex">
          {['Params', 'Headers', 'Body', 'Tests'].map((tab) => {
            const lowerTab = tab.toLowerCase();
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
      
      {/* Request Configuration Content */}
      <div className="flex-grow bg-gray-900 p-4 overflow-auto">
        {activeTab === 'params' && (
          <div className="bg-gray-800 border border-gray-700 rounded">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="px-4 py-2 text-left text-gray-400 font-normal">KEY</th>
                  <th className="px-4 py-2 text-left text-gray-400 font-normal">VALUE</th>
                  <th className="px-4 py-2 text-left text-gray-400 font-normal">DESCRIPTION</th>
                  <th className="w-10"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">
                    <input type="text" className="bg-gray-700 w-full px-2 py-1 rounded text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Key" />
                  </td>
                  <td className="px-4 py-2">
                    <input type="text" className="bg-gray-700 w-full px-2 py-1 rounded text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Value" />
                  </td>
                  <td className="px-4 py-2">
                    <input type="text" className="bg-gray-700 w-full px-2 py-1 rounded text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Description (Optional)" />
                  </td>
                  <td className="px-4 py-2">
                    <button className="text-gray-400 hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        
        {activeTab === 'headers' && (
          <div className="bg-gray-800 border border-gray-700 rounded">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="px-4 py-2 text-left text-gray-400 font-normal">KEY</th>
                  <th className="px-4 py-2 text-left text-gray-400 font-normal">VALUE</th>
                  <th className="px-4 py-2 text-left text-gray-400 font-normal">DESCRIPTION</th>
                  <th className="w-10"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">
                    <input type="text" className="bg-gray-700 w-full px-2 py-1 rounded text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Content-Type" />
                  </td>
                  <td className="px-4 py-2">
                    <input type="text" className="bg-gray-700 w-full px-2 py-1 rounded text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="application/json" />
                  </td>
                  <td className="px-4 py-2">
                    <input type="text" className="bg-gray-700 w-full px-2 py-1 rounded text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Description (Optional)" />
                  </td>
                  <td className="px-4 py-2">
                    <button className="text-gray-400 hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        
        {activeTab === 'body' && (
          <div className="bg-gray-800 border border-gray-700 rounded p-4">
            <div className="flex space-x-3 mb-3">
              <label className="flex items-center">
                <input type="radio" name="bodyType" className="mr-1" defaultChecked />
                <span className="text-sm text-gray-300">none</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="bodyType" className="mr-1" />
                <span className="text-sm text-gray-300">form-data</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="bodyType" className="mr-1" />
                <span className="text-sm text-gray-300">x-www-form-urlencoded</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="bodyType" className="mr-1" />
                <span className="text-sm text-gray-300">raw</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="bodyType" className="mr-1" />
                <span className="text-sm text-gray-300">binary</span>
              </label>
            </div>
            <div className="font-mono bg-gray-900 p-4 rounded text-gray-300 h-40">
              {/* Content will be added based on selected body type */}
              <p className="text-gray-500 text-sm">{`// Select a body type to edit the content`}</p>
            </div>
          </div>
        )}
        
        {activeTab === 'tests' && (
          <div className="bg-gray-800 border border-gray-700 rounded p-4">
            <div className="font-mono bg-gray-900 p-4 rounded text-gray-300 h-40">
              <p className="text-gray-500 text-sm">{`// Write test scripts here\n// Examples:\npm.test("Status code is 200", function () {\n    pm.response.to.have.status(200);\n});\n\npm.test("Response time is less than 500ms", function () {\n    pm.expect(pm.response.responseTime).to.be.below(500);\n});`}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestPanel;
