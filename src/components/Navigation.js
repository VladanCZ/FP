import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

const navItems = [
  { name: "Sesterna", path: "/Sister" },
  { name: "Pokoj pacienta", path: "/PatientsRoom" },
  { name: "Sociální zařízení", path: "/SanitaryFacilities" },
  { name: "Chodba", path: "/Corridor" },
  { name: "Vchod", path: "/Entrance" },
  { name: "Košík", path: "/Basket" },
];

const Navigation = () => {
  return (
    <nav className="nav-bar navigation">
      {navItems.map((item) => (
        <Link key={item.name} to={item.path} className="nav-link navigation">
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
