
// Variables para los cuadros de texto y el botón
let num1Input = document.getElementById("num1");
let num2Input = document.getElementById("num2");
let maximoComunDivisor = document.getElementById("maximoComunDivisor");
let minimoComunMultiplo = document.getElementById("minimoComunMultiplo");
let result = document.getElementById("result");
let resultMCM = document.getElementById("result-mcm");

// Evento al hacer clic en el botón de cálculo
maximoComunDivisor.addEventListener("click", function() {
  // Convertir los valores de los cuadros de texto a números
  var num1 = parseInt(num1Input.value);
  var num2 = parseInt(num2Input.value);

  // Calcular el MCD
  let mcd = gcd(num1, num2);

  // Mostrar el resultado
  result.innerHTML = "El MCD de " + num1 + " y " + num2 + " es: " + mcd;
});

// Función auxiliar para calcular el MCD
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

// Función para calcular el mínimo común múltiplo (MCM)
minimoComunMultiplo.addEventListener("click", function() {
var num1 = parseInt(num1Input.value);
var num2 = parseInt(num2Input.value);
let mcm = (num1 * num2) / gcd(num1, num2);
resultMCM.innerHTML = "El MCM de " + num1 + " y " + num2 + " es: " + mcm;
});
