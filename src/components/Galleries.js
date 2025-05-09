import React from "react";
import "./Gallery.scss";


export const Gallery = ({images}) => {

    const handleAddToCart = (item) => {
    alert(`Přidáno do košíku: ${item.description}`);
    //  později pro správu stavu košíku
  };

    return <div className="gallery">
        {images.map((img) => (
          <div key={img.id} className="card">
          <img src={img.src} alt={img.alt} />
          <div className="gallery-footer">
            <p>{img.description}</p>
            <button onClick={() => handleAddToCart(img)}>Přidej do košíku</button>
          </div>
        </div>
        
        ))}
      </div>
}