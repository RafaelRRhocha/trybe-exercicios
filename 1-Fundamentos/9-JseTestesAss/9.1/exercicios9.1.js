// 01
const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};
console.log(planetDistanceFromSun(mars));
console.log(planetDistanceFromSun(venus));
console.log(planetDistanceFromSun(jupiter));

// 02
const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers"
    },
  };
  setTimeout(() => console.log("Returned planet: ", mars), 4000);
};

getPlanet();

// 03
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = () => {
  const currentTemperature = getMarsTemperature();
  setTimeout(() => console.log(`Mars temperature is: ${currentTemperature} degree Celsius`), messageDelay());
};

sendMarsTemperature();

// 04
const messageDelays = () => Math.floor(Math.random() * 5000);

const getMarsTemperatures = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperatures = () => {
  const currentTemperature = getMarsTemperature();
  setTimeout(() => console.log(`Mars temperature is: ${currentTemperature} degree Celsius`), messageDelay());
};

sendMarsTemperature();

// 05
const messageDelasy = () => Math.floor(Math.random() * 5000);

const getMarsTemperaturse = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const sendMarsTemperaturse = (onSuccess) => {
  const currentTemperature = getMarsTemperature();
  setTimeout(() => onSuccess(currentTemperature), messageDelay());
};
sendMarsTemperaturse(temperatureInFahrenheit);
sendMarsTemperaturse(greet);

//06
const messageDeslay = () => Math.floor(Math.random() * 5000);

const getMarsTesmperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheits = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheits = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greets = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

const ssendMarsTemperatures = (onSuccess, onError) => {
  const currentTemperature = getMarsTemperature();
  const messageSuccessfullySent = Math.random() <= 0.6;
  setTimeout(() => {
      if(messageSuccessfullySent) onSuccess(currentTemperature)
      else onError('Robot is busy');
  }, messageDelay());
}
sendMarsTemperature(temperatureInFahrenheit, handleError);
sendMarsTemperature(greet, handleError);

// 07
const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('uppercase "test" to equal "TEST"', (done) => {
  uppercase('test', (str) => {
    try {
      expect(str).toBe('TEST');
      done();
    } catch (error) {
      done(error);
    }
  });
});

// 08
const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];

function getPokemonDetails(filter, callback) {
  setTimeout(() => {
    if (pokemons.find(filter) === undefined) {
      return callback(new Error('Não temos esse pokemon para você :('), null);
    }
    const pokemon = pokemons.find(filter);

    const { name, type, ability } = pokemon;

    const messageFromProfOak = `Olá, seu pokemon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

getPokemonDetails(
  (pokemon) => pokemon.name === 'Bulbasaur',
  (error, message) => {
    if (error) {
      console.log(error);
    } else {
      console.log(message);
    }
  }
);

module.exports = {
  getPokemonDetails,
};

// 09
1 - beforeEach // antes de cada teste
1 - test // o teste
1 - afterEach // depois de cada teste
1 - beforeEach // antes de cada teste
2 - beforeEach // antes de cada teste dentro do describe
2 - test // o teste dentro do describe
2 - afterEach // depois de cada teste dentro do describe
1 - afterEach // depois de cada teste

