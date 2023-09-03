var sel1 = document.querySelector(".selec1");
var sel2 = document.querySelector(".selec2");
var sel3 = document.querySelector(".selec3");
var button = document.querySelector("button");
var textoP = document.querySelector(".resultado");

button.onclick = () => {
  let pass = sel1.value + sel2.value + sel3.value;
  if (pass == "911") {
    textoP.innerHTML = "password 1 correcto";
  } else if (pass == "714") {
    textoP.innerHTML = "password 2 correcto";
  } else {
    textoP.innerHTML = "password incorrecto";
  }
};
