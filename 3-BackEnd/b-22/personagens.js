const fs = require('fs').promises;
const readline = require('readline-sync');

const fetch = async () => {
  const request = await fs.readFile('./simpsons.json', 'utf-8');
  return JSON.parse(request);
}

const filter = async () => {
  const api = await fetch();

  const idName = api.map(({id, name}) => `id: ${id}, name: ${name}`)
  console.log(idName);

  const idUser = readline.questionInt('digite o seu id: ');
  return api.filter(({ id }) => {
    if(idUser === id) {
      return console.log('id compativel')
    } else {
      return console.log('id não compativel')
    }
  })
}

const Main = async () => {
  await filter()
}

Main();