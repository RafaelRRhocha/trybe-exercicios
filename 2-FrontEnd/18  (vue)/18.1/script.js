const vm = {
  data() {
    return {
      cor: '',
      mouseX: 0,
      mouseY: 0
    }
  },
  methods: {
    changeColor(e) {
      this.cor = e
    },
    catchMouse(e) {
      this.mouseX = e.clientX
      this.mouseY = e.clientY
    }
  }
};

Vue.createApp(vm).mount('#app');