const app = new Vue({
  el: '#app',
  data: {
    elems: [],
    number: null
  },
  methods: {
    fizzbuzz: function(number) {
      this.elems = []
      for (let n = 1; n <= number; n++) {
        if (n % 15 === 0)
        this.elems.push("FizzBuzz")
        else if (n % 3 === 0)
        this.elems.push("Fizz")
        else if (n % 5 === 0)
        this.elems.push("Buzz")
        else
        this.elems.push(n)
      }
    }
  }
})

