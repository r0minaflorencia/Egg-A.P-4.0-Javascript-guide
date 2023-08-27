/* creo una constante para asignarle una función que retorna un objeto */
const crearLibro = function () {
  let isbn = parseInt(prompt("ISBN: "));
  let titulo = prompt("Título: ");
  let autor = prompt("Autor: ");
  let paginas = parseInt(prompt("Cantidad de páginas: "));

  /* crear objeto: */
  let Libro = {
    isbn: isbn,
    titulo: titulo,
    autor: autor,
    paginas: paginas,
  };
  return Libro;
};

/* utilizo otra constante para asignarle una funcion que recibe como parametro
un objeto y lo muestra*/
const mostrarLibro = function (Libro) {
  alert(
    `Título: ${Libro.titulo} ` +
      `\nAutor: ${Libro.autor} ` +
      `\nISBN: ${Libro.isbn} ` +
      `\nNro de páginas: ${Libro.paginas}`
  );
};

/* en una variable almaceno el objeto que me retorna la funcion crearLibro() */
let nuevoLibro = crearLibro();

/* llamo al método mostrarLibro(parámetro) y le paso como parámetro el objeto
almacenado en la variable nuevoLibro*/
mostrarLibro(nuevoLibro);
