/* input */
let frase = prompt("Ingresa una frase: ");

/* Creo una variable auxiliar para almacenar mostrar el resultado */
let fraseAux = "";

for (let i = 0; i < frase.length; i++) {
  fraseAux = fraseAux.concat(frase.substring(i, i + 1).concat(" "));
}

alert(fraseAux);
