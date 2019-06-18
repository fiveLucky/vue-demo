<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Home msg="Welcome to Home">well</Home>
    <List msg="Welcome to List"/>
  </div>
</template>

<script>
import Home from "./view/Home/index.vue";
import List from "./view/List/index.vue";

export default {
  name: "app",
  components: {
    Home,
    List
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
