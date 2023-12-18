import axios from "axios";
import { useEffect, useMemo, useState } from "react";

const GlassBox = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
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
    return <h1>{temp}</h1>;
  }
  return (
    <section id="glassbox">
      {loading ? <div className="loading">Loading...</div> : completeLoading()}
    </section>
  );
};

export default GlassBox;
