const API_URL = 'https://icanhazdadjoke.com/';
const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
}

const fetchJoke = () => {
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {
      const lis = `${data.joke}`;
      const ul = document.querySelector('#jokes');
      ul.appendChild(lis);
    })
    .catch(console.log('error'));
};

window.onload = () => fetchJoke();