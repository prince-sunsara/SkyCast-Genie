export const LocationInput = ({ city, setCity, getWeather, error }) => {
  const changeWeather = (e) => {
    e.preventDefault();
    getWeather(city);
  };

  return (
    <>
      <form className="w-[90%] max-w-lg flex mx-auto border bg-white/10 rounded-2xl  px-4 text-white">
        <input
          type="text"
          placeholder="Enter you place"
          className="w-full h-10 px-3 py-1 font-bold focus:outline-none flex-grow bg-transparent"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          type="submit"
          className="w-6 cursor-pointer hover:scale-105"
          onClick={changeWeather}
        >
          <img
            src="search.png"
            alt="Search Icon"
            className="text-blue-600 object-contain"
          />
        </button>
      </form>
      {error && (
        <>
          <div
            className="bg-blue-100  border-blue-500 text-red-700 mx-auto mt-2 p-2 rounded-xl text-center font-bold"
            role="alert"
          >
            <p className="text-sm">{error}</p>
          </div>
        </>
      )}
    </>
  );
};
