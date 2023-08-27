/* crear vectores */
let vector1 = [];
let vector2 = [];

alert("Llenando vectores con valores aleatorios... ");

/* llenar */
for (let i = 0; i < 5; i++) {
  vector1.push(Math.round(Math.random() * 9));
  vector2.push(Math.round(Math.random() * 9));
}

/* mostrar */
alert(
  "Vector1: " +
    "[ " +
    vector1.toString() +
    " ]" +
    "\nVector2: " +
    "[ " +
    vector2.toString() +
    " ] "
);
