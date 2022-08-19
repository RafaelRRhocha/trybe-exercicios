const readline = require('readline-sync');

const Main = () => {
  const peso = readline.questionInt('qual o seu peso?');
  const altura = readline.questionInt('qual a sua altura?');
  console.log(Math.floor(peso / ((altura / 100) ** 2)))
}

Main();
