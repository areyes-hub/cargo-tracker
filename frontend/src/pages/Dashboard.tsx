import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

interface CargoItem {
  _id: string;
  description: string;
  weight: number;
  destination: string;
  status: string;
  checkInDate: string;
  checkOutDate?: string;
}

const Dashboard: React.FC = () => {
  const [cargo, setCargo] = useState<CargoItem[]>([]);
  const [filters, setFilters] = useState({
    description: '',
    destination: '',
    status: '',
  });

  useEffect(() => {
    const fetchCargo = async () => {
      try {
        const response = await axios.get('/api/cargo', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setCargo(response.data.reverse()); // Show newest first
      } catch (error) {
        console.error(error);
      }
    };
    fetchCargo();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredCargo = cargo.filter(item =>
  (item.description?.toLowerCase() || '').includes(filters.description.toLowerCase()) &&
  (item.destination?.toLowerCase() || '').includes(filters.destination.toLowerCase()) &&
  (item.status?.toLowerCase() || '').includes(filters.status.toLowerCase())
);

  return (
    <>
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-center">Cargo Dashboard</h1>

        <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            name="description"
            placeholder="Filter by Description"
            value={filters.description}
            onChange={handleChange}
            className="p-3 border rounded"
          />
          <input
            type="text"
            name="destination"
            placeholder="Filter by Destination"
            value={filters.destination}
            onChange={handleChange}
            className="p-3 border rounded"
          />
          <select
            name="status"
            value={filters.status}
            onChange={handleChange}
            className="p-3 border rounded"
          >
            <option value="">All Statuses</option>
            <option value="checked-in">Checked In</option>
            <option value="checked-out">Checked Out</option>
          </select>
          <button
            onClick={() => setFilters({ description: '', destination: '', status: '' })}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
          >
            Clear Filters
          </button>
        </div>

        <div className="overflow-x-auto flex justify-center">
          <table className="min-w-full max-w-5xl bg-white rounded-lg shadow overflow-hidden">
            <thead className="bg-gray-200 text-xs uppercase font-semibold">
              <tr>
                <th className="p-3 text-left">Cargo ID</th>
                <th className="p-3 text-left">Description</th>
                <th className="p-3 text-left">Weight (kg)</th>
                <th className="p-3 text-left">Destination</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Check-In</th>
                <th className="p-3 text-left">Check-Out</th>
              </tr>
            </thead>
            <tbody>
              {filteredCargo.map(item => (
                <tr key={item._id} className="border-t">
                  <td className="p-3 font-mono text-sm text-gray-800">{item._id}</td>
                  <td className="p-3">{item.description}</td>
                  <td className="p-3">{item.weight}</td>
                  <td className="p-3">{item.destination}</td>
                  <td className="p-3">{item.status}</td>
                  <td className="p-3">{new Date(item.checkInDate).toLocaleString()}</td>
                  <td className="p-3">
                    {item.checkOutDate ? new Date(item.checkOutDate).toLocaleString() : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
