// 1

const newE = (nome) => `${nome}, gmail: ${nome.split(' ').join('_')}@trybe.com`;

const newEmployees = (nome) => {
  const employees = {
    id1: nome('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: nome('Tonico do Pneu'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: nome('Leandrão'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
// console.log(newEmployees(newE));

// 2
const sorteio1 = (num) => Math.floor(Math.random(num) * 6) + 1;
const sorteio2 = (num) => Math.floor(Math.random(num) * 6) + 1;

const resultadoSorteio = (num) => {
  if (num === sorteio1) {
    return 'Parabéns você ganhou!';
  }
  else {
    return 'Tente Novamente!';
  }
}
console.log(resultadoSorteio(sorteio2));

// 3 
const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const respostas = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];