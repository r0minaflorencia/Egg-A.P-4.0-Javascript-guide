let p = document.getElementById("parrafo");
let palabras = p.textContent;

function resaltar() {
  let array = palabras.split(" ");
  let nuevoParrafo = "";

  array.forEach((e) => {
    if (e.length > 8) {
      nuevoParrafo += `<span style="background-color: green">${e}</span> `;
    } else {
      nuevoParrafo += `${e} `;
    }
  });

  p.innerHTML = nuevoParrafo; // reemplaza el contenido del párrafo
}

resaltar();
