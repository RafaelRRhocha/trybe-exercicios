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
  methods: {}
};

Vue.createApp(vm).mount('#app');