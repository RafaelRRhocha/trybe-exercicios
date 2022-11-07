const vm = {
  data() {
    return {
      tipoDoPao: '',
      tipoDaSalada: [],
      tipoDeMolho: [],
      tipoDaCarne: '',
      etapa: 1,
      nome: '',
      endereco: ''
    }
  },
  methods: {
    proxEtapa() {
      if(!this.tipoDoPao && !this.tipoDaCarne) {
        alert('Selecione um tipo de Pão e um Tipo de Carne')
      }
      this.etapa = 2
    }
  },
  computed: {
    pao() {
      if(this.tipoDoPao === 'australiano') { 
        return ['imagens/pao_australiano_superior.png', 'imagens/pao_australiano_inferior.png']
      }
      if(this.tipoDoPao === 'italiano') { 
        return ['imagens/pao_gergelim_superior.png', 'imagens/pao_gergelim_inferior.png']
      }
      return ['imagens/padrao/pao_superior.png', 'imagens/padrao/pao_inferior.png']
    },
    salada() {
      if(this.tipoDaSalada.includes('alface')) {
        return 'imagens/alface.png'
      }
      return 'imagens/padrao/alface.png'
    },
    ketchup() {
      if(this.tipoDeMolho.includes('ketchup')) {
        return 'imagens/ketchup.png'
      }
      return 'imagens/padrao/molho.png'
    },
    mostarda() {
      if(this.tipoDeMolho.includes('mostarda')) {
        return 'imagens/mostarda.png'
      }
      return 'imagens/padrao/molho.png'
    },
    maionese() {
      if(this.tipoDeMolho.includes('maionese')) {
        return 'imagens/maionese.png'
      }
      return 'imagens/padrao/molho.png'
    },
    carne() {
      if(this.tipoDaCarne === 'bovina') {
        return 'imagens/bovino.png'
      }
      if(this.tipoDaCarne === 'frango') {
        return 'imagens/frango.png'
      }
      if(this.tipoDaCarne === 'soja') {
        return 'imagens/soja.png'
      }
      return 'imagens/padrao/hamburguer.png'
    }
  },
  watch: {}
};

Vue.createApp(vm).mount('#app');