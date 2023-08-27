/* array */
let valores = [true, 5, false, "hola", "adios", 2];

alert("Valores: [" + valores.toString() + "]");

/* creo variables para almacenar los distintos tipos de datos del array */
let booleans = [];
let strings = [];
let nums = [];

/* separar según typeof */
for (i = 0; i < valores.length; i++) {
  if (typeof valores[i] == "boolean") {
    booleans.push(valores[i]);
  } else if (typeof valores[i] == "number") {
    nums.push(valores[i]);
  } else if (typeof valores[i] == "string") {
    strings.push(valores[i]);
  }
}

/* A) determinar y guardar en variable la String más larga */
let cadenaLarga = "";
for (string of strings) {
  if (string.length > strings.length) {
    cadenaLarga = string;
  }
}
/* mostrar */
alert(
  "A) El dato typeof String más largo del array es: " + "[" + cadenaLarga + "]"
);

/* B) Utilizando exclusivamente los dos valores booleanos del array,
          determinar los operadores necesarios para obtener un resultado true y
          otro resultado false. */
alert("B) Los valores Boolean: " + "[" + booleans + "]");

/* C)  Determinar el resultado de las cinco operaciones matemáticas
          realizadas con los dos elementos numéricos. */
let suma = nums[0],
  resta = nums[0],
  multi = nums[0],
  div = nums[0],
  resto = nums[0];

for (let i = 1; i < nums.length; i++) {
  suma += nums[i];
  resta -= nums[i];
  div /= nums[i];
  multi *= nums[i];
  resto %= nums[i];
}

alert(
  "C) Resultados de operar con los números: \n[" +
    nums.toString() +
    "]\nSuma (+) = " +
    suma +
    "\nResta (-) = " +
    resta +
    "\nDivisión (/) = " +
    div +
    "\nMultiplicación (*) = " +
    multi +
    "\nMod (%) = " +
    resto
);
