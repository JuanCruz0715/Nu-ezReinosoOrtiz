import React, { useState, useEffect } from "react";
import { getMaps } from "../../Api";
import CardMaps from "./CardMaps/CardMaps";
import "./CardMaps/CardMaps.css";

export const MapsContainer = () => {
  const [Maps, setMaps] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const data = await getMaps();
        setMaps(data);
        console.log(data);
      } catch (error) {
        console.error("No se mostraron los mapas", error);
      }
    };
    fetchApi();
  }, []);

  return (
    <div className="Container-Fondo">
      <div className="Container">
        {Maps.map((Maps) => (
          <CardMaps key={Maps.uuid} data={Maps} />
        ))}
      </div>
    </div>
  );
};
