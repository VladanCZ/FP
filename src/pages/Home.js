import React from "react";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Katalog produktů</h1>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Home;



