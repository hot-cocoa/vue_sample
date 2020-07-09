const app = new Vue({
  el: '#app',
  data: {
    newTask: null,
    taskCount: 0,
    todos: []
  },
  methods: {
    addTask: function() {
      this.taskCount++
      this.todos.push({
        name: this.newTask,
        isDone: false
      })
      this.newTask = null
    },
    clearTask: function() {
      this.taskCount = 0
      this.todos = []
    },
    deleteTask: function(index) {
      this.taskCount--
      this.todos.splice(index, 1)
    }
  },
  computed: {
    isEmptyTasks: function() {
      return this.taskCount === 0
    }
  }
})
