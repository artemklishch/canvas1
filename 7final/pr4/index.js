const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const imgLoader = document.querySelector("#imgLoader");
imgLoader.addEventListener("change", handleUpload);

function handleUpload(e) {
  console.log(e);
  const reader = new FileReader();
  reader.onload = function (e) {
    console.log(e);
    const img = new Image();
    img.onload = function () {
      canvas.width = img.width / 2;
      canvas.height = img.height / 2;
      ctx.drawImage(img, 0, 0, img.width / 2, img.height / 2);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(e.target.files[0]);
}
