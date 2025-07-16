import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const CheckIn: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    description: '',
    weight: '',
    destination: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...form,
      weight: Number(form.weight), // Convert weight to number
    };

    try {
  const res = await axios.post('/api/cargo/checkin', payload, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  console.log('Check-in Success:', res.data);
  navigate('/dashboard');
} catch (err: any) {
  console.error('Check-in Error:', err.response?.data || err.message);
  setError(err.response?.data?.message || 'Check-in failed. Please try again.');
}
  };

  return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Check In Cargo</h2>
          {error && <div className="text-red-600 text-sm mb-4">{error}</div>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Description"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="number"
              name="weight"
              value={form.weight}
              onChange={handleChange}
              placeholder="Weight (kg)"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="destination"
              value={form.destination}
              onChange={handleChange}
              placeholder="Destination"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
  );
};

export default CheckIn;
