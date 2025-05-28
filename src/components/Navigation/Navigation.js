import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Navigation.scss";
import { FaShoppingCart } from "react-icons/fa";

const navItems = [
  { name: "Sesterna", path: "/Sesterna" },
  { name: "Pokoj pacienta", path: "/Pokoj-pacienta" },
  { name: "Sociální zařízení", path: "/Socialni-zarizeni" },
  { name: "Chodba", path: "/Chodba" },
  { name: "Vchod", path: "/Vchod" },
];

const Navigation = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (totalItems > 0) {
      setAnimate(true);
      const timeout = setTimeout(() => setAnimate(false), 500); 
      return () => clearTimeout(timeout);
    }
  }, [totalItems]);

  return (
    <nav className="nav-bar navigation">
      {navItems.map((item) => (
        <Link key={item.name} to={item.path} className="nav-link">
          {item.name}
        </Link>
      ))}
      <Link to="/Kosik" className="nav-link cart-link">
        <FaShoppingCart size={20} />
        {totalItems > 0 && (
          <span
            className={`cart-count ${animate ? "bounce" : ""}`}
          >
            {totalItems}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navigation;

