import React from "react";
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";
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
                <button onClick={() => handleRemove(item.id)}>Odstranit</button>
              </li>
            ))}
          </ul>
          <div className="basket-actions">
            <button className="continue-btn" onClick={() => navigate("/Order")}>
              Pokračovat
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Basket;

