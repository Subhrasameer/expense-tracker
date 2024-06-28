//Navbar.js//

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Expense Tracker</Link>
      </div>
      <div className={`navbar-links ${isMobile ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/track">Track</Link>
      </div>
      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;
