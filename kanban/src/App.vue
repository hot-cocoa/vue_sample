<template>
  <div id="app">
    <div class="tasks-containers">
      <div
        v-for="elem in elems"
        class="tasks-container"
        :key="elem.title"
      >
        <div class="container-header">
          <h2 class="header-title">{{ elem.title }}</h2>
          <task-add-modal :items="elem.items"></task-add-modal>
        </div>
        <task-container
          class="container-body"
          :items="elem.items">
        </task-container>
      </div>
    </div>
    <div class="footer">
      <button @click="saveStorage">Save</button>
      <button @click="resetStorage">Reset</button>
    </div>
  </div>
</template>

<script>
import taskAddModal from "./components/TaskAddModal.vue"
import taskContainer from "./components/TaskContainer.vue"

export default {
  name: 'App',
  components: {
    taskAddModal,
    taskContainer
  },
  data() {
    return {
      elems: {
        todos: {
          title: "ToDo",
          items: []
        },
        doings: {
          title: "Doing",
          items: []
        },
        dones: {
          title: "Done",
          items: []
        }
      }
    }
  },
  mounted() {
    if (localStorage.getItem('todos'))
      this.elems.todos.items = JSON.parse(localStorage.getItem('todos'))
    if (localStorage.getItem('doings'))
      this.elems.doings.items = JSON.parse(localStorage.getItem('doings'))
    if (localStorage.getItem('dones'))
      this.elems.dones.items = JSON.parse(localStorage.getItem('dones'))
  },
  methods: {
    saveStorage: function() {
      localStorage.setItem('todos',  JSON.stringify(this.elems.todos.items))
      localStorage.setItem('doings', JSON.stringify(this.elems.doings.items))
      localStorage.setItem('dones',  JSON.stringify(this.elems.dones.items))
    },
    resetStorage: function() {
      localStorage.clear()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  margin-top: 60px;
}
.tasks-containers {
  display: flex;
  justify-content: space-evenly;
}
.tasks-container {
  min-width: 500px;
  max-width: 500px;
  min-height: 700px;
  border: solid #888888 5px;
  justify-content: center;
  align-items: center;
}
.header-title {
  color: #ffffff;
}
.container-header {
  display: flex;
  justify-content: center;
  position: relative;
  background: #222222;
}
.container-body {
  justify-content: center;
  align-items: center;
}
.footer {
  display: flex;
  justify-content: flex-end;
  margin: 20px;
  padding: 15px;
}
</style>