const vm = {
  data() {
    return {
      names: ['Rafael Rocha'],
      first: '',
      last: '',
      selected: '',
      prefix: '',
    }
  },
  methods: {
    Create() {
      if (this.validInput()) {
        const fullName = `${this.first} ${this.last}`;
        if (!this.names.includes(fullName)) {
          this.names.push(fullName);
          this.first = this.last = '';
        }
      }
    },
    Update() {
      if(this.validInput() && this.selected) {
        const i = this.names.indexOf(this.selected);
        this.names[i] = this.selected = `${this.first} ${this.last}`;
      }
    },
    Delete() {
      if (this.selected) {
        const i = this.names.indexOf(this.selected);
        this.names.splice(i, 1);
        this.selected = this.first = this.last = '';
      }
    },
    validInput() {
      return this.first && this.last
    }
  },
  computed: {
    filteredNames() {
      return this.names.filter(e => e.startsWith(this.prefix))
    }
  },
  watch: {
    selected(name) {
      [this.first, this.last] = name.split(' ')
    }
  }
};

Vue.createApp(vm).mount('#app');