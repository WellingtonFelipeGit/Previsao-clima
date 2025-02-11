import { useEffect, useState } from "react";
import api from "./src/api/apiClient";
import LocationSearch from "./src/components/LocationSearch";
import WeatherDisplay from "./src/components/WeatherDisplay";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [rain, setRain] = useState("");

  const getSearch = (value) => {
    setSearchValue(value);
  };

  const weather = async () => {
    let lat = -23.5506507;
    let lon = -46.6333824;
    if (searchValue) {
      lat = searchValue.value.lat;
      lon = searchValue.value.lon;
    }
    const weather = await api.getWeather(lat, lon);
    return weather;
  };

  const forecast = async () => {
    let lat = -23.5506507;
    let lon = -46.6333824;
    if (searchValue) {
      lat = searchValue.value.lat;
      lon = searchValue.value.lon;
    }
    const forecast = await api.getForecast(lat, lon);
    setRain(forecast["rainValue"]);
  };

  useEffect(() => {
    forecast();
  }, [searchValue]);

  return (
    <div>
      <LocationSearch resultSearch={getSearch} />
      <WeatherDisplay
        weather={weather}
        nameCity={searchValue.label}
        rain={rain}
      />
    </div>
  );
}

export default App;
