import React from 'react';
import EnemyCard from './EnemyCard';

function EnemyList({ enemies }) {
  return (
    <div className="enemy-list">
      {enemies.map((enemy, index) => (
        <EnemyCard key={index} name={enemy.name} description={enemy.description} />
      ))}
    </div>
  );
}

export default EnemyList;
