import PropTypes from "prop-types";
const WeatherStream = (main) => {
  console.log(main.main);
  return (
    <div id="weather-info">
      <div>Temperature:{main.main.temp} K</div>
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
