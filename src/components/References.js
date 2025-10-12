import React, { useState, useEffect } from 'react';
import './References.css';

function AnimatedCounter({ endValue, suffix = '' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < endValue) {
      const timer = setTimeout(() => {
        setCount(prev => Math.min(prev + 2, endValue));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [count, endValue]);

  return <span className="counter-value">{count}{suffix}</span>;
}

function References() {

  return (
    <section className="references" id="references">
      <div className="references-container">
        <h2>Unsere Partner</h2>
        
        <div className="partners-layout">
          <div className="partner-description-card">
            <p>
              In der Zentralschweiz arbeiten wir eng mit führenden Unternehmen unterschiedlichster Branchen zusammen. Besonders stolz sind wir auf unsere Partnerschaften mit Flüma Klima AG und Anis Lufttechnik GmbH, zwei etablierte Namen in der Klima- und Lüftungstechnik. Diese Kooperationen stehen für Vertrauen, Qualität und gemeinsame Werte.
              Mit unseren Partnern setzen wir neue Standards in der Lüftungshygiene und entwickeln nachhaltige Lösungen für saubere Luft.
            </p>
          </div>
          
          <div className="partner-images-container">
            <div className="partner-image-card">
              <img src={process.env.PUBLIC_URL + '/flüma4.png'} alt="Flüma Klima AG" />
            </div>
            <div className="partner-image-card">
              <img src={process.env.PUBLIC_URL + '/anis.png'} alt="Anis" />
            </div>
          </div>
        </div>
        
        <div className="metrics-container">
          <div className="metric-item">
            <div className="metric-label">Erfahrung in der Lüftungsbranche</div>
            <AnimatedCounter endValue={25} suffix=" Jahre" />
          </div>
          <div className="metric-item">
            <div className="metric-label">Ausgeführte Aufträge</div>
            <AnimatedCounter endValue={87} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default References; 