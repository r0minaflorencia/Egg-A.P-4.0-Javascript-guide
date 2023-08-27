let radio = parseFloat(prompt("Ingrese el radio de una circunferencia: "));

alert(
  "El radio ingresado es: " +
    radio +
    "\nEl area: " +
    Math.round(Math.PI * radio) * 2 +
    "\nEl perimetro: " +
    Math.round(2 * Math.PI * radio)
);
