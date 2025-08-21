import React, { useState } from 'react';

const Sidebar = () => {
  const [collections, setCollections] = useState([
    { id: 1, name: 'API Collection 1', isOpen: false, items: [
      { id: 101, name: 'GET Users', method: 'GET' },
      { id: 102, name: 'POST User', method: 'POST' },
      { id: 103, name: 'PUT User', method: 'PUT' },
    ]},
    { id: 2, name: 'API Collection 2', isOpen: false, items: [
      { id: 201, name: 'GET Products', method: 'GET' },
      { id: 202, name: 'POST Product', method: 'POST' },
    ]},
    { id: 3, name: 'API Collection 3', isOpen: false, items: [
      { id: 301, name: 'Authentication', method: 'POST' },
      { id: 302, name: 'Logout', method: 'GET' },
    ]},
  ]);

  const toggleCollection = (id) => {
    setCollections(collections.map(col => {
      if (col.id === id) {
        return { ...col, isOpen: !col.isOpen };
      }
      return col;
    }));
  };

  return (
    <div className="bg-gray-900 text-gray-300 w-64 flex-shrink-0 h-full overflow-y-auto">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-lg">Collections</h2>
          <button className="text-gray-400 hover:text-white p-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
        
        <div className="mb-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Filter" 
              className="bg-gray-800 text-white px-3 py-2 w-full rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 absolute right-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="space-y-1">
          {collections.map((collection) => (
            <div key={collection.id} className="rounded hover:bg-gray-800">
              <div 
                className="flex items-center justify-between p-2 cursor-pointer"
                onClick={() => toggleCollection(collection.id)}
              >
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 mr-2 transform ${collection.isOpen ? 'rotate-90' : ''} transition-transform duration-200`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  {collection.name}
                </span>
                <span className="text-xs text-gray-500">{collection.items.length}</span>
              </div>
              
              {collection.isOpen && (
                <div className="ml-6 pl-2 border-l border-gray-700 my-1">
                  {collection.items.map((item) => (
                    <div key={item.id} className="flex items-center p-1.5 cursor-pointer hover:bg-gray-800 rounded group">
                      <span className={`text-xs font-bold mr-2 w-12 ${
                        item.method === 'GET' ? 'text-green-500' : 
                        item.method === 'POST' ? 'text-yellow-500' : 
                        item.method === 'PUT' ? 'text-blue-500' : 
                        item.method === 'DELETE' ? 'text-red-500' : 'text-gray-500'
                      }`}>
                        {item.method}
                      </span>
                      <span className="text-sm">{item.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
