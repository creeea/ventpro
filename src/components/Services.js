import React from 'react';
import './Services.css';

function Services() {
  return (
    <section className="services-section">
      <h2>Unsere Dienstleistungen</h2>
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">🔧!</div>
          <h3>Installation</h3>
          <p>Professsionelle Installation von Lüftungssystemen für Gewerbe und Industrie</p>
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
  );
}

export default Services; 