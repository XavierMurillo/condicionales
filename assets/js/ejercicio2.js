var s1Counter = document.querySelector(".s1Number");
var s2Counter = document.querySelector(".s2Number");
var s3Counter = document.querySelector(".s3Number");
var resultButton = document.querySelector("button");
var resultP = document.querySelector(".numStickers");

resultButton.onclick = () => {
  let totalSticker =
    Number(s1Counter.value) + Number(s2Counter.value) + Number(s3Counter.value);
  if (totalSticker <= 10) {
    resultP.innerHTML = `Llevas ${totalSticker} stickers`;
  } else if (totalSticker > 10) {
    resultP.innerHTML = "Llevas demasiados stickers";
  } else {
    resultP.innerHTML = "Ingresa un valor numerico valido";
  }
};
