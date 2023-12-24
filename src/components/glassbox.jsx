import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import WeatherForcast from "./weatherforcast";

const GlassBox = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  // const [isRain, setIsRain] = useState(false);
  const [cord, setCord] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCord({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        const res = async () => {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${
              position.coords.latitude
            }&lon=${position.coords.longitude}&appid=${
              import.meta.env.VITE_API_ID
            }`
          );
          setData(response.data);
          setLoading(false);
        };
        res();
      });
    }
  }, []);
  const cachedData = useMemo(() => data, [data]);
  function completeLoading() {
    let temp = Math.round(cachedData.main.temp - 273.15);
    let weatherDescription = cachedData.weather[0].description;
    return (
      <article className="container">
        <section className="weather">
          <div className="weather-icon">
            <img
              src={`http://openweathermap.org/img/wn/${cachedData.weather[0].icon}@2x.png`}
              alt="weather-icon"
            />
          </div>
          <div className="weather-temp">{temp}°C</div>
        </section>
        <section className="location">
          <div className="location__city">{cachedData.name}</div>
          <div className="location__country">{cachedData.sys.country}</div>
        </section>
        <section className="weather-description">{weatherDescription}</section>
      </article>
    );
  }
  return (
    <main id="glassbox">
      {loading ? <div className="loading">Loading...</div> : completeLoading()}
      <WeatherForcast latitude={cord.latitude} longitude={cord.longitude} />
    </main>
  );
};

export default GlassBox;
