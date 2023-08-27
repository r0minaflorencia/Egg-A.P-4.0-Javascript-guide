// crear objeto a través de una función Constructora
function Persona(nombre, edad, sexo, peso, altura) {
  this.nombre = nombre;
  this.edad = edad;
  this.sexo = sexo;
  this.peso = peso;
  this.altura = altura;
}

//instanciar el objeto Persona con el operador new Persona()
let nuevaPersona = new Persona("Romina", 29, "F", 65, 1.65);

// crear array
let array = [];

//con bucle For In itero los datos del objeto y los voy agregando al array
for (let dato in nuevaPersona) {
  array.push(nuevaPersona[dato]);
}

//mostrar
alert(array);
