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
            <p className="team-phone">+41 78 331 61 01</p>
            
            <div className="education-section">
              <div className="education-card">
                <ul className="education-list">
                  <li>Hygieneinspektor A</li>
                  <li>Sanitärinstallateur EFZ</li>
                  <li>Anschlussbewilligung Niv 15</li>
                  <li>Servicetechniker Lüftung & Klima</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="team-item">
            <div className="team-icon">
              <img src={process.env.PUBLIC_URL + '/bachmann.png'} alt="Joel Bachmann" />
            </div>
            <h3>Joël Bachmann</h3>
            <p className="team-position">Mitgründer</p>
            <p className="team-email"><i>j.bachmann@ventpro.ch</i></p>
            <p className="team-phone">+41 78 331 61 02</p>
            
            <div className="education-section">
              <div className="education-card">
                <ul className="education-list">
                  <li>Hygieneinspektor A</li>
                  <li>Lüftungsanlagenbauer EFZ</li>
                  <li>Gebäudetechnikplaner Lüftung EFZ</li>
                  <li>Dipl. Gebäudetechniker HF mit Schwerpunkt Klima (in Ausbildung)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team; 