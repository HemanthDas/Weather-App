import React from "react";
import PropTypes from "prop-types";
const CardWeather = ({ time, temperature, icon }) => {
  const timestamp = new Date(time);

  let formatTime = timestamp.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return (
    <section className="card">
      <div className="card-time">{formatTime}</div>
      <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="" />
      <div className="card-temperature">{temperature}</div>
    </section>
  );
};
CardWeather.propTypes = {
  time: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
};
export default CardWeather;
