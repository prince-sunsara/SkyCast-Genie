import { useEffect, useState } from "react";

export const Weather = ({ data }) => {
  const [localTime, setLocalTime] = useState("");
  useEffect(() => {
    if (!data.timezone) return;

    const interval = setInterval(() => {
      const now = new Date(
        new Date().getTime() + new Date().getTimezoneOffset() * 60000
      );
      const localTimestamp = now.getTime() + data.timezone * 1000;
      const localDate = new Date(localTimestamp);

      // for date
      const day = localDate.toLocaleString("en-US", { weekday: "long" });
      const month = localDate.toLocaleString("en-US", { month: "long" });
      const date = localDate.getDate();
      const year = localDate.getFullYear();

      // for time
      const hours = localDate.getHours().toString().padStart(2, "0");
      const minutes = localDate.getMinutes().toString().padStart(2, "0");
      const seconds = localDate.getSeconds().toString().padStart(2, "0");
      const ampm = localDate.getHours() >= 12 ? "PM" : "AM";
      const dayNight =
        data.dt >= data?.sys.sunrise && data.dt < data?.sys.sunset
          ? "Day"
          : "Night";

      setLocalTime({
        fullDate: `${date}-${month}-${year}`,
        time: `${day}, ${hours}:${minutes}:${seconds} ${ampm}`,
        dayNight: dayNight,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [data?.timezone]);

  return (
    <div className="w-[90%] max-w-6xl sm:flex justify-between text-center py-6 sm:py-16 px-8 mx-auto my-16 items-center bg-white/5 backdrop-blur-sm shadow-lg rounded-xl">
      <div className="text-center">
        <img
          className="w-24 sm:w-28 md:w-32 mx-auto"
          src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`}
          alt="Weather Icon"
        />
        <h1 className="text-4xl md:text-5xl mt-4 font-bold">
          {data?.main?.temp} °C
        </h1>
        <p className="mt-2 text-lg capitalize">
          {data?.weather?.[0]?.description}
        </p>
      </div>

      <div className="bg-white/50 rounded my-2 h-1 w-[12rem] mx-auto sm:hidden"></div>

      <div className="text-center">
        <h3 className="text-lg md:text-2xl">{localTime.fullDate}</h3>
        <h2 className="text-2xl md:text-3xl font-semibold">{localTime.time}</h2>
        <h4 className="text-lg md:text-xl mt-1">{localTime.dayNight}</h4>
      </div>

      <div className="bg-white/50 rounded my-2 h-1 w-[12rem] mx-auto sm:hidden"></div>

      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold">{data.name}</h1>
      </div>
    </div>
  );
};
