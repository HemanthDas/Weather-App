import PropTypes from "prop-types";
const SunRiseSet = ({ rise, set }) => {
  const riseTime = new Date(rise * 1000).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const setTime = new Date(set * 1000).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return (
    <dl id="suncycle">
      <div>
        <dt>Sunrise:</dt>
        <dd>{riseTime}</dd>
      </div>
      <div>
        <dt>Sunset:</dt>
        <dd>{setTime}</dd>
      </div>
    </dl>
  );
};
SunRiseSet.propTypes = {
  rise: PropTypes.number.isRequired,
  set: PropTypes.number.isRequired,
};
export default SunRiseSet;
