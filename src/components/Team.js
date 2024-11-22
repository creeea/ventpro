import React from 'react';
import './Team.css';

const Team = () => {
  return (
    <div className="team" id="team">
      <div className="team-container">
        <h2>Unser Team</h2>
        <div className="team-grid">
          <div className="team-item">
            <div className="team-icon">
              {/* You can add profile image here later */}
            </div>
            <h3>Dominik Brun</h3>
            <p className="team-position">Geschäftsführer</p>
            <p className="team-description">
              Mit über 10 Jahren Erfahrung in der Lüftungshygiene leitet 
              Dominik Brun das Unternehmen mit Expertise und Innovation. 
              Er ist Ihr direkter Ansprechpartner für Projektanfragen und 
              technische Beratung.
            </p>
          </div>

          <div className="team-item">
            <div className="team-icon">
              {/* You can add profile image here later */}
            </div>
            <h3>Marco Brun</h3>
            <p className="team-position">Technischer Leiter</p>
            <p className="team-description">
              Als erfahrener Techniker koordiniert Marco Brun alle 
              Reinigungsprojekte und sorgt für die Qualitätssicherung. 
              Seine technische Expertise garantiert die professionelle 
              Durchführung aller Arbeiten.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team; 