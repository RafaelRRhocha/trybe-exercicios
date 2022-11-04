const vm = {
  data() {
    return {
      pacientes: []
    }
  },
  methods: {
    cadastrarPaciente() {
      this.pacientes.push({
        nome: inputNome.value,
        idade: inputIdade.value,
        plano: inputPlano.value
      });
    },
  },
  computed: {
    ultimoPaciente() {
      let key = this.pacientes.length -1;
      let txt = '';

      txt = `Nome: ${this.pacientes[key].nome},
            Idade: ${this.pacientes[key].idade},
            Plano: ${this.pacientes[key].plano}`

      return txt;
    },
    planoSus() {
      return this.pacientes.filter(e => e.plano === 'sus');
    }
  }
};

Vue.createApp(vm).mount('#app');