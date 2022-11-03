const vm = {
  data() {
    return {
      cor: '',
      mouseX: 0,
      mouseY: 0,
      text: ''
    }
  },
  methods: {
    changeColor(e) {
      this.cor = e
    },
    catchMouse(e) {
      this.mouseX = e.clientX
      this.mouseY = e.clientY
    },
    getInputText(e) {
      this.text += e.key
    }
  }
};

Vue.createApp(vm).mount('#app');