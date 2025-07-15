import { Link } from 'react-router-dom';
import './Landing.css';
import checkinImg from './images/checkin.jpg';
import filterImg from './images/filter.jpg';
import securityImg from './images/security.jpg';


export default function Landing() {
  return (
    <div>
      <header className="hero">
        <div className="container">
          <h1 className="headline">Smarter Cargo Management</h1>
          <p className="subhead">Track, manage, and optimize your cargo flow in real-time.</p>
          <Link to="/login" className="cta">Get Started</Link>
        </div>
      </header>

      <section id="features" className="features container">
        <h2>Key Features</h2>
        <div className="feature-grid">
          <div className="feature">
            <img src={checkinImg} alt="Real-time Check-in" />
            <h3>Real-Time Check-In/Out</h3>
            <p>Instantly log cargo movements with time-stamped check-ins and check-outs.</p>
          </div>
          <div className="feature">
            <img src={filterImg} alt="Dashboard Filtering" />
            <h3>Dashboard Filtering</h3>
            <p>Filter and search cargo records easily by status, destination, and more.</p>
          </div>
          <div className="feature">
            <img src={securityImg} alt="JWT Security" />
            <h3>JWT Authentication</h3>
            <p>Protect your cargo data with secure, token-based user access control.</p>
          </div>
        </div>
      </section>

      <section id="about" className="about container">
        <h2>About the Project</h2>
        <p>Inspired by my experience in the air cargo industry, where I witnessed the need for better inventory control and tracking systems, Cargo Tracker emerged as a solution that blends practical logistics challenges with modern web technology.</p>
        <ul>
          <li><a href="https://github.com/areyes-hub" target="_blank">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/angel-reyes-234421248/" target="_blank">LinkedIn</a></li>
        </ul>
        <p><a href="https://github.com/areyes-hub/cargo-tracker" target="_blank">Project GitHub Repository</a></p>
      </section>

      <footer className="footer">
        &copy; 2025 Cargo Tracker. All rights reserved.
      </footer>
    </div>
  );
}
