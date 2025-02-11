import "../styles/WeatherCurrentConditions.css";
import {
  BsCloudRainFill,
  BsSunsetFill,
  BsSunriseFill,
  BsDropletFill,
} from "react-icons/bs";
import { WiStrongWind } from "react-icons/wi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { WiCloudyGusts } from "react-icons/wi";

const WeatherCurrentConditions = ({
  wind,
  rain,
  sunrise,
  sunset,
  gust,
  humidity,
  pressure,
}) => {
  return (
    <ul className="weather-conditions">
      <li>
        <label>
          <BsCloudRainFill color="#83B4CF" size={20} /> Rain
        </label>
        <div>{rain}mm</div>
      </li>
      <li>
        <label>
          <WiStrongWind color="#a3a4a4" size={20} /> Wind
        </label>
        <div>{wind}km/h</div>
      </li>
      <li>
        <label>
          <BsSunriseFill color="#e1be37" size={20} /> Sunrise
        </label>
        <div>{sunrise}hr</div>
      </li>
      <li>
        <label>
          <BsSunsetFill color="#5781cd" size={20} /> Sunset
        </label>
        <div>{sunset}hr</div>
      </li>
      <li>
        <label>
          <FaArrowTrendUp color="#cc579f" size={20} /> Pressure
        </label>
        <div>{pressure}hPa</div>
      </li>
      <li>
        <label>
          <BsDropletFill color="#54abd4" size={20} /> Humidity
        </label>
        <div>{humidity}%</div>
      </li>
      <li>
        <label>
          <WiCloudyGusts color="#38ca35" size={20} /> Gusts
        </label>
        <div>{gust}km/h</div>
      </li>
    </ul>
  );
};

export default WeatherCurrentConditions;
