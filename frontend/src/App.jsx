import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Users from './components/Users';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav style={{ 
          background: 'linear-gradient(to right, #1E3A8A, #3B82F6)', 
          padding: '1.5rem', 
          color: 'white', 
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)' 
        }}>
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>ERP System</span>
            </div>
            <div className="flex space-x-6">
              <Link 
                to="/" 
                className="text-white hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-md transition duration-300"
                style={{ textDecoration: 'none', fontWeight: '500' }}
              >
                Dashboard
              </Link>
              <Link 
                to="/products" 
                className="text-white hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-md transition duration-300"
                style={{ textDecoration: 'none', fontWeight: '500' }}
              >
                Sản phẩm
              </Link>
              <Link 
                to="/users" 
                className="text-white hover:bg-white hover:bg-opacity-20 px-4 py-2 rounded-md transition duration-300"
                style={{ textDecoration: 'none', fontWeight: '500' }}
              >
                Người dùng
              </Link>
            </div>
          </div>
        </nav>
        <div className="container mx-auto p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;