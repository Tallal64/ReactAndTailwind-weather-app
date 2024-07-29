import { useEffect, useState } from "react";
import { Search } from "react-bootstrap-icons";
import CurrentWeather from "./components/CurrentWeather";
import ForecastWeather from "./components/ForecastWeather";
import "./index.css";

function App() {
  const [searchValue, setsearchValue] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const [error, setError] = useState("");

  const Calling_weather = async (country_city) => {
    const url = "https://weatherapi-com.p.rapidapi.com/forecast.json?";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "74c54d1055msh80666a5280e465bp14ca73jsnfffe828b5822",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(`${url}q=${country_city}&days=3`, options);
      const data = await response.json();

      if (data.error) {
        setError("Location not found or it is not listed in the API"); // Set error message
        setWeatherData(""); // Clear weather data
      } else {
        setError(""); // Clear error message
        setWeatherData(data); // Set weather data
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred"); // Set error message
      setWeatherData(""); // Clear weather data
    }
  };

  useEffect(() => {
    Calling_weather("islamabad");
  }, []);

  return (
    <div className="min-h-screen px-14 py-10 font-poppins bg-gradient-to-r from-cyan-200 to-blue-400">
      <div className=" max-w-screen-md mx-auto ">
        <div className="w-full relative">
          <input
            className="outline-none w-full px-4 py-2 rounded-xl bg-gray-100 text-gray-800 text-sm"
            type="text"
            placeholder="Enter a country/city"
            value={searchValue}
            onChange={(e) => setsearchValue(e.target.value)}
          />

          <button
            className="absolute top-3 right-5 scale-110"
            onClick={() => Calling_weather(searchValue)}
          >
            <Search />
          </button>
        </div>
        {error && <div className="text-red-500">{error}</div>}{" "}
        {/* Display error message */}
        <CurrentWeather weatherData={weatherData} />
        <ForecastWeather weatherData={weatherData} />
      </div>
    </div>
  );
}
export default App;
