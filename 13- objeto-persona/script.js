/* crear objeto de manera sencilla y rápida */
let persona = {
  nombre: "Romina",
  edad: "29",
  sexo: "f",
  peso: 65,
  altura: 1.65,
};

/* crear objeto a través de una función Constructora */
function Persona(nombre, edad, sexo, peso, altura) {
  this.nombre = nombre;
  this.edad = edad;
  this.sexo = sexo;
  this.peso = peso;
  this.altura = altura;
}

/* instanciar el objeto Persona con el operador new Persona() */
let nuevaPersona = new Persona("Romina", 29, "F", 65, 1.65);

/* mostrar mediante alert */
alert(
  `nombre: ${persona.nombre} ` +
    `\nedad: ${persona.edad} años ` +
    `\nsexo: ${persona.sexo} ` +
    `\npeso: ${persona.peso}k ` +
    `\naltura: ${persona.altura}m`
);
