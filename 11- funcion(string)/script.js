/* input */
let frase = prompt("Ingresa una frase: ");

/* crear funcion que recibe un argumento y retorna un resultado */
function extraerPalabra(frase) {
  /* creo una variable para luego almacenar la palabra con mayor longitud */
  let palabra = "";

  /* creo un array y almaceno como objeto las palabras de la frase ingresada; 
    para extraer las palabras utilizo el metodo split("parámetro de delimitación") */
  let array = frase.split(" ");

  /* itero el array, extraigo 'index' mientras cumpla la condición 
  y la almaceno en 'palabra' */
  array.forEach(function (index) {
    if (index.length > palabra.length) {
      palabra = index;
    }
  });
  return palabra;
}

/* en caso que existan palabras con la misma longitud, el resultado será la primer palabra */
let resultado = extraerPalabra(frase);
alert(resultado);
