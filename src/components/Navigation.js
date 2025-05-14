import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext"; 
import "./Navigation.scss";
import { FaShoppingCart } from "react-icons/fa"; 

const navItems = [
  { name: "Sesterna", path: "/Sister" },
  { name: "Pokoj pacienta", path: "/PatientsRoom" },
  { name: "Sociální zařízení", path: "/SanitaryFacilities" },
  { name: "Chodba", path: "/Corridor" },
  { name: "Vchod", path: "/Entrance" },
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


