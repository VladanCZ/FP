import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext"; // ujisti se, že cesta sedí
import "./Order.scss";

const Order = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate();
  const { dispatch } = useCart(); // z CartContextu

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Odeslaná objednávka:", formData);
    alert("Objednávka byla úspěšně odeslána!");

    // Vyprázdni košík
    dispatch({ type: "CLEAR_CART" });

    // Přesměrování domů
    navigate("/", { state: { message: "Objednávka byla úspěšně odeslána." } });

  };

  return (
    <div className="order-form">
      <h2>Objednávka</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="Jméno" onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Příjmení" onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Telefon" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <textarea name="message" placeholder="Zpráva" onChange={handleChange} />
        <button type="submit">Objednat</button>
      </form>
    </div>
  );
};

export default Order;

