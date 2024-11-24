import React, { useState } from 'react';
import './Landing.css';
import Services from './Services';
import Team from './Team';
import References from './References';

function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            
          </div>
          <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Dienstleistungen</a>
            <a href="#references" onClick={() => setIsMenuOpen(false)}>Referenzen</a>
            <a href="#team" onClick={() => setIsMenuOpen(false)}>Team</a>
            <a href="#footer" onClick={() => setIsMenuOpen(false)}>Kontakt</a>
          </div>
          <div className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <div className="hero" id="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Ihr Fachexperte für Lüftungssysteme</h1>
            <p className="hero-subtitle">Superschnell. Sauber. Unkompliziert.</p>
            <p className="hero-description">
              Die VentPro GmbH reinigt einfache bis hoch komplexe Lüftungssysteme. 
              Als spezialisiertes Unternehmen in der Lüftungshygiene sind wir auf alles vorbereitet 
              und versprechen unseren Kunden einen hochwertigen Service und saubere Luft.
            </p>
            <p className="contact-prompt">Melde dich - wir bearbeiten alle Anfragen 24/7</p>
            <div className="hero-buttons">
              <a href="tel:+41123456789" className="hero-button">
                <i className="fas fa-phone"></i> +41 12 345 67 89
              </a>
              <a href="mailto:info@ventpro.ch" className="hero-button">
                <i className="fas fa-envelope"></i> info@ventpro.ch
              </a>
            </div>
          </div>
          <div className="circle-animation">
            <div className="rotating-elements">
              <div className="segment"></div>
              <div className="segment"></div>
              <div className="segment"></div>
            </div>
            <div className="circle-text">
              <h2>VentPro</h2>
            </div>
            <div className="air-dots">
              {[...Array(40)].map((_, i) => (
                <div key={i} className="air-dot"></div>
              ))}
            </div>
          </div>
          <div className="hero-separator"></div>
        </div>
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="references">
        <References />
      </div>
      <div id="team">
        <Team />
      </div>
    </>
  );
}

export default Landing; 