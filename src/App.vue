<template>
  <div id="app">
    <Masthead />
  </div>
</template>

<script>
import Masthead from "./components/Masthead.vue";

export default {
  name: "app",
  components: {
    Masthead
  }
};
</script>

<style>
body {
  margin: 0px;
  background: #fdf7f3;
}
</style>
