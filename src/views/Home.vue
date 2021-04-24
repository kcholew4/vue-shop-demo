<template>
  <div class="home">
    <div class="content-container">
      <div class="cards">
        <div class="cards__header">
          <h1>Recent listings</h1>
        </div>
        <div class="cards__container">
          <router-link
            v-for="product in products"
            :key="product.id"
            :to="{ name: 'Product', params: { id: product.id } }"
          >
            <ProductCard
              :title="product.title"
              :description="product.description"
              :cover="product.images[0]"
              :price="product.price"
              :tag="product.tag"
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ProductCard from "@/components/ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
  computed: {
    ...mapState({
      products: (state) => state.products.products,
    }),
  },
  methods: {
    ...mapActions("products", ["fetchProducts"]),
  },
  created() {
    this.fetchProducts();
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin-top: 100px;
}

.content-container {
  box-sizing: content-box;
  padding: 0 25px 0 25px;
  max-width: 1000px;
  margin: 0 auto 0 auto;
}

.cards {
  display: flex;
  flex-direction: column;

  &__header {
    margin-bottom: 50px;

    h1 {
      font-size: 32px;
      font-weight: 400;
    }
  }

  &__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-column-gap: 35px;
    grid-row-gap: 35px;
  }
}
</style>
