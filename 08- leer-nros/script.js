let suma = 0;
let cantidad = 0;
let promedio = 0;

let valores = parseInt(prompt("Ingrese un número entero: "));
let numMax = valores;
let numMin = valores;

do {
  while (valores !== 0) {
    if (valores > numMax) {
      numMax = valores;
    }
    if (valores < numMin) {
      numMin = valores;
    }
    cantidad += 1;
    suma += valores;
    promedio = suma / cantidad;
    valores = parseInt(prompt("otro nro: "));
  }
} while (valores != 0);

alert("El mayor valor ingresado es: " + numMax);
alert("El menor valor ingresado es: " + numMin);
alert("El promedio: " + promedio);
