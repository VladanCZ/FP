import React from "react";

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
      <nav className="nav-bar">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            {item.name}
          </a>
        ))}
      </nav>
    );
  };
  
  export default Navigation;