import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Cargo Tracker</h1>
        {isLoggedIn && (
          <ul className="flex space-x-6">
            <li>
              <Link to="/dashboard" className="hover:underline">Dashboard</Link>
            </li>
            <li>
              <Link to="/checkin" className="hover:underline">Check In</Link>
            </li>
            <li>
              <Link to="/checkout" className="hover:underline">Check Out</Link>
            </li>
            <li>
              <button onClick={handleLogout} className="hover:underline">Logout</button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
