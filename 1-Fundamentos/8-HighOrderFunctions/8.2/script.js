// forEach
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];
emailListInData.forEach((email) => console.log(`O email ${email} esta cadastrado em nosso banco de dados!`));

// Find
const numbers = [19, 21, 30, 3, 45, 22, 15];
const verificar15 = (number) => number % 15 === 0;
const log = numbers.find(verificar15);
console.log(log);


const namesJ = ['João', 'Irene', 'Fernando', 'Maria'];
const findNameWithFiveLetters = () => {
  return namesJ.find((name) => name.length <= 4);
}
console.log(findNameWithFiveLetters());

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  return musicas.find((musica) => musica.id === id);
}
console.log(findMusic('31031685'));

// Some e Every
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];
const hasName = (arr, name) => {
  return arr.some((element) => element === name)
}
console.log(hasName(names, 'Ana'));

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  return arr.every((element) => element >= minimumAge)
}
console.log(verifyAges(people, 18));

// sort
const peoples = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

peoples.sort((a, b) => a.age - b.age);

console.log(peoples);

const peoples2 = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

peoples2.sort((a, b) => b.age - a.age);

console.log(peoples2);


