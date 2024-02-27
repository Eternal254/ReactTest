import React from 'react';
import './App.css';
import EnemyCard from './EnemyCard';
import Header from './Header'; 

function App() {
  var beasts = [
    {name: "Dragon", description: "Bestia de gran tamaño con la capacidad de volar y escupir fuego", image: "https://www.nameoftheyear.com/wp-content/uploads/2024/01/image-50.jpeg" },
    {name: "Orco", description: "Criatura musculosa de piel verde, con dientes prominentes, orejas puntiagudas y agresiva", image:"https://posadaelultimohogar.files.wordpress.com/2015/01/orco.jpg?w=640" }
  ];

  return (
    <div className='container'>
      <Header />
      {beasts.map((beast, index) => (
        <div className="card" key={index}>
          <EnemyCard name={beast.name} description={beast.description} image={beast.image} />
        </div>
      ))}
    </div>
  );
}

export default App;
