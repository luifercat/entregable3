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
    fetchDimension(newLocation);
  };

  const fetchDimension = (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`;

    axios
      .get(url)
      .then(({ data }) => setCurrentLocation(data))
      .catch((err) => console.log(err));
  };

  //hook
  useEffect(() => {
    const randomDimension = getRandomDimension(126);
    fetchDimension(randomDimension);
  }, []);

  return (
    <main className="bg-[url('/image/bg01.jpeg')] min-h-screen font-extrabold text-lime-300 font-fira bg-cover">
      <section className=" bg-[url('/image/bg-h1.jpg')] flex flex-col items-center bg-cover mb-6">
        <img
          className="rounded-t-xl h-full block object-cover"
          src="\image\aaaaa.png"
          alt=""
        />
        <LocationForm handleSubmit={handleSubmit} />
        <LocationInfo currentLocation={currentLocation} />
      </section>
      <ResidentList
        residents={currentLocation?.residents ?? []}
        currentLocation={currentLocation}
      />
    </main>
  );
}

export default App;
