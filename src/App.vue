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
* {
  margin: 0;
  box-sizing: border-box;
}

a {
  color: inherit;
  text-decoration: inherit;
}

#app {
  background-color: #fdfdfb;
  font-family: "Miriam Libre", sans-serif;
  height: 100vh;
  font-size: 18px;
}

.border {
  border: 1px solid black;
}
</style>
