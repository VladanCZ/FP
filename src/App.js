import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Order from "./pages/Order";

import Home from "./pages/Home";
import Sister from "./pages/Sister";
import PatientsRoom from "./pages/PatientsRoom";
import SanitaryFacilities from "./pages/SanitaryFacilities";
import Corridor from "./pages/Corridor";
import Entrance from "./pages/Entrance";
import Basket from "./pages/Basket";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="Sister" element={<Sister />} />
          <Route path="PatientsRoom" element={<PatientsRoom />} />
          <Route path="SanitaryFacilities" element={<SanitaryFacilities />} />
          <Route path="Corridor" element={<Corridor />} />
          <Route path="Entrance" element={<Entrance />} />
          <Route path="Basket" element={<Basket />} />
          <Route path="Order" element={<Order />} /> {/* ← přidáno */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
