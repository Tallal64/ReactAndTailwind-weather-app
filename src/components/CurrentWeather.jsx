/* eslint-disable react/prop-types */
import { BodyText, DropletFill, Hurricane, Wind } from "react-bootstrap-icons";

const CurrentWeather = ({ weatherData }) => {
  const RenderInfo = () => {
    if (!weatherData) {
      console.log("Loading weather data...");
      return <div>Loading weather data...</div>;
    }

    const { location, current } = weatherData;
    const { name, region, country } = location;
    const { temp_c, wind_kph, humidity, feelslike_c, pressure_mb, condition } =
      current;
    const { icon, text } = condition;

    return (
      <div className="font-montserrat flex justify-between w-full mt-6 rounded-xl p-4 bg-white bg-opacity-80 backdrop-blur-md">
        {/* right_side */}
        <div className="flex-1">
          <div className="font-semibold text-xl text-gray-800">{name}</div>
          <div className="-my-2 text-gray-800">{country}</div>
          <div className="text-gray-800">{region}</div>

          <div className="flex justify-around items-center gap-x-7 my-10">
            <div className="flex justify-between ">
              <img src={icon} alt="img" className="scale-[1.8]" />
            </div>
            <div className="font-light text-7xl">{temp_c}&deg;</div>
          </div>
          <div className="ml-2 -mt-5 font-semibold text-slate-500">{text}</div>
        </div>

        {/* left_side */}
        <div className="flex flex-col justify-center text-start capitalize flex-1 ml-14">
          <p className="flex items-center gap-x-5">
            <BodyText />
            <span>feels like </span>
            {feelslike_c} &deg;
          </p>

          <p className="flex items-center gap-x-5">
            <DropletFill />
            <span>humidity </span> {humidity}%
          </p>

          <p className="flex items-center gap-x-5">
            <Wind />
            <span className="mr-7">wind </span>
            {wind_kph}kph
          </p>

          <p className="flex items-center gap-x-5">
            <Hurricane />
            <span>pressure </span>
            {pressure_mb}mb
          </p>
        </div>
      </div>
    );
  };

  return <div>{RenderInfo()}</div>;
};

export default CurrentWeather;
