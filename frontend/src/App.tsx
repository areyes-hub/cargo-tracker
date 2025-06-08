import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CheckIn from './pages/CheckIn';
import CheckOut from './pages/CheckOut';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/checkin" element={<CheckIn />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </Router>
  );
}
