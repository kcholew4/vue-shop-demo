<template>
  <div class="product-header">
    <ProductGallery class="product-header__gallery" />
    <div class="product-header__details">
      <div class="product-header__title">{{ product.title }}</div>
      <StockStatus :stock="leftInStock" class="product-header__status" />
      <div class="product-header__inputs">
        <BaseInput
          type="number"
          value="1"
          class="input-field"
          name="quantity"
          autocomplete="off"
          min="1"
          v-model.number="quantity"
          @blur="validate"
          :max="product.inStock"
        >
          Quantity:
        </BaseInput>
      </div>
      <div class="product-header__summary">{{ productPrice }}</div>
      <BaseButton
        class="product-header__add-to-cart"
        :block="true"
        @click.native="add()"
        :disabled="disableButton"
      >
        Add to cart
      </BaseButton>
    </div>
  </div>
</template>

<script>
import ProductGallery from "@/components/ProductGallery.vue";
import StockStatus from "@/components/StockStatus.vue";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  components: {
    ProductGallery,
    StockStatus,
  },
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    ...mapActions("cart", ["addToCart"]),
    add() {
      this.addToCart({
        product: this.product,
        quantity: this.quantity,
      });
    },
    validate() {
      if (this.leftInStock < 1) {
        this.quantity = 0;
      } else {
        if (this.quantity < 1) {
          this.quantity = 1;
        } else if (this.quantity > this.leftInStock) {
          this.quantity = this.leftInStock;
        }
      }
    },
  },
  computed: {
    leftInStock() {
      return this.product.inStock - this.itemQuantity(this.product.id);
    },
    disableButton() {
      return this.leftInStock < 1 ? true : false;
    },
    ...mapState({
      product: (state) => state.products.product,
    }),
    ...mapGetters("products", ["productPrice"]),
    ...mapGetters("cart", ["itemQuantity"]),
  },
  mounted() {
    this.validate();
  },
};
</script>

<style lang="scss" scoped>
.input-field {
  margin-top: 30px;
}

.product-header {
  box-sizing: content-box;
  padding: 0 25px 0 25px;
  max-width: 1200px;
  margin: 0 auto 0 auto;
  display: flex;

  &__gallery {
    flex: 1 1 auto;
    margin-right: 35px;
    overflow: auto;
  }

  &__details {
    flex: 0 0 380px;
    background-color: #ffffff;
    box-shadow: 0px 0px 23px -9px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    padding: 25px;
    align-self: flex-start;
  }

  &__title {
    font-size: 22px;
  }

  &__status {
    margin-top: 45px;
  }

  &__inputs {
    margin-top: 20px;
    overflow: auto;
  }

  &__summary {
    margin-top: 50px;
    font-weight: 700;
    font-size: 28px;
  }

  &__add-to-cart {
    margin-top: 15px;
  }
}
</style>
