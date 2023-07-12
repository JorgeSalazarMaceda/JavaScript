
  function convertir() {
    // Obtener los valores de los inputs del usuario
    var numeroIntroducido = document.getElementById("numeroIntroducido").value;
    var baseOrigen = document.getElementById("baseOrigen").value;
    var baseDestino = document.getElementById("baseDestino").value;

    // Convertir el número a base 10
    var decimal = parseInt(numeroIntroducido, baseOrigen);

    // Convertir el número a la base de destino
    var convertirDestinoDeseado = decimal.toString(baseDestino);

    // Mostrar el resultado en la página web
    document.getElementById("resultado").innerHTML = convertirDestinoDeseado;
  }

  // Añadir un evento click al botón
  document.getElementById("botonConvertir").addEventListener("click", convertir);
