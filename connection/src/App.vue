<template>
  <div id="app">
    <input type="text" v-model="body.test1" placeholder="test1">
    <input type="text" v-model="body.test2" placeholder="test2">
    <button v-on:click="send">送信</button>
  </div>
</template>

<script>
import { RepositoryFactory } from "./connection/RepositoryFactory";
const PostsRepository = RepositoryFactory.get('posts');

export default {
  data() {
    return {
      body: {
        test1: null,
        test2: null
      }
    }
  },
  methods: {
    async send() {
      const response = await PostsRepository.send();
      console.log(response);
    }
  }
};
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
</style>