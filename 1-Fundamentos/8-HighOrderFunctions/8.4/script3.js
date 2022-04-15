const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha', 'Adalberto'
];

const contemA = names.reduce((acc, element) =>
  acc += element.split('').reduce((accSoma, nome) => {
    if (nome.includes('A') || nome.includes('a')) {
      return accSoma += 1;
    }
    return accSoma;
 }, 0), 0);

console.log(contemA);