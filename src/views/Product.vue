<template>
  <div class="product">
    <ProductHeader v-if="doneFetching" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ProductHeader from "@/components/ProductHeader.vue";

export default {
  data() {
    return {
      doneFetching: false,
    };
  },
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
    //Make sure data is already fetched before rendering the component
    this.fetchProductById(this.id).then(() => (this.doneFetching = true));
  },
};
</script>

<style lang="scss" scoped>
.product {
  margin-top: 50px;
}
</style>
