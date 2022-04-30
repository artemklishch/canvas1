const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const str = "Hello World";
ctx.font = "bold italic 40px Ariel";
ctx.fillStyle = "blue";
// ctx.textAlign = "center";
// ctx.textAlign = "left"; // default
// ctx.textAlign = "right";
ctx.fillText(str, 100, 100);

// ctx.font = "bold 20px Arial";
// ctx.fillStyle = "red";
// for (let x = 1; x <= 5; x++) {
//   ctx.fillText("counter: " + x, 50, 100 + 40 * x);
// }

let yAxis = 200;
ctx.fillStyle = "red";
ctx.font = "20px Arial";
const str2 = "Counter: ";
for (let i = 1; i <= 10; i++) {
  ctx.fillText(str2 + i, 50, yAxis);
  yAxis += 20;
}
