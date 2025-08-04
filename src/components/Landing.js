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
            <a href="#references" onClick={() => setIsMenuOpen(false)}>Partner</a>
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
            <h1>Ihr Fachexperte für <span className="highlighted-text-no-underline">Lüftungshygiene</span></h1>
            <p className="hero-description">
              Ob einfache Lüftungsanlage oder komplexes System: Als erfahrene Spezialisten in der Lüftungshygiene garantieren wir Ihnen nicht nur höchste Reinigungsstandards, sondern auch einen Service, der überzeugt – professionell, zuverlässig und mit dem Blick fürs Detail.
            </p>
            <p className="contact-prompt">Kontaktieren Sie uns – wir sind rund um die Uhr für Sie da.</p>
            <div className="hero-buttons">
              <a href="tel:+41783316102" className="hero-button">
                <i className="fas fa-phone"></i> +41 78 331 61 02
              </a>
              <a href="mailto:info@ventpro.ch" className="hero-button">
                <i className="fas fa-envelope"></i> info@ventpro.ch
              </a>
            </div>
          </div>
          <div className="circle-animation">
            <img src={process.env.PUBLIC_URL + '/logo_outside.png'} alt="VentPro Logo" className="logo-image" />
            <img src={process.env.PUBLIC_URL + '/logo_inside.png'} alt="VentPro Logo Inner" className="logo-image-inner" />
            <div className="air-dots">
              {[...Array(40)].map((_, i) => (
                <div key={i} className={`air-dot ${i % 3 === 0 ? 'white' : ''}`}></div>
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