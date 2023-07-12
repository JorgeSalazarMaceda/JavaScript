
// Para que el cuadro de texto con el resultado muestre el nombre y los días vividos hasta el momento. 
// Para ello, puedes utilizar el método addEventListener para escuchar el evento keydown del cuadro de texto de la edad 
// y ejecutar una función cuando se presione la tecla Tab.

// La función debe obtener el nombre y la edad de los cuadros de texto, calcular los días vividos multiplicando la edad por 365 
// y mostrar el resultado en el cuadro de texto de resultado.

document.getElementById("edad").addEventListener("keydown", calcularDiasVividos);

function calcularDiasVividos(event) {
  if (event.key === "Tab") {
    var nombre = document.getElementById("nombre").value;
    var edad = parseInt(document.getElementById("edad").value);
    var diasVividos = edad * 365;
    document.getElementById("resultado").value = nombre + " has vivido " + diasVividos + " días hasta el momento.";
  }
}
