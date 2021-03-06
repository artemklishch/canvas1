const canvas = document.createElement("canvas");
const grid = 50;
canvas.setAttribute("width", grid * 20);
canvas.setAttribute("height", grid * 15);
document.body.prepend(canvas);
canvas.style.border = "1px solid black";
const ctx = canvas.getContext("2d");
const players = [
  {
    x: canvas.width / 2 + grid * 2,
    y: canvas.height / 2,
    size: 30,
    speed: 5,
    color: "red",
  },
  {
    x: canvas.width / 2 - grid * 2,
    y: canvas.height / 2,
    size: 30,
    speed: 5,
    color: "blue",
  },
];

const game = {
  req: "",
};
const keyz = {
  ArrowLeft: false,
  ArrowRight: false,
  ArrowUp: false,
  ArrowDown: false,
  KeyA: false,
  KeyS: false,
  KeyZ: false,
  KeyW: false,
};
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

game.req = requestAnimationFrame(draw);

function movementPlayer() {
  if (keyz["ArrowLeft"] && players[0].x > canvas.width / 2 + players[0].size) {
    players[0].x -= players[0].speed;
  }
  if (keyz["ArrowRight"] && players[0].x < canvas.width - players[0].size) {
    players[0].x += players[0].speed;
  }
  if (keyz["ArrowUp"] && players[0].y > players[0].size) {
    players[0].y -= players[0].speed;
  }
  if (keyz["ArrowDown"] && players[0].y < canvas.height - players[0].size) {
    players[0].y += players[0].speed;
  }
  if (keyz["KeyA"] && players[1].x > players[1].size) {
    players[1].x -= players[1].speed;
  }
  if (keyz["KeyS"] && players[1].x < canvas.width / 2 - players[1].size) {
    players[1].x += players[1].speed;
  }
  if (keyz["KeyW"] && players[1].y > players[1].size) {
    players[1].y -= players[1].speed;
  }
  if (keyz["KeyZ"] && players[1].y < canvas.height - players[1].size) {
    players[1].y += players[1].speed;
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  movementPlayer();
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();
  players.forEach((player) => {
    ctx.beginPath();
    ctx.fillStyle = player.color;
    ctx.arc(player.x, player.y, player.size, 0, Math.PI * 2);
    ctx.fill();
  });
  game.req = requestAnimationFrame(draw);
}
