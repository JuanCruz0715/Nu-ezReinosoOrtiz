import React, { useState } from "react";
import { ModalC } from "../Modal/Modal";

const CardGuns = ({ data }) => {
  const [Modal, setModal] = useState(false);

  const Mostrarmodal = () => {
    setModal(true);
  };
  const Cerrarmodal = () => {
    setModal(false);
  };
  return (
    <div>
      <div className="Card" onClick={Mostrarmodal}>
        <h3>{data.displayName}</h3>
        <img src={data.displayIcon} alt={data.displayIcon}></img>
      </div>
      {Modal && <ModalC data={data} CloseModal={Cerrarmodal} />}
    </div>
  );
};
export default CardGuns;
