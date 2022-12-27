
const books = [

  {
    title: 'Orgullo y prejuicio',
    author: 'Jane Austen',
    genre: 'Novela',
    pages: 552
  },
  {
    title: 'Emma',
    author: 'Jane Austen',
    genre: 'Novela',
    pages: 214
  },
  {
    title: 'Amor y amistad',
    author: 'Jane Austen',
    genre: 'Novela',
    pages: 930
  },
  {
    title: 'Persuasión',
    author: 'Jane Austen',
    genre: 'Novela',
    pages: 310
  },
  {
    title: 'Sensatez y sentimiento',
    author: 'Jane Austen',
    genre: 'Novela',
    pages: 420
  },
  {
    title: 'El código Da Vinci',
    author: 'Dan Brown',
    genre: 'Novela',
    pages: 454
  },
  {
    title: 'Origen',
    author: 'Dan Brown',
    genre: 'Novela',
    pages: 815
  },
  {
    title: 'La conspiración',
    author: 'Dan Brown',
    genre: 'Novela',
    pages: 1050
  },
  {
    title: 'Ángeles y demonios',
    author: 'Dan Brown',
    genre: 'Novela',
    pages: 556
  },
  {
    title: 'El retrato de Dorian Gray',
    author: 'Oscar Wilde',
    genre: 'Ficcion',
    pages: 256
  },
  {
    title: 'El príncipe feliz',
    author: 'Oscar Wilde',
    genre: 'Ficcion',
    pages: 440
  },
  {
    title: 'De profundis',
    author: 'Oscar Wilde',
    genre: 'Ficcion',
    pages: 180
  },
  {
    title: 'El niño estrella',
    author: 'Oscar Wilde',
    genre: 'Ficcion',
    pages: 670
  },
  {
    title: 'Hamlet',
    author: 'Shakespeare',
    genre: 'Drama',
    pages: 170
  },
  {
    title: 'El rey Lear',
    author: 'Shakespeare',
    genre: 'Drama',
    pages: 680
  },
  {
    title: 'El mercader de Venecia',
    author: 'Shakespeare',
    genre: 'Drama',
    pages: 130
  },
  {
    title: 'Otelo',
    author: 'Shakespeare',
    genre: 'Drama',
    pages: 720
  },
  {
    title: 'Harry Potter y La Cámara Secreta',
    author: 'J. K. Rowling',
    genre: 'Ficcion',
    pages: 656
  },
  {
    title: 'Harry Potter y las reliquias de la muerte',
    author: 'J. K. Rowling',
    genre: 'Ficcion',
    pages: 256
  },
  
];

const searchBy = prompt('¿Qué criterio de búsqueda deseas utilizar? (autor, género, cantidad de páginas)');

let results;

if (searchBy === 'autor') {
  const author = prompt('Ingresa el nombre del autor a buscar: (Shakespeare, Dan Brown, Jane Austen, Paulo Coelho, J. K. Rowling)');
  results = books.filter(book => book.author.toLowerCase() === author.toLowerCase());
} else if (searchBy.includes('género') || searchBy.includes('genero')){
  const genre = prompt('Ingresa el género a buscar: (Ficcion, Drama, Novela)');
  results = books.filter(book => book.genre.toLowerCase() === genre.toLowerCase());
} else if (searchBy === 'cantidad de páginas') {
  const minPages = prompt('Ingresa la cantidad mínima de páginas a buscar:');
  const maxPages = prompt('Ingresa la cantidad máxima de páginas a buscar:');
  results = books.filter(book => book.pages >= parseInt(minPages) && book.pages <= parseInt(maxPages));
} else {
  console.log('Opción de búsqueda no válida');
}

if (results.length > 0) {
  const titles = results.map(book => book.title);
  const message = `Se encontraron ${results.length} libros por ${searchBy}:\n${titles.join('\n')}`;
  alert(message);
} else {
  alert('No se encontraron libros con ese criterio de búsqueda');
}

const searchSuccessful = prompt('¿Encontraste lo que estabas buscando? (sí/no)') === 'sí';

if (searchSuccessful) {
  alert('¡Gracias por visitarnos!');
} else {
  alert('Lo sentimos, esperamos poder ayudarte en un futuro.');
}
