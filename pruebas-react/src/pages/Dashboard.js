import EnemyCard from './EnemyCard'
import '../App.css'

var beasts = [
    {name: "Dragon", description: "Bestia de gran tamaño con la capacidad de volar y escupir fuego", image: "https://www.nameoftheyear.com/wp-content/uploads/2024/01/image-50.jpeg" },
    {name: "Orco", description: "Criatura musculosa de piel verde, con dientes prominentes, orejas puntiagudas y agresiva", image:"https://img.freepik.com/fotos-premium/guerrero-orco-pelirrojo_880127-330.jpg" },
    {name: "Pegaso", description: "Caballo con alas mamalon xd", image:"https://static.tvtropes.org/pmwiki/pub/images/concordia_pegasus_ravnica_allegiance_art.jpg"},
    {name: "Undead", description: "Cadaver reanimado por energias oscuras", image: "https://diamondpaintkit.com/wp-content/uploads/2022/02/Fantasy-Undead-diamond-painting.jpg"},
    {name: "Medusa", description: "Criatura oscura con mirada petrea", image: "https://www.mitologiafantastica.com/wp-content/uploads/2023/09/medusa-mitoligia.jpg.webp"},
    {name: "Hidra de lerma", description: 'Bestia legendaria de gran tamaño. "Y por cada cabeza cortada, a esa cosa le crecian 3 mas".', image: "https://2.bp.blogspot.com/-Y8acEL6q3NU/U76821axHFI/AAAAAAAAQMQ/KQIXLuqSpsM/s1600/011113_HIDRA.jpg"}
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