<template>
  <div class="product">
    <TheProductHeader />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import TheProductHeader from "@/components/TheProductHeader.vue";

export default {
  props: {
    id: {
      type: [Number, String],
      required: true,
    },
  },
  components: {
    TheProductHeader,
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
