const LocationForm = ({ handleSubmit }) => {
  return (
    <form className="flex justify-center p-5" onSubmit={handleSubmit}>
      <input
        className="flex flex-col items-center outline-none bg-green-800 bg-opacity-90 rounded-l-lg w-20 focus:ring-green-500 focus:ring-1 text-lime-300 pl-3 border border-lime-300"
        min={1}
        id="newLocation"
        max={126}
        placeholder="Type a location id ..."
        type="number"
        required
      />
      <button className=" bg-blue-700 hover:bg-cyan-900 bg-opacity-70 font-bold border border-lime-300 px-4 text-green-200 rounded-r-lg">
        search
      </button>
    </form>
  );
};
export default LocationForm;
