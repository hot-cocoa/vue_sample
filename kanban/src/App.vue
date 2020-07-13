<template>
  <div id="app">
    <div v-for="elem in elems" :key="elem.title">
      <h2>{{ elem.title }}</h2>
      <div class="items-area">
        <draggable :list="elem.items" :options="{group: 'TASKS', animation: 150}">
          <div v-bind:key="item" v-for="item in elem.items">
            <div>{{ item.name }}</div>
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.items-area {
  min-height: 15px;
}
</style>
