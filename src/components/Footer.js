import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Phone</h4>
          <p>+41 78 331 61 01</p>
        </div>
        <div className="footer-section">
          <h4>Mail</h4>
          <p>info@ventpro.ch</p>
        </div>
        <div className="footer-section">
          <h4>Handelsregister-Nummer</h4>
          <p>CH-100.4.819.465-1</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 VentPro. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 