const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const str = "Hello World";
ctx.font = "bold italic 40px Ariel";
ctx.fillStyle = "blue";
ctx.fillText(str, 100, 100);

ctx.font = "bold 20px Arial";
ctx.fillStyle = "red";

ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;
ctx.shadowBlur = 2;
ctx.shadowColor = "rgba(0,0,0,0.5)";

for (let x = 1; x <= 11; x++) {
  ctx.fillText("counter: " + x, 50, 100 + 40 * x);
}
