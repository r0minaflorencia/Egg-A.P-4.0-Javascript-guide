let nro = parseInt(prompt("Ingrese un nro entero"));

if (nro == 0) {
  alert("El nro ingresado es 0. No es par ni impar");
} else {
  nro % 2 == 0 ? alert("Es par") : alert("Es impar");
}
