<template>
  <draggable :options="{group: 'TASKS', animation: 150}">
    <div :key="item" v-for="(item, index) in items">
      <div class="item">
        <task-card :name="item.name"></task-card>
        <button @click="deleteTask(index)">×</button>
      </div>
    </div>
  </draggable>
</template>

<script>
import draggable from "vuedraggable"
import taskCard from "./TaskCard.vue"

export default {
  components: {
    draggable,
    taskCard
  },
  props: {
    items: []
  },
  methods: {
    deleteTask: function(index) {
      this.items.splice(index, 1)
    }
  }
}
</script>

<style>
.item {
  display: flex;
  min-width: 400px;
  margin-left: auto;
  margin-right: auto;
}
</style>