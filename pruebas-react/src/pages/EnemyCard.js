import React from 'react';

function EnemyCard({ name, description, image }) {
  return (
    <div className="enemy-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <img src={image} ></img>
    </div>
  );
}

export default EnemyCard;
