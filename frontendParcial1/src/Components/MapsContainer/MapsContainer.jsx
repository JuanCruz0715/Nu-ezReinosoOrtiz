import React, { useState, useEffect } from "react";
import { getMaps } from "../../Api";
import CardMaps from "./CardMaps/CardMaps";
import "./CardMaps/CardMaps.css";

export const MapsContainer = () => {
  const [maps, setMaps] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const data = await getMaps();
        setMaps(data);
      } catch (error) {
        setError("No se pudieron cargar los mapas. Por favor, inténtalo más tarde.");
        console.error("Error al obtener los mapas", error);
      }
    };

    fetchApi();
  }, []);

  return (
    <div className="Container-Fondo">
      <div className="Container">
        {error && <p>{error}</p>}
        {maps.map((map) => (
          <CardMaps key={map.uuid} data={map} />
        ))}
      </div>
    </div>
  );
};
