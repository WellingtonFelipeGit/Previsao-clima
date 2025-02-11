import axios from "axios";
const apiKey = "3e13ab6e6e9291dff618af56a9dd1e3c";
const URL_BASE = `https://api.openweathermap.org`;
const api = {
  async getCity(city) {
    try {
      const response = await axios.get(
        `${URL_BASE}/geo/1.0/direct?q=${city}&limit=15&appid=${apiKey}`
      );
      const data = await response.data;
      return data;
    } catch (error) {
      alert(error);
    }
  },

  async getWeather(lat, lon) {
    try {
      const response = await axios.get(`${URL_BASE}/data/2.5/weather`, {
        params: {
          lat,
          lon,
          appid: apiKey,
          units: "metric",
        },
      });
      return response.data;
    } catch (error) {
      alert(error);
    }
  },

  async getForecast(lat, lon) {
    try {
      const search = await axios.get(`${URL_BASE}/data/2.5/forecast`, {
        params: {
          lat,
          lon,
          appid: apiKey,
          units: "metric",
        },
      });

      const response = await search.data;
      const data = response.list;

      const rain = data.filter((item) => item.rain);
      const currentDay = new Date().getDate();
      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();
      const currentDate =
        new Date(currentYear, currentMonth, currentDay, 23, 59, 59).getTime() /
        1000;
      const currentRainItem = rain.filter((item) => item.dt < currentDate);
      const formatedRain = currentRainItem.map((item) => item.rain["3h"]);

      const rainValue =
        formatedRain.length > 0 ? formatedRain.reduce((a, b) => a + b) : 0;
      return { rainValue };
    } catch (error) {
      alert(error);
    }
  },
};

export default api;
