const app = new Vue({
  el: '#app',
  data: {
    newTask: null,
    todos: []
  },
  methods: {
    addTask: function() {
      this.todos.push(this.newTask)
    },
    clearTask: function() {
      this.todos = []
    }
  },
  computed: {
    isEmptyTasks: function() {
      return this.todos.length === 0
    }
  }
})