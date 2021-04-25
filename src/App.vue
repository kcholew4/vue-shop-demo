<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
@use "@/assets/scss/_default";

#app {
  background-color: #fdfdfb;
  font-family: "Miriam Libre", sans-serif;
  height: 100vh;
  font-size: 18px;
}
</style>
