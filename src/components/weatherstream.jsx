import PropTypes from "prop-types";
const WeatherStream = (main) => {
  return (
    <div id="weather-info">
      <div className="weather-ino-box">
        Min Temperature: {main.main.temp_min} K
      </div>
      <div className="weather-ino-box">
        Max Temperature: {main.main.temp_max} K
      </div>
      <div className="weather-ino-box">Humidity: {main.main.humidity}%</div>
    </div>
  );
};
WeatherStream.propTypes = {
  main: PropTypes.object.isRequired,
};
export default WeatherStream;
