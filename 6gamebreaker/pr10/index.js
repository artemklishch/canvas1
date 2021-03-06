const canvas = document.createElement("canvas");
canvas.style.background = "black";
const ctx = canvas.getContext("2d");
document.body.prepend(canvas);
const game = {
  grid: 60,
  ani: "",
  bricks: [],
  num: 48,
};
const ball = {
  x: game.grid * 7,
  y: game.grid * 5,
  w: game.grid / 3,
  h: game.grid / 3,
  color: "green",
  dx: 0,
  dy: 0,
};
const player = {
  color: "red",
  speed: 5,
};
const keyz = {
  ArrowLeft: false,
  ArrowRight: false,
};
canvas.setAttribute("width", game.grid * 15);
canvas.setAttribute("height", game.grid * 10);
canvas.style.border = "1px solid black";
document.addEventListener("keydown", (e) => {
  if (e.code in keyz) {
    keyz[e.code] = true;
  }
  if (e.code == "ArrowUp" && !game.inplay) {
    game.inplay = true;
    ball.dx = 5;
    ball.dy = -5;
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
    if (!game.inplay) {
      ball.x = val - player.w / 2;
    }
    //console.log(player.x);
  }
});
game.ani = requestAnimationFrame(draw);
startGame();

function resetBall() {
  ball.y = player.y - ball.h;
  ball.x = player.x + player.w / 2;
  game.inplay = false;
}

function startGame() {
  game.inplay = false;
  player.x = game.grid * 7;
  player.y = game.grid * 8;
  player.w = game.grid * 2;
  player.h = game.grid / 2;
  player.lives = 5;
  player.score = 0;
  resetBall();
  let buffer = 10;
  let width = game.grid;
  let height = game.grid / 2;
  let totalAcross = Math.floor((canvas.width - game.grid) / (width + buffer));
  let xPos = game.grid / 2;
  let yPos = 0;
  console.log(totalAcross);
  for (let i = 0; i < game.num; i++) {
    if (i % totalAcross == 0) {
      yPos += height + buffer;
      xPos = game.grid / 2;
    }
    createBrick(xPos, yPos, width, height);
    xPos += width + buffer;
  }
}

function createBrick(xPos, yPos, width, height) {
  let ranCol = "#" + Math.random().toString(16).substr(-6);
  game.bricks.push({
    x: xPos,
    y: yPos,
    w: width,
    h: height,
    c: ranCol,
    v: Math.floor(Math.random() * 50),
  });
}

function collDetection(obj1, obj2) {
  const xAxis = obj1.x < obj2.x + obj2.w && obj1.x + obj1.w > obj2.x;
  const yAxis = obj1.y < obj2.y + obj2.h && obj1.y + obj1.h > obj2.y;
  const val = xAxis && yAxis;
  return val;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  movement();
  ballmove();
  drawPlayer();
  drawBall();
  game.bricks.forEach((brick, index) => {
    ctx.beginPath();
    ctx.fillStyle = brick.c;
    ctx.strokeStyle = "white";
    //console.log(brick);
    ctx.rect(brick.x, brick.y, brick.w, brick.h);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    if (collDetection(brick, ball)) {
      let rem = game.bricks.splice(index, 1);
      player.score += brick.v;
      ball.dy *= -1;
    }
  });
  if (collDetection(player, ball)) {
    ball.dy *= -1;
    let val1 = ball.x + ball.w / 2 - player.x;
    let val2 = val1 - player.w / 2;
    let val3 = Math.ceil(val2 / (player.w / 10));
    ball.dx = val3;
    console.log(val1, val2, val3);
  }
  let output = `Live(s) : ${player.lives} Score : ${player.score}`;
  ctx.font = Math.floor(game.grid * 0.7) + "px serif";
  ctx.textAlign = "center";
  ctx.fillStyle = "white";
  ctx.fillText(output, canvas.width / 2, canvas.height - 20);
  game.ani = requestAnimationFrame(draw);
}

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
  //ctx.stroke();
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
