import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [cargo, setCargo] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('/api/inventory', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setCargo(res.data));
  }, []);

  return (
    <div>
      <h1>Inventory Dashboard</h1>
      <ul>
        {cargo.map((item: any) => (
          <li key={item._id}>{item.name} - {item.status}</li>
        ))}
      </ul>
    </div>
  );
}
