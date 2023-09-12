import React, { useState } from "react";
import "./Modal.css";

export const ModalC = ({ data, CloseModal, openModal }) => {
  return (
    <>
      <div className="modal-overlay-guns">
        <div className="modal-guns">
          <div className="modal-content-card">
            <button className="close-button-guns" onClick={CloseModal}>
              Close
            </button>
            <div className="modal-container-guns">
              <h2>{data.displayName}</h2>
              <img src={data.skins[0].displayIcon}></img>
              <h2>Costo: {data.shopData.cost}💲</h2>
              <h2>Categoria: {data.shopData.category}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
