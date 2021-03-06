const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.setAttribute("width", "600");
canvas.setAttribute("height", "400");
document.body.prepend(canvas);
let speed = 15;
const ball = {
  x: 10,
  y: 10,
  xspeed: speed,
  yspeed: speed,
  size: 20,
  color: "blue",
};
requestAnimationFrame(draw);

function draw() {
  //ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = ball.color;
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
  ctx.fill();
  ball.x += ball.xspeed;
  ball.y += ball.yspeed;
  if (ball.x + ball.size > canvas.width || ball.x < 0) {
    ball.xspeed *= -1;
  }
  if (ball.y + ball.size > canvas.height || ball.y < 0) {
    ball.yspeed *= -1;
  }
  requestAnimationFrame(draw);
}
