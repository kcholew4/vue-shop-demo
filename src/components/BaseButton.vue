<template>
  <button class="button" :class="{ 'button--block': block }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["block"],
};
</script>

<style lang="scss" scoped>
.button {
  background-color: #282828;
  font-weight: 700;
  padding: 15px 25px 15px 25px;
  //box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  color: white;
  font-size: 22px;

  &:hover {
    cursor: pointer;
    background-color: #131313;
  }

  &--block {
    width: 100%;
  }
}
</style>
