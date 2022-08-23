const readline = require('readline-sync');

const imc = {
  magreza: 18.5,
  pesoNormal: 24.9,
  sobrepeso: 29.9,
  obesidadeGrauUm: 34.9,
  obesidadeGrauDois: 39.9,
  obesidadeGrauTres: 40
}

const Main = () => {
  const peso = readline.questionFloat('qual o seu peso?');
  const altura = readline.questionInt('qual a sua altura?');
  const pesoFinal = (peso / ((altura / 100) ** 2)).toFixed(2);
  if(pesoFinal < imc.magreza) { console.log(`Magreza Extrema, seu peso é ${pesoFinal}`) }
  if(pesoFinal > imc.magreza && pesoFinal < imc.pesoNormal) { console.log(`Peso Normal, seu IMC é ${pesoFinal}`) }
  if(pesoFinal > imc.pesoNormal && pesoFinal < imc.obesidadeGrauUm) { console.log(`Obesidade Grau 1, seu IMC é ${pesoFinal}`) }
  if(pesoFinal > imc.obesidadeGrauUm && pesoFinal < imc.obesidadeGrauDois) { console.log(`Obesidade Grau 2, seu IMC é ${pesoFinal}`) }
  if(pesoFinal > imc.obesidadeGrauTres) { console.log(`Obesidade Grau 3, seu IMC é ${pesoFinal}`) }
}

Main();