export const Weather = ({ data }) => {
  const now = new Date();
  // const now = new Date((data.dt + data.timezone) * 1000);
  // const [now, setNow] = useState(new Date((data.dt + data.timezone) * 1000));
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setNow((prev) => new Date(prev.getTime()) + 1000);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  const day = now.toLocaleString("en-US", { weekday: "long" });
  const month = now.toLocaleString("en-US", { month: "long" });
  const date = now.getDate();
  const year = now.getFullYear();

  const hour = now.getHours().toString().padStart(2, "0");
  const minute = now.getMinutes().toString().padStart(2, "0");
  let seconds = now.getSeconds();

  const ampm = hour > 12 ? "pm" : "am";

  let timeStr = `${day}, ${hour}:${minute}:${seconds} ${ampm}`;
  const dayNight = hour <= 19 ? "Day" : "Night";

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
        <h3>{date + "-" + month + "-" + year}</h3>
        <h2 className="text-2xl font-semibold">{timeStr}</h2>
        <h4 className="text-[22px]">{dayNight}</h4>
      </div>
      <h1 className="text-5xl font-semibold">{data.name}</h1>
    </div>
  );
};
