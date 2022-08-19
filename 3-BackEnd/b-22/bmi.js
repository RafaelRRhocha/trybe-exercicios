const readline = require('readline-sync');

const IMC = (peso, altura) => console.log(Math.floor(peso / ((altura / 100) ** 2)));

const Main = () => {
  const peso = readline.questionInt('qual o seu peso?');
  const altura = readline.questionInt('qual a sua altura?');
  const BMI = IMC(peso, altura);
  return BMI;
}

Main();
