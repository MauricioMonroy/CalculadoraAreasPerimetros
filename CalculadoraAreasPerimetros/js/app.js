// Función para calcular el área de un triángulo
function areaTriangulo() {
  const forma = document.getElementById("forma");
  let base = forma["base"];
  let altura = forma["altura"];
  let resultado = (parseFloat(base.value) * parseFloat(altura.value)) / 2;
  if (isNaN(resultado)) resultado = "La operación no incluye un valor válido";
  document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
  console.log(`Resultado: ${resultado}`);
}

// Función para calcular el perímetro de un triángulo
function perimetroTriangulo() {
  const forma = document.getElementById("forma");
  let base = forma["base"];
  let altura = forma["altura"];
  let resultado =
    parseFloat(base.value) + parseFloat(altura.value) + parseFloat(base.value);
  if (isNaN(resultado)) resultado = "La operación no incluye un valor válido";
  document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
  console.log(`Resultado: ${resultado}`);
}

// Función para calcular el área de un rectángulo
function areaRectangulo() {
  const forma = document.getElementById("forma");
  let base = forma["base"];
  let altura = forma["altura"];
  let resultado = parseFloat(base.value) * parseFloat(altura.value);
  if (isNaN(resultado)) resultado = "La operación no incluye un valor válido";
  document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
  console.log(`Resultado: ${resultado}`);
}

// Función para calcular el perímetro de un rectángulo
function perimetroRectangulo() {
  const forma = document.getElementById("forma");
  let base = forma["base"];
  let altura = forma["altura"];
  let resultado = 2 * (parseFloat(base.value) + parseFloat(altura.value));
  if (isNaN(resultado)) resultado = "La operación no incluye un valor válido";
  document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
  console.log(`Resultado: ${resultado}`);
}

// Función para calcular el área de un cuadrado
function areaCuadrado() {
  const forma = document.getElementById("forma");
  let ladoA = forma["ladoA"];
  let ladoB = forma["ladoB"];
  let resultado = parseFloat(ladoA.value) * parseFloat(ladoB.value);
  if (isNaN(resultado)) resultado = "La operación no incluye un valor válido";
  document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
  console.log(`Resultado: ${resultado}`);
}

// Función para calcular el perímetro de un cuadrado
function perimetroCuadrado() {
    const forma = document.getElementById("forma");
    let ladoA = forma["ladoA"];     
    let resultado = parseFloat(ladoA.value) * 4;       
    if (isNaN(resultado)) resultado = "La operación no incluye un valor válido";
    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;    
    console.log(`Resultado: ${resultado}`);   
}

// Función para calcular el área de un círculo
function areaCirculo() {
    const forma = document.getElementById("forma");
  let radio = forma["radio"];  
  let resultado = Math.PI * parseFloat(radio.value) * parseFloat(radio.value);
  if (isNaN(resultado)) resultado = "La operación no incluye un valor válido";
  document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
  console.log(`Resultado: ${resultado}`);  
}

// Función para calcular el perímetro de un círculo
function perimetroCirculo() {
    const forma = document.getElementById("forma");
  let radio = forma["radio"];  
  let resultado = 2 * Math.PI * parseFloat(radio.value);
  if (isNaN(resultado)) resultado = "La operación no incluye un valor válido";
  document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
  console.log(`Resultado: ${resultado}`);  
}
