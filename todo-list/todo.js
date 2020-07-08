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
        checked: false
      })
      this.newTask = null
    },
    checkTask: function(index) {
      this.taskCount--
      this.todos[index].checked = true
    },
    clearTask: function() {
      this.taskCount = 0
      this.todos = []
    }
  },
  computed: {
    isEmptyTasks: function() {
      return this.taskCount === 0
    }
  }
})