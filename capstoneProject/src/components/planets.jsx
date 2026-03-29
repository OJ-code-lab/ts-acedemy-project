import planets from '../data/planetsData';


export function PlanetCard({name , image, description}){
    return(
        <div className='planet-picutres'>
            <img src={image} alt="" />
            <div>
              <h2>{name}</h2>
              <p>{description}</p>
            </div>

        </div>
    )
}



                 
// import PlanetCard from "./PlanetCard";

function PlanetGrid() {
  return (
    <>
      <section>
        <div class="section8">
          <h2>Visualizing the Differences Between Planets</h2>
          <p>Each planet in our solar system has unique physical characteristics. Visual comparisons help highlight how vastly different terrestrial planets are from gas giants and ice giants.</p>

          <div className="images">

            {planets.map((planet, index) => (
              <PlanetCard
                key={index}
                name={planet.planet}
                description={`Distance from Sun: ${planet.distanceFromSun} million km`}
                image={planet.image}
              />
            ))}
          </div>
            
        </div>
      </section>
      <hr />
    </>
  );
}

export default PlanetGrid;