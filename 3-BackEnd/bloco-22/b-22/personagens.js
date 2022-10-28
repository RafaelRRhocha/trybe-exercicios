const fs = require('fs').promises;
const readline = require('readline-sync');

const fetch = () => {
  const request = fs.readFile('./simpsons.json', 'utf-8');
  return JSON.parse(request);
}

const Main = async () => {
  const api = await fetch();

  const idName = api.map(({id, name}) => `id: ${id}, name: ${name}`)
  console.log(idName);

  const idUser = readline.questionInt('digite o seu id: ');
  api.filter(({ id }) => {
    if(idUser === id) {
      return console.log('id compativel')
    } else {
      return console.log('id não compativel')
    }
  })
}

Main();