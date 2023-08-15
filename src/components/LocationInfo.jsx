const LocationInfo = ({ currentLocation }) => {
  console.log({ currentLocation });

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
