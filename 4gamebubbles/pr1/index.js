const canvas = document.createElement("canvas");
canvas.setAttribute("height", "480");
canvas.setAttribute("width", "640");
canvas.style.backgroundColor = "black";
document.body.prepend(canvas);
const ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.fillStyle = "red";
ctx.strokeStyle = "blue";
ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();