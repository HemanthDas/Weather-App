import { useEffect } from "react";

const Top = () => {
  useEffect(() => {
    const keyframes = [
      { left: "40%", bottom: "5%" },
      { left: "50%", bottom: "0%" },
      { left: "60%", bottom: "-8%" },
      { left: "70%", bottom: "-5%" },
      { left: "90%", bottom: "-20%" },
      { left: "100%", bottom: "-50%" },
      { left: "-10%", bottom: "-50%" },
      { left: "0%", bottom: "-20%" },
      { left: "10%", bottom: "-5%" },
      { left: "20%", bottom: "-8%" },
      { left: "30%", bottom: "0%" },
      { left: "40%", bottom: "5%" },
    ];
    const hour = new Date().getHours();
    const sun = document.getElementById("sun");
    const body = document.querySelector("body");
    const rain = document.getElementById("rain");
    const bottom = document.getElementById("bottom-body");
    const isRain = false;
    if (isRain) {
      rain.style.display = "block";
    } else {
      rain.style.display = "none";
    }
    if (hour >= 6 && hour < 18) {
      body.style.backgroundColor = "rgb(239 255 135)";
      sun.src = "/images/sun.svg";
      bottom.style.filter = "brightness(1)";
    } else {
      bottom.style.filter = "brightness(0.5)";
      body.style.backgroundColor = "#000000";
      sun.style.filter = "drop-shadow(0 0 0.75rem #fff)";
      sun.src = "/images/moon-icon-23653.png";
    }
    const keyframe = keyframes[hour % 12];
    sun.style.left = keyframe.left;
    sun.style.bottom = keyframe.bottom;
  }, []);
  return (
    <div id="top-body">
      <img src="/images/sun.svg" alt="sun" id="sun" />
    </div>
  );
};

export default Top;
