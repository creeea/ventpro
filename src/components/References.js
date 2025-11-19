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
        <h2>Unser Partner</h2>
        
        <div className="partners-layout">
          <div className="partner-description-card">
            <p>
              In der Zentralschweiz arbeiten wir eng mit führenden Unternehmen unterschiedlichster Branchen zusammen. Besonders stolz sind wir auf unsere Partnerschaft mit Flüma Klima AG. Diese Kooperation steht für Vertrauen, Qualität und gemeinsame Werte.
            </p>
          </div>
          
          <div className="partner-images-container">
            <div className="partner-image-card">
              <a
                href="https://www.fluema.ch/"
                target="_blank"
                rel="noreferrer"
                aria-label="Flüma Klima AG Website"
              >
                <img src={process.env.PUBLIC_URL + '/flüma4.png'} alt="Flüma Klima AG" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="metrics-container">
          <div className="metric-item">
            <div className="metric-label">
              <span>Erfahrung in der</span>{' '}
              <span className="metric-label-break">Lüftungsbranche</span>
            </div>
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