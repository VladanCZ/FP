import React from "react";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home-page">
      <header>
        <h1 className="home">Katalog produktů</h1>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Home;




