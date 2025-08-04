import React from 'react';
import './Services.css';

function Services() {
  return (
    <section className="services-section">
      <h2>Unsere Dienstleistungen</h2>
      <div className="services-grid">
        <div className="service-card">
          <div className="service-number">1</div>
          <h3>Hygiene-<br />Inspektion</h3>
          <p>Professionelle Inspektion Ihrer Lüftungsanlagen nach VDI 6022. Wir identifizieren potenzielle Gesundheitsrisiken und stellen sicher, dass Ihre Anlagen den gesetzlichen Standards entsprechen.</p>
        </div>
        <div className="service-card">
          <div className="service-number">2</div>
          <h3>Desinfektion von Lüftungsanlagen</h3>
          <p>Gründliche Desinfektion zur Beseitigung von Keimen, Bakterien und Schimmelpilzen. Wir sorgen für hygienisch einwandfreie Luftqualität in Ihren Räumen.</p>
        </div>
        <div className="service-card">
          <div className="service-number">3</div>
          <h3>Reinigung<br />KWL</h3>
          <p>Spezialisierte Reinigung von kontrollierten Wohnraumlüftungsanlagen. Wir gewährleisten optimale Luftqualität und Energieeffizienz für Ihr Zuhause.</p>
        </div>
        <div className="service-card">
          <div className="service-number">4</div>
          <h3>Reinigung Industrie & Gewerbeanlage</h3>
          <p>Umfassende Reinigung von industriellen und gewerblichen Lüftungsanlagen. Angepasst an Ihre spezifischen Anforderungen und Betriebszeiten.</p>
        </div>
        <div className="service-card">
          <div className="service-number">5</div>
          <h3>Reinigung<br />WC-Anlage</h3>
          <p>Hygienische Reinigung von WC-Lüftungsanlagen. Wir beseitigen Gerüche und sorgen für ein angenehmes Raumklima in Sanitäranlagen.</p>
        </div>
        <div className="service-card">
          <div className="service-number">6</div>
          <h3>Kamera-<br />Inspektion</h3>
          <p>Moderne Kameratechnik zur detaillierten Inspektion Ihrer Lüftungsanlagen. Wir machen das Unsichtbare sichtbar und dokumentieren den Zustand professionell.</p>
        </div>
      </div>
    </section>
  );
}

export default Services; 