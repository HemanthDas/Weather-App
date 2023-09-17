import React, { useState, useEffect } from "react";
import sun from "/images/sun.svg";
import moon from "/images/moon-icon-23653.png";
import vc1 from "/images/vc1.svg";
import vc2 from "/images/vc2.svg";
import vc3 from "/images/svg3.svg";

const RiseSet = () => {
  const time = new Date().getHours();
  const planet = time > 6 && time < 18 ? sun : moon;
  const [right, setRight] = useState(-25);
  const [bg, setBg] = useState("antiquewhite");
  useEffect(() => {
    const arr = [30, 40, 50, 60, 70, 80, -20, -10, -0, 10, 10, 20];
    setRight(arr[time % 12]);
    const color = ["antiquewhite", "black"];
    setBg(color[time < 18 && time > 6 ? 0 : 1]);
  }, [time]);
  return (
    <div className="bgani" style={{ backgroundColor: `${bg}` }}>
      <div className="rise-set">
        <img
          src={planet}
          alt="planet"
          className="change"
          id="planet"
          style={{ left: `${right}vw` }}
        />
      </div>
      <div className="land">
        <img src={vc1} alt="bg1" />
        <img src={vc2} alt="bg2" />
        <img src={vc3} alt="bg3" />
      </div>
    </div>
  );
};

export default RiseSet;
