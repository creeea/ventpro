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
            <h3>Patrick Horat</h3>
            <p className="team-position">Mitgründer</p>
            <p className="team-email"><i>p.horat@ventpro.ch</i></p>
            <p className="team-description">
              Mit über 20 Jahren Erfahrung in Lüftungssysteme leitet 
              Patrick Horat das Unternehmen mit Expertise und Innovation. 
              Er ist Ihr direkter Ansprechpartner für Projektanfragen und 
              technische Beratung.
            </p>
          </div>

          <div className="team-item">
            <div className="team-icon">
              {/* You can add profile image here later */}
            </div>
            <h3>Joel Bachmann</h3>
            <p className="team-position">Mitgründer</p>
            <p className="team-email"><i>j.bachmann@ventpro.ch</i></p>
            <p className="team-description">
              Als erfahrener Techniker koordiniert Joel Bachmann alle 
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