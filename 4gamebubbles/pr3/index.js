const canvas = document.createElement("canvas");
canvas.setAttribute("height", "480");
canvas.setAttribute("width", "640");
canvas.style.backgroundColor = "black";
document.body.prepend(canvas);
const ctx = canvas.getContext("2d");
const bubbleCount = 30;
for (let x = 0; x < bubbleCount; x++) {
  createBubble();
}

function createBubble() {
  let bubbleSize = Math.random() * 10 + 15;
  let xPos = Math.random() * (canvas.width - bubbleSize);
  let yPos = Math.random() * (canvas.height - bubbleSize);
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
