<template>
  <button @click="toggleModal()" class="cart">
    <font-awesome-icon class="cart__icon" icon="shopping-cart" />
    <div class="cart__name">Cart</div>
    <div v-if="cartSize > 0" class="cart__count">({{ cartSize }})</div>
  </button>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions("cart", ["toggleCartModal"]),
    toggleModal() {
      this.toggleCartModal();
    },
  },
  computed: {
    ...mapGetters("cart", ["cartSize"]),
  },
};
</script>

<style lang="scss" scoped>
.cart {
  background-color: inherit;
  display: flex;
  align-items: center;
  font-size: 20px;

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
</style>
