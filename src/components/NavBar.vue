<template>
  <nav class="nav-bar">
    <div class="nav-bar__container">
      <div class="nav-bar__logo">
        <router-link :to="{ name: 'Home' }">
          <span class="bold">Online</span>Shop
        </router-link>
      </div>
      <div class="nav-links">
        <div class="cart">
          <font-awesome-icon class="cart__icon" icon="shopping-cart" />
          <div class="cart__name">Cart</div>
          <div class="cart__count">(1)</div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav-bar {
  display: flex;
  height: 96px;
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

.cart {
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  &__icon {
    margin-right: 10px;
  }

  &__count {
    font-weight: 700;
  }

  &__name {
    margin-right: 0.3rem;
  }
}

.bold {
  font-weight: 700;
}
</style>
