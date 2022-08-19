const fs = require('fs').promises;

const fetch = async () => {
  const request = await fs.readFile('./simpsons.json', 'utf-8');
  return JSON.parse(request);
}

const Main = async () => {
  const api = await fetch();

  const idName = api.map(({id, name}) => `id: ${id}, name: ${name}`)
  console.log(idName);
}

Main();