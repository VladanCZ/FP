import React from "react";
import "./SanitaryFacilities.scss";
import  Gallery  from "../components/Galleries";

const SanitaryFacilities = () => {
    const images = [
    {
      id: "EBC-07 IP",
      src: "/images/SZ_Táhlo a tlačítko nouzového volání EBC-07 IP 2016.jpg",
      alt: "Tlačítko a táhlo nouzového volání EBC-07 IP",
      description: "Tlačítko a táhlo nouzového volání EBC-07 IP",
    },
    {
      id: "EC-07 IP",
      src: "/images/SZ_táhlo nouzového volání ec-07 ip.jpg",
      alt: "Táhlo nouzového volání EC-07 IP",
      description: "Táhlo nouzového volání EC-07 IP",
    },
    {
      id: "EB-07 IP",
      src: "/images/SZ_tlačítko nouzového volání eb-07 ip.jpg",
      alt: "Tlačítko nouzového volání EB-07 IP",
      description: "Tlačítko nouzového volání EB-07 IP",
    },

{
      id: "CC-07 IP",
      src: "/images/SZ_tlačítko rušení volání cc-07 ip.jpg",
      alt: "Tlačítko rušení volání CC-07 IP",
      description: "Tlačítko rušení volání CC-07 IP",
    },
  ];

 return (
    <section className="sanitaryFacilities">
      <h2>Sociální zařízení</h2>
     <Gallery images={images}/>
    </section>
  );
};

export default SanitaryFacilities;




























    