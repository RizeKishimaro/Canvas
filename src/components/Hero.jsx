import { useEffect, useRef } from "react";
import TerminalCom from "./terminal/TerminalCom";

const Hero = () => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let letters =
      "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";
    letters = letters.split("");

    // Setting up the columns
    let fontSize = 10,
      columns = canvas.width / fontSize;

    // Setting up the drops
    let drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // Setting up the draw function
    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, .1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < drops.length; i++) {
        let text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = "#0f0";
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    }
    function resize(width, height) {
      canvas.width = width;
      canvas.height = height;
      columns = canvas.width / fontSize;
      drops = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = 1;
      }
    }

    // Loop the animation
    setInterval(draw, 33);
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      resize(canvas.width, canvas.height);
    });
  }, []);

  return (
    <>
      <canvas ref={ref} className=" absolute"></canvas>
      <div className=" absolute z-30 mx-auto h-[300px] left-0 right-0 text-center overflow-x-clip">
        <img
          src="https://qph.cf2.quoracdn.net/main-qimg-22ccc864539e08ad5d597874368d290b"
          className=" w-[300px] mx-auto logo-image"
          alt="logo"
        />
        <div>
          <h4
            className="hero glitch layers mt-4 text-[20px] sm:text-[30px]"
            data-text="Rize Kishimaro"
          >
            <span>Rize Kishimaro</span>
          </h4>
        </div>
        <div className=" w-full mt-11">
          <TerminalCom />
        </div>
      </div>
    </>
  );
};

export default Hero;
