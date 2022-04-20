const API_URL = 'https://icanhazdadjoke.com/';
const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
}

const fetchJoke = () => {
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(console.log('error'))
};

window.onload = () => fetchJoke();