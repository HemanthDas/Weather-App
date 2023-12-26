import PropTypes from "prop-types";
const WeatherStream = (main) => {
  return (
    <div id="weather-info">
      <div>Min Temperature: {main.main.temp_min} K</div>
      <div>Max Temperature: {main.main.temp_max} K</div>
      <div>Humidity: {main.main.humidity}%</div>
    </div>
  );
};
WeatherStream.propTypes = {
  main: PropTypes.object.isRequired,
};
export default WeatherStream;
