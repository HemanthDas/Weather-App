import React, { useEffect } from "react";

const Top = () => {
  useEffect(() => {
    const keyframes = [
      { left: "40%", bottom: "30%" },
      { left: "50%", bottom: "25%" },
      { left: "60%", bottom: "20%" },
      { left: "70%", bottom: "15%" },
      { left: "90%", bottom: "-20%" },
      { left: "100%", bottom: "-50%" },
      { left: "-10%", bottom: "-50%" },
      { left: "0%", bottom: "10%" },
      { left: "10%", bottom: "20%" },
      { left: "20%", bottom: "24%" },
      { left: "30%", bottom: "26%" },
      { left: "35%", bottom: "28%" },
    ];
    const hour = new Date().getHours();
    const sun = document.getElementById("sun");
    const body = document.querySelector("body");
    const rain = document.getElementById("rain");
    const bottom = document.getElementById("bottom-body");
    const isRain = false;
    if (isRain) {
      rain.style.display = "block";
      bottom.classList.add("rain");
    } else {
      bottom.classList.remove("rain");
      rain.style.display = "none";
    }
    if (hour >= 6 && hour < 18) {
      body.style.backgroundColor = "#F6FFB9";
      sun.src = "/images/sun.svg";
    } else {
      body.style.backgroundColor = "#000000";
      sun.style.filter = "drop-shadow(0 0 5rem #fff)";
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
