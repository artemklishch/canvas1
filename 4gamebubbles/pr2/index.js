const canvas = document.createElement("canvas");
canvas.setAttribute("height", "480");
canvas.setAttribute("width", "640");
canvas.style.backgroundColor = "black";
document.body.prepend(canvas);
const ctx = canvas.getContext("2d");

const gradient = ctx.createRadialGradient(
  canvas.width / 2,
  canvas.height / 2 - 20,
  20,
  canvas.width / 2,
  canvas.height / 2,
  50
);
gradient.addColorStop(0, "rgba(0,0,255,0.9)");
gradient.addColorStop(1, "rgba(255,255,255,0.1)");

ctx.beginPath();
ctx.fillStyle = gradient;
ctx.strokeStyle = "rgba(255,255,255,0.4)";
ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();
