import React, { useState } from 'react';
import '../App.css';
import MonsterDetails from './MonsterDetails';

function EnemyCard({ name, description, image, details }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="enemy-card" onClick={toggleDetails} >
      <h2>{name}</h2>
      <p>{description}</p>
      <img src={image} alt={name}/>
      {showDetails && <MonsterDetails name={name} description={description} image={image} details={details} onClose={toggleDetails} />}
    </div>
  );
}

export default EnemyCard;
