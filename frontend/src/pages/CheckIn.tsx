import { useState } from 'react';
import axios from 'axios';

export default function CheckIn() {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await axios.post('/api/inventory/checkin', { name, description: desc, location }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    alert('Checked in');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Description" value={desc} onChange={e => setDesc(e.target.value)} />
      <input placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} />
      <button type="submit">Check In</button>
    </form>
  );
}
