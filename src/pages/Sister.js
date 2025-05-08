import React from "react";
import "./Sister.scss";

const Sister = () => {
  const images = [
    {
      id: "mt07-ip",
      src: "/images/IMG_6995_CZ.jpg",
      alt: "Hlavní terminál MT-07 IP",
      description: "Hlavní terminál MT-07 IP",
    },
    {
      id: "nt01-ip",
      src: "/images/Terminál sestry NT-01 IP_frontal.jpg",
      alt: "Terminál sestry NT-01 IP",
      description: "Terminál sestry NT-01 IP",
    },
    {
      id: "wb2s-sos",
      src: "/images/WB2-S SOS.jpg",
      alt: "Bezdrátové přenosné tlačítko SOS WB2-S",
      description: "Bezdrátové přenosné tlačítko SOS WB2-S",
    },
  ];

  const handleAddToCart = (item) => {
    alert(`Přidáno do košíku: ${item.description}`);
    // tady později můžeš přidat logiku pro správu stavu košíku
  };

  return (
    <section className="sister">
      <h2>Sesterna</h2>
      <div className="sister-gallery">
        {images.map((img) => (
          <div key={img.id} className="sister-card">
          <img src={img.src} alt={img.alt} />
          <div className="sister-footer">
            <p>{img.description}</p>
            <button onClick={() => handleAddToCart(img)}>Přidej do košíku</button>
          </div>
        </div>
        
        ))}
      </div>
    </section>
  );
};

export default Sister;

