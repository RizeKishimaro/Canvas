let canvas;
let ctx;
let flowField;
let flowFieldAnimation;
window.onload = () => {
  canvas = document.querySelector("#canvas");
  ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  flowField = new FlowEffect(ctx, canvas.width, canvas.height);
  flowField.animate(0);
};

window.addEventListener("resize", function () {
  cancelAnimationFrame(flowFieldAnimation);
  canvas.width = window.innerWidth;
  canvas.innerHeight = window.innerHeight;
  flowField = new FlowEffect(ctx, canvas.width, canvas.height);
    flowField.animate(0);
});

const mouse = {
  x: 0,
  y: 0,
};
window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});
class FlowEffect {
  #ctx;
  #width;
  #height;
  constructor(ctx, width, height) {
    this.#ctx = ctx; // assign private values
    this.#ctx.strokeStyle = "white";
    this.#ctx.lineWidth = 0.3;
    this.#width = width;
    this.#height = height;
    this.lastTime = 0;
    this.timer = 0;
    this.interval = 1000 / 60;
    this.cellSize = 10;
    this.gradient;
    this.#createGradient();
    this.#ctx.strokeStyle = this.gradient;
    this.radius = 0;
    this.vr = 0.03;
  }
  #createGradient() {
    this.gradient = this.#ctx.createLinearGradient(
      0,
      0,
      this.#width,
      this.#height
    );
    this.gradient.addColorStop("0.1", "#ff5c33");
    this.gradient.addColorStop("0.3", "#ff311c");
    this.gradient.addColorStop("0.5", "#ff21ec");
    this.gradient.addColorStop("0.7", "#ff2e2e");
    this.gradient.addColorStop("0.8", "#ff5c3e");
    this.gradient.addColorStop("0.6", "#ff2e2d");
    this.gradient.addColorStop("0.9", "#ffff33");
  }
  #drawLine(angle, x, y) {
    const positionX = x;
    const positionY = y;
    const disX = mouse.x - positionX;
    const disY = mouse.y - positionY;
    let distance = disX * disX + disY * disY;
    if(distance > 3000000) distance = 3000000
    let length = distance/10000;
    this.#ctx.beginPath();
    this.#ctx.moveTo(x, y);
    this.#ctx.lineTo(
      x + Math.cos(angle) * length,
      y + Math.sin(angle) * length
    );
    this.#ctx.stroke();
  }
  animate(timeStamp) {
    // timestamp from request animation frame
    //delta time is the length of the first frame to second frame
    // frame 1  ->(last 0.12 sec) -> frame2 <interval time>
    const deltaTime = timeStamp - this.lastTime;
    this.lastTime = timeStamp;
    //creating animation loop
    if (this.timer > this.interval) {
      this.#ctx.clearRect(0, 0, this.#width, this.#height);
      this.radius += this.vr;
      if (this.radius > 6 || this.radius < -6) {
        this.vr *= -1;
      }
      for (let y = 0; y < this.#height; y += this.cellSize) {
        // caculating the height and filling the space with 15 px per space in y coordinates
        for (let x = 0; x < this.#width; x += this.cellSize) {
          const angle = (Math.cos(x * 0.01) + Math.sin(y * 0.01)) * this.radius;
          this.#drawLine(angle, x, y); //draw a square in x and y coordinates
        }
      }
      this.timer = 0;
    } else {
      this.timer += deltaTime;
      console.log(this.timer);
    }

    //sin create a flow field between  0 and 1
    //cos create a revert flow field against sin between 0 and 1
    // console.log("lol bro animating ha");
    flowFieldAnimation = requestAnimationFrame(this.animate.bind(this)); //show the animationframe  that the function is represent this object using bind
    //request animation frame auto generate the timestamp object where the function is fire
  }
}
