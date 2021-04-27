<template>
  <div v-if="product.images">
    <div class="gallery">
      <img :src="product.images[currentImageIndex]" alt="" />
    </div>
    <div class="thumbnails">
      <div class="thumbnails__wrapper">
        <div
          v-for="(image, index) in product.images"
          :key="index"
          class="thumbnails__image"
          :class="{ 'thumbnails__image--selected': currentImageIndex == index }"
          @click="selectImage(index)"
        >
          <img :src="image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      currentImageIndex: 0,
    };
  },
  methods: {
    selectImage(index) {
      this.currentImageIndex = index;
    },
  },
  computed: {
    ...mapState({
      product: (state) => state.products.product,
    }),
  },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/_mixins";

.gallery {
  height: 520px;
  border-radius: 12px;
  overflow: hidden;

  img {
    @include mixins.img-fit-container;
  }
}

.thumbnails {
  overflow: hidden;
  margin-top: 25px;

  &__wrapper {
    overflow-x: auto;
    //scrollbar-color: #282828 #fdfdfb;
    &::-webkit-scrollbar-thumb {
      background-color: #282828;
    }

    display: grid;
    grid-template-rows: 100px;
    grid-template-columns: repeat(auto-fit, 110px);
    grid-column-gap: 10px;
    grid-auto-flow: column;
    grid-auto-columns: 150px;
  }

  &__image {
    cursor: pointer;
    border-radius: 8px;
    overflow: hidden;
    background-color: white;

    img {
      @include mixins.img-fit-container;
      opacity: 0.7;
    }

    &:hover {
      img {
        opacity: 1;
      }
    }
  }

  &__image--selected {
    img {
      opacity: 1;
    }
  }
}
</style>
