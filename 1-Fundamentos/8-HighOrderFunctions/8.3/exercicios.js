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
console.log('Questão 1:');
console.log(
  books.map(
    (element) => `${element.name} - ${element.genre} - ${element.author.name}`
  )
);

// 02
const arrObj = () =>
  books
    .map((element) => ({
      author: element.author.name,
      age: element.releaseYear - element.author.birthYear,
    }))
    .sort((a, b) => a.age - b.age);
console.log('Questão 2:');
console.log(arrObj());

// 03
const filterGenre = () =>
  books.filter(
    (element) =>
      element.genre === 'Fantasia' || element.genre === 'Ficção Científica'
  );
console.log('Questão 3:');
console.log(filterGenre());

// 04
function livrosAntigos() {
  const currentYear = new Date().getFullYear();
  return books.filter((element) => (
    element.releaseYear < currentYear - 60
  )).sort((a, b) => a.releaseYear - b.releaseYear);
}
console.log('Questão 4:');
console.log(livrosAntigos());

// 05
function fantasiaEFicção() {
  const wantedGenres = ['Fantasia', 'Ficção Científica'];
  return books
    .filter((element) => wantedGenres.includes(element.genre))
    .map((element) => element.author.name).sort();
}
console.log('Questão 5:');
console.log(fantasiaEFicção());

// 06
function livros() {
  const currentYear = new Date().getFullYear();
  return books
    .filter((element) => currentYear - element.releaseYear > 60)
    .map((element) => element.name);
}
console.log('Questão 6:');
console.log(livros());

//07 
function authorWith3DotsOnName() {
  return books.find((book) => (
    book.author.name.split(' ')
      .filter((word) => word.endsWith('.')).length === 3
  )).name;
}
console.log('Questão 7:');
console.log(authorWith3DotsOnName());