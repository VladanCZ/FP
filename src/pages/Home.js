import React from "react";
import { useLocation } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  const location = useLocation();
  const message = location.state?.message;

  return (
    <div className="home-page">
      <header>
        <h1 className="home">Katalog produktů</h1>
        <Navigation />
      </header>
      {message && <div className="confirmation-banner">{message}</div>}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Home;




