const url = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  }

  fetch(url, myObject)
    .then(response => response.json())
    .then(data => {
      const joke = document.querySelector('#jokeContainer');
      joke.innerHTML = data.joke
    })
};
fetchJoke();

window.onload = () => fetchJoke();