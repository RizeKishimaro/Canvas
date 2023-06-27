const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particle = [];
let mouse = {
  x: 0,
  y: 0,
};
window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

function drawImage() {
  const png =
    "./gesugao_face_anime_girl_by_shayba92_by_shayba92_df3eebi-pre.png";
  let imageWidth = png.width;
  let imageHeight = png.height;
  const imageData = ctx.getImageData(0, 0, 300, 300);
  console.log(imageData);
  ctx.drawImage(imageData, 0, 0);
}
drawImage();
