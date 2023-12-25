import PropTypes from "prop-types";
const WindInfo = ({ speed, deg, gust }) => {
  console.log(speed, deg, gust);
  return (
    <div id="windinfo">
      <div>Wind Speed: {speed}</div>
      <div>Wind Direction: {deg}</div>
      <div>Wind Gust: {gust}</div>
    </div>
  );
};
WindInfo.propTypes = {
  speed: PropTypes.number.isRequired,
  deg: PropTypes.number.isRequired,
  gust: PropTypes.number.isRequired,
};
export default WindInfo;
