import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>VentPro</h4>
          <p>Professional Ventilation Solutions</p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>info@ventpro.ch</p>
          <p>+41 XX XXX XX XX</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          {/* Add social media links */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 VentPro. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 