new Vue({
  el: '#app',
  data: {
    count: 1,
    texts: ['Text 1']
  },
  methods: {
    addText () {
      this.count++;
      this.texts.push(`Text ${this.count}`)
    },
    clear () {
      this.texts.splice(0, this.texts.length);
      this.count = 0;
    }
  },
})
