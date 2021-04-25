<template>
  <div class="modal" @click.self="hideModal()">
    <div class="modal__cart">
      <div class="cart">
        <h1 class="cart__title">Cart</h1>
        <div class="cart__subtitle">
          You have {{ cartSize }} item(s) in your cart
        </div>
        <div class="cart__items">
          <CartItem
            v-for="item in inCart"
            :key="item.product.id"
            :id="item.product.id"
            :picture="item.product.images[0]"
            :totalPrice="itemTotal(item.product.id)"
            :title="item.product.title"
            :quantity="item.quantity"
          />
        </div>
      </div>
      <div class="summary">
        <div class="summary__total">
          Total: <span class="bold">{{ cartTotal }}</span>
        </div>
        <BaseButton :block="true">Proceed to checkout</BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import CartItem from "@/components/CartItem.vue";

export default {
  components: {
    CartItem,
  },
  methods: {
    ...mapActions("cart", ["toggleCartModal"]),
    hideModal() {
      this.toggleCartModal();
    },
  },
  computed: {
    ...mapGetters("cart", ["cartSize", "cartTotal", "itemTotal"]),
    ...mapState({
      inCart: (state) => state.cart.inCart,
    }),
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: flex-end;

  &__cart {
    display: flex;
    flex-direction: column;
    width: 500px;
    padding: 35px;
    background-color: white;
    overflow: auto;
  }
}

.cart {
  flex: 1 0;

  &__title {
    font-size: 32px;
  }

  &__subtitle {
    margin-top: 15px;
    font-size: 22px;
  }

  &__items {
    margin-top: 80px;
    display: grid;
    grid-row-gap: 25px;
  }
}

.summary {
  margin-top: 100px;
  &__total {
    margin-bottom: 15px;
    font-size: 28px;
  }
}
</style>
