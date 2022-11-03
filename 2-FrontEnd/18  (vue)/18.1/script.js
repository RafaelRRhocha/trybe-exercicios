const vm = {
  data() {
    return {
      nome: '',
      telefone: '',
      enviado: false
    }
  },
  methods: {
    setInfos() {
      this.nome = nomeInput.value
      this.telefone = telefoneInput.value
      this.enviado = true
      nomeInput.value = ''
      telefoneInput.value = ''
    }
  }
};

Vue.createApp(vm).mount('#app');