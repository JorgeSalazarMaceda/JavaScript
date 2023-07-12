
// método addEventListener para escuchar el evento click del botón y ejecutar la función calcularArea.
// En esta función, debes obtener el valor del radio del cuadro de texto, multiplicarlo al cuadrado por pi y mostrar el resultado los inputs.
// (tambien lo hago en un alert).

document.getElementById("calcularArea").addEventListener("click", calcularArea);
document.getElementById("longitud").addEventListener("click", calcularLongitud);
document.getElementById("limpiar").addEventListener("click", limpiarInputs);



function calcularArea() {
  // Obtener el valor del radio
  var radio = document.getElementById("radio").value;
  // Calcular el área del círculo
  let area = Math.PI * Math.pow(radio, 2);
  // Mostrar el resultado en un alert
//   alert("El área del círculo es: " + area.toFixed(2));
  document.getElementById("resultadoArea").value = area.toFixed(2);
}

function calcularLongitud() {
  // Obtener el valor del radio
  var radio = document.getElementById("radio").value;
  // Calcular el área del círculo
  let longitud = 2 * Math.PI * radio;
  // Mostrar el resultado en un alert
//   alert("La longitud del círculo es: " + longitud.toFixed(2));
document.getElementById("resultadoLongitud").value = longitud.toFixed(2);
}

function limpiarInputs() {
  // Obtener todos los inputs de la página
  var inputs = document.querySelectorAll('input');
  
  // Recorrer cada uno de los inputs
  inputs.forEach(function(input) {
    // Limpiar el valor del input
    input.value = '';
  });
}
