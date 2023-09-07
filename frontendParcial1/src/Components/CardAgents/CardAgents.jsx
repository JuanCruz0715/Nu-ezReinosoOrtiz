import './CardAgents.css';

export const CardAgents = ({ data }) => {
  return (
    <div>
      <div className='card card-button'>
        <h2>{data.displayName}</h2>
        <img src={data.displayIcon} alt={data.displayName} />
      </div>
      </div>
  );
};