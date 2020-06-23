<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
body {
  margin: 0px;
  background: #fff7f1;
  font-family: "Open Sans", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Abril Fatface", cursive;
  letter-spacing: 0.03em;
}

h2 {
  margin-top: 10px;
  margin-bottom: 10px;
}

p,
a,
ul,
li {
  font-family: "Open Sans", sans-serif;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1086px;
  margin: 0 auto;
}

@media only screen and (min-width: 700px) {
  .content {
    justify-content: flex-start;
  }
}
</style>
