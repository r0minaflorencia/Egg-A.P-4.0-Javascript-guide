/* arrays */
let arregloA = [];
let arregloB = [];

/* llenar y mostrar A mediante bucle for y utilizando push() */
for (let i = 0; i < 50; i++) {
  arregloA.push(parseFloat(Math.random() * 10).toFixed(2));
}
alert("A = [" + arregloA.toString() + "]");

/* llenar y mostrar B mediante un bucle for utilizando el índice */
for (let i = 0; i < 20; i++) {
  arregloB[i] = (Math.random() * 10).toFixed(2);
}
alert("B = [" + arregloB.toString() + "]");

/* ordenar A de forma ascendente */
arregloA.sort();

/* copiar los primeros 10 elementos ordenados del A y guardarlos en un array auxiliar */
let arregloAux = [];
arregloAux = arregloA.slice(0, 10);
/* modifico los valores del B */
for (let i = 0; i < 10; i++) {
  arregloB[i] = arregloAux[i];
}
for (let i = 0; i < 10; i++) {
  arregloB.push(0.5);
}

/* mostrar arrays */
alert("A ordenado = [" + arregloA.toString() + "]");
alert("B actualizado = [" + arregloB.toString() + "]");
