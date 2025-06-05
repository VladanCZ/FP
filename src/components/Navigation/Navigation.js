import React, { useState, useEffect } from "react"; //React hooks for state and effects.
import { Link } from "react-router-dom"; //for navigation without page reload
import { useCart } from "../../context/CartContext"; //to access data from the shopping cart context.
import "./Navigation.scss";
import { FaShoppingCart } from "react-icons/fa";

//array of navigation items
const navItems = [
  { name: "Sesterna", path: "/Sesterna" },
  { name: "Pokoj pacienta", path: "/Pokoj-pacienta" },
  { name: "Sociální zařízení", path: "/Socialni-zarizeni" },
  { name: "Chodba", path: "/Chodba" },
  { name: "Vchod", path: "/Vchod" },
];

//counts the total number of items in the cart
const Navigation = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  //The effect of tracking changes in the number of items in the cart
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (totalItems > 0) {
      setAnimate(true);
      const timeout = setTimeout(() => setAnimate(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [totalItems]);

  //nav with links, shopping cart icon and animation
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
          <span className={`cart-count ${animate ? "bounce" : ""}`}>
            {totalItems}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navigation;
