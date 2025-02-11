import { useEffect, useState } from "react";
import {
  BsCloudDrizzleFill,
  BsSnow,
  BsFillCloudFog2Fill,
  BsFillCloudsFill,
  BsHurricane,
  BsFillCloudRainHeavyFill,
  BsSunFill,
} from "react-icons/bs";
import { IoThunderstormSharp } from "react-icons/io5";
import { RiMistFill } from "react-icons/ri";

const WeatherMain = ({ currentWeather }) => {
  const [display, setDisplay] = useState("");

  const getCurrentWeather = (value) => {
    let toRender;

    switch (value) {
      case "Mist":
        toRender = <RiMistFill color="#c8cecd" size={100} />;
        break;
      case "Clear":
        toRender = <BsSunFill color="#F7B118" size={100} />;
        break;
      case "Drizzle":
        toRender = <BsCloudDrizzleFill color="#7178ec" size={100} />;
        break;
      case "Rain":
        toRender = <BsFillCloudRainHeavyFill color="#2a3196" size={100} />;
        break;
      case "Thunderstorm":
        toRender = <IoThunderstormSharp color="#0b0f50" size={100} />;
        break;
      case "Snow":
        toRender = <BsSnow color="#ced1f8" size={100} />;
        break;
      case "Haze":
        toRender = <BsFillCloudFog2Fill color="#c8cecd" size={100} />;
        break;
      case "Clouds":
        toRender = <BsFillCloudsFill color="c8cecd" size={100} />;
        break;
      case "Extreme":
        toRender = <BsHurricane color="#414a49" size={100} />;
        break;
      default:
    }
    setDisplay(toRender);
  };

  useEffect(() => {
    getCurrentWeather(currentWeather);
  }, [currentWeather]);

  return <>{display}</>;
};

export default WeatherMain;
