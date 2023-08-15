//COMPONENTE  que renderizara la inf de la dimension
const LocationInfo = ({ currentLocation }) => {
  console.log({currentLocation});

  
  // por props recibimos inf de {currentLocation} que viene de App.jsx. debemos desestructurar para recibir inf.

  //console.log(currentLocation)  flex flex-col items-center 
  return (
    <section className="flex flex-col items-center w-80 hb-40 p-5 rounded-[35%] text-lime-300 bg-blue-700 bg-opacity-70 text-center">
        <h2>{currentLocation?.name}</h2>
        <ul>
            <li>Type: {currentLocation?.type}</li>
            <li>Dimension: {currentLocation?.dimension}</li>
            <li>Population: {currentLocation?.residents.length}</li>
        </ul>
    </section>
  );
};
export default LocationInfo;