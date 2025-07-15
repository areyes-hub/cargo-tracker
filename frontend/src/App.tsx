import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CheckIn from './pages/CheckIn';
import CheckOut from './pages/CheckOut';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import { useAuth } from './context/AuthContext';

const App: React.FC = () => {
  const { user } = useAuth(); // assume this is how you access auth

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/checkin"
          element={user ? <CheckIn /> : <Navigate to="/login" />}
        />
        <Route
          path="/checkout"
          element={user ? <CheckOut /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
};

export default App;
