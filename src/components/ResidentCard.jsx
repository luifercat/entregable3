import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const ResidentCard = ({ residentUrl }) => {
  const [residentInfo, setResidentInfo] = useState(null); //creamos un estado

  const residentStatus = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-slate-500",
  };
  console.log({ residentInfo });

  useEffect(() => {
    //   hook
    axios
      .get(residentUrl)
      .then(({ data }) => setResidentInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="border-2 border-lime-300 rounded-xl object-cover">
      <header>
        <img
          className="rounded-t-xl h-full block"
          src={residentInfo?.image}
          alt=""
        />
        <div className="flex items-center gap-2 p-2  bg-gradient-to-r from-cyan-900 to-green-500 bg-opacity-30">
          <div
            className={`h-[10px] aspect-square bg-green-500 rounded-full ${
              residentStatus[residentInfo?.status]
            }`}
          ></div>
          {residentInfo?.status}
        </div>
      </header>
      <section className=" text-orange-50 p-2 rounded-b-xl max-w-[300px]">
        <h3>{residentInfo?.name}</h3>
        <ul className="text-left">
          <li>Species: {residentInfo?.species}</li>
          <li>Origin: {residentInfo?.origin.name}</li>
          <li>Times appear: {residentInfo?.episode.length}</li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentCard;
