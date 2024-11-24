import React, { useState, useEffect } from 'react';
import './References.css';

function AnimatedCounter({ endValue }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < endValue) {
      const timer = setTimeout(() => {
        setCount(prev => prev + 3);
      }, 500); // Adjust speed of counting here
      return () => clearTimeout(timer);
    }
  }, [count, endValue]);

  return <span className="team-size">{count}</span>;
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
        <div className="team-counter">
          Teamgrösse: <AnimatedCounter endValue={7} />
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