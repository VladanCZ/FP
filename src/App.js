import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
        <Route index element={<Navigate to="/Sesterna" replace />} />
          <Route path="Sesterna" element={<Sister />} />
          <Route path="Pokoj-pacienta" element={<PatientsRoom />} />
          <Route path="Socialni-zarizeni" element={<SanitaryFacilities />} />
          <Route path="Chodba" element={<Corridor />} />
          <Route path="Vchod" element={<Entrance />} />
          <Route path="Kosik" element={<Basket />} />
          <Route path="Objednavka" element={<Order />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
