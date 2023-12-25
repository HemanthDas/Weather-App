import PropTypes from "prop-types";
const WeatherStream = (main) => {
  console.log(main.main);
  return (
    <div id="weather-info">
      <div>
        <strong>Temperature:</strong> {main.main.temp} K
      </div>
      <div>
        <strong>Feels Like:</strong> {main.main.feels_like} K
      </div>
      <div>
        <strong>Min Temperature:</strong> {main.main.temp_min} K
      </div>
      <div>
        <strong>Max Temperature:</strong> {main.main.temp_max} K
      </div>
      <div>
        <strong>Pressure:</strong> {main.main.pressure} hPa
      </div>
      <div>
        <strong>Humidity:</strong> {main.main.humidity}%
      </div>
      <div>
        <strong>Sea Level:</strong> {main.main.sea_level} hPa
      </div>
      <div>
        <strong>Ground Level:</strong> {main.main.grnd_level} hPa
      </div>
    </div>
  );
};
WeatherStream.propTypes = {
  main: PropTypes.object.isRequired,
};
export default WeatherStream;
