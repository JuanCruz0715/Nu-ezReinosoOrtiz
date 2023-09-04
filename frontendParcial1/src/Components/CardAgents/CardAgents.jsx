import React from 'react'

export const CardAgents = ({data}) => {
  return (
    <div>
      <h2>{data.displayName}</h2>
      <img src={data.displayIcon} alt={data.displayName} />
    </div>
  );
};