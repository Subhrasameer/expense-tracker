//HeroSection.js//

import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="text">
        <h1>Welcome to Expense Tracker</h1>
        <p>Keep track of your expenses and manage your finances efficiently.</p>
      </div>
      <div className="image">
        <img src="./logo.png" alt="Expense Tracker" />
      </div>
    </div>
  );
}

export default HeroSection;
