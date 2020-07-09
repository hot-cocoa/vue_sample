const app = new Vue({
  el: '#app',
  data: {
    STATUS: {
      todo: "ToDo",
      doing: "Doing"
    },
    newTask: null,
    taskCount: 0,
    todos: []
  },
  methods: {
    addTask: function() {
      this.taskCount++
      this.todos.push({
        name: this.newTask,
        isDone: false,
        status: this.STATUS.todo
      })
      this.newTask = null
    },
    nextTask: function(index) {
      if (this.todos[index].status === this.STATUS.todo)
        this.todos[index].status = this.STATUS.doing
      else
        this.todos[index].status = this.STATUS.todo
    },
    isToDo: function(status) {
      return status === this.STATUS.todo
    },
    isDoing: function(status) {
      return status === this.STATUS.doing
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