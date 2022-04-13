// 01
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  rectangleArea(...rectangle) 
  console.log(rectangle[0] * rectangle[1]);
});

// 02
const sum = (...num) => num.reduce(((acc, values) => acc + values), 0);
console.log(sum(1, 2));

// 03
const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

const {name, age, likes} = alex;
const {name: nome, age: idade, likes: like} = gunnar;

const personLikes = () => `${name} is ${age} years old and likes ${likes.join(', ')}.`;
const personsLikes = () => `${nome} is ${idade} years old and likes ${like.join(', ')}.`;

console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
console.log(personsLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

// 04 
const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

const peoples = people.filter(({nationality, bornIn}) => 
  nationality === 'Australian' && bornIn <= 2000,
)
console.log(peoples);

// 05
const myList = [1, 2, 3];
const [one, two, three] = myList;

const swap = (element) => element = [three, two, one];
console.log(swap(myList));

// 06
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const [Marca, Modelo, Ano] = palio;

const toObject = (obj) => {
  return obj = {
    marca: Marca,
    modelo: Modelo,
    ano: Ano,
  }
}
console.log(toObject());

