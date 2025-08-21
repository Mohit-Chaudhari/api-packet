import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <header className="p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">API-PACKET UI</h1>
        <p className="text-gray-700">
          Welcome to your new React application with Tailwind CSS.
        </p>
        <div className="mt-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
