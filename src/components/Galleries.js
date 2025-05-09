import React from "react";
import "./Gallery.scss";
import { useCart } from "../CartContext";

const Gallery = ({ images }) => {
  const { dispatch } = useCart();

  const handleAddToCart = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  return (
    <div className="gallery">
      {images.map((img) => (
        <div key={img.id} className="card">
          <img src={img.src} alt={img.alt} />
          <div className="gallery-footer">
            <h4>{img.description}</h4>
            <button onClick={() => handleAddToCart(img)}>Přidej do košíku</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
