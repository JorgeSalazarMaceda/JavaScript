const triangulo = document.querySelector(".triangulo");
document.onkeydown = function(event) {
  switch (event.keyCode) {
    case 37: // left flecha
    // es una propiedad de los objetos de tipo elemento en JavaScript que representa la distancia en pixels desde el borde izquierdo del elemento hasta el borde izquierdo del elemento padre más cercano. 
    //Esta propiedad es útil para calcular la posición de un elemento en la página.
      triangulo.style.left = triangulo.offsetLeft - 25 + "px"; 
      break;
    case 38: // up flecha
      triangulo.style.top = triangulo.offsetTop - 25 + "px";
      break;
    case 39: // right flecha
      triangulo.style.left = triangulo.offsetLeft + 25 + "px";
      break;
    case 40: // down flecha
      triangulo.style.top = triangulo.offsetTop + 25 + "px";
      break;
    case 100: // número 4
      triangulo.style.left = triangulo.offsetLeft - 25 + "px";
      break;
    case 104: // número 8
      triangulo.style.top = triangulo.offsetTop - 25 + "px";
      break;
    case 102: // número 6
      triangulo.style.left = triangulo.offsetLeft + 25 + "px";
      break;
    case 98: // número 2
      triangulo.style.top = triangulo.offsetTop + 25 + "px";
      break;
  }
};

// Los números en los case corresponden a los códigos de tecla. Cada tecla en un teclado tiene un código numérico único asignado a ella, que puede ser leído por JS.
// Por ejemplo, la tecla de flecha hacia la izquierda tiene un código numérico de 37, mientras que la tecla de flecha hacia arriba tiene un código de 38.