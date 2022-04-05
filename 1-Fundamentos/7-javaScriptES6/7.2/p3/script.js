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

console.log(Object.keys(lesson3));

console.log(lesson2);
