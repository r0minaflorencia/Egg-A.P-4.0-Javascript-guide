let input = prompt("Ingrese cualquier tipo de dato: ");

/* funcion flecha */
let tipoDeDato = (input) => {
  if (input == "true" || input == "false") {
    input = true;
  } else if (!isNaN(input)) {
    /* la condición valida si es un número */
    input = parseFloat(input); /* de ser un número lo convertimos a tal */
  }
  /* if (input != boolean && input != número) { entonces input es String } */
  return typeof input;
};

/* mostrar */
alert(tipoDeDato(input));
