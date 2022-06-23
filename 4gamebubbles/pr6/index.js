const canvas = document.createElement("canvas");
canvas.setAttribute("height", "480");
canvas.setAttribute("width", "640");
canvas.style.backgroundColor = "black";
document.body.prepend(canvas);
const ctx = canvas.getContext("2d");
const game = {
  req: "",
};
const bubble = {
  bubbleCount: 30,
  speed: 2,
  bubbles: [],
};
const clicker = [];
canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();
  const mouseClick = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
    width: 5,
    height: 5,
    size: 10,
  };
  clicker.push(mouseClick);
  console.log(mouseClick);
  //console.log(e.clientX);
  //console.log(e.clientY);
  //console.log(rect.top);
  //console.log(rect.left);
});

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (bubble.bubbles.length < bubble.bubbleCount) {
    //create new bubble
    bubbleMaker();
  }
  clicker.forEach((dot, index) => {
    //ctx.fillStyle = 'yellow';
    ctx.strokeStyle = "yellow";
    ctx.beginPath();
    //ctx.fillRect(dot.x-(dot.size/2),dot.y-(dot.size/2),dot.size,dot.size);
    ctx.arc(dot.x, dot.y, dot.size, 0, 2 * Math.PI);
    ctx.stroke();
    dot.size -= 2;
    if (dot.size < 1) {
      clicker.splice(index, 1);
    }
  });
  bubble.bubbles.forEach((bub, index) => {
    bub.y -= bubble.speed;
    bub.x -= Math.random() * 5 - 3;
    if (bub.y < 0) {
      let temp = bubble.bubbles.splice(index, 1);
      //console.log(temp);
    }
    drawBubble(bub.x, bub.y, bub.size, bub.color);
  });
  game.req = requestAnimationFrame(draw);
}

function bubbleMaker() {
  let bubbleSize = Math.random() * 10 + 15;
  let xPos = Math.random() * (canvas.width - bubbleSize);
  let yPos = Math.random() * (canvas.height - bubbleSize) + canvas.height;
  bubble.bubbles.push({
    x: xPos,
    y: yPos,
    size: bubbleSize,
    color: [Math.random() * 255, Math.random() * 255, Math.random() * 255],
  });
}

function drawBubble(xPos, yPos, bubbleSize, cl) {
  const gradient = ctx.createRadialGradient(
    xPos,
    yPos - 10,
    bubbleSize - 15,
    xPos,
    yPos,
    bubbleSize + 10
  );
  gradient.addColorStop(
    0,
    "rgba(" + cl[0] + "," + cl[1] + "," + cl[2] + ",0.9)"
  );
  gradient.addColorStop(1, "rgba(255,255,255,0.1)");
  ctx.beginPath();
  ctx.fillStyle = gradient;
  ctx.strokeStyle = "rgba(255,255,255,0.4)";
  ctx.arc(xPos, yPos, bubbleSize, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
}
game.req = requestAnimationFrame(draw);
