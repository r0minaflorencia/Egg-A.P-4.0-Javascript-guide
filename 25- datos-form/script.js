const formulario = document.getElementById("form1");
formulario.addEventListener("submit", mostrarDatos);

function mostrarDatos(event) {
  event.preventDefault(); // evita que el formulario se envíe y la página se recargue

  let nombre = document.getElementsByName("nombre")[0].value;
  //tomamos el valor [0] ya que getElementsByName nos devuelve un array
  let apellido = document.getElementsByName("apellido")[0].value;

  console.log("Nombre:", nombre);
  console.log("Apellido:", apellido);
  alert("Valores obtenidos: " + "[" + nombre + " " + apellido + "]");
}
