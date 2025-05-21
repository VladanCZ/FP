import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import emailjs from "@emailjs/browser";

import Button from "../components/Button/Button"; 
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

  const [consent, setConsent] = useState(false);
  const navigate = useNavigate();
  const { cart, dispatch } = useCart();

  const generateOrderId = () => {
    const now = new Date();
    const datePart = now.toISOString().slice(0, 10).replace(/-/g, '');
    const randomPart = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    return `Codaco-${datePart}-${randomPart}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!consent) {
      alert("Před odesláním objednávky musíte souhlasit se zpracováním osobních údajů.");
      return;
    }

    const orderId = generateOrderId();

    const orderDetails = cart
      .map((item) => `✅ ${item.description} – ${item.quantity} ks`)
      .join("<br>");

    const templateParams = {
      order_id: orderId,
      from_name: `${formData.firstName} ${formData.lastName}`,
      company: formData.company,
      phone: formData.phone,
      reply_to: formData.email,
      to_email: formData.email,
      message: formData.message || "—",
      order_list_formatted: orderDetails,
    };

    emailjs
      .send(
        "service_4qr053r",
        "template_lkxcrbq",
        templateParams,
        "pXPR8lP3CgV71xnx5"
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
        {/* Formulářové pole - nezměněné */}
        <div className="form-group">
          <label htmlFor="firstName">Jméno</label>
          <input id="firstName" type="text" name="firstName" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Příjmení</label>
          <input id="lastName" type="text" name="lastName" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="company">Název firmy nebo zařízení</label>
          <input id="company" type="text" name="company" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Telefon</label>
          <input id="phone" type="tel" name="phone" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input id="email" type="email" name="email" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Zpráva (nepovinná)</label>
          <textarea id="message" name="message" onChange={handleChange} rows={4} />
        </div>

        <div className="checkbox-wrapper" style={{ margin: "12px 0" }}>
          <label>
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              required
            />
            {" "}
            Souhlasím se{" "}
            <a
              href="https://www.codaco.cz/bezpecnost-a-ochrana-osobnich-udaju"
              target="_blank"
              rel="noopener noreferrer"
            >
              zpracováním osobních údajů
            </a>
          </label>
        </div>

        
        <Button type="submit">Objednat</Button>
      </form>
    </div>
  );
};

export default Order;

