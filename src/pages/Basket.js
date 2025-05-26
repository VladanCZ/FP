import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";

import "./Basket.scss";

const Basket = () => {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity: parseInt(quantity) } });
  };

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };

  return (
    <div className="basket">
      <h2>Košík</h2>
      {cart.length === 0 ? (
        <p>Košík je prázdný.</p>
      ) : (
        <>
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
                <span
                  className="remove-icon"
                  onClick={() => handleRemove(item.id)}
                  title="Odstranit"
                >
                  &times;
                </span>
              </li>
            ))}
          </ul>
          <div className="basket-actions">
            <Button onClick={() => navigate("/Objednavka")}>Pokračovat</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Basket;



