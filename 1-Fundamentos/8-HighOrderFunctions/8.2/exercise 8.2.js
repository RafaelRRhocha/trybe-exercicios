const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 01
const authorBornIn1947 = () =>
  books.find((element) => element.author.birthYear === 1947).author.name;
console.log(authorBornIn1947());

// 02
const smallerName = () => {
  const nameBook = books.forEach((element) => {
    let littleName = element.name;
    if (element.name.length <= 5) {
      console.log(littleName);
    }
  });
  return nameBook;
};
console.log(smallerName());

// 03
function getNamedBook() {
  books.forEach((element) => {
    let livro26;
    if (element.name.length === 26) {
      console.log((livro26 = element.name));
    }
  });
}
console.log(getNamedBook());

// 04
const livros = () => books.sort((a, b) => b.releaseYear - a.releaseYear);
// console.log(livros());

// 05
const everyoneWasBornOnSecXX = () =>
  books.every(
    (element) =>
      element.author.birthYear > 1900 && element.author.birthYear <= 2000
  );
console.log(everyoneWasBornOnSecXX());

// 06
const someBookWasReleaseOnThe80s = () =>
  books.some(
    (element) => element.releaseYear >= 1980 && element.releaseYear < 1990
  );
console.log(someBookWasReleaseOnThe80s());

// 07
const authorUnique = () =>
  books.some(
    (element) => element.author.birthYear !== element.author.birthYear
  );
console.log(authorUnique());
