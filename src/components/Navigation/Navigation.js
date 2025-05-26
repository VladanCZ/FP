import React from "react";
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

  return (
    <nav className="nav-bar navigation">
      {navItems.map((item) => (
        <Link key={item.name} to={item.path} className="nav-link">
          {item.name}
        </Link>
      ))}
      <Link to="/Basket" className="nav-link cart-link">
        <FaShoppingCart size={20} />
        {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
      </Link>
    </nav>
  );
};

export default Navigation;


