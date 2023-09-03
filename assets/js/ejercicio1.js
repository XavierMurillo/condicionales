var textoP = document.querySelector("p");
var imagen = document.querySelector("img");
var estado = false;
imagen.onclick = () => {
  estado = !estado;
  if (estado == true) {
    imagen.style.border = "2px solid red";
    textoP.innerHTML = "La imagen SI tiene borde";
  } else {
    imagen.style.border = "none";
    textoP.innerHTML = "La imagen NO tiene borde";
  }
};
