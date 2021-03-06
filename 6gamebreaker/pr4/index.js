const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.prepend(canvas);
const game = { grid: 60, ani: "" };
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

game.ani = requestAnimationFrame(draw);

function movement() {
  if (keyz.ArrowLeft) {
    player.x -= player.speed;
  }
  if (keyz.ArrowRight) {
    player.x += player.speed;
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  movement();
  ctx.beginPath();
  ctx.rect(player.x, player.y, player.w, player.h);
  ctx.fillStyle = player.color;
  ctx.fill();
  ctx.closePath();
  game.ani = requestAnimationFrame(draw);
}
