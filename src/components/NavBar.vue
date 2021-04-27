<template>
  <nav class="nav-bar">
    <div class="nav-bar__container">
      <div class="nav-bar__logo">
        <router-link :to="{ name: 'Home' }">
          <span class="bold">Online</span>Shop
        </router-link>
      </div>
      <div class="nav-links">
        <CartButton class="cart-button" />
      </div>
    </div>
  </nav>
</template>

<script>
import CartButton from "@/components/CartButton.vue";

export default {
  components: {
    CartButton,
  },
};
</script>

<style lang="scss" scoped>
.nav-bar {
  display: flex;
  flex: 0 0 96px;
  background-color: white;
  box-shadow: 0px 0px 23px -9px rgba(0, 0, 0, 0.25);
  justify-content: center;
  align-items: center;

  &__container {
    box-sizing: content-box;
    padding: 0 25px 0 25px;
    flex: 0 1 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    font-size: 28px;
  }
}

.nav-links {
  font-size: 20px;
}

.bold {
  font-weight: 700;
}
</style>
