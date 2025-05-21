import React from "react";
import "./Sister.scss";
import  Gallery  from "../components/Gallery/Galleries";

const Sister = () => {
  const images = [
    {
      id: "mt07-ip",
      src: "/images/IMG_6995_CZ.jpg",
      alt: "Hlavní terminál MT-07 IP",
      description: "Hlavní terminál MT-07 IP",
    },
    {
      id: "nt01-ip",
      src: "/images/Terminál sestry NT-01 IP_frontal.jpg",
      alt: "Terminál sestry NT-01 IP",
      description: "Terminál sestry NT-01 IP",
    },
    {
      id: "wb2s-sos",
      src: "/images/WB2-S SOS.jpg",
      alt: "Bezdrátové přenosné tlačítko SOS WB2-S",
      description: "Bezdrátové přenosné tlačítko SOS WB2-S",
    },
    {
      id: "DECT",
      src: "/images/S_Dect_bez-pozadi-1.webp",
      alt: "Bezdrátový telefon DECT",
      description: "Bezdrátový telefon DECT",
    },
    {
      id: "PG",
      src: "/images/S_Pager-PG-bez-pozadi.webp",
      alt: "Pager textový PG",
      description: "Pager textový PG",
    },
    {
      id: "ST-20 IP",
      src: "/images/S_ST-20-IP-bez-pozadi.webp",
      alt: "Služební terminál ST-20 IP",
      description: "Služební terminál ST-20 IP",
    },
  ];

  return (
    <section className="sister">
      <h2>Sesterna</h2>
     <Gallery images={images}/>
    </section>
  );
};

export default Sister;

