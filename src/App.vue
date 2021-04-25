<template>
  <div id="app" :class="{ 'hide-overflow': hideOverflow }">
    <NavBar />
    <router-view />
    <CartModal v-if="cartModal.active" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import NavBar from "@/components/NavBar.vue";
import CartModal from "@/components/CartModal.vue";

export default {
  components: {
    NavBar,
    CartModal,
  },
  computed: {
    ...mapState({
      hideOverflow: (state) => state.hideOverflow,
      cartModal: (state) => state.cart.cartModal,
    }),
  },
};
</script>

<style lang="scss">
@use "@/assets/scss/_default";

#app {
  height: 100vh;
  position: relative;
  overflow: auto;
  font-family: "Miriam Libre", sans-serif;
  background-color: #fdfdfb;
}

.hide-overflow {
  overflow: hidden !important;
}

.bold {
  font-weight: 700;
}
</style>
