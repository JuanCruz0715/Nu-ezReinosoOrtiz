import React from "react";
import "./ModalAgents.css";

export default function ModalAgents({ data, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
          <div className="modal-container">
            <div className="modal-left">
              <img src={data.fullPortraitV2} alt={data.displayName} />
            </div>
            <div className="modal-right">
              <h2>{data.displayName}</h2>
              <p>{data.role.displayName}</p>
              <img
                className="icono"
                src={data.role.displayIcon}
                alt={data.role.displayName}
              />
              <div className="poderes">
                <h3>Poderes:</h3>
                <ul>
                  {data.abilities.map((ability, index) => (
                    <li key={index}>
                      <div>
                        {ability.displayName}
                        {/*ability.description*/}
                      </div>
                      <div className="iconopoder">
                      <img
                        src={ability.displayIcon}
                      />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
