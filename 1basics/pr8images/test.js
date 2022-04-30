const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const logo = document.querySelector("img");

logo.style.display = "none";

// ctx.drawImage(logo, 50, 50);
// ctx.drawImage(logo, 50, 350, 100, 100);

const myImage = new Image();
// myImage.src = "./image1.png";
myImage.src = "http://www.discoveryvip.com/img/d.png";
myImage.onload = function () {
  ctx.drawImage(myImage, 50, 50);
  ctx.drawImage(myImage, 50, 50, 100, 100, 100, 400, 200, 200);
  // 1 - картинка
  // 2 - смещение по оси Х
  // 3 - смещение по оси У
  // 4 - масштабирование по оси Х
  // 5 - масштабирование по оси У
  // 6 - обрезаем по оси Х
  // 7 - обрезаем по оси У
  // 8 - ширина обрезанного прямоугольника
  // 9 - высота обрезанного прямоугольника
  ctx.strokeStyle = "red"; 
  ctx.strokeRect(100, 100, 100, 100);
  ctx.strokeRect(100, 400, 200, 200);
};
// myImage.addEventListener("load", () => ctx.drawImage(myImage, 50, 50));
