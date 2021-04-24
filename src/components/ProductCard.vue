<template>
  <div class="item-card">
    <div class="item-card__cover">
      <img :src="cover" />
    </div>
    <div class="item-card__title">{{ title }}</div>
    <div class="item-card__description">{{ description }}</div>
    <div class="item-card__details">
      <div class="item-card__price">{{ showPrice }}</div>
      <div v-if="tag" class="item-card__tag" :style="tag.style">
        {{ tag.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cover: String,
    title: String,
    description: String,
    price: String,
    tag: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  computed: {
    showPrice() {
      return `${this.price}$`;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins";

.item-card {
  &__cover {
    border-radius: 22px;
    overflow: hidden;
    height: 235px;

    img {
      @include mixins.img-fit-container;
    }
  }

  &__title {
    font-weight: 700;
    font-size: 22px;
    margin-top: 15px;
    text-align: center;
  }

  &__description {
    margin-top: 5px;
    font-size: 18px;
    text-align: center;
    color: #858585;
  }

  &__details {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }

  &__price {
    font-weight: 700;
    font-size: 22px;
  }

  &__tag {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
}
</style>
