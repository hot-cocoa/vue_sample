<template>
  <draggable v-bind="options">
    <div v-for="(item, index) in items" :key="index">
      <div class="item">
        <task-card :name="item.name"></task-card>
        <button @click="deleteTask(index)">×</button>
      </div>
    </div>
  </draggable>
</template>

<script>
import VueTypes from 'vue-types';
import draggable from "vuedraggable"
import taskCard from "./TaskCard.vue"

export default {
  components: {
    draggable,
    taskCard
  },
  data() {
    return {
      options: {
        group: 'TASKS',
        animation: 150
      }
    }
  },
  props: {
    items: VueTypes.arrayOf(VueTypes.shape({
      name: VueTypes.string.isRequired
    })).isRequired,
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