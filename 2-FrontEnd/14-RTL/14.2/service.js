const services = () => parseInt(Math.random() * 101 );

const f1 = (a) => a.toUpperCase();
const f2 = (a) =>  a.charAt(0);
const f3 = (a, b) => a.concat(b);

function fetchDog() {
  return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
    response.json().then(json =>
        response.ok ? Promise.resolve(json) : Promise.reject(json)
      )
  );
};

module.exports = {
  services,
  f1,
  f2,
  f3,
  fetchDog,
};