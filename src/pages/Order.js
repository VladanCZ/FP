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

  const [consent, setConsent] = useState(false); // ✅ nový stav pro souhlas

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
        <input
          type="text"
          name="firstName"
          placeholder="Jméno"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Příjmení"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="company"
          placeholder="Název firmy nebo zařízení"
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Telefon"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Zpráva"
          onChange={handleChange}
        />

        {/* ✅ Checkbox se souhlasem */}
        <div className="checkbox-wrapper" style={{ margin: "12px 0" }}>
          <label>
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              required
            />{" "}
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

        <button type="submit">Objednat</button>
      </form>
    </div>
  );
};

export default Order;

