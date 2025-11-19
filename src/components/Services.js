import React from 'react';
import './Services.css';

function Services() {
  return (
    <section className="services-section">
      <h2>Unsere Dienstleistungen</h2>
      <div className="services-grid">
        <div className="service-card">
          <h3>Hygiene-Inspektion</h3>
          <p>Inspektion Ihrer Lüftungsanlagen nach SWKI VA104-01. Wir identifizieren potenzielle Gesundheitsrisiken und stellen sicher, dass Ihre Anlagen den gesetzlichen Standards entsprechen.</p>
        </div>
        
        <div className="service-card">
          <h3>Desinfektion von Lüftungsanlagen</h3>
          <p>Gründliche Desinfektion zur Beseitigung von Keimen, Bakterien und Schimmelpilzen. Wir sorgen für hygienisch einwandfreie Luftqualität in Ihren Räumen.</p>
        </div>
        
        <div className="service-card">
          <h3>Reinigung KWL</h3>
          <p>Spezialisierte Reinigung von kontrollierten Wohnraumlüftungsanlagen. Wir gewährleisten optimale Luftqualität und Energieeffizienz für Ihr Zuhause.</p>
        </div>
        
        <div className="service-card">
          <h3>Reinigung Industrie- & Gewerbeanlagen</h3>
          <p>Umfassende Reinigung von industriellen und gewerblichen Lüftungsanlagen. Angepasst an Ihre spezifischen Anforderungen und Betriebszeiten.</p>
        </div>
        
        <div className="service-card">
          <h3>Reinigung WC-Anlage</h3>
          <p>Hygienische Reinigung von WC-Lüftungsanlagen. Wir beseitigen Gerüche und sorgen für ein angenehmes Raumklima.</p>
        </div>
        
        <div className="service-card">
          <h3>Kamera-Inspektion</h3>
          <p>Moderne Kameratechnik für präzise Einblicke in Ihre Lüftungsanlagen. Wir machen das Unsichtbare sichtbar.</p>
        </div>
      </div>
    </section>
  );
}

export default Services; 