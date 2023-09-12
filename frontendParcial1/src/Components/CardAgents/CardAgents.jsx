import "./CardAgents.css";
import React, { useState } from "react";
import ModalAgents from "./ModalAgents/ModalAgents";
export const CardAgents = ({ data }) => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };
  return (
    <div className="juanchi">
      <div className="card card-button" onClick={openModal}>
        <h2>{data.displayName}</h2>
        <img src={data.displayIcon} alt={data.displayName} />
      </div>
      {modal && <ModalAgents onClose={closeModal} data={data} />}
    </div>
  );
};
