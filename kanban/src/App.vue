<template>
  <div id="app">
    <div class="tasks-containers">
      <div class="tasks-container" v-for="(elem, index) in elems" :key="elem.title">
        <div class="container-header">
          <h2 class="header-title">{{ elem.title }}</h2>
          <button class="header-button" @click="show(index)">+</button>
          <modal v-if="elem.show" name="add-task" :draggable="true" :resizable="true">
            <div class="modal-header">
              <h2 class="header-title">New Task</h2>
              <button class="header-button" @click="hide(index)">×</button>
            </div>
            <div class="modal-body">
              <input type="text" v-model="newTask" placeholder="Please input task">
              <button v-on:click="addTask(elem.items)">追加</button>
            </div>
          </modal>
        </div>
        <draggable class="container-body" :options="{group: 'TASKS', animation: 150}">
          <div v-bind:key="item" v-for="(item, index) in elem.items">
            <div class="item">
              <div class="card">{{ item.name }}</div>
              <button @click="deleteTask(elem.items, index)">×</button>
            </div>
          </div>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable"

export default {
  name: 'App',
  components: {
    draggable
  },
  data() {
    return {
      newTask: null,
      elems: [
        {
          title: "ToDo",
          items: [],
          show: false
        },
        {
          title: "Doing",
          items: [],
          show: false
        },
        {
          title: "Done",
          items: [],
          show: false
        }
      ]
    }
  },
  methods: {
    addTask: function(items) {
      items.push({
        name: this.newTask,
      })
      this.newTask = null
    },
    deleteTask: function(items, index) {
      items.splice(index, 1)
    },
    show: function(index) {
      this.$modal.show('add-task')
      this.elems[index].show = true
    },
    hide: function(index) {
      this.$modal.hide('add-task')
      this.elems[index].show = false
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
.modal-body {
  margin: 55px;
}
.modal-header {
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: center;
  position: relative;
  background: #222222;
}
.container-body {
  justify-content: center;
  align-items: center;
}
.item {
  display: flex;
  min-width: 400px;
  margin-left: auto;
  margin-right: auto;
}
.card {
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  border: solid #cccccc 1.5px;
  border-radius: 5px;
  width: 95%;
  min-height: 20px;
}
</style>
