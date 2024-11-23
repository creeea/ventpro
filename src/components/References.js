import React, { useState, useEffect } from 'react';
import './References.css';


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
    description: "Aushilfe Komplette Wartung der Küchenabluftsysteme",
    contact: "Fr. Weber",
    image: "/flüma.png"
  },
  {
    id: 3,
    company: "Bürokomplex Zentrum",
    description: "Jährliche Inspektion und Reinigung der Klimaanlage",
    contact: "Hr. Schmidt",
    image: "/images/reference3.jpg"
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