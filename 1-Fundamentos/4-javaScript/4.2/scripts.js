// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// for (let i = 0; i < groceryList.length; i++) {
//      console.log(groceryList[i]);
// }

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];



// if(numbers % 2 == 0){
// 	console.log("nenhum valor ímpar encontrado");
// }
// else{
// 	console.log("Ímpar");
// }

// maior = numbers[1];

// for (let i = 1; i < numbers.length; i+=1) {
//     if(maior < numbers[i]) {
//         maior = numbers[i];
//     }

// }
// console.log(maior);

// let soma = 0;

// for (let i = 0; i < numbers.length; i++) {
//     soma += numbers[i];
//     let num = soma / numbers.length;

//     if (num > 20) {
//     console.log(num);
//     }
// }

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
}
console.log("A Jogadora", player.name, player.lastName, "tem", player.age, "de idade.");
console.log("A Jogadora", player.name, player.lastName, "foi eleita melhor do mundo por", player.bestInTheWorld.length, "vezes");
console.log("A Jogadora possui", player.medals.golden, "medalhas de ouro e", player.medals.silver, "de prata");