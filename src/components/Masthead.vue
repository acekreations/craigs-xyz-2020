<template>
  <div class="masthead">
    <img src="../assets/masthead.png" />
  </div>
</template>

<script>
export default {
  name: "Masthead"
};
</script>

<style scoped>
.masthead {
  max-width: 1086px;
  margin: 0 auto;
  padding: 0px 16px 20px 16px;
  box-sizing: border-box;
  /* background-color: #edfcff; */
  background-position: top right;
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: 32px;
}

.masthead img {
  width: 330px;
  height: auto;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0px 4px 12px rgba(70, 54, 38, 0.3);
}

@media only screen and (max-width: 485px) {
  .masthead img {
    width: 100%;
  }
}
</style>
