const canvas = document.createElement("canvas");
canvas.setAttribute("height", "480");
canvas.setAttribute("width", "640");
canvas.style.backgroundColor = "black";
document.body.prepend(canvas);
const ctx = canvas.getContext("2d");
const game = { req: "" };
const bubble = { bubbleCount: 30, bubbles: [] };

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (bubble.bubbles.length < bubble.bubbleCount) {
    //create new bubble
    bubbleMaker();
  }
  bubble.bubbles.forEach((bubble, index) => {
    bubble.y--;
    drawBubble(bubble.x, bubble.y, bubble.size);
  });
  game.req = requestAnimationFrame(draw);
}
function bubbleMaker() {
  let bubbleSize = Math.random() * 10 + 15;
  let xPos = Math.random() * (canvas.width - bubbleSize);
  let yPos = Math.random() * (canvas.height - bubbleSize);
  bubble.bubbles.push({
    x: xPos,
    y: yPos,
    size: bubbleSize,
  });
}

function drawBubble(xPos, yPos, bubbleSize) {
  const gradient = ctx.createRadialGradient(
    xPos,
    yPos - 10,
    bubbleSize - 15,
    xPos,
    yPos,
    bubbleSize + 10
  );
  gradient.addColorStop(0, "rgba(0,0,255,0.9)");
  gradient.addColorStop(1, "rgba(255,255,255,0.1)");
  ctx.beginPath();
  ctx.fillStyle = gradient;
  ctx.strokeStyle = "rgba(255,255,255,0.4)";
  ctx.arc(xPos, yPos, bubbleSize, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
}

game.req = requestAnimationFrame(draw);
