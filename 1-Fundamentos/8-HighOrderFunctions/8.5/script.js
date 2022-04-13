// const user = {
//   name: 'Maria',
//   age: 21,
//   nationality: 'Brazilian',
// };

// const jobInfos = {
//   profession: 'Software engineer',
//   squad: 'Rocket Landing Logic',
//   squadInitials: 'RLL',
// };

// const { name: nome, age: idade, nationality: nacionalidade } = user;
// const {
//   profession: profissao,
//   squad: empresa,
//   squadInitials: iniciais,
// } = jobInfos;
// const infos = {
//   ...user,
//   ...jobInfos,
// };

// console.log(`OLá! meu nome é ${nome}, tenho ${idade} e sou ${nacionalidade}
// Eu trabalho como ${profissao}, na empresa ${empresa} - ${iniciais}`);

const saudacoes = ['Olá', 'Oi'];
const [saudacao, teste] = saudacoes;
console.log(teste);

let itens = ['gato', 'água', 'arroz'];
const [animal, bebida, comida] = itens
console.log(comida, animal, bebida);

let numerosPares = [1, 3, 5, 6, 8, 10, 12];
[,,, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];
