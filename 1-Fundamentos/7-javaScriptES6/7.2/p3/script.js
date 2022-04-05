const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function atribuirNoite() {
  let newKey = 'Turno';
  let TurnoNoite = 'Noite';
  lesson2[newKey] = TurnoNoite;
}
atribuirNoite();
console.log(lesson2);

const lessonsKeys = (objeto) => Object.keys(objeto);
console.log(lessonsKeys(lesson1));

function objLength() {
  console.log(Object.keys(lesson1).length);
}
objLength();

const listValues = (objeto) =>  Object.values(objeto);
console.log(listValues(lesson1));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

const getNumberOfStudents = (objeto) => {
  let total = 0;
  const array = Object.keys(objeto);
  for (index in array) {
    total += objeto[array[index]].numeroEstudantes;
  }
  return total;
};
console.log(getNumberOfStudents(allLessons));

const getValueByNumber = (objeto,number) => Object.values(objeto)[number];
console.log(getValueByNumber);

const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));
