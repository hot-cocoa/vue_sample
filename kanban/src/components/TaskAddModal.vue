<template>
  <div>
    <button
      class="header-button"
      @click="show"
    >+</button>
    <modal
      v-if="showModal"
      name="add-task"
      :draggable="true"
      :resizable="true"
    >
      <div class="modal-header">
        <h2 class="header-title">New Task</h2>
        <button
          class="header-button"
          @click="hide"
        >×</button>
      </div>
      <div class="modal-body">
        <input
          type="text"
          v-model="newTask"
          placeholder="Please input task"
        >
        <button @click="addTask">Add</button>
      </div>
    </modal>
  </div>
</template>

<script>
import VueTypes from 'vue-types'

export default {
  data() {
    return {
      newTask: null,
      showModal: false
    }
  },
  props: {
    items: VueTypes.arrayOf(VueTypes.shape({
      name: VueTypes.string.isRequired
    })).isRequired
  },
  methods: {
    addTask: function() {
      this.items.push({
        name: this.newTask,
      })
      this.newTask = null
    },
    show: function() {
      this.showModal = true
      this.$modal.show("add-task")
    },
    hide: function() {
      this.$modal.hide("add-task")
    }
  }
}
</script>

<style>
.header-title {
  color: #ffffff;
}
.header-button {
  position: absolute;
  right: 0;
}
.modal-header {
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: center;
  position: relative;
  background: #222222;
}
.modal-body {
  margin: 55px;
}
</style>