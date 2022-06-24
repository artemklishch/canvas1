const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.setAttribute("width", "600");
canvas.setAttribute("height", "400");
//canvas.style.backgroundColor = 'black';
document.body.prepend(canvas);
const textPos = Array(60).join(0).split("");
console.log(textPos);

function matrixScreen() {
  let output = "0";
  //let posX = Math.random()*(canvas.width);
  //let posY = Math.random()*(canvas.height);
  ctx.fillStyle = "rgba(0,0,0,.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "green";
  textPos.map((posY, index) => {
    output = String.fromCharCode(1e2 + Math.random() * 33);
    let posX = index * 10 + 10;
    //posY = Math.random()*(canvas.height);
    console.log(posY);
    ctx.fillText(output, posX, posY);
    if (posY > 100 + Math.random() * 1200) {
      textPos[index] = 0;
    } else {
      textPos[index] = posY + 10;
    }
  });
  //ctx.fillText(output,posX,posY);
}
setInterval(matrixScreen, 50);
