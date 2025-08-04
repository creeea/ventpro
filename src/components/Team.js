import React from 'react';
import './Team.css';

const Team = () => {
  return (
    <div className="team" id="team">
      <div className="team-container">
        <h2>Unschlagbares Team</h2>
        
        <div className="team-grid">
          <div className="team-item">
            <div className="team-icon">
              <img src={process.env.PUBLIC_URL + '/horat.png'} alt="Patrick Horat" />
            </div>
            <h3>Patrick Horat</h3>
            <p className="team-position">Mitgründer</p>
            <p className="team-email"><i>p.horat@ventpro.ch</i></p>
          </div>

          <div className="team-item">
            <div className="team-icon">
              <img src={process.env.PUBLIC_URL + '/bachmann.png'} alt="Joel Bachmann" />
            </div>
            <h3>Joel Bachmann</h3>
            <p className="team-position">Mitgründer</p>
            <p className="team-email"><i>j.bachmann@ventpro.ch</i></p>
          </div>
        </div>
        
        <div className="team-description-card">
          <p>
            Seit über 15 Jahren stehen wir für Qualität, Präzision und Vertrauen in der Lüftungshygiene. Als spezialisierter Fachbetrieb bieten wir Ihnen umfassende Dienstleistungen in der Reinigung und <span className="highlighted-text-no-underline">Hygieneinspektion</span> von Lüftungsanlagen – inklusive <span className="highlighted-text-no-underline">Laboranalysen</span> nach aktuellen Standards. Unser erfahrenes Team verfügt über tiefgehendes Fachwissen und betreut erfolgreich Projekte im gesamten Bereich der Lüftungstechnik. Besonders wichtig ist uns die kontinuierliche <span className="highlighted-text-no-underline">Aus- und Weiterbildung</span> unserer Mitarbeitenden. Denn nur durch bestens geschulte Fachkräfte können wir dauerhaft <span className="highlighted-text-no-underline">höchste Qualität</span> garantieren. Wir sind im Besitz des Hygieneschulung <span className="highlighted-text-no-underline">A-Zertifikats</span> – ein klares Zeichen für unser Engagement und unsere Fachkompetenz im Bereich der Hygiene. Regelmäßige interne Schulungen sowie die strikte Einhaltung aller relevanten <span className="highlighted-text-no-underline">Normen und Richtlinien</span> sichern unseren Kunden nicht nur einen professionellen Service, sondern vor allem: saubere Luft und ein Höchstmaß an Sicherheit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team; 