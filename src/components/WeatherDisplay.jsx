import { useEffect, useState } from "react";
import "../styles/WeatherDisplay.css";
import WeatherMain from "./WeatherMain";
import WeatherCurrentConditions from "./WeatherCurrentConditions";

const WeatherDisplay = ({ weather, nameCity, rain }) => {
  const [wind, setWind] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [pressure, setPressure] = useState("");
  const [humidity, setHumidity] = useState("");
  const [gust, setGusts] = useState("");
  const [cloud, setCloud] = useState("");
  const [temp, setTemp] = useState("");
  const [main, setMain] = useState("");
  const [name, setName] = useState("");

  const dateFormated = (timestamp) => {
    const date = new Date(timestamp * 1000);

    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();

    const formattedTime = hours + ":" + minutes.substr(-2);

    return formattedTime;
  };

  const getValue = async () => {
    const result = await weather();
    const currentName = nameCity ? nameCity : "São Paulo São Paulo BR";
    setName(currentName);

    if (result) {
      setWind(result.wind.speed);
      setSunrise(dateFormated(result.sys.sunrise));
      setSunset(dateFormated(result.sys.sunset));
      setPressure(result.main.pressure);
      setHumidity(result.main.humidity);
      setGusts(result.wind.gust);
      setCloud([result.weather[0].main, result.weather[0].description]);
      setTemp(parseInt(result.main.temp));
      setMain(result.weather[0].main);
    }
  };

  useEffect(() => {
    console.log(nameCity);
    getValue();
  }, [weather]);

  return (
    <section className="weather-display">
      <div className="weather-container">
        <WeatherMain currentWeather={main} />
        <span>{temp}°</span>
      </div>
      <p>
        {name} - {cloud[1]}
      </p>
      <WeatherCurrentConditions
        wind={wind}
        rain={rain}
        sunrise={sunrise}
        sunset={sunset}
        pressure={pressure}
        gust={gust}
        humidity={humidity}
      />
    </section>
  );
};

export default WeatherDisplay;
