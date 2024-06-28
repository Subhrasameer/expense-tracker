//Home.js//

import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <HeroSection />
      <section className="features">
        <h2>Features</h2>
        <div className="features-list">
          <div className="feature-item">
            <h3>Track Expenses</h3>
            <p>Keep a detailed record of all your expenses.</p>
          </div>
          <div className="feature-item">
            <h3>Manage Budget</h3>
            <p>Set budgets and monitor your spending habits.</p>
          </div>
          <div className="feature-item">
            <h3>Reports</h3>
            <p>Generate reports to analyze your expenses over time.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
