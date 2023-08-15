import { useEffect, useState } from "react";
import "./App.css";
import { getRandomDimension } from "./utils/random";
import axios from "axios";
import LocationForm from "./components/LocationForm";
import LocationInfo from "./components/LocationInfo";
import ResidentList from "./components/ResidentList";

function App() {
  const [currentLocation, setCurrentLocation] = useState(null); //currentLocation: estado que nos sirve para almacenar la inf de la location actual

  const handleSubmit = (e) => {
    e.preventDefault();

    const newLocation = e.target.newLocation.value;
    fetchDimension(newLocation); // llamamos la funcion que trae los datos del endpoint con el axios

    /////////codigo que rresplaza la funcion: const fetchDimension = (idLocation) => { ///////////////
    //    const url = `https://rickandmortyapi.com/api/location/${newLocation}`;
    //
    //    axios
    //      .get(url)
    //      .then(({ data }) => setCurrentLocation(data)) // datos recuperados de la url y los enviamos al estado con setCurrentLocation
    //      .catch((err) => console.log(err));
    ////////////////////////////////////////////////////////
  };

  // con la siguiente funcion reemplazamos la consulta de datos con el axios que se hace dos veces
  const fetchDimension = (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`;

    axios
      .get(url)
      .then(({ data }) => setCurrentLocation(data)) // datos recuperados de la url y los enviamos al estado con setCurrentLocation
      .catch((err) => console.log(err));
  };

  //hook para cargar informacion
  useEffect(() => {
    const randomDimension = getRandomDimension(126); //funcion para dimension alleaatoria
    fetchDimension(randomDimension); // llamamos la funcion que trae los datos del endpoint co el axios

    /////////codigo que rresplaza la funcion: const fetchDimension = (idLocation) => { ///////////////
    //    const url = `https://rickandmortyapi.com/api/location/${randomDimension}`;
    //
    //    axios
    //      .get(url)
    //      .then(({ data }) => setCurrentLocation(data)) // datos recuperados de la url y los enviamos al estado con setCurrentLocation
    //      .catch((err) => console.log(err));
    //////////////////////////////////////////////////////////////////////////////////  
  }, []);

  return (
    <main className="bg-[url('/image/bg01.jpeg')] min-h-screen font-extrabold text-lime-300 font-fira bg-cover">
      <section className= " bg-[url('/image/bg-h1.jpg')] flex flex-col items-center bg-cover mb-6">
      <img className="rounded-t-xl h-full block object-cover" src="\image\aaaaa.png" alt="" />

        <LocationForm handleSubmit={handleSubmit} />
        {/* como el componente LocationInfo requiere la inf de currentLocation, por props le pasamos {currentLocation}. cuando enviamos una props debemos ir al componente, desestructurar y recibir la inf  */}
        <LocationInfo currentLocation={currentLocation} />
      </section>

      {/* como el componente ResidentLis requiere la inf de los residentes, por props le pasamos el estado.residentes ---> {currentLocation?.residents}. como en el primer renderizado currentLocation es null, para que no envie null podemos hacer que cuando {currentLocation?.residents} sea null le enviemos al menos un arreglo vacio para que pueda hacer el map y generar la lista, para lo cual hacemos {currentLocation?.residents ?? []} asi nos aseguramos que si en el primer render va un null entonces se envia mejor un arreglo vacio. entonces enviamos una props debemos ir al componente, desestructurar y recibir la inf  */}
      <ResidentList
        residents={currentLocation?.residents ?? []}
        currentLocation={currentLocation}
      />
    </main>
  );
}

export default App;
