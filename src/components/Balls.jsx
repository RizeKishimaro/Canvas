import { useState, useEffect } from "react";

const Balls = () => {
  const [randomLeft, setRandomLeft] = useState(0);
  const [randomTop, setRandomTop] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const newRandomLeft = Math.floor(Math.random() * 700);
      const newRandomTop = Math.floor(Math.random() * 500);
      setRandomLeft(newRandomLeft);
      setRandomTop(newRandomTop);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const gradientCircleStyle = {
    position: "absolute",
    width: "20rem",
    height: "20rem",
    borderRadius: "50%",
    background: "linear-gradient(to right, #4158D0, #C850C0, #FFCC70)",
    left: `${randomLeft}px`,
    top: `${randomTop}px`,
    
  };

  return <div id="gradient-circle" style={gradientCircleStyle}></div>;
};

export default Balls;
