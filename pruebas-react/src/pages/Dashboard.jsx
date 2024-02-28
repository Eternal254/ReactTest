import React from 'react'
import EnemyCard from './EnemyCard'
import '../App.css'
import {beasts} from './Beasts'

const Dashboard = () => {
  return (
      <div>
          <h1>Bestiario</h1>
          <div className="card-container">
              {beasts.map((beast, index) => (
                  <div className="card" key={index}>
                      <EnemyCard name={beast.name} description={beast.description} image={beast.image} details={beast.details} />
                  </div>
              ))}
          </div>
      </div>
  );
}

export default Dashboard;
