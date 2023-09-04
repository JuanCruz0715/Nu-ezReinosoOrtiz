import React from "react";
const CardGuns = ({data}) =>  {
  return (
    <div>
   <h3>{data.displayName}</h3>
    <img src={data.displayIcon} alt={data.displayIcon} ></img>
    
    </div>
  );

};
export  default CardGuns;

