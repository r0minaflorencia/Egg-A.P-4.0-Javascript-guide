let limite = parseInt(prompt("Ingrese un valor límite"));

let suma = 0;
do {
  let nro = parseInt(prompt("Ingrese un número"));
  suma += nro;
} while (suma <= limite);

alert("Se ha superado el valor límite");
