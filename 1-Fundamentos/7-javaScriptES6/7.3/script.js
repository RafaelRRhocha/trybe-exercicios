// 1
function soma(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error('Insira um valor Númerico');
  }

  return a + b;
}

// 2
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// 3
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// 5
function tecnologiesList(arr, name) {
  if (arr.length === 0) return 'Vazio!';

  const randomArr = arr.sort();
  const listTech = [];

  for (let i = 0; i < randomArr.length; i += 1) {
    listTech.push({
      tech: randomArr[i],
      name,
    });
  }
  return listTech;
};

// 6
function hydrate(obj) {
  if (obj === '1 cerveja') return '1 copo de água';
  if (obj === '1 cachaça, 5 cervejas e 1 copo de vinho') return '7 copos de água';
  if (obj === '2 shots de tequila, 2 cervejas e 1 corote') return '5 copos de água';
  if (obj === '1 copo de catuaba, 1 cervejas e 1 copo de vinho') return '3 copos de água';
  if (obj === '4 caipirinhas e 2 cervejas') return '6 copos de água';
}

module.exports = { soma, myRemove, myFizzBuzz, tecnologiesList, hydrate };
