<template>
  <div class="product-header">
    <ProductGallery class="product-header__gallery" />
    <div class="product-header__details">
      <div class="product-header__title">{{ product.title }}</div>
      <div class="stock-status product-header__status">
        <font-awesome-icon icon="circle" class="stock-status__icon" />
        <div class="stock-status__status">In stock</div>
      </div>
      <div class="product-header__inputs">
        <BaseInput
          type="number"
          value="1"
          class="input-field"
          name="quantity"
          autocomplete="off"
          min="1"
          :max="product.inStock"
          v-model.number="quantity"
          @input="validate()"
          :validation="formValidation"
        >
          Quantity:
        </BaseInput>
      </div>
      <div class="product-header__summary">{{ productPrice }}</div>
      <BaseButton
        class="product-header__add-to-cart"
        :block="true"
        @click.native="add()"
      >
        Add to cart
      </BaseButton>
    </div>
  </div>
</template>

<script>
import ProductGallery from "@/components/ProductGallery.vue";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  components: {
    ProductGallery,
  },
  data() {
    return {
      quantity: 1,
      formValidation: {
        error: false,
        message: "",
      },
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
      if (this.quantity < 1 || this.quantity > this.product.inStock) {
        this.formValidation = {
          error: true,
          message: `Select quantity between <b>1</b> and <b>${this.product.inStock}</b>`,
        };
      } else {
        this.formValidation = {
          error: false,
          message: "",
        };
      }
    },
  },
  computed: {
    ...mapState({
      product: (state) => state.products.product,
    }),
    ...mapGetters("products", ["productPrice"]),
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

.stock-status {
  display: flex;
  align-items: center;

  &__icon {
    width: 15px;
    color: #42d136;
    margin-right: 8px;

    &--yellow {
      color: #edda33;
    }

    &--red {
      color: #ea1044;
    }
  }
}
</style>
