const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

const alunos = students.map((nome, i) => ({
  name: nome,
  nota: grades[i].reduce((acc, nota) => acc + nota, 0) / grades[i].length,
}));
console.log(alunos);

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];
