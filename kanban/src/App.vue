<template>
  <div id="app">
    <div class="tasks-containers">
      <div class="tasks-container" v-for="elem in elems" :key="elem.title">
        <h2>{{ elem.title }}</h2>
        <draggable class="tasks-area" :options="{group: 'TASKS', animation: 150}">
          <div class="card" v-bind:key="item" v-for="item in elem.items">
            {{ item.name }}
          </div>
        </draggable>
      </div>
    </div>

    <h2>タスク追加</h2>
    <input type="text" v-model="newTask" placeholder="タスクを入力して下さい">
    <button v-on:click="addTask">追加</button>
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
    addTask: function() {
      this.elems[0].items.push({
        name: this.newTask,
      })
      this.newTask = null
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
  justify-content: center;
}
.tasks-container {
  min-width: 500px;
  max-width: 500px;
  min-height: 400px;
  width: 90%;
  border: solid #888888 1.5px;
  justify-content: center;
  align-items: center;
}
.tasks-area {
  justify-content: center;
  align-items: center;
}
.card {
  font-size: 12px;
  padding: 10px;
  cursor: pointer;
  border: solid #cccccc 1.5px;
  border-radius: 5px;
  width: 80%;
}
</style>
