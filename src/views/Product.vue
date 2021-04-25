<template>
  <div class="product">
    <ProductHeader />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ProductHeader from "@/components/ProductHeader.vue";

export default {
  props: {
    id: {
      type: [Number, String],
      required: true,
    },
  },
  components: {
    ProductHeader,
  },
  methods: {
    ...mapActions("products", ["fetchProductById"]),
  },
  created() {
    this.fetchProductById(this.id);
  },
};
</script>

<style lang="scss" scoped>
.product {
  margin-top: 50px;
}
</style>
