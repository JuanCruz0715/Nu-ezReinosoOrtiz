import React from "react";
import "./CardMaps.css";
const CardMaps = ({ data }) => {
  return (
    <div className="Card-Maps">
      <h2>{data.displayName}</h2>
      <img src={data.listViewIcon}></img>
    </div>
  );
};

export default CardMaps;
