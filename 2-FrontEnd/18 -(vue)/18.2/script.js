const teste = [
  {
    id: 01,
    title: 'A hora do rush',
    genre: 'Action, Comedy'
  },
  {
    id: 02,
    title: 'Pink Panther',
    genre: 'Comedy'
  }
]

const vm = {
  data() {
    return {
      films: teste
    }
  },
  methods: {
    addMovie() {
      this.films.push({
        id: 03,
        title: 'A hora do rush 2',
        genre: 'Action, Comedy'
      })
    },
    removeMovie() {
      this.films.pop()
    },
    updateMovie() {
      this.$set(
          this.films,
          02,
          {
            id: 02,
            title: 'Pink Panther 2',
            genre: 'Comedy, Action'
          }
        )
    }
  }
};

Vue.createApp(vm).mount('#app');