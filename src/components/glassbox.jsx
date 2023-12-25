import axios from "axios";
import { useEffect, useState } from "react";
import WeatherForcast from "./weatherforcast";
import WeatherStream from "./weatherstream";
const GlassBox = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
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
  function completeLoading() {
    let temp = Math.round(data.main.temp - 273.15);
    let weatherDescription = data.weather[0].description;
    return (
      <>
        <article className="container">
          <section className="weather">
            <img
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="weather-icon"
            />
            <div className="weather-temp">{temp}°C</div>
          </section>
          <section className="down">
            <div>{weatherDescription}</div>
            <div className="location">
              <div>{data.name}-</div>
              <div>{data.sys.country}</div>
            </div>
          </section>
        </article>
        <WeatherStream main={data.main} />
        <WeatherForcast
          latitude={cord.latitude}
          longitude={cord.longitude}
          rise={data.sys.sunrise}
          set={data.sys.sunset}
        />
      </>
    );
  }
  return (
    <main id="glassbox">
      {loading ? <div className="loading">Loading...</div> : completeLoading()}
    </main>
  );
};

export default GlassBox;
