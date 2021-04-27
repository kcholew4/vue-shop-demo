<template>
  <div class="stock-status">
    <template v-if="stock == 0">
      <font-awesome-icon
        icon="circle"
        class="stock-status__icon stock-status__icon--red"
      />
      <div class="stock-status__status">Sold out</div>
    </template>
    <template v-else-if="stock < 5">
      <font-awesome-icon
        icon="circle"
        class="stock-status__icon stock-status__icon--yellow"
      />
      <div class="stock-status__status">Almost sold out</div>
    </template>
    <template v-else>
      <font-awesome-icon icon="circle" class="stock-status__icon" />
      <div class="stock-status__status">In stock</div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    stock: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
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
