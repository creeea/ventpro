import React from 'react';
import './Services.css';

function Services() {
  return (
    <section className="services-section">
      <h2>Unsere Dienstleistungen</h2>
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">
            <img src={process.env.PUBLIC_URL + '/192hygiene.png'} alt="Hygiene Service" />
          </div>
          <h3>Reinigung</h3>
          <p>Ein Mensch atmet täglich 12.000 Liter Luft ein - 90% davon in Innenräumen. Verschmutzte Lüftungsanlagen werden zu stillen Gesundheitsrisiken, wenn sich Mikroorganismen, Bakterien und Schimmelpilze ungehindert vermehren. Unsere professionelle RLT-Anlagenreinigung verhindert die Verteilung dieser Schadstoffe in Ihrer Atemluft. Denn gesunde Raumluft ist nicht nur Komfort, sondern fundamentales Grundbedürfnis – ob im Büro, in der Produktion oder zu Hause.</p>
        </div>
        <div className="service-card">
        <div className="service-icon">
        <img src={process.env.PUBLIC_URL + '/192inspektion.png'} alt="Inspektion Service" />
        </div>
          <h3>Inspektion</h3>
          <p>Kritische Keimbelastungen in RLT-Anlagen bleiben oft unentdeckt – mit schwerwiegenden Folgen für Gesundheit und Betriebssicherheit. Unsere nach VDI 6022 zertifizierten Hygieneinspektionen decken durch mikrobiologische Proben Grenzwertüberschreitungen auf und sichern die Einhaltung gesetzlicher Standards. Wissenschaftlich fundiert, normgerecht, präventiv.</p>
        </div>
        <div className="service-card">
          <div className="service-icon">
        <img src={process.env.PUBLIC_URL + '/192zusammenarbeit.png'} alt="Beratung Service" />
        </div>
          <h3>Beratung</h3>
          <p>Ihr Projekt beginnt mit einem persönlichen Gespräch. Gemeinsam entwickeln wir die optimale Strategie für Ihre Anlage. Unser spezialisiertes Team, modernste Technik und jahrelange Erfahrung garantieren einen reibungslosen Ablauf – angepasst an Ihre individuellen Anforderungen und Betriebszeiten. Unkompliziert, transparent, effektiv.</p>
        </div>
      </div>
    </section>
  );
}

export default Services; 