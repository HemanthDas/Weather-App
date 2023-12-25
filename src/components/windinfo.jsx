import PropTypes from "prop-types";
const WindInfo = ({ speed, deg, gust }) => {
  console.log(speed, deg, gust);
  return <div>WindInfo</div>;
};
WindInfo.propTypes = {
  speed: PropTypes.number.isRequired,
  deg: PropTypes.number.isRequired,
  gust: PropTypes.number.isRequired,
};
export default WindInfo;
