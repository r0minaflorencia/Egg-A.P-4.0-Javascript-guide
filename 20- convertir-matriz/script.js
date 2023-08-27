let matrizInicial = [[3], [6], [9], [12], [15]];
alert(matrizInicial);

//con slice(indiceInicial,indiceFinal) copio los valores que necesito de la matrizInicial
let array = matrizInicial.slice(1, 5);
//luego con push() agrego un valor al final del array
array.push(18);

//mostrar:
alert(array);
