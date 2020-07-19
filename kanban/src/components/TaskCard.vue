<template>
  <div class="card">
    {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    name: null
  }
}
</script>

<style>
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