const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// ctx.beginPath();
// ctx.arc(320, 180, 100, 0, 2 * Math.PI);
// ctx.fillStyle = "red";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.moveTo(320, 400);
// ctx.lineTo(320, 280);

// ctx.moveTo(420, 600);
// ctx.lineTo(320, 400);

// ctx.moveTo(210, 600);
// ctx.lineTo(320, 400);

// ctx.moveTo(400, 350);
// ctx.lineTo(240, 350);

// ctx.moveTo(320, 200);
// ctx.lineTo(320, 150);

// ctx.stroke();
// ctx.closePath();

// ctx.beginPath();
// ctx.arc(280, 150, 20, 0, 2 * Math.PI);
// ctx.arc(360, 150, 20, 0, 2 * Math.PI);
// ctx.fillStyle = "black";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.arc(320, 220, 50, 0, Math.PI);
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.fillStyle = "blue";
// ctx.moveTo(400, 100);
// ctx.lineTo(320, 50);
// ctx.lineTo(230, 100);
// ctx.lineTo(400, 100);
// ctx.fill();
// ctx.closePath();


ctx.beginPath();
ctx.fillStyle = 'red';
ctx.arc(300,130,100,0,Math.PI *2);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.arc(250,120,20,0,Math.PI *2);
ctx.moveTo(370,120);
ctx.arc(350,120,20,0,Math.PI *2);
ctx.moveTo(240,160);
ctx.arc(300,160,60,0,Math.PI);
ctx.fill();
ctx.moveTo(300,130);
ctx.lineTo(300,150);
ctx.stroke();
 
ctx.beginPath();
ctx.moveTo(300,230);
ctx.lineTo(300,270);
ctx.lineTo(400,270);
ctx.lineTo(200,270);
ctx.lineTo(300,270);
ctx.lineTo(300,350);
ctx.lineTo(400,500);
ctx.moveTo(300,350);
ctx.lineTo(200,500);
ctx.stroke();
 
ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.moveTo(200,50);
ctx.lineTo(400,50);
ctx.lineTo(300,20);
ctx.lineTo(200,50);
ctx.fill();
ctx.stroke();