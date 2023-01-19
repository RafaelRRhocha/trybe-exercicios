const vm = {
  data() {
    return {
      texto: '',
      pacientes: [
        { nome: 'dada' },
        { nome: 'rafael' },
        { nome: 'otoni' },
        { nome: 'jessy' },
        { nome: 'gostinho' },
      ],
      pacientesCorrespondentes: [],
    }
  },
  methods: {},
  computed: {},
  watch: {
    texto(newValue) {
      console.log(this.pacientesCorrespondentes);
      this.pacientesCorrespondentes = this.pacientes.filter(e => e.nome.match(newValue))
    }
  },
};

Vue.createApp(vm).mount('#app');