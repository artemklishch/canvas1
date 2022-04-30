const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

for (let i = 0; i < 20; i++) {
  ctx.lineWidth = 1 + i;
  ctx.beginPath();
  ctx.moveTo(100, 50 + i * 20);
  ctx.lineTo(500, 50 + i * 20);
  ctx.stroke();
}

// это создает прмуголник, который закрывает выше созданный код
ctx.clearRect(0, 0, 640, 640);

ctx.beginPath();
ctx.lineWidth = 10;
ctx.lineCap = "butt";
ctx.moveTo(100, 10);
ctx.lineTo(100, 500);
ctx.stroke();


ctx.beginPath();
ctx.lineWidth = 10;
ctx.lineCap = "round";
ctx.moveTo(200, 10);
ctx.lineTo(200, 500);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 10;
ctx.lineCap = "square";
ctx.moveTo(300, 10);
ctx.lineTo(300, 500);
ctx.stroke();



ctx.clearRect(0, 0, 640, 640);
ctx.beginPath(); 
ctx.lineWidth = 30;
ctx.lineJoin = 'round'
// ctx.lineJoin = 'round'
// ctx.lineJoin = 'miter'
ctx.lineJoin = 'bevel'
ctx.moveTo(100, 10);
ctx.lineTo(200, 110);
ctx.lineTo(100, 220);
ctx.lineTo(200, 320);
ctx.lineTo(100, 420);
ctx.lineTo(200, 520);
ctx.stroke();
