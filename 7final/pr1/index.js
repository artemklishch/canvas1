const canvas = document.createElement("canvas");
const holder = document.createElement("div");
const inText = document.createElement("input");
inText.setAttribute("type", "text");
document.body.prepend(holder);
holder.append(inText);
const ctx = canvas.getContext("2d");
canvas.setAttribute("width", "640");
canvas.setAttribute("height", "100");
canvas.style.backgroundColor = "black";
document.body.prepend(canvas);
const btn = document.createElement("button");
holder.append(btn);
btn.textContent = "Click to add Text";
btn.addEventListener("click", () => {
  writeCanvas(inText.value);
});
const btn1 = document.createElement("a");
holder.append(btn1);
btn1.textContent = "Download Image";
btn1.style.backgroundColor = "green";
btn1.style.color = "white";
btn1.addEventListener("click", () => {
  const img = canvas.toDataURL("image/png");
  const tempImage = document.createElement("img");
  tempImage.setAttribute("src", img);
  holder.append(tempImage);
  const link = document.createElement("a");
  link.download = "filename.png";
  link.href = img;
  link.click();
});

function writeCanvas(message) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "18px Arial";
  ctx.textAlign = "center";
  ctx.fillStyle = "red";
  ctx.textBaseline = "middle";
  let x = canvas.width / 2;
  let y = canvas.height / 2;
  ctx.fillText(message, x, y);
}
