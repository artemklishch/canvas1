const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let angRot = 0;

const img = new Image();
let angleRotation = 0;
img.onload = function () {
  let cache = this;
  setInterval(() => {
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(cache.width, cache.height);
    ctx.rotate((Math.PI / 180) * (angRot += 5));
    ctx.drawImage(img, -cache.width / 2, -cache.height / 2);
    ctx.restore();
  }, 40);
};
img.src = "http://www.discoveryvip.com/img/d.png";
