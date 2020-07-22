<template>
  <div id="app">
    <navigation></navigation>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>

<script>
import Navigation from "./views/template/Navigation";

export default {
  components: {
    Navigation
  }
};
</script>
