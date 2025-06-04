import React from "react";
import { useCart } from "../context/CartContext";//to access data from the shopping cart context
import { useNavigate } from "react-router-dom";//redirect to another page (for ordering).
import Button from "../components/Button/Button";

import "./Basket.scss";

//a component that displays the contents of the shopping cart.
const Basket = () => {
  const { cart, dispatch } = useCart(); //cart-items currently in cart, dispatch-sending actions to reducer(e.g. adding, removing or changing quantities)
  const navigate = useNavigate();//redirection to another page

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



