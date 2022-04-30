const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect(100, 100, 500, 300); // filled shape
ctx.strokeRect(0, 100, 200, 300); // outline
ctx.clearRect(150, 150, 400, 200); // transparent

ctx.fillStyle = "#0000ff";
ctx.fillRect(40, 40, 100, 100);

ctx.fillStyle = "#0f0";
ctx.fillRect(80, 80, 100, 100);

ctx.fillStyle = "rgb(255 ,0,255)";
ctx.fillRect(120, 120, 100, 100);

ctx.fillStyle = "rgba(255, 0, 255, 0.5)";
ctx.fillRect(20, 20, 400, 400);
