import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white font-bold text-lg">Cargo Tracker</div>
      {isAuthenticated && (
        <div className="flex space-x-6 text-white">
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/checkin" className="hover:underline">Check In</Link>
          <Link to="/checkout" className="hover:underline">Check Out</Link>
          <button onClick={handleLogout} className="hover:underline">Logout</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
