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
  }, [data.timezone]);

  //* fixed indian time
  // const now = new Date();
  // const day = now.toLocaleString("en-US", { weekday: "long" });
  // const month = now.toLocaleString("en-US", { month: "long" });
  // const date = now.getDate();
  // const year = now.getFullYear();

  // const hour = now.getHours().toString().padStart(2, "0");
  // const minute = now.getMinutes().toString().padStart(2, "0");
  // let seconds = now.getSeconds();

  // const ampm = hour > 12 ? "pm" : "am";

  // let timeStr = `${day}, ${hour}:${minute}:${seconds} ${ampm}`;
  // const dayNight = hour <= 19 ? "Day" : "Night";

  return (
    <div className="flex justify-between w-4/5 text-center py-16 px-8 mx-auto my-16 items-center bg-white/5 backdrop-blur-xs shadow-lg rounded-xl ">
      <div>
        <img
          className="w-32 mx-auto"
          src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@2x.png`}
          alt="Weather Image"
        />
        <h1 className="text-6xl mt-5 font-semibold">{data?.main?.temp} °C</h1>
        <h3 className="mt-2">{data?.weather?.[0]?.description}</h3>
      </div>

      {/* <div className="w-2/3 h-[4px] bg-gray-300 mx-auto rounded"></div> */}

      <div className="flex flex-col justify-center">
        {/* <h3>{date + "-" + month + "-" + year}</h3>
        <h2 className="text-2xl font-semibold">{timeStr}</h2>
        <h4 className="text-[22px]">{dayNight}</h4> */}

        <h3>{localTime.fullDate}</h3>
        <h2 className="text-2xl font-semibold">{localTime.time}</h2>
        <h4 className="text-[22px]">{localTime.dayNight}</h4>
      </div>
      <h1 className="text-5xl font-semibold">{data.name}</h1>
    </div>
  );
};
