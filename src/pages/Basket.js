import React from "react";
import { useCart } from "../CartContext";
import "./Basket.scss";

const Basket = () => {
  const { cart, dispatch } = useCart();

  const handleQuantityChange = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity: parseInt(quantity) } });
  };

  return (
    <div className="basket">
      <h2>Košík</h2>
      {cart.length === 0 ? (
        <p>Košík je prázdný.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <img src={item.src} alt={item.alt} width="50" />
              <span>{item.description}</span>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Basket;
