<template>
  <div id="app">
    <Chirag />
  </div>
</template>

<script>
import Chirag from "./components/Chirag";
export default {
  name: "app",
  components: {
    Chirag
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
