let char = prompt("Ingrese una letra").toUpperCase();

/* IF ternario */
let rta = char == "S" || char == "N" ? true : false;

rta ? alert("CORRECTO") : alert("INCORRECTO");
