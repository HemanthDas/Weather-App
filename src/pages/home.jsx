import React, { useEffect, useState } from "react";
const Home = () => {
  const [formattedTime, setFormattedTime] = useState("");
  useEffect(() => {
    const updateFormattedTime = () => {
      const options = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      const currentTime = new Date().toLocaleString(undefined, options);
      setFormattedTime(currentTime);
    };
    const intervalId = setInterval(updateFormattedTime, 1000);
    updateFormattedTime();
    return () => clearInterval(intervalId);
  }, []);
  return <React.Fragment>{formattedTime}n</React.Fragment>;
};

export default Home;
