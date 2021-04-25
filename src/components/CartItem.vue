<template>
  <div class="cart-item">
    <div class="cart-item__picture">
      <img :src="picture" />
    </div>
    <div class="cart-item__details">
      <div class="cart-item__first-row">
        <div class="cart-item__item-name">{{ title }}</div>
        <div class="cart-item__quantity">Quantity: {{ quantity }}</div>
      </div>
      <div class="cart-item__second-row">
        <button @click="remove" class="cart-item__button">Remove</button>
        <div class="cart-item__price">{{ totalPrice }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    id: Number,
    picture: String,
    title: String,
    totalPrice: String,
    quantity: Number,
  },
  methods: {
    ...mapActions("cart", ["removeFromCart"]),
    remove() {
      this.removeFromCart({
        id: this.id,
        quantity: this.quantity,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins";

.cart-item {
  height: 120px;
  display: flex;

  &__button {
    background-color: inherit;
    padding: 0;

    &:hover {
      cursor: pointer;
    }
  }

  &__item-name {
    font-size: 22px;
  }

  &__quantity {
    margin-top: 5px;
    color: #5c5c5c;
    font-size: 16px;
  }

  &__price {
    font-weight: 700;
    font-size: 22px;
  }

  &__picture {
    flex: 0 1 120px;
    border-radius: 8px;
    overflow: hidden;

    img {
      @include mixins.img-fit-container;
    }
  }

  &__details {
    flex: 1 1;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__second-row {
    display: flex;
    justify-content: space-between;
  }
}
</style>
