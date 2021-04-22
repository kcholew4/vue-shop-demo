<template>
  <div>gallery</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["product"]),
  },
};
</script>

<style lang="scss" scoped></style>
