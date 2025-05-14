import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";
import emailjs from "@emailjs/browser";
import "./Order.scss";

const Order = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate();
  const { cart, dispatch } = useCart(); // načti i cart

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Zformátuj objednávku z košíku
    const orderDetails = cart.map((item) => {
      return `${item.description} – ${item.quantity} ks`;
    }).join("\n");

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      company: formData.company,
      phone: formData.phone,
      reply_to: formData.email,
      message: formData.message || "—",
      order_list: orderDetails,
    };

    emailjs.send(
      'service_4qr053r',       // service_id
      'template_lkxcrbq',      // template_id
      templateParams,
      'pXPR8lP3CgV71xnx5'        // public key
    )
    .then(() => {
      alert("Objednávka byla úspěšně odeslána!");
      dispatch({ type: "CLEAR_CART" });
      navigate("/", { state: { message: "Objednávka byla úspěšně odeslána." } });
    })
    .catch((error) => {
      console.error("Chyba při odesílání e-mailu:", error);
      alert("Chyba při odesílání objednávky. Zkuste to prosím znovu.");
    });
  };

  return (
    <div className="order-form">
      <h2>Objednávka</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="Jméno" onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Příjmení" onChange={handleChange} required />
        <input type="text" name="company" placeholder="Název firmy nebo zařízení" onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Telefon" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <textarea name="message" placeholder="Zpráva" onChange={handleChange} />
        <button type="submit">Objednat</button>
      </form>
    </div>
  );
};

export default Order;
