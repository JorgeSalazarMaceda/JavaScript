function calcular() {
    var figura = document.getElementById("figura").value;
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    var resultado = document.getElementById("resultado");
  
    if (figura == "cuadrado") {
      var area = valor1 * valor1;
      var perimetro = valor1 * 4;
      resultado.value = "Área: " + area + " Perímetro: " + perimetro;
    } else if (figura == "rectangulo") {
      var area = valor1 * valor2;
      var perimetro = (valor1 + valor2) * 2;
      resultado.value = "Área: " + area + " Perímetro: " + perimetro;
    } else if (figura == "triangulo") {
      var area = (valor1 * valor2) / 2;
      var perimetro = valor1 + valor2 + valor3;
      resultado.value = "Área: " + area + " Perímetro: " + perimetro;
    } else if (figura == "circulo") {
      var area = Math.PI * (valor1 * valor1);
      var perimetro = 2 * Math.PI * valor1;
      resultado.value = "Área: " + area + " Perímetro: " + perimetro;
    } else {
      resultado.value = "Por favor seleccione una figura válida";
    }
  }

  var trianguloInput = document.getElementById("valor3");

function mostrarInputTriangulo() {
  var figura = document.getElementById("figura").value;
  if (figura == "triangulo") {
    trianguloInput.style.display = "block";
  } else {
    trianguloInput.style.display = "none";
  }
}