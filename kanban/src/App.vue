<template>
  <div id="app">
    <div class="tasks-containers">
      <div
        class="tasks-container"
        v-for="elem in elems"
        :key="elem.title"
      >
        <div class="container-header">
          <h2 class="header-title">{{ elem.title }}</h2>
          <button
            class="header-button"
            @click="show"
          >+</button>
          <task-add-modal :items="elem.items"></task-add-modal>
        </div>
        <task-container
          class="container-body"
          :items="elem.items">
        </task-container>
      </div>
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
      elems: [
        {
          title: "ToDo",
          items: []
        },
        {
          title: "Doing",
          items: []
        },
        {
          title: "Done",
          items: []
        }
      ]
    }
  },
  methods: {
    show: function() {
      this.$modal.show('add-task')
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
.header-button {
  position: absolute;
  right: 0;
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
</style>