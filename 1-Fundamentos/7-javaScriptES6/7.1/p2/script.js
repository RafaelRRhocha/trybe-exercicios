// Ex 1
// const factorial = number => {
//   const result = 1;

//   for (const index = 2; index <= number; index += 1) {
//       result *= index;
//   }

//   return result;
// }
// console.log(factorial(7));

// Ex 2
// const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

// console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));

// Ex 3
// const clickCount = 0;
// const textToDisplay = document.getElementById('text');

// document
//   .getElementById('button_test')
//   .addEventListener('click', () => (textToDisplay.innerHTML = clickCount += 1));

//Ex 4
// const arr = ['Android', 'iOS', 'Architecture', 'Teach', 'Run'];

// function buildSkillsPhrase(paramOne) {
//   const fun1 = (paramInner) =>
//     `Tryber ${paramInner} aqui!

//       Tudo bem?`;

//   let result = `${fun1(paramOne)}

//     Minhas cinco principais habilidades são:`;

//   arr.forEach(
//     (skill) =>
//       (result = `${result}

//     - ${skill}`)
//   );

//   result = `
// {result}

//     #goTrybe
//     `;

//   return result;
// }
// console.log(buildSkillsPhrase('Lucas'));
