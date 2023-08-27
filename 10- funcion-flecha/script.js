/* input */
let frase = prompt("Ingrese una frase: ");

/* funcion flecha */
let modificar = (frase) => frase.split("").reverse().join("");

/* resultado */
alert(modificar(frase));
