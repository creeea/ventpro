import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Mail</h4>
          <p>info@ventpro.ch</p>
        </div>
        <div className="footer-section">
          <h4>Handelsregister-Nummer</h4>
          <p>CH-100.4.819.465-1</p>
        </div>
        <div className="footer-section">
          <h4>Adresse</h4>
          <p>Kleinwilhöhe 2<br />6048 Horw</p>
        </div>
        <div className="footer-section">
          <p><a href="https://ventpro.ch/agb" className="footer-link" target="_blank" rel="noopener noreferrer">AGB</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 VentPro. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer; 