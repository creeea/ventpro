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

const referencesList = [
  {
    id: 1,
    company: "ID Performance AG",
    description: "Professionelle Reinigung der Lüftungsanlage in 5 Wohnungen in Udligenswil.",
    contact: "Manfred Moser",
    image: "/id-performance.png"  // Add your image path
  },
  {
    id: 2,
    company: "Flüma Klima AG",
    description: "Unser Partner für alles rund um Lüfungsreinigungen und Inspektionen",
    contact: "Fr. Weber",
    image: "/flüma.png"
  },
  {
    id: 3,
    company: "Swiss Staking AG",
    description: "Gründliche Reinigung der Lüftungsanlage. Junges dynamisches und motiviertes Team!",
    contact: "G. Voutat",
    image: "/swiss-staking.png"
  }
  // Add more references as needed
];

function References() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === referencesList.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Rotate every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="references" id="references">
      <div className="references-container">
        <h2>Referenzen</h2>
        
        <p className="metrics-message">
          Als dynamisches, wachstumsorientiertes Unternehmen teilen wir unsere Referenzen und Metriken offen und transparent. 
          Unser Antrieb ist es, durch schnelle, präzise und qualitativ hochwertige Arbeit erfolgreich in der Zentralschweiz zu wachsen.
        </p>
        
        <div className="metrics-container">
          <div className="metric-item">
            <div className="metric-label">Gemeinsame Expertise in Lüftungssysteme</div>
            <AnimatedCounter endValue={25} suffix=" Jahre" />
          </div>
          <div className="metric-item">
            <div className="metric-label">Ausgeführte Aufträge</div>
            <AnimatedCounter endValue={15} />
          </div>
          <div className="metric-item">
            <div className="metric-label">Teamgrösse</div>
            <AnimatedCounter endValue={7} />
          </div>
        </div>
        
        <div className="references-slider">
          <div className="reference-card">
            <img 
              src={referencesList[currentIndex].image} 
              alt={referencesList[currentIndex].company} 
            />
            <div className="reference-content">
              <h3>{referencesList[currentIndex].company}</h3>
              <p>{referencesList[currentIndex].description}</p>
              <span className="reference-contact">
                {referencesList[currentIndex].contact}
              </span>
            </div>
          </div>
          <div className="reference-indicators">
            {referencesList.map((_, index) => (
              <span 
                key={index} 
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default References; 