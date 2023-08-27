let num1 = parseInt(prompt("ingrese el primer valor (nro entero)"));

let num2 = parseInt(prompt("ingrese el segundo valor (nro entero)"));

let operacion = prompt(
  "Ingrese una operación para realizar con los nros ingresados (S,R,M,D)"
).toUpperCase();

switch (operacion) {
  case "S":
    alert(
      "La suma entre " + num1 + " y " + num2 + " resulta: " + (num1 + num2)
    );
    break;
  case "R":
    alert(num1 + " - " + num2 + " = " + (num1 - num2));
    break;
  case "M":
    alert(
      "La multiplicación de " +
        num1 +
        " * " +
        num2 +
        " es igual a: " +
        num1 * num2
    );
    break;
  case "D":
    alert(num1 + " / " + num2 + " = " + num1 / num2);
    break;
  default:
    alert("Operación no reconocida");
}
