
document.getElementById("sumar").addEventListener("click", sumar);
    document.getElementById("restar").addEventListener("click", restar);
    document.getElementById("multiplicar").addEventListener("click", multiplicar);
    document.getElementById("dividir").addEventListener("click", dividir);
    document.getElementById("limpiar").addEventListener("click", limpiar);

function sumar() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var resultado = num1 + num2;
  document.getElementById("resultado").value = resultado;
}

function restar() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var resultado = num1 - num2;
  document.getElementById("resultado").value = resultado;
}

function multiplicar() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var resultado = num1 * num2;
  document.getElementById("resultado").value = resultado;
}

function dividir() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var resultado = num1 / num2;
  document.getElementById("resultado").value = resultado;
}

function limpiar() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var resultado = 0;
  document.getElementById("resultado").value = resultado;
}
