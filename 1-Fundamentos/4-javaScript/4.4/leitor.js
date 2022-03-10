let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },

    {
      titulo: "Harry Potter e o Prisioneiro de Azkaban",
      autor: "JK Rowling",
      editora: "Rocco",
    },
  ],
};
let livros0 = leitor.livrosFavoritos[0];
let livros1 = leitor.livrosFavoritos[1];

console.log(
  "o livro favorito de",
  leitor.nome,
  leitor.sobrenome,
  "é: ",
  livros0
);
console.log(
  "o livro favorito de",
  leitor.nome,
  leitor.sobrenome,
  "é ",
  livros1
);
console.log("Júlia tem 2 Livros Favoritos");
