import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import CardWeather from "./cardweather";

const WeatherForcast = ({ latitude, longitude }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_API_ID
        }`
      )
      .then((res) => {
        if (res.status === 200) {
          setData(res.data.list);
          setLoading(false);
        }
      });
  }, [latitude, longitude]);
  if (loading) {
    return <div className="loading">Loading...</div>;
  } else {
    return (
      <div className="forecast">
        {data.map((item) => (
          <CardWeather
            key={item.dt}
            time={item.dt_txt}
            temperature={Math.round(item.main.temp - 273.15)}
            icon={item.weather[0].icon}
          />
        ))}
      </div>
    );
  }
};

WeatherForcast.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};

export default WeatherForcast;
