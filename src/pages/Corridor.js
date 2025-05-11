import React from "react";
import "./Corridor.scss";
import  Gallery  from "../components/Galleries";

const Corridor = () => {
const images = [
    {
      id: "CL",
      src: "/images/CH_svítidlo signalizační led cl.jpg",
      alt: "Svítidlo signalizační CL",
      description: "Svítidlo signalizační CL",
    },
    {
      id: "WRT-07 IP",
      src: "/images/CH_WRT-07-IP-bez-pozadi.webp",
      alt: "Přijímací bezdrátový modul WRT-07 IP",
      description: "Přijímací bezdrátový modul WRT-07 IP",
    },
    {
      id: "DL-5 IP",
      src: "/images/CH_DL5-IP-bez-pozadi.webp",
      alt: "IP orientační směrové 5-ti barevné LED DL-5 IP",
      description: "IP orientační směrové 5-ti barevné LED DL-5 IP",
    },
    {
      id: "LCD panel",
      src: "/images/CH_LCD-panel-bez-pozadi.webp",
      alt: "LCD panel",
      description: "LCD panel",
    },
  ];
  
 return (
    <section className="corridor">
      <h2>Chodba</h2>
     <Gallery images={images}/>
    </section>
  );
};

export default Corridor;









   