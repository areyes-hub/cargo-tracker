import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const CheckOut: React.FC = () => {
  const navigate = useNavigate();
  const [cargoId, setCargoId] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/cargo/checkout`, { cargoId }, {
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
});

      navigate('/dashboard');
    } catch (err) {
      setError('Check-out failed. Please try again.');
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Check Out Cargo</h2>
          {error && <div className="text-red-600 text-sm mb-4">{error}</div>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="cargoId"
              value={cargoId}
              onChange={(e) => setCargoId(e.target.value)}
              placeholder="Enter Cargo ID"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-red-700 transition"
            >
              Check Out
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
