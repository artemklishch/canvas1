const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.strokeStyle = "blue";
ctx.rect(100, 100, 200, 100);
ctx.fill();
ctx.stroke();

ctx.strokeRect(200, 200, 200, 100);

ctx.beginPath(300, 300);
ctx.moveTo(50, 400);
ctx.lineTo(50, 100);
ctx.lineTo(500, 100);
ctx.lineTo(500, 400);
ctx.lineTo(80, 300);
// ctx.fill();
ctx.closePath()
ctx.stroke();

// triangle
ctx.strokeStyle = 'purple'
ctx.fillStyle = 'purple'
ctx.beginPath(320, 50);
ctx.moveTo(320, 50);
ctx.lineTo(520, 250);
ctx.lineTo(120 , 250);
ctx.lineTo(320, 50);
ctx.fill();
ctx.stroke();
