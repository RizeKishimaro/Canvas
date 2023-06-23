import { useEffect, useRef } from "react";

const Signup = () => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    // Initialising the canvas
    const ctx = canvas.getContext("2d");

    // Setting the width and height of the canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Setting up the letters
    var letters =
      "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";
    letters = letters.split("");

    // Setting up the columns
    var fontSize = 10,
      columns = canvas.width / fontSize;

    // Setting up the drops
    var drops = [];
    for (var i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // Setting up the draw function
    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, .1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
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
      for (var i = 0; i < columns; i++) {
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
      <div className=" absolute z-30 mx-auto left-0 right-0 text-center">
        <img src="https://j.top4top.io/p_27285zs4u0.png" className=" w-[300px] mx-auto" alt="logo" />
      </div>
    </>
  );
};

export default Signup;
