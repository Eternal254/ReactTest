import EnemyCard from './EnemyCard'
import '../App.css'

var beasts = [
    {name: "Dragon", description: "Bestia de gran tamaño con la capacidad de volar y escupir fuego", image: "https://www.nameoftheyear.com/wp-content/uploads/2024/01/image-50.jpeg" },
    {name: "Orco", description: "Criatura musculosa de piel verde, con dientes prominentes, orejas puntiagudas y agresiva", image:"https://posadaelultimohogar.files.wordpress.com/2015/01/orco.jpg?w=640" },
    {name: "Pegaso", description: "Caballo con alas mamalon xd", image:"https://static.tvtropes.org/pmwiki/pub/images/concordia_pegasus_ravnica_allegiance_art.jpg"}
]

const Dashboard = () => {
  return (
      <div>
          <h1>Bestiario</h1>
          <div className="card-container">
              {beasts.map((beast, index) => (
                  <div className="card" key={index}>
                      <EnemyCard name={beast.name} description={beast.description} image={beast.image} />
                  </div>
              ))}
          </div>
      </div>
  );
}

export default Dashboard;