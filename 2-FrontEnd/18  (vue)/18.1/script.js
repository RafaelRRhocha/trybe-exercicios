fetch(`https://pokeapi.co/api/v2/pokemon/1`)
.then(response => response.json())
.then(json => {
  const vm = {
    data() {
      return {
        pokeName: json.name,
        url: 'https://www.pokemon.com/br/pokedex/bulbasaur'
      }
    },
    methods: {}
  };

  Vue.createApp(vm).mount('#app');
});
