alert ("Bienvenidos")

function fondo() {
  document.body.style.backgroundColor = "black";
}

function leerMas() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("leer-mas");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Leer Más"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Leer Menos"; 
    moreText.style.display = "inline";
  }
}

function masInfo() {
  var dots = document.getElementById("mas");
  var moreText = document.getElementById("menos");
  var btnText = document.getElementById("mas-Info");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Más info"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Menos info"; 
    moreText.style.display = "inline";
  }
}

function rotar(x) {
  if (x.checked === true) {
    document.getElementById("rotar-img").style.backfaceVisibility = "visible";
  } else {
    document.getElementById("rotar-img").style.backfaceVisibility = "hidden";
  }
}   

document.getElementById("myForm").addEventListener("submit", myFunction);

function myFunction() {
  alert("El formulario fue enviado");
}