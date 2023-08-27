/* creo un objeto Circulo mediante una función */
const crearObjeto = function () {
  let radio = prompt("Ingresa el radio del Circulo: ");

  /* creo el objeto */
  let Circulo = {
    radio: radio,
  };

  return Circulo;
};

/* utilizo otra constante para asignarle una funcion que recibe como parametro
el circulo y además calcula el area */
const calcularArea = function (Circulo) {
  let area = Math.round(Math.PI * Circulo.radio) * 2;
  alert("El area es: " + area);
};

/* funcion para calcular perímetro */
const calcularPerimetro = function (Circulo) {
  let perimetro = Math.round(2 * Math.PI * Circulo.radio);
  alert("El perímetro: " + perimetro);
};

let Circulo = crearObjeto();

calcularArea(Circulo);
calcularPerimetro(Circulo);
