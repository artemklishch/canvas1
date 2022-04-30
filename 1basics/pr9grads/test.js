const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const colors = ctx.createLinearGradient(0, 0, 400, 400);
colors.addColorStop(0, "#00ff00");
colors.addColorStop(0.5, "#ff0000");
colors.addColorStop(1, "#0000ff");

const colors2 = ctx.createRadialGradient(100, 100, 0, 100, 100, 500);
colors2.addColorStop(0, "#00ff00");
colors2.addColorStop(0.5, "#ff0000");
colors2.addColorStop(1, "#0000ff");

// ctx.fillStyle = colors;
ctx.fillStyle = colors2;
ctx.fillRect(100, 100, 300, 300);

ctx.strokeStyle = colors;
ctx.lineWidth = 10;
ctx.moveTo(10, 0);
ctx.lineTo(10, 500);
ctx.stroke();




