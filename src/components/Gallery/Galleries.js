import React from "react";
import "./Gallery.scss";
import { useCart } from "../../context/CartContext"; // hook-access to the cart context
import Button from "../Button/Button"; 

//component - props accepts an array of objects images{id, src,alt,...}
const Gallery = ({ images }) => {
  const { dispatch } = useCart(); //Accessing the cart context
                                    

  const handleAddToCart = (item) => {   //Add to Cart function
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  return (
    <div className="gallery">
      {images.map((img) => (
        <div key={img.id} className="card">
          <img src={img.src} alt={img.alt} />
          <div className="gallery-footer">
            <h4>{img.description}</h4>

            <Button onClick={() => handleAddToCart(img)}>  
              Přidej do košíku
            </Button>
            

          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
