const canvas = document.createElement("canvas");
const grid = 50;
canvas.setAttribute("width", grid * 20);
canvas.setAttribute("height", grid * 15);
document.body.prepend(canvas);
canvas.style.border = "1px solid black";
const ctx = canvas.getContext("2d");
const player = {
  x: 10,
  y: canvas.height / 2,
  size: 30,
  speed: 5,
};
const game = {
  req: "",
};
const keyz = {
  ArrowLeft: false,
  ArrowRight: false,
  ArrowUp: false,
  ArrowDown: false,
};
document.addEventListener("keydown", (e) => {
  if (e.code in keyz) {
    keyz[e.code] = true;
  }
  //console.log(keyz);
});
document.addEventListener("keyup", (e) => {
  if (e.code in keyz) {
    keyz[e.code] = false;
  }
  console.log(keyz);
});
console.log(player);
/*for(let i=0;i<10;i++){
  drawmove(i);
}*/
game.req = requestAnimationFrame(draw);
canvas.addEventListener("click", () => {
  player.speed *= -1;
});

function movementPlayer() {
  if (keyz["ArrowLeft"]) {
    player.x -= player.speed;
  }
  if (keyz["ArrowRight"]) {
    player.x += player.speed;
  }
  if (keyz["ArrowUp"]) {
    player.y -= player.speed;
  }
  if (keyz["ArrowDown"]) {
    player.y += player.speed;
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //console.log(player.x);
  movementPlayer();
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.arc(player.x, player.y, player.size, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "blue";
  ctx.fillRect(player.x, player.y, 5, 5);
  game.req = requestAnimationFrame(draw);
}

function drawcir() {
  ctx.beginPath();
  ctx.fillStyle = "yellow";
  ctx.arc(300, 100, 50, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.moveTo(300, 80);
  ctx.arc(280, 80, 15, 0, Math.PI * 2, true);
  ctx.moveTo(335, 80);
  ctx.arc(320, 80, 15, 0, Math.PI * 2, true);
  ctx.moveTo(330, 110);
  ctx.arc(300, 110, 30, 0, Math.PI, false);
  ctx.fill();
}

function drawpath() {
  ctx.fillStyle = "blue";
  ctx.fillRect(canvas.width / 2, canvas.height / 2, 5, 5);
  ctx.fillRect(100, 100, 5, 5);
  ctx.fillRect(100, 300, 5, 5);
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, canvas.height / 2);
  ctx.lineTo(100, 100);
  ctx.lineTo(100, 300);
  ctx.lineTo(canvas.width / 2, canvas.height / 2);
  ctx.stroke();
  ctx.fill();
}

function draw2() {
  ctx.fillRect(5, 10, 50, 30);
  ctx.strokeRect(150, 10, 50, 30);
}
