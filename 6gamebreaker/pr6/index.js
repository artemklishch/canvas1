const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.prepend(canvas);
const game = { grid: 60, ani: "" };
const ball = {
  x: game.grid * 7,
  y: game.grid * 5,
  w: game.grid / 3,
  h: game.grid / 3,
  color: "green",
  dx: 5,
  dy: 5,
};
const player = {
  x: game.grid * 7,
  y: game.grid * 8,
  w: game.grid * 2,
  h: game.grid / 2,
  color: "red",
  speed: 5,
};
const keyz = { ArrowLeft: false, ArrowRight: false };

canvas.setAttribute("width", game.grid * 15);
canvas.setAttribute("height", game.grid * 10);
canvas.style.border = "1px solid black";
document.addEventListener("keydown", (e) => {
  if (e.code in keyz) {
    keyz[e.code] = true;
  }
});
document.addEventListener("keyup", (e) => {
  if (e.code in keyz) {
    keyz[e.code] = false;
  }
});
document.addEventListener("mousemove", (e) => {
  const val = e.clientX - canvas.offsetLeft;
  if (val > player.w && val < canvas.width) {
    player.x = val - player.w;
    console.log(player.x);
  }
});
game.ani = requestAnimationFrame(draw);

function movement() {
  if (keyz.ArrowLeft) {
    player.x -= player.speed;
  }
  if (keyz.ArrowRight) {
    player.x += player.speed;
  }
}
function ballmove() {
  if (ball.x > canvas.width || ball.x < 0) {
    ball.dx *= -1;
  }
  if (ball.y > canvas.height || ball.y < 0) {
    ball.dy *= -1;
  }
  ball.x += ball.dx;
  ball.y += ball.dy;
}
function drawBall() {
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.rect(ball.x, ball.y, ball.w, ball.h);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = ball.color;
  let adj = ball.w / 2;
  ctx.arc(ball.x + adj, ball.y + adj, ball.w / 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
}

function drawPlayer() {
  ctx.beginPath();
  ctx.rect(player.x, player.y, player.w, player.h);
  ctx.fillStyle = player.color;
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  movement();
  ballmove();
  drawPlayer();
  drawBall();
  game.ani = requestAnimationFrame(draw);
}
