<template>
  <div class="product-header">
    <TheProductGallery class="product-header__image" />
    <div class="product-header__details">
      <div class="product-header__title">{{ product.title }}</div>
      <div class="stock-status product-header__status">
        <font-awesome-icon icon="circle" class="stock-status__icon" />
        <div class="stock-status__status">In stock</div>
      </div>
      <div class="product-header__inputs">
        <BaseInput type="number" value="1" class="input-field" name="quantity">
          Quantity:
        </BaseInput>
      </div>
      <div class="product-header__summary">{{ showPrice }}</div>
      <BaseButton class="product-header__add-to-cart" :block="true">
        Add to cart
      </BaseButton>
    </div>
  </div>
</template>

<script>
import TheProductGallery from "@/components/TheProductGallery.vue";
import { mapState } from "vuex";

export default {
  components: {
    TheProductGallery,
  },
  computed: {
    ...mapState(["product"]),
    showPrice() {
      return `${this.product.price}$`;
    },
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

  &__image {
    flex: 1 1 auto;
    margin-right: 35px;
    border-radius: 12px;
    overflow: hidden;
    //height: 520px;
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
