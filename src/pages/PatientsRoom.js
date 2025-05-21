import React from "react";
import "./PatientsRoom.scss";
import  Gallery  from "../components/Gallery/Galleries";

const PatientsRoom = () => {
 const images = [
    {
      id: "RT-07 IP",
      src: "/images/PP_pokojový terminál rt-07 ip.jpg",
      alt: "Pokojový terminál hovorový RT-07 IP",
      description: "Pokojový terminál hovorový RT-07 IP",
    },
    {
      id: "RT-07DV IP",
      src: "/images/PP_pokojový terminál rt-07d ip.jpg",
      alt: "Pokojový terminál hovorový s displejem RT-07DV IP",
      description: "Pokojový terminál hovorový s displejem RT-07DV IP",
    },
    {
      id: "RT-07V IP",
      src: "/images/PP_pokojový terminál rt-07v ip.jpg",
      alt: "Pokojový terminál hovorový RT-07V IP",
      description: "Pokojový terminál hovorový RT-07V IP",
    },
    {
        id: "PT-07S IP",
        src: "/images/PP_PT-07S IP(D).jpg",
        alt: "Terminál pacienta s tlačítkem volání ošetřovatelky PT-07S IP",
        description: "Terminál pacienta s tlačítkem volání ošetřovatelky PT-07S IP",

    },
    {
      id: "RT-07CR IP",
      src: "/images/PP_RT-07CR IP bez reproduktoru.jpg",
      alt: "Pokojový terminál se čtečkou RT-07CR IP",
      description: "Pokojový terminál se čtečkou RT-07CR IP",
    },
    {
      id: "PU-01",
      src: "/images/PP_Tlačítko pacienta PU-01 IP_poloprofil.jpg",
      alt: "Tlačítko pacienta (bez hovoru) PU-01",
      description: "Tlačítko pacienta (bez hovoru) PU-01",
    },
    {
      id: "PU-07R IP",
      src: "/images/PP_tlačítko pacienta pu-07r ip_poloprofil.jpg",
      alt: "Tlačítko pacienta s mikrofonem a ovládáním rádia PU-07R IP",
      description: "Tlačítko pacienta s mikrofonem a ovládáním rádia PU-07R IP",
    },
    {
      id: "WB2",
      src: "/images/PP_WB2_WB2-F.jpg",
      alt: "Bezdrátové přenosné tlačítko WB2",
      description: "Bezdrátové přenosné tlačítko WB2",
    },
    {
      id: "WB2-G",
      src: "/images/PP_WB2_WB2-F.jpg",
      alt: "Bezdrátové přenosné tlačítko s identifikací průchodu WB2-G",
      description: "Bezdrátové přenosné tlačítko s identifikací průchodu WB2-G",
    },
    {
      id: "BC-01",
      src: "/images/PP_zásuvka pacienta bc-07 ip.jpg",
      alt: "Zásuvka pacienta (bez hovoru) BC-01",
      description: "Zásuvka pacienta (bez hovoru) BC-01",
    },
    {
      id: "BC-01H",
      src: "/images/PP_zásuvka pacienta bc-07h ip.jpg",
      alt: "Zásuvka pacienta s držákem (bez hovoru) BC-01H",
      description: "Zásuvka pacienta s držákem (bez hovoru) BC-01H",
    },
    {
      id: "BC-07HS IP",
      src: "/images/PP_zásuvka pacienta bc-07hs ip.jpg",
      alt: "Zásuvka pacienta s držákem a reproduktorem BC-07HS IP",
      description: "Zásuvka pacienta s držákem a reproduktorem BC-07HS IP",
    },


  ];   

 return (
     <section className="patientsRoom">
       <h2>Pokoj pacientů</h2>
      <Gallery images={images}/>
     </section>
   );
 };
 
 export default PatientsRoom;
 