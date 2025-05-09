import React from "react";
import "./Entrance.scss";
import  Gallery  from "../components/Galleries";

const Entrance = () => {
    const images = [
    {
      id: "CG-07 IP",
      src: "/images/V_CG-07-IP-bez-pozadi-1.webp",
      alt: "Tlačítko rušení identifikace průchodu CG-07 IP",
      description: "Tlačítko rušení identifikace průchodu CG-07 IP",
    },
    {
      id: "GT1-A",
      src: "/images/V_GT1-A-bez-pozadi.webp",
      alt: "Vysílač brány anténa GT1-A",
      description: "Vysílač brány anténa GT1-A",
    },
    {
      id: "IP kamera",
      src: "/images/V_Kamera-bez-pozadi.webp",
      alt: "IP kamera",
      description: "IP kamera",
    },
    {
      id: "ET-07 IP",
      src: "/images/V_služební terminál st-07v ip.jpg",
      alt: "Služební terminál (vchod) ET-07 IP",
      description: "Služební terminál (vchod) ET-07 IP",
    },
     ];
    

return (
    <section className="entrance">
      <h2>Vchod</h2>
     <Gallery images={images}/>
    </section>
  );
};

export default Entrance;








   