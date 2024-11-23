import React from 'react';
import './Landing.css';
import Services from './Services';
import Team from './Team';
import References from './References';

function Landing() {
  return (
    <>
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
          </div>
          <div className="hero-separator"></div>
        </div>
      </div>
      <Services />
      <References />
      <Team />
    </>
  );
}

export default Landing; 