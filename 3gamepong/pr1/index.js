const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const player = {
  x: 50,
  y: 50,
  speed: 5,
};
const keyz = {
  ArrowRight: false,
  ArrowLeft: false,
  ArrowUp: false,
  ArrowDown: false,
};
draw();

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

function keyDown(event) {
  keyz[event.code] = true;
  move();
}
function keyUp(event) {
  keyz[event.code] = false;
}

function move() {
  if (keyz.ArrowRight) {
    player.x += player.speed;
  } else if (keyz.ArrowLeft) {
    player.x = player.speed;
  }
  if (keyz.ArrowDown) {
    player.y += player.speed;
  } else if (keyz.ArrowUp) {
    player.y -= player.speed;
  }
  draw();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let output = `Pox X ${player.x} Y ${player.y}`;
  ctx.fillStyle = "#fff";
  ctx.fillRect(player.x, player.y, 100, 100);
  ctx.font = "24px serif";
  ctx.textAlign = "center";
  ctx.fillStyle = "red";
  ctx.fillText(output, 300, 30);

  // triangle
  ctx.beginPath();
  ctx.fillStyle = "blue";
  ctx.moveTo(50, 200);
  ctx.lineTo(150, 250);
  ctx.lineTo(150, 150);
  ctx.fill();

  // circle
  ctx.beginPath();
  ctx.fillStyle = "green";
  ctx.arc(150, 400, 50, 0, 2 * Math.PI);
  ctx.strokeStyle = "yellow";
  ctx.fill();
  ctx.stroke();
}
