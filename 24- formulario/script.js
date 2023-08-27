const opcion = document.getElementById("opcion");
const enviar = document.getElementById("enviar");

opcion.addEventListener("change", function () {
  switch (opcion.value) {
    case "area":
      enviar.removeEventListener("click", calcularMedianteDiametro);
      enviar.addEventListener("click", calcularMedianteArea);
      break;
    case "diametro":
      enviar.removeEventListener("click", calcularMedianteArea);
      enviar.addEventListener("click", calcularMedianteDiametro);
      break;
    default:
      enviar.removeEventListener("click", calcularMedianteArea);
      enviar.removeEventListener("click", calcularMedianteDiametro);
  }
});

function calcularMedianteArea() {
  const areaInput = parseFloat(document.getElementById("input").value);
  const radio = Math.sqrt(areaInput / Math.PI);
  alert(`El radio del círculo es: ${radio}`);
}

function calcularMedianteDiametro() {
  const diametroInput = parseFloat(document.getElementById("input").value);
  const radio = diametroInput / 2;
  alert(`El radio del círculo es: ${radio}`);
}
