import { useEffect, useState } from "react";
import { LocationInput } from "./components/LocationInput";
import { Weather } from "./components/Weather";

function App() {
  const [city, setCity] = useState("Ahmedabad");
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  const getWeather = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
          import.meta.env.VITE_WEATHER_API
        }&units=metric`
      );

      if (response.ok) {
        const data = await response.json();
        setData(data);
        setError("");
      } else {
        setError("Enter correct city name!");
      }
    } catch (err) {
      setError("Internal server error!");
      console.log(err);
    }
  };

  useEffect(() => {
    getWeather(city);
  }, []);

  return (
    <>
      <main className="h-screen bg-[url('https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-center bg-cover text-white px-4 py-6 flex flex-col items-center justify-center ">
        <LocationInput
          city={city}
          setCity={setCity}
          getWeather={getWeather}
          error={error}
        />
        <Weather city={city} data={data} />
      </main>
    </>
  );
}

export default App;
