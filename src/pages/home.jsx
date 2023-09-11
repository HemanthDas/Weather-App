import icon from "../assets/1364063978.svg";
import icon1 from "../assets/vc1.svg";
import icon2 from "../assets/vc2.svg";
import icon3 from "../assets/svg3.svg";
import flower from "../assets/flowers.svg";
const Home = () => {
  return (
    <div className="home">
      <div className="up">
        <img src={icon} alt="bg-sun" className="svg-img" />
      </div>
      <div className="down">
        <img src={icon1} alt="bg1" /> <img src={icon2} alt="bg2" />
        <img src={flower} alt="flower" className="flower"/>
        <img src={icon3} alt="bg3" />{" "}
      </div>
    </div>
  );
};

export default Home;
