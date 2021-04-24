<template>
  <div>
    <div class="gallery">
      <img :src="product.images[currentImageIndex]" alt="" />
    </div>
    <div class="thumbnails">
      <div class="thumbnails__wrapper">
        <img
          v-for="(image, index) in product.images"
          :key="index"
          :src="image"
          @click="selectImage(index)"
          class="thumbnails__image"
        />
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
    ...mapState(["product"]),
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  height: 520px;
  border-radius: 12px;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    //object-position: top;
    object-fit: cover;
  }
}

.thumbnails {
  //border-radius: 12px;
  overflow: hidden;
  margin-top: 25px;

  &__wrapper {
    overflow-x: auto;
    display: grid;
    grid-template-rows: 100px;
    grid-template-columns: repeat(auto-fit, 150px);
    grid-column-gap: 10px;
    grid-auto-flow: column;
    grid-auto-columns: 150px;
  }

  &__image {
    cursor: pointer;
    height: 100%;
    width: 100%;
    object-position: center;
    object-fit: cover;
    border-radius: 8px;
  }
}
</style>
