import { useState } from 'react';
import axios from 'axios';

export default function CheckOut() {
  const [cargoId, setCargoId] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await axios.post('/api/inventory/checkout', { cargoId }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    alert('Checked out');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Cargo ID" value={cargoId} onChange={e => setCargoId(e.target.value)} />
      <button type="submit">Check Out</button>
    </form>
  );
}
