//COMPONENTE que renderizara cada residente y es usado en ResidenList.jsx

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const ResidentCard = ({ residentUrl }) => {
  // residentUrl es la prop que viene de ResidenList.jsx
  // hay que tener en cuenta que lo que estamos recibiendo por props es una url o endpoint que es donde debemos solicitar la informacion de ese residente
  //Como no tenemos la informacion, tenemos que por cada componente volver a hacer una peticion y solicitar la informacion que queremos mostrar.
  //Debemos hacer el mismo proceso, si queremos que apenas se cargue se renderice  la informacion del residente que viene en el endpoint lo primero es
  // crear un efecto con el Hook useEffect y usamos el axios
  //

  const [residentInfo, setResidentInfo] = useState(null); //creamos un estado

  const residentStatus = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-slate-500",
  };
  console.log({residentInfo})

  useEffect(() => {
    //   hook
    axios
      .get(residentUrl) //  residentUrl es lo que nos llega por props    <img className="rounded-t-xl h-full block w-full overflow-hidden" src={residentInfo?.image} alt="" />
      .then(({ data }) => setResidentInfo(data)) // datos recuperados de la url y los enviamos al estado con setResidentInfo
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="border-2 border-lime-300 rounded-xl object-cover" >
      <header>
        <img className="rounded-t-xl h-full block" src={residentInfo?.image} alt="" />
        <div className="flex items-center gap-2 p-2  bg-gradient-to-r from-cyan-900 to-green-500 bg-opacity-30">
            <div className={`h-[10px] aspect-square bg-green-500 rounded-full ${residentStatus[residentInfo?.status]}`}>
            </div>
            {residentInfo?.status}
        </div>
      </header>
      <section className=" text-orange-50 p-2 rounded-b-xl max-w-[300px]">
        <h3>{residentInfo?.name}</h3>
        <ul className= "text-left">
          <li>Species: {residentInfo?.species}</li>
          <li>Origin: {residentInfo?.origin.name}</li>
          <li >Times appear: {residentInfo?.episode.length}</li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentCard;
