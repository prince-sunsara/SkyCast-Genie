export const LocationInput = ({ city, setCity, getWeather, error }) => {
  const changeWeather = (e) => {
    e.preventDefault();
    getWeather(city);
  };

  return (
    <>
      <div>
        <form className="w-1/3 m-auto border bg-white/10 rounded-2xl flex px-4 text-white ">
          <input
            type="text"
            placeholder="Enter you place"
            className="w-full h-10 px-3 py-1 font-bold focus:outline-none"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            type="submit"
            className="w-6 cursor-pointer"
            onClick={changeWeather}
          >
            <img src="search.png" alt="Search Icon" className="text-blue-600" />
          </button>
        </form>
        {error && (
          <>
            <div
              className="bg-blue-100  border-blue-500 text-red-700 px-4 py-1 w-1/4 m-auto mt-2 rounded-xl text-center font-bold"
              role="alert"
            >
              <p className="text-sm">{error}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};
