import React from 'react';
import './Landing.css';

function Landing() {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Ihr Fachexperte für Lüftungssysteme</h1>
            <p className="hero-subtitle">Superschnell. Sauber. Unkompliziert.</p>
            <p className="hero-description">
              Die VentPro GmbH reinigt einfache bis hoch komplexe Lüftungssysteme. 
              Als spezialisiertes Unternehmen in der Lüftungshygiene sind wir auf alles vorbereitet 
              und versprechen unseren Kunden einen hochwertigen Service und saubere Luft.
            </p>
          </div>
          <div className="circle-animation">
            <div className="rotating-elements">
              <div className="segment"></div>
              <div className="segment"></div>
              <div className="segment"></div>
              <div className="air-dots">
                {[...Array(64)].map((_, i) => (
                  <div key={i} className="dot"></div>
                ))}
              </div>
            </div>
            <div className="circle-text">
              <h2>VentPro</h2>
            </div>
          </div>
        </div>
      </div>

      <section className="services-section">
        <h2>Unsere Dienstleistungen</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🔧</div>
            <h3>Installation</h3>
            <p>Professionelle Installation von Lüftungssystemen für Gewerbe und Industrie</p>
          </div>
          <div className="service-card">
            <div className="service-icon">⚡</div>
            <h3>Wartung</h3>
            <p>Regelmäßige Wartung und Optimierung bestehender Systeme</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📋</div>
            <h3>Planung</h3>
            <p>Individuelle Planung und Beratung für Ihr Lüftungsprojekt</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing; 