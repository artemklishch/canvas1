const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.prepend(canvas);
const game = { grid: 60 };
const player = {
  x: game.grid * 7,
  y: game.grid * 8,
  w: game.grid * 2,
  h: game.grid / 2,
  color: "red",
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
  console.log(keyz);
});

draw();

function draw() {
  ctx.beginPath();
  ctx.rect(player.x, player.y, player.w, player.h);
  ctx.fillStyle = player.color;
  ctx.fill();
  ctx.closePath();
}
